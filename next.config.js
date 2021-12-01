module.exports = {
  webpack(config, { webpack }) {
    const c = config;
    
    c.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return c;
  },
  trailingSlash: true,
  reactStrictMode: true,
};