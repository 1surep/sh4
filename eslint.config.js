const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// FlatCompat only assigns a default `files` pattern of **/*.{js,cjs,mjs} to
// eslintrc-style configs that don't declare their own `files`/`overrides`.
// eslint-config-next's TypeScript override explicitly targets `**/*.ts?(x)`,
// but the base React/Next rules end up with that default and silently skip
// `.jsx` files. Explicitly widen coverage to include `.jsx` here.
const eslintConfig = [
  ...compat.extends("next/core-web-vitals").map((config) => ({
    ...config,
    files: config.files ?? ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
  })),
  {
    ignores: [".next/**", "node_modules/**", "public/**"],
  },
];

module.exports = eslintConfig;
