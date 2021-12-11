module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/components/',
    '/src/helpers/',
    '/src/models/',
    '/src/services/',
  ],
};
