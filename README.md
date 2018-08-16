#  Cytoscape Interaction Network

Thin wrapper around https://github.com/yochannah/cytoscape-intermine to allow cytoscape network viewer to display on bluegenes via the tool api.

## Licence
LGPL 3 - see [LICENCE](LICENCE)

### To set up locally for development

1. Clone the repo
2. `cd bluegenesToolCytoscape` and then `npm install` to install dependencies.

All of the editable source files for css and js are in `src`. To bundle for prod, run the following commands:

#### CSS

Assuming [less](http://lesscss.org/) is installed globally:

```
lessc src/style.css dist/style.css --clean-css
```

#### JS

Assuming [webpack](https://webpack.js.org/) is installed globally:

```
npx webpack
```
