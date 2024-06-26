#!/bin/bash
# Configuring Git to use credentials from .env for the current session
configure_git_credentials() {
    echo "Configuring Git to use provided credentials..."
    git config --global user.token "$GH_TOKEN"
    git config --global user.name "$GH_USER"
    echo "Git configured with user name and token from .env file."
}

set -e # Exit immediately if a command exits with a non-zero status.

# Automatically export all variables
set -a
source .env
set +a

# Function declarations to ensure they are recognized before being called
# Function to check if GitHub CLI is installed
check_gh_cli() {
    if ! command -v gh &> /dev/null; then
        echo "GitHub CLI could not be found. Please install it to proceed."
        exit 1
    fi
}

# Function to create project directories or use existing ones
create_project_structure() {
    echo "Checking project structure..."
    if [ -d "$repo_name" ]; then
        echo "Directory $repo_name already exists. Using existing directory."
    else
        echo "Creating project structure..."
        mkdir -p "$repo_name"/{src,docs,tests,.vscode,.github/workflows}
    fi
}

# Function to configure .vscode settings
configure_vscode() {
    echo "Configuring .vscode settings..."
    cat << EOF > "$repo_name"/.vscode/settings.json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "javascript.validate.enable": false
}
EOF
}

# Function to setup GitHub Actions CI workflow
setup_ci_workflow() {
    echo "Setting up GitHub Actions CI workflow..."
    cat << EOF > "$repo_name"/.github/workflows/ci.yml
name: Continuous Integration

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install Dependencies
      run: npm install
    - name: Run Tests
      run: npm test
EOF
}

# Main script execution starts here
check_gh_cli

# Prompt user for repository details with validation
echo "Enter the new repository name: "
read repo_name
while true; do
    read -p "Should the repository be public or private? [public/private]: " repo_visibility
    case $repo_visibility in
        [Pp]ublic|[Pp]rivate ) break;;
        * ) echo "Please answer public or private.";;
    esac
done
echo "Enter your GitHub username: "
read github_username

# Create project structure before changing directory
create_project_structure

# Configure .vscode settings and setup GitHub Actions CI workflow after moving into the project directory
configure_vscode
setup_ci_workflow

cd "$repo_name" || exit

# Initialize Git repository and create GitHub repository
echo "Initializing Git repository..."
git init
git add .
git commit -m "Initial project setup"
echo "Creating GitHub repository..."
gh repo create "$github_username/$repo_name" --$repo_visibility --source=. --remote=origin
git push -u origin main

echo "Project setup complete!"