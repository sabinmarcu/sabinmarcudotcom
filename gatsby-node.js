/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const fs = require('fs');

const distName = 'docs';
const distPath = path.join(__dirname, distName);
exports.onPreInit = () => {
  if (process.argv[2] === 'build') {
    if (fs.existsSync(distPath)) {
      fs.rmdirSync(
        distPath,
        { recursive: true },
      );
    }
  }
};

exports.onPostBuild = () => {
  fs.renameSync(
    path.join(__dirname, 'public'),
    distPath,
  );
};
