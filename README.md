It is  advised that the test runner is ran on Firefox browsers


Important files/folders:
 - Test files are located in the "unit" folder
 - Test are ran by loading "index.html" on your browser
 - The "all_tests.js" file is used to specify which test should be ran
 - "js-extensions" is a collection of js helper files that are required to run this suite

Here is an example of what index.html displays when the test complete:
http://cl.ly/image/440v0b1j1311


This test suite also includes JSLint. 
JSLint is a quality control checking system. 
It ensures your JS is written to standards (follows coding rules) for things like browser
compatibility, or to make sure your JS minify does not encounter issues due to missing delimiters etc.


Note: If you run it locally the test will work but you will get an error like this:

	XMLHttpRequest cannot load file://localhost/Users/seanshadmand/git/socialize_js_test_suite/your-js-files/example_class.js. Origin null is not allowed by Access-Control-Allow-Origin.
	
Resulting from JQuery based AJAX calls not being allowed