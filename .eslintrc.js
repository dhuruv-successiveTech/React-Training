module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
  rules: {
    // Add or override rules here
    'no-console': 'warn',
    'react/jsx-uses-react': 'off', // Not needed with React 17+
    'react/react-in-jsx-scope': 'off', // Next.js already handles this
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
  },
};
