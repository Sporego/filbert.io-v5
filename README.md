# filbert.io-v5
It's that time again! The previously deployed production version of my personal website doesn't suite the developer I am today. I've learned too many new technologies and have way too many ideas waiting to be implemented.

## Developer Documentation

### Useful commands
```
npx prettier --write . //Apply Prettier config
npm run eslint //ESLint typechecking
sass ./styles/main.scss ./styles/global.scss //Rewrite globals.css via main.scss
```

### Development Notes

*   Ignore following 2 npm warnings: 
```npm WARN bootstrap@4.5.2 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.5.2 requires a peer of popper.js@^1.16.1 but none is installed. You must install peer dependencies yourself.```
  *React-Bootstrap only needs React.js and It's own Browser Global to function
