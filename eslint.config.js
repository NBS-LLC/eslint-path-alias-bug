const importPlugin = require("eslint-plugin-import");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");

module.exports = [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.errors,
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    settings: {
      "import/resolver": {
        typescript: true
      },
    },
    rules: {
      "import/no-unresolved": "error",
    },
  },
];
