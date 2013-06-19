# rendr cookies

right now only reading cookies works...

in therory, add the cookies module to your rendr app. Include the cookies module when compiling for client side, and you should be able to work with cookies either client side or server side


### Hooking into app

```javascript
var cookies = require("rendr-cookies");

module.exports = BaseApp.extend({
  cookies : cookies   
});
```
### Using in app

```javascript
// in a model or collection
this.app.cookies.get.call(this, "cookieName");
```

`this will change`

