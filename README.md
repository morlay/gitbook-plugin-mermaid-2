## Mermaid plugin for GitBook 

Plugin for [GitBook](https://github.com/GitbookIO/gitbook) which renders [Mermaid](https://github.com/knsv/mermaid) diagrams and flow charts detected in the book markdown.

### How to install it?

You can use install via **NPM**:

```
$ npm install gitbook-plugin-mermaid-2
```

And use it for your book with in the book.json:

```
{
    "plugins": ["mermaid-2"],
    "pluginsConfig": {
      "mermaid-2": {
         "theme": "forest" // here to change the mermaid theme
      }
    }
}
```

### How to use it?

Just put the code into fenced code block and tag it **mermaid** key word like this:

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```
