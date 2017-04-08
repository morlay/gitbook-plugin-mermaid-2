var mermaidRegex = /^```mermaid((.*\r?\n)+?)?```$/im;
var pluginName = 'mermaid-2';
var mermaidReleasedAssets = 'bower_components/mermaid/dist/';

function processMermaidBlockList(page) {

  var match;

  if (this.output.name == 'ebook') {
      this.log.warn(page.path + ': mermaid graph not supported in ebook yet.');
      return page;
  }

  while ((match = mermaidRegex.exec(page.content))) {
    var rawBlock = match[0];
    var mermaidContent = match[1];
    page.content = page.content.replace(rawBlock, '<div class="mermaid">' +
      mermaidContent + '</div>');
  }

  return page;
}

function addScript(filePath) {
  return '<script src="' + filePath + '"></script>'
}

function addCss(filePath) {
  return '<link rel="stylesheet" href="' + filePath + '"></link>'
}

function getAssets() {
  var cssList = [
    mermaidReleasedAssets + 'mermaid.css'
  ];

  var jsList = [
    'plugin.js',
    mermaidReleasedAssets + 'mermaid.min.js'
  ]

  var theme = (this.config.get('pluginsConfig')[pluginName] || {}).theme;
  if (theme) {
    cssList.push(mermaidReleasedAssets + 'mermaid.' + theme + '.css');
  }

  return {
    assets: './book',
    css: cssList,
    js: jsList,
  }
}

module.exports = {
  book: getAssets,
  hooks: {
    'page:before': processMermaidBlockList
  }
};
