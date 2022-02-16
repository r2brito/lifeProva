module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-async-to-generator",
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/config",
          "@modules": "./src/modules",
          "@shared": "./src/shared",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
