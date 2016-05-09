var postcss = require("postcss");
var fs = require("fs");

const style = fs.readFileSync(`${__dirname}/dest/main.css`, "utf8");
const root = postcss.parse(style);

const ANNOTATION = '@'.charCodeAt(0);
const ASTERISK   = '*'.charCodeAt(0);
const NEWLINE    = '\n'.charCodeAt(0);
const RE_AT_END  = /[ \n\t\r\f\{\(\)'"\\;/]/g;

root.nodes.map(node => {
  if (node.type === 'comment') {

    let tokens   = [];
    let css      = node.text.valueOf();
    let length   = css.length;
    let offset   = -1;
    let line     =  1;
    let position =  0;

    while ( pos < length ) {
      code = css.charCodeAt(pos);
      switch (code) {
        case ANNOTATION:

          break;
        default:

      }

      switch (code) {
        case ANNOTATION:
            RE_AT_END.lastIndex = pos + 1;
            RE_AT_END.test(css);
            if ( RE_AT_END.lastIndex === 0 ) {
                next = css.length - 1;
            } else {
                next = RE_AT_END.lastIndex - 2;
            }
            tokens.push(['annotation', css.slice(pos, next + 1),
                line, pos  - offset,
                line, next - offset
            ]);
            pos = next;
          break;
        default:
      }

      pos++;
    }

    console.log(tokens);
  }
})
