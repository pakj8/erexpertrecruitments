/** @type {import('next').NextConfig} */

const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config({
  path: "./.env.local",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  // webpack(config) {
  //   config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
  //   return config;
  // },
};

module.exports = nextConfig;
