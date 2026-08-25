import nextConfig from 'eslint-config-next';

export default [
  ...nextConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
    },
  },
];
