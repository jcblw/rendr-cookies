var 
// depedencies
Cookies = require("cookie"),
_ = require("underscore");

// getAll is a method that gets all cookies 

var getAll = exports.getAll = function(){

	if(typeof document === "object"){
		return Cookies.parse(document.cookie);
	}else{
		return Cookies.parse(this.app.req.headers.cookies);
	}

}

// get the cookies by name, first param is the name of the cookie
// this should be a string

exports.get = function( name ){

	var cookies = getAll() || {}; 
	_.forEach(cookies, function(value, key, list){
		if(cookies[key] === name) return cookies[key];
	});
	return null;

}

// set the cookie is the a way to set a cookie the frist param
// is the cookie name and the soecond is the payload to be set
// for the cookies data can be a string or an object

exports.set = function( name, value, opts ){

	if(typeof document === "object"){
		var cookie = Cookies.serialize( name, value, opts );
		document.cookie += cookies;
		// do client stuff
	}else if(typeof this.app.res === "object"){
		res.cookie( name, value, opts );
		// do server stuff
	}
}

