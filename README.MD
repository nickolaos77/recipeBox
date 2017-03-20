For the front end part of the this simple recipe box I tried to avoid using bootstrap and do it with custom css.
So I used flexbox and for the modal the new html5 tag `<dialog>` it's support is 57% at the time of writting  but it can be polyfilled for the rest of the modern browsers using the following polyfill (https://github.com/GoogleChrome/dialog-polyfill). 
This polyfill has some limitations from which the most important is that the `<dialog>`has to be a child of `<body>`. 

The state of the app is managed by Redux.