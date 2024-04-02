#!/bin/bash

# Uninstall deprecated packages
npm uninstall @babel/plugin-proposal-private-methods @babel/plugin-proposal-numeric-separator @babel/plugin-proposal-class-properties @babel/plugin-proposal-nullish-coalescing-operator stable rollup-plugin-terser @babel/plugin-proposal-optional-chaining abab domexception w3c-hr-time sourcemap-codec uuid workbox-cacheable-response workbox-google-analytics svgo

# Install recommended replacements or newer versions
npm install --save-dev @babel/plugin-transform-private-methods @babel/plugin-transform-numeric-separator @babel/plugin-transform-class-properties @babel/plugin-transform-nullish-coalescing-operator @rollup/plugin-terser @babel/plugin-transform-optional-chaining @jridgewell/sourcemap-codec svgo@^2.0.0

# Upgrade uuid to a recommended version
npm install --save uuid@^7.0.0

# Perform a general update to all packages
npm update

# Optional: Run npm audit fix to fix vulnerabilities
npm audit fix

echo "Module upgrades and replacements have been completed. Please review your project for any potential breaking changes and test thoroughly."
