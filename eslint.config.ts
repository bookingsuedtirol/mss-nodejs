import pluginJS from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  { languageOptions: { globals: globals.node } },
  pluginJS.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      "arrow-body-style": ["error", "as-needed"],
      "func-style": ["error", "expression"],
      "no-else-return": "error",
      "no-useless-computed-key": "error",
      "no-useless-rename": "error",
      "object-shorthand": "error",
      eqeqeq: "error",
      "prefer-template": "error",
    },
  },
  {
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"],
        },
        {
          selector: [
            "class",
            "enum",
            "enumMember",
            "interface",
            "typeAlias",
            "typeParameter",
          ],
          format: ["PascalCase"],
        },
        {
          selector: ["objectLiteralProperty", "parameter"],
          format: null,
        },
        {
          selector: ["import", "variable"],
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: ["typeProperty"],
          format: ["camelCase", "PascalCase", "snake_case"],
        },
      ],
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        {
          ignoreConditionalTests: true,
        },
      ],
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/restrict-template-expressions": "off",
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.eslint.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { ignores: ["dist/"] },
);
