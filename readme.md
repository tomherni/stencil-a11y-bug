# readme

This repo reproduces an accessibility issue.

## Get started

```shell
npm install
npm start
```

The button made with Stencil has no contents in the Accessibility Tree. VoiceOver (Chrome 119, macOS 14.1) reads only `button`.

The button made using custom elements directly _does_ have contents. VoiceOver reads the text as expected, i.e. `Place order (Custom Element), button`.
