# filbert.io-v5

It's that time again! The previously deployed production version of my personal website doesn't suite the developer I am today. I've learned too many new technologies and have way too many ideas waiting to be implemented.

## Developer Documentation

### Useful commands

```
/*Apply Prettier config*/
npm run prettier

/*ESLint typechecking*/
npm run eslint

/*Rewrite globals.css via main.scss*/
sass ./styles/main.scss ./styles/global.scss
```

### Development Notes

-   As React-Bootstrap only needs it's own Browser Global which is imported in window.ReactBootstrap , ignore the following:
    -   `npm WARN bootstrap@4.5.2 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.`
    -   `npm WARN bootstrap@4.5.2 requires a peer of popper.js@^1.16.1 but none is installed. You must install peer dependencies yourself.`
