var mermaidRegex = /^```mermaid((.*\n)+?)?```$/im;

function processMermaidBlockList(page) {

  var match;

  while ((match = mermaidRegex.exec(page.content))) {
    var rawBlock = match[0];
    var mermaidContent = match[1];
    page.content = page.content.replace(rawBlock, '<div class="mermaid">' + mermaidContent + '</div>');
  }

  return page;
}

module.exports = {
  book: {
    assets: './book',
    js: [
      'plugin.js'
    ],
    html: {
      'head:end': function (options) {
        return '<script src="' + options.staticBase + '/plugins/gitbook-plugin-mermaid-2/bower_components/mermaid/dist/mermaid.min.js"></script>';
      }
    }
  },
  hooks: {
    'page:before': processMermaidBlockList
  }
};
