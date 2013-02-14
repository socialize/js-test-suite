
/**
 * Fake class used to demonstrate testing framework
 * For your tests you would point your JS include statements to your project's classes
 */

/*global Log,$ */
function World() {
	"use strict";
	this.countryLanguages = {"USA": "en"};
	this.prettyPrint = true;
}

/**
 * Prints "hello world" in the countries language to your console.
 * @param countryCode The country code used to determine language.
 */
World.prototype.sayHelloWorld = function(countryCode) {
	"use strict";
	language = this.countryLanguages[countryCode];
	console.log(language);
};