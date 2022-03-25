module.exports = {
  reactStrictMode: true,
  target: "experimental-serverless-trace",

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.mp4$/,
  //     use: "file-loader?name=videos/[name].[ext]",
  //   });

  //   return config;
  // },
};

// const withVideos = require("next-videos");
// module.exports = withVideos();
