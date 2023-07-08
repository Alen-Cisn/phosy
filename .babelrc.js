module.exports = function(api) {
  api.cache.forever(); // api.cache(true)

  return {
    "plugins": [
      [
        "formatjs",
        {
          "idInterpolationPattern": "[sha512:contenthash:base64:6]",
          "ast": true
        }
      ]
    ]
  };
};