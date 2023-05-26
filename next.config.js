const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

module.exports = withBundleAnalyzer({
  publicRuntimeConfig: {
    NEXT_PUBLIC_SOME_ENV_VAR: process.env.NEXT_PUBLIC_SOME_ENV_VAR,
  },
  output: 'standalone'
})