const _ = require("lodash");

const env = process.env;

module.exports = {
  repoSlug: `${env.CIRCLE_PROJECT_USERNAME}/${env.CIRCLE_PROJECT_REPONAME}`,
  branchName: env.CIRCLE_BRANCH,
  firstPush: !env.CIRCLE_PREVIOUS_BUILD_NUM,
  correctBuild: true,
  uploadBuild: env.CIRCLE_NODE_INDEX === "0"
};
