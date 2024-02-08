const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

// Get the default Metro configuration for the project
const defaultConfig = getDefaultConfig(__dirname);

// Extend the sourceExts array
const sourceExts = [...defaultConfig.resolver.sourceExts, 'ts', 'tsx'];

// Create a new configuration object that includes the updated sourceExts
const config = {
  resolver: {
    sourceExts,
  },
};

module.exports = mergeConfig(defaultConfig, config);

