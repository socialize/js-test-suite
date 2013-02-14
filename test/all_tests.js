var TestRunner = YAHOO.tool.TestRunner;

var requested = 0;
var loaded = 0;

/* list unit test files here */
importScript('unit/template.js');

function onScriptLoad() {
	loaded++;
}

function importScript(name) {
	requested++;
	$.getScript(name, onScriptLoad);
}

function doRun(fnCallback) {
	
	if(loaded == requested) {
		TestRunner.subscribe(TestRunner.BEGIN_EVENT, fnCallback);
		TestRunner.subscribe(TestRunner.COMPLETE_EVENT, fnCallback);
		TestRunner.subscribe(TestRunner.TEST_FAIL_EVENT, fnCallback);
		TestRunner.subscribe(TestRunner.TEST_PASS_EVENT, fnCallback);
		TestRunner.run();
	}
	else {
		setTimeout(function() {
			doRun(fnCallback);
		}, 1000);
	}
}

function runTests(fnCallback) {
	doRun(fnCallback);
}