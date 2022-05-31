/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "prettier",
    "@vue/eslint-config-typescript/recommended",
    "plugin:vue/base", // Settings and rules to enable correct ESLint parsing
    "plugin:vue/vue3-essential", // Plus rules to prevent errors or unintended behavior
    "plugin:vue/vue3-strongly-recommended", // Above, plus rules to considerably improve code readability and/or dev experience
    "plugin:vue/vue3-recommended" // Above, plus rules to enforce subjective community defaults to ensure consistency
  ],
  "env": {
    "vue/setup-compiler-macros": true
  }
}
