var Assert = YAHOO.util.Assert;
var ArrayAssert = YAHOO.util.ArrayAssert; 	

TestRunner.add(new YAHOO.tool.TestCase({
	
	name: 'test_world.js',
	 
    setUp : function () {
    	this.world = new World();
    },
 
    tearDown : function () {
    	 //delete this.world;
    },
 
    testTemplate: function () {
    	Assert.isTrue(true);
    }
}));

