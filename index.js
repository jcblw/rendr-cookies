var 
// depedencies
Cookies = require("cookie"),
_ = require("underscore"),
// depends on having rendr installed
baseModel = require("../rendr/shared/base/view"),

// getAll is a method that gets all cookies 

getAll = function(){

	if(typeof document === "object"){
		return Cookies.parse(document.cookie);
	}else{
		if( typeof this.app.req.headers.cookie === "string" ){
			return Cookies.parse(this.app.req.headers.cookie);
		}
	}

	return null;

}

// get the cookies by name, first param is the name of the cookie
// this should be a string

exports.get = function( name ){

	var 
	cookies = getAll.call(this) || {},
	pattern = new RegExp(name),
	value;

	for(var key in cookies){
		if(key === name) {
			value = decodeURIComponent(cookies[key]);
		}
	}

	return value;

}

// set the cookie is the a way to set a cookie the frist param
// is the cookie name and the soecond is the payload to be set
// for the cookies data can be a string or an object

exports.set = function( name, value, opts ){

	if(typeof document === "object"){
		var cookie = Cookies.serialize( name, value, opts );
		document.cookie += cookies;
		// do client stuff
	// this will probably wont e here
	}else if(typeof this.app.res === "object"){
		res.cookie( name, value, opts );
		// do server stuff
	}
}

exports.getAll = getAll;
