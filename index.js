var postcss = require("postcss");
var fs = require("fs");

const style = fs.readFileSync(`${__dirname}/dest/main.css`, "utf8");
const root = postcss.parse(style);

root.nodes.map(node => {
  if (node.type === 'comment') {
    //
  }
})
