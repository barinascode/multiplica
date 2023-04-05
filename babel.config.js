module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            '@shared': "./src/shared",
            '@modules': "./src/modules",
            src: "./src",
          },
        },
      ],
      'babel-plugin-transform-typescript-metadata'
    ],
  };
};
