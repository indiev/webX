// stylelint configuration
// https://stylelint.io/user-guide/configuration/
module.exports = {
  // The standard config based on a handful of CSS style guides
  // https://github.com/stylelint/stylelint-config-standard
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss"
    // 'stylelint-config-prettier'
  ],

  plugins: [
    // stylelint plugin to sort CSS rules content with specified order
    // https://github.com/hudochenkov/stylelint-order
    "stylelint-order",
    "stylelint-scss"
  ],
  rules: {
    "no-empty-source": null
  }
};
