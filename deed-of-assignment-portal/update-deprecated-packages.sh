#!/bin/bash

# Uninstall deprecated packages
npm uninstall @babel/plugin-proposal-private-methods \
              @babel/plugin-proposal-numeric-separator \
              @babel/plugin-proposal-nullish-coalescing-operator \
              @babel/plugin-proposal-class-properties \
              rollup-plugin-terser \
              @babel/plugin-proposal-optional-chaining \
              sourcemap-codec \
              workbox-cacheable-response \
              workbox-google-analytics

# Install recommended packages
npm install @babel/plugin-transform-private-methods \
            @babel/plugin-transform-numeric-separator \
            @babel/plugin-transform-nullish-coalescing-operator \
            @babel/plugin-transform-class-properties \
            @rollup/plugin-terser \
            @babel/plugin-transform-optional-chaining \
            @jridgewell/sourcemap-codec

# Note: No need to install alternatives for workbox-cacheable-response and workbox-google-analytics
# as they are specific to workbox-background-sync and Google Analytics v3, respectively.
# Ensure you're using compatible versions if these functionalities are required.

echo "Deprecated packages have been replaced with their recommended alternatives."

# Additional step: Update project configuration files if necessary
# This step is highly specific to your project setup and may require manual adjustments.
# For example, you might need to update your babel.config.js or webpack.config.js
# to reflect the changes in Babel plugins or Rollup terser plugin.