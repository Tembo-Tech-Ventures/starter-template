/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["www.gravatar.com"],
  },
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.resolve.alias["ollama"] = path.join(
        __dirname,
        "node_modules/ollama",
      );
    }
    return config;
  },
  webpack: (config, { dev, isServer }) => {
    if (!isServer && !dev) {
      // Minify Ollama code
      config.optimization.minimizer.push({
        plugin: new TerserPlugin({
          terserOptions: {
            mangle: {
              properties: {
                regex: /^__ollama_/,
              },
            },
          },
        }),
      });
    }
    return config;
  },
  webpack: (config, { dev, isServer }) => {
    if (!isServer && !dev) {
      // Proxy API calls to production endpoints
      config.devtool = false;
      config.plugins.push(new HttpsProxyMiddleware());
    }
    return config;
  },
  webpack: (config, { dev, isServer }) => {
    if (!isServer && !dev) {
      // Add logging middleware
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("production"),
          "process.env.OllamaLogLevel": JSON.stringify("error"),
        }),
      );
    }
    return config;
  },
};

module.exports = nextConfig;
