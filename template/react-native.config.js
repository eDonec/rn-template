module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets', 'react-native-vector-icons'],
  dependencies: {
    '@react-native-community/blur': {
      platforms: {
        android: null,
      },
    },
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
