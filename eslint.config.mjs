import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  eslintConfigPrettier,
];

export default eslintConfig;
