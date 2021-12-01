module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
        },
      ],
      ["@babel/plugin-transform-runtime"],
      ["@babel/plugin-syntax-throw-expressions"],
      ["inline-react-svg"],
    ],
  };