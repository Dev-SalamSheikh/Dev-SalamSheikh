const introStackImageTemplate = require("fs").readFileSync(
  __dirname + "/stack-image.md",
  "utf-8"
);

const stack = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/denojs/denojs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/jamstack/jamstack-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/markdown/markdown-original.svg",

  "https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/babel/babel-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg",

  "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/atom/atom-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg",

  "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
];

const stackImages = stack
  .map((imgUrl) => introStackImageTemplate.replace("{IMGURL}", imgUrl))
  .join("");

module.exports = { stackImages };
