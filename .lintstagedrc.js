const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "**/*": ["prettier --ignore-unknown --no-error-on-unmatched-pattern --write"],
  "**/*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
