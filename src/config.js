System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "lib/github/*",
    "npm:*": "lib/npm/*"
  },
  packages: {
    "app": {
      "defaultExtension": "js",
      "main": "app",
      "meta": {
        "*.html": {
          "loader": "text"
        }
      }
    }
  },
  map: {
    "angular": "npm:angular@1.5.7",
    "babel": "npm:babel-core@5.8.38",
    "babel-core": "npm:babel-core@6.22.1",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.22.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "coffee": "github:forresto/system-coffee@0.1.2",
    "core-js": "npm:core-js@1.2.6",
    "ionic": "github:driftyco/ionic-bower@1.3.1",
    "lodash": "npm:lodash@4.17.4",
    "systemjs/plugin-text": "github:systemjs/plugin-text@0.0.2",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:angular/bower-angular-animate@1.5.7": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:angular/bower-angular-sanitize@1.5.7": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:driftyco/ionic-bower@1.3.1": {
      "angular": "github:angular/bower-angular@1.5.7",
      "angular-animate": "github:angular/bower-angular-animate@1.5.7",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.5.7",
      "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.2.13",
      "css": "github:systemjs/plugin-css@0.1.23"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-code-frame@6.22.0": {
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@3.0.0"
    },
    "npm:babel-core@6.22.1": {
      "babel-code-frame": "npm:babel-code-frame@6.22.0",
      "babel-generator": "npm:babel-generator@6.22.0",
      "babel-helpers": "npm:babel-helpers@6.22.0",
      "babel-messages": "npm:babel-messages@6.22.0",
      "babel-register": "npm:babel-register@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0",
      "babel-traverse": "npm:babel-traverse@6.22.1",
      "babel-types": "npm:babel-types@6.22.0",
      "babylon": "npm:babylon@6.15.0",
      "convert-source-map": "npm:convert-source-map@1.3.0",
      "debug": "npm:debug@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json5": "npm:json5@0.5.1",
      "lodash": "npm:lodash@4.17.4",
      "minimatch": "npm:minimatch@3.0.3",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.5.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-generator@6.22.0": {
      "babel-messages": "npm:babel-messages@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "detect-indent": "npm:detect-indent@4.0.0",
      "jsesc": "npm:jsesc@1.3.0",
      "lodash": "npm:lodash@4.17.4",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:babel-helper-call-delegate@6.22.0": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-traverse": "npm:babel-traverse@6.22.1",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-helper-define-map@6.22.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0",
      "lodash": "npm:lodash@4.17.4"
    },
    "npm:babel-helper-function-name@6.22.0": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0",
      "babel-traverse": "npm:babel-traverse@6.22.1",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-helper-get-function-arity@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-helper-hoist-variables@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-helper-optimise-call-expression@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-helper-regex@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0",
      "lodash": "npm:lodash@4.17.4"
    },
    "npm:babel-helper-replace-supers@6.22.0": {
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.22.0",
      "babel-messages": "npm:babel-messages@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0",
      "babel-traverse": "npm:babel-traverse@6.22.1",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-helpers@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0"
    },
    "npm:babel-messages@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-check-es2015-constants@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0",
      "babel-traverse": "npm:babel-traverse@6.22.1",
      "babel-types": "npm:babel-types@6.22.0",
      "lodash": "npm:lodash@4.17.4"
    },
    "npm:babel-plugin-transform-es2015-classes@6.22.0": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.22.0",
      "babel-helper-function-name": "npm:babel-helper-function-name@6.22.0",
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.22.0",
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.22.0",
      "babel-messages": "npm:babel-messages@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0",
      "babel-traverse": "npm:babel-traverse@6.22.1",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-for-of@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-function-name@6.22.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-literals@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.22.0": {
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.22.0": {
      "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0",
      "babel-types": "npm:babel-types@6.22.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.22.0": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-modules-umd@6.22.0": {
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-object-super@6.22.0": {
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-parameters@6.22.0": {
      "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.22.0",
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-template": "npm:babel-template@6.22.0",
      "babel-traverse": "npm:babel-traverse@6.22.1",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-spread@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.22.0": {
      "babel-helper-regex": "npm:babel-helper-regex@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0"
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.22.0": {
      "babel-helper-regex": "npm:babel-helper-regex@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "regexpu-core": "npm:regexpu-core@2.0.0"
    },
    "npm:babel-plugin-transform-regenerator@6.22.0": {
      "regenerator-transform": "npm:regenerator-transform@0.9.8"
    },
    "npm:babel-plugin-transform-strict-mode@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0"
    },
    "npm:babel-preset-es2015@6.22.0": {
      "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.22.0",
      "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0",
      "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.22.0",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.22.0",
      "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.22.0",
      "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.22.0",
      "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.22.0",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.22.0",
      "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.22.0",
      "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.22.0",
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.22.0",
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.22.0",
      "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.22.0",
      "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.22.0",
      "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.22.0",
      "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.22.0",
      "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.22.0",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.22.0",
      "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.22.0",
      "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.22.0",
      "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.22.0",
      "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.22.0",
      "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.22.0"
    },
    "npm:babel-register@6.22.0": {
      "babel-core": "npm:babel-core@6.22.1",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "core-js": "npm:core-js@2.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "home-or-tmp": "npm:home-or-tmp@2.0.0",
      "lodash": "npm:lodash@4.17.4",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map-support": "npm:source-map-support@0.4.10"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.22.0": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.10.1"
    },
    "npm:babel-template@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-traverse": "npm:babel-traverse@6.22.1",
      "babel-types": "npm:babel-types@6.22.0",
      "babylon": "npm:babylon@6.15.0",
      "lodash": "npm:lodash@4.17.4"
    },
    "npm:babel-traverse@6.22.1": {
      "babel-code-frame": "npm:babel-code-frame@6.22.0",
      "babel-messages": "npm:babel-messages@6.22.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0",
      "babylon": "npm:babylon@6.15.0",
      "debug": "npm:debug@2.6.0",
      "globals": "npm:globals@9.14.0",
      "invariant": "npm:invariant@2.2.2",
      "lodash": "npm:lodash@4.17.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.17.4",
      "to-fast-properties": "npm:to-fast-properties@1.0.2"
    },
    "npm:babylon@6.15.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:brace-expansion@1.1.6": {
      "balanced-match": "npm:balanced-match@0.4.2",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:convert-source-map@1.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:debug@2.6.0": {
      "ms": "npm:ms@0.7.2"
    },
    "npm:detect-indent@4.0.0": {
      "repeating": "npm:repeating@2.0.1"
    },
    "npm:globals@9.14.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:home-or-tmp@2.0.0": {
      "os-homedir": "npm:os-homedir@1.0.2",
      "os-tmpdir": "npm:os-tmpdir@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.2": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-finite@1.0.2": {
      "number-is-nan": "npm:number-is-nan@1.0.1"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:json5@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:minimatch@3.0.3": {
      "brace-expansion": "npm:brace-expansion@1.1.6",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-tmpdir@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:regenerator-runtime@0.10.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:regenerator-transform@0.9.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "babel-runtime": "npm:babel-runtime@6.22.0",
      "babel-types": "npm:babel-types@6.22.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:regexpu-core@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerate": "npm:regenerate@1.3.2",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:repeating@2.0.1": {
      "is-finite": "npm:is-finite@1.0.2"
    },
    "npm:source-map-support@0.4.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
