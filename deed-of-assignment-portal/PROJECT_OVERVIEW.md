# PROJECT OVERVIEW

## To understand the purpose and functionality of the "Deed of Assignment Portal" project as a whole, you can start by examining key components outlined in the [package.json](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#1%2C1-1%2C1) and the provided codebase. Here's a concise overview

### Project Overview

The "Deed of Assignment Portal" is designed to facilitate the creation, management, and processing of deeds of assignment, along with generating SWIFT messages for financial transactions. It targets financial institutions, law firms, and corporations involved in the assignment of debts or claims.

### Key Components

- **Frontend**: Built with React ([react](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#15%2C6-15%2C6), [react-dom](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#16%2C6-16%2C6)), providing a user interface for interacting with the portal.
- **Backend**: Utilizes Express.js ([express](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#11%2C6-11%2C6)) for API services, handling requests for compiling documents and generating SWIFT messages.
- **Security and Rate Limiting**: Implements security measures using Helmet ([helmet](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#13%2C6-13%2C6)) and controls request rates with express-rate-limit.
- **Environment Variables**: Uses [dotenv](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#10%2C6-10%2C6) for managing environment variables, crucial for configuring API keys and other sensitive information securely.
- **Testing**: Employs Jest ([jest](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#6%2C23-6%2C23)) and React Testing Library for testing backend and frontend components, ensuring reliability.

### Understanding Forms and Functionality

To specifically understand how forms are presented and handled:

1. **React Components**: Look into the React components within the `src/components` directory. Forms are likely implemented here, utilizing controlled components for input fields and event handlers for form submissions.

2. **API Requests**: Axios ([axios](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#8%2C6-8%2C6)) is used for making HTTP requests. Check components for Axios calls that submit form data to backend endpoints defined in the Express.js server.

3. **Server Endpoints**: The Express.js setup in the [server](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/README.md#10%2C21-10%2C21) directory (or similar) will have route definitions for handling API requests, including those submitted by forms. Look for routes that correspond to actions like compiling documents or generating SWIFT messages.

4. **Documentation and Scripts**: The [README.md](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/README.md#1%2C1-1%2C1) and other markdown documents provide insights into project setup, usage, and features. Scripts defined under [scripts](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#17%2C12-17%2C12) in [package.json](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#1%2C1-1%2C1) (e.g., [start](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#42%2C6-42%2C6), [build](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#43%2C6-43%2C6), [test](file:///Users/pandora/Cursor_Projects/3-Party_LD-UCC-MT/RealTimeComplyLedgerBridge/deed-of-assignment-portal/package.json#44%2C6-44%2C6)) are entry points for running the application, building the project, and executing tests.

### Next Steps

- **Run the Application**: Use `npm start` to run the application and interact with the UI.
- **Explore Code**: Dive into the `src` directory to explore React components, especially those related to form handling and API interactions.
- **Review Backend Logic**: Examine the server-side code for API endpoint implementations that process form submissions.

This overview should give you a foundational understanding of the project's purpose, structure, and key functionalities.
