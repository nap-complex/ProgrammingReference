(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/rl_FLRES_18_62219_728x90_atlas_.png", id:"rl_FLRES_18_62219_728x90_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"rl_FLRES_18_62219_728x90_atlas_", frames: [[0,352,728,300],[0,0,728,350]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.mk_hea = function() {
	this.spriteSheet = ss["rl_FLRES_18_62219_728x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pandora_bg = function() {
	this.spriteSheet = ss["rl_FLRES_18_62219_728x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKAYIgKgQIgKAQIgRAAIATgYIgQgXIASAAIAGANIAJgNIAQAAIgQAXIATAYg");
	this.shape.setTransform(24.1,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAYQgFgDgEgDQgEgDgBgFIgCgEIAAgGIACgJQABgEAEgEQAEgDAFgCQAFgCAEAAQAFAAAFACQAFACAEADQADAEACAEIADAJIgBAGIgCAEQgCAFgDADQgEADgFADQgFABgFAAQgEAAgFgBgAgEgJQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgDADIgBAEIABAEIADAFIADACIAEABIAEgBIAFgCIACgFIABgEIgBgEIgCgDIgFgCIgEgBIgEABg");
	this.shape_1.setTransform(18.5,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAjIAAhFIAtAAIAAAOIgeAAIAAAPIAcAAIAAANIgcAAIAAAbg");
	this.shape_2.setTransform(13,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAkIgHgCIgGgEIgGgEIgEgGIgEgGIgCgHIgBgHIABgGIACgHIAEgGIAEgGIAGgEQADgDADgBIAHgCIAGgBIAHABIAHACQAEABADADIAFAEIAFAGIADAGIACAHIAAAGIAAAHIgCAHIgDAGIgFAGIgFAEIgHAEIgHACIgHABIgGgBgAgEgaIgFABQgFADgEADQgDAEgDAFIgCAKIABAFIABAFQADAFADAEQAEAEAFACIAFACIAEABQADAAAHgDQAFgCADgEQAFgEACgFIABgFIAAgFIgBgKQgCgFgFgEQgDgDgFgDIgKgCIgEABgAgGATQgDgCgDgDIgEgHQgBgDgBgEQABgEABgDQABgEADgDQACgDAEgBQADgCADAAIAHABIAFADIAEAEQACADAAAEIgJAAQAAgDgDgCIgFgBIgCABIgDACIgCAEIgBAEIABAEIACAEIADADIACAAQADAAADgBQACgCAAgDIAJAAQAAAEgCADIgEAEIgFADIgHABQgCAAgEgBg");
	this.shape_3.setTransform(6.1,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.7,14);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVArIgVgfIgWAfIgZAAIAigtIgegoIAbAAIAQAaIASgaIAZAAIgeAoIAjAtg");
	this.shape.setTransform(193.1,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSArQgGgBgEgEQgFgDgDgFQgCgFAAgGQAAgFABgEIAFgIQADgCAKgFQALgEAWAAIAGAAIAAgCQAAgEgBgDQgCgDgDgCQgFgFgJAAQgEAAgHADQgGACgEAEIgLgLQADgEAFgCIAJgFQAIgDAKAAIALABQAGABADADQAIADADAHQAEAFABAIIAAALIAAAwIgTAAIAAgMIgBAAQgEAHgIAEQgHADgGAAQgHAAgFgCgAgEAGQgGACgDACQgDADAAAEQAAAGAEADQAFADAFAAQAEAAAEgCQAEgBADgDQADgCABgEQACgEAAgEIAAgFIgFAAQgNAAgFACg");
	this.shape_1.setTransform(183.7,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAA3QgEgCgDgEQgDgEgBgGIgBgNIAAgmIgSAAIAAgSIASAAIAAgZIATAAIAAAZIAYAAIAAASIgYAAIAAAkQAAAHADADQADAEAGAAQAIAAAEgDIAAATQgGACgLAAQgJAAgFgBg");
	this.shape_2.setTransform(175.9,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAwIAAgnIgoAAIAAgQIAoAAIAAgoIAQAAIAAAoIAnAAIAAAQIgnAAIAAAng");
	this.shape_3.setTransform(162.3,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAqIgIgEIgHgGIAPgOQAEAFAFADQAEADAGAAQAEAAAEgDQAGgCAAgFQAAgDgCgDIgGgDIgOgEIgJgDQgEgBgDgCQgDgCgCgEQgCgEAAgGQAAgHADgFQACgFAGgEIAKgFQAGgCAFAAQAKAAAHADIAIAEIAGAGIgOANQgDgEgFgCQgEgDgFAAQgDAAgEADQgEACAAAFQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAIAGADIAOAEIAIADIAHADQAEACACAFQACAEAAAGQAAAIgDAFQgDAFgGAEQgFADgHABQgGACgGAAQgKAAgIgDg");
	this.shape_4.setTransform(34,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA+IADgTQAGACAFAAQAHAAAEgDQADgCADgIIAEgKIglhVIAYAAIAWA8IABAAIAVg8IAXAAIgpBnIgFALIgFAHQgEADgFACQgFABgHAAQgJAAgIgCg");
	this.shape_5.setTransform(25.8,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSArQgGgBgEgEQgFgDgDgFQgCgFAAgGQAAgFABgEIAFgIQADgCAKgFQALgEAWAAIAGAAIAAgCQAAgEgBgDQgCgDgDgCQgFgFgJAAQgEAAgHADQgFACgFAEIgLgLQADgEAFgCIAJgFQAIgDAKAAIALABQAFABAEADQAIADADAHQAEAFABAIIAAALIAAAwIgTAAIAAgMIgBAAQgEAHgIAEQgHADgGAAQgHAAgFgCgAgEAGQgGACgDACQgEADAAAEQABAGAFADQAEADAFAAQAEAAAEgCQAFgBACgDQADgCABgEQACgEAAgEIAAgFIgFAAQgNAAgFACg");
	this.shape_6.setTransform(16.6,12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBBQgHgDgGgGQgFgHgDgIQgDgIAAgKQAAgJADgJQADgGAFgGQAGgGAIgEQAIgDAIAAQAHAAAKAFQAHADAEAFIABAAIAAg8IAVAAIAACGIgUAAIAAgOIgBAAQgCAFgEACIgHAFQgHADgIAAQgJAAgJgDgAgJAAQgEACgDADQgEAEgCAEQgCAFAAAFQAAAFACAFQACAFAEADQADAEAEACQAFACAEAAQAGAAAEgCQAFgCAEgEQADgDACgFQABgFAAgFQAAgFgBgFQgCgEgDgEQgEgDgFgCQgEgBgGAAQgEAAgFABg");
	this.shape_7.setTransform(6.7,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBAQgHgCgGgEQgGgDgEgGQgEgGgCgHIAXgHQACAIAFAFQAFAEAHAAIAIgBQAEgCADgDQADgCABgEQACgEAAgEQAAgGgCgEQgDgEgEgCQgEgCgFgBIgIAAIgFAAIAAgSIAFAAIAHAAIAIgDQAEgCACgDQACgEAAgFQAAgHgFgFQgFgFgIAAQgFAAgFAEQgFAEgCAGIgXgGQACgHAEgFQAEgFAGgEQAFgDAGgCQAHgBAGAAQAHAAAIACQAHACAGAEQAFAFADAGQAEAGAAAJQAAAFgCAEQgBAFgDAEQgDAEgEACQgEADgFABIAAABQAGABAFAAQAEADADAEQAEAEABAGQACAFAAAGQAAAJgEAHQgDAHgGAFQgGAEgIADQgIACgIAAQgGAAgHgBg");
	this.shape_8.setTransform(-8.6,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHClIBKh0QgLADgKAAQgXAAgTgIQgSgIgOgPQgNgOgIgSQgHgTAAgWQAAgZAJgVQAKgUAQgPQARgPAWgIQAWgIAYAAQAZAAAWAIQAXAIAQAPQARAPAIAUQAKAVAAAZQAAARgDAPQgDAOgGALQgHARgUAgIhIBvgAgUhhQgJAEgHAHQgHAHgEAJQgEAKAAALQAAALAEAJQAEAJAHAHQAHAHAJAEQAKACAKAAQALAAAKgCQAJgEAHgHQAIgHADgJQAEgJAAgLQAAgLgEgKQgDgJgIgHQgHgHgJgEQgKgDgLAAQgKAAgKADg");
	this.shape_9.setTransform(130.3,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsCfQgSgEgPgLQgOgLgJgPQgLgQgEgUIBHgRQADASAMAKQANALAQAAQAKAAAJgDQAJgEAGgGQAHgHADgJQAEgJgBgKQAAgQgGgLQgHgKgKgHQgKgFgOgDQgLgCgOAAQgRAAgSADIghAIIAEixIDDAAIAAA9IiAAAIgCAyQALgEAQAAQAZAAAVAHQAVAIAOANQAQAPAIARQAIAVAAAYIgCAbIgHAXQgJAVgRAQQgRAPgWAHQgXAIgZAAQgVAAgRgGg");
	this.shape_10.setTransform(102.6,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASCiIAAj2Ig/A5IgngtIBphZIBAAAIAAFDg");
	this.shape_11.setTransform(73.6,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHCCIAAgVQgbgCgNgEQgKgDgIgEQgJgFgHgGIAfgkQAIAJALAFQAKAEAOABIAAgzIgWgHQgMgDgIgFQgJgDgGgHQgGgHgDgIQgDgJAAgLQAAgOAGgMQAFgLAKgIQAKgIAMgGQAMgEAOgCIAAgVIARAAIAAAVQASAAAQAEIAQAGQAIAEAGAFIgcAjQgHgGgKgDQgIgDgLgBIAAAwIAdAIQAKADAIAFQAIADAGAHQAFAHADAIQADAJAAAKQAAAPgFANQgGAMgKAIQgKAJgNAEQgNAFgPACIAAAVgAAKBDQALgCAHgFQAIgGAAgJQAAgJgGgFQgEgDgKgEIgGgCgAgWg7QgHAFAAAIQAAAHADAEQACAEAEACIANAFIAAgqQgKACgFAFg");
	this.shape_12.setTransform(53.2,6.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjA3IACgOQAEACAEAAQAHAAADgDQACgDADgGIAFgMIgghLIARAAIAUA6IABAAIAVg6IAPAAIgjBbIgCAJIgFAHQgDADgEABQgEACgGAAQgHAAgGgCg");
	this.shape_13.setTransform(377.3,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAmQgFgCgEgDQgDgDgCgEQgDgEAAgGQAAgHAEgFQADgEAGgCQAFgDAIgBQAGgCAIAAIALAAIAAgDQAAgGgFgFIgFgEIgIgBQgGAAgFADIgJAGIgJgJQAGgGAJgDQAHgCAHAAQAIAAAGACQAGACAEADQADAEACAEQACAFAAAFIAAAlIABANIgNAAIAAgLIgBAAIgFAGQgDADgDABQgGADgHAAQgGAAgEgBgAgHAEQgFABgCADQgDADAAAEQAAAHAEADQAEADAIAAQAEAAAEgCQAEgCADgEIAEgHIABgHIAAgFIgIAAQgMAAgGADg");
	this.shape_14.setTransform(369.5,14.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPA6QgIgDgFgGQgFgFgDgHQgDgIAAgIQAAgIADgIQADgFAFgFQAFgGAIgDQAHgDAIAAQAHABAGADQAIADADAGIABAAIAAg4IAOAAIAAB3IgOAAIAAgLIgBAAIgEAFIgHAFQgHADgGAAQgIAAgHgDgAgJgCQgEACgDACQgDADgCAGQgCAFAAAFQAAAGACAEQACAFADAEQADADAEADQAGACADAAQAGAAAFgCQAEgDAEgDQADgEABgFQACgEAAgGQAAgFgCgFQgBgGgDgDQgEgCgEgCQgFgBgGAAQgDAAgGABg");
	this.shape_15.setTransform(361,12.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIAOAAIAAAMQADgGAFgEQAGgDAHAAIAGAAIAAAQIgHgBQgGAAgEABQgEACAAADQgDADgCAEIgBAJIAAAmg");
	this.shape_16.setTransform(350.2,14.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAkQgHgDgFgFQgFgGgDgHQgDgHAAgIQABgHADgHQACgIAGgFQAFgGAHgDQAHgCAHAAIAJAAIAIADQAGADAFAGQAFAGACAHQACAHAAAGIAAAFIg7AAQAAAEACAFQACAEADADQAEADAFABIAIACQAFAAAGgDQAEgDAFgGIALAJIgGAGIgIAFIgJADIgKABQgIAAgHgDgAAWgFQAAgFgCgEIgDgHQgDgDgEgBQgFgCgEAAQgEAAgEACQgEACgEADQgDADgCAEIgBAIIArAAIAAAAg");
	this.shape_17.setTransform(343.1,14.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAOAAIAAALIAFgGIAHgEQAHgDAGAAQAIAAAIADQAHADAFAGQAFAFADAHQACAIAAAIQAAAIgCAIQgDAFgFAFQgFAGgHADQgIADgIAAQgGAAgIgEQgHgDgEgGIAAA4gAgJgtQgFACgDAEQgDADgCAFQgCAFAAAGQAAAGACAEQACAFADAEQADABAFACQAEACAFAAQAFAAAEgCQAFgCADgBQADgEACgFQACgEAAgGQAAgGgCgFQgCgFgDgDQgDgEgFgCQgEgCgFAAQgFAAgEACg");
	this.shape_18.setTransform(334.4,16.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAOA8IghgnIAAAnIgOAAIAAh3IAOAAIAABMIAfgeIATAAIghAgIAkApg");
	this.shape_19.setTransform(322.3,12.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAmIAAhKIAOAAIAAAMQADgGAFgEQAGgDAHAAIAGAAIAAAQIgHgBQgGAAgEABQgEACAAADQgDADgCAEIgBAJIAAAmg");
	this.shape_20.setTransform(315.5,14.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAmQgFgCgEgDQgDgDgCgEQgDgEAAgGQAAgHAEgFQADgEAGgCQAFgDAIgBQAGgCAIAAIALAAIAAgDQAAgGgFgFIgFgEIgIgBQgGAAgFADIgJAGIgJgJQAGgGAJgDQAHgCAHAAQAIAAAGACQAGACAEADQADAEACAEQACAFAAAFIAAAlIABANIgNAAIAAgLIgBAAIgFAGQgDADgDABQgGADgHAAQgGAAgEgBgAgHAEQgFABgCADQgDADAAAEQAAAHAEADQAEADAIAAQAEAAAEgCQAEgCADgEIAEgHIABgHIAAgFIgIAAQgMAAgGADg");
	this.shape_21.setTransform(308.5,14.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglA4IAAhvIAnAAQAGAAAMADQAGADAEAEQAEAFACAGQABAFABAGIgCALQgCAFgEAFQgEADgGACQgMADgGAAIgXAAIAAAygAgVgFIAUAAIAHgBIAIgCQAEgDACgDQABgEAAgFQAAgGgBgEQgCgDgEgCQgDgCgFgBIgHgBIgUAAg");
	this.shape_22.setTransform(300.8,12.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOAkQgHgDgFgFQgFgGgDgHQgDgHAAgIQABgHADgHQACgIAGgFQAFgGAHgDQAHgCAHAAIAJAAIAIADQAGADAFAGQAEAGADAHQACAHAAAGIAAAFIg7AAQAAAEACAFQACAEADADQAEADAFABIAIACQAFAAAGgDQAEgDAFgGIALAJIgGAGIgIAFIgJADIgKABQgIAAgHgDgAAWgFQAAgFgCgEIgDgHQgDgDgEgBQgFgCgEAAQgEAAgEACQgEACgEADQgDADgCAEIgBAIIArAAIAAAAg");
	this.shape_23.setTransform(287.7,14.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAqAmIAAgoIAAgIQgBgFgCgCQgBgEgEgBQgDgCgFAAQgFAAgEACQgEABgCADQgCADgBAFIgBAJIAAAnIgNAAIAAgmIAAgJQgBgFgCgDQgBgEgDgBQgEgCgFAAQgEAAgDABIgGAFQgDADgCAFQgBAFAAAFIAAAmIgPAAIAAhKIAOAAIAAAMQABgEAHgEQADgDAEgBQAEgBAFAAQAJAAAFADQAEAEAEAHIAEgHIAGgEQAHgDAHAAQAIAAAGACQAGADADAFQADAEABAHQACAFAAAHIAAAqg");
	this.shape_24.setTransform(277,14.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAkQgHgDgFgFQgFgGgDgHQgCgHgBgIQAAgHADgHQADgIAFgFQAGgGAHgDQAHgCAGAAIAKAAIAHADQAIADAEAGQAEAGACAHQACAHABAGIAAAFIg7AAQAAAEACAFQACAEAEADQADADAFABIAIACQAFAAAGgDQAFgDAEgGIALAJIgHAGIgHAFIgJADIgLABQgGAAgIgDgAAWgFQAAgFgBgEIgFgHQgCgDgEgBQgEgCgGAAQgDAAgFACQgEACgDADQgDADgCAEIgBAIIArAAIAAAAg");
	this.shape_25.setTransform(266.3,14.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATA8IAAgtIgBgJIgFgGIgFgCIgGAAQgDgBgEACQgEABgDACQgDADgBAEQgCAGAAAGIAAAnIgOAAIAAh3IAOAAIAAA5QAEgGAGgEIAHgDIAGgBQAHAAAEACQAFABAEAEQAEAEACAFQACAEAAAHIAAAxg");
	this.shape_26.setTransform(257.9,12.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHA4IAAhhIgkAAIAAgOIBXAAIAAAOIglAAIAABhg");
	this.shape_27.setTransform(249.4,12.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAkQgHgDgFgFQgFgGgDgHQgCgHgBgIQAAgHADgHQADgIAFgFQAGgGAHgDQAHgCAGAAIAKAAIAHADQAIADAEAGQAEAGACAHQACAHABAGIAAAFIg7AAQAAAEACAFQACAEAEADQADADAFABIAIACQAFAAAGgDQAFgDAEgGIALAJIgHAGIgHAFIgJADIgLABQgGAAgIgDgAAWgFQAAgFgBgEIgFgHQgCgDgEgBQgEgCgGAAQgDAAgFACQgEACgDADQgDADgCAEIgBAIIArAAIAAAAg");
	this.shape_28.setTransform(237,14.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATAmIAAgrIgBgJIgFgGIgFgDIgGgBQgDAAgEABQgEACgDADQgDADgBAFQgCAFAAAFIAAAmIgOAAIAAhKIAOAAIAAAMQAEgGAGgEIAHgDIAGAAQAHAAAEABQAFACAEADQAEAEACAFQACAGAAAHIAAAvg");
	this.shape_29.setTransform(228.7,14.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLA5IgMgCIgKgGIgIgIIgHgIIgFgKIgEgMIgBgLIABgLIAEgLIAFgKIAHgJIAIgHIAKgFQAGgDAGgBIALgBIAMABQAGABAFADIALAFIAIAHIAHAJIAGAKIACALIABALIgBALIgCAMIgGAKIgHAIIgIAIIgLAGIgLACQgGACgGAAQgFAAgGgCgAgHgrIgJADQgIADgGAGQgFAHgDAIQgDAIAAAIQAAAIADAJQADAIAFAGQAGAHAIADIAJADIAHABIAJgBIAIgDQAIgDAFgHQAHgGACgIQADgJABgIQgBgIgDgIQgCgIgHgHQgFgGgIgDIgIgDIgJgBIgHABg");
	this.shape_30.setTransform(218.1,12.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACA4QgEgCgEgDQgEgDgDgFQgCgFAAgHIAAgoIgSAAIAAgVIASAAIAAgaIAZAAIAAAaIAYAAIAAAVIgYAAIAAAcQAAAIACADIAEAEIAHABQAIAAADgDIAAAXQgIACgLAAQgIAAgFgBg");
	this.shape_31.setTransform(338.9,-20.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOAqQgJgDgGgGQgHgGgEgJIgCgIIgBgKQAAgFADgMQAEgJAHgGQAGgGAJgDQAJgDAIAAQAKAAAHADQAIADAFAGQAGAGACAJQADAIAAAJIAAAIIg8AAQABAIAGAEQAFAFAGAAQAGAAAFgDQAFgDADgFIATAOIgHAHQgEAEgFACIgKADIgLABQgIAAgJgDgAARgIQAAgHgEgFQgFgFgHAAIgGABIgGAEQgFAFAAAHIAhAAIAAAAg");
	this.shape_32.setTransform(329.7,-19.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AALBDIgbgsIgBAAIAAAsIgbAAIAAiGIAbAAIAABRIAcggIAhAAIgiAlIAjAwg");
	this.shape_33.setTransform(319.6,-21.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgJAqQgJgDgGgGQgHgGgEgJIgCgIIgBgKQAAgFADgMQAEgJAHgGQAGgGAJgDQAJgDAIAAQAJAAAHACIAIAEIAHAFIgSATQgCgDgDgCQgEgCgEAAQgFAAgDACIgGAEQgDADgBAFQgBAEAAADQAAAEABAFQABAEADACIAGAFQADACAFAAQAEAAAEgCQADgCACgDIASATIgHAFIgIAEQgHACgJAAQgIAAgJgDg");
	this.shape_34.setTransform(309.6,-19.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMBBIAAhWIAZAAIAABWgAgJglQgFgFAAgGQAAgHAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAHQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_35.setTransform(302.1,-21.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNA/IAAhkIgkAAIAAgZIBjAAIAAAZIglAAIAABkg");
	this.shape_36.setTransform(294.1,-21.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag4A+IAHgWQAGACAGAAQAJAAADgEQADgCAFgIIACgGIgahWIAeAAIAMA6IAcg6IAcAAIg2BkIgFAMQgEAGgDADQgFAEgGACQgHACgJAAQgKAAgKgDg");
	this.shape_37.setTransform(278.1,-17.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAqQgIgDgGgGQgGgGgCgJIgCgIIABgKQABgFAFgMQAFgJAIgGQAHgGAJgDQAIgDAKAAQAJAAAHADQAIADAEAGQAFAGABAJQACAIgCAJIgBAIIg8AAQAAAIAFAEQAFAFAHAAQAFAAAFgDQAFgDAEgFIARAOIgIAHQgFAEgFACQgFACgGABIgIABQgKAAgJgDgAgBgYQgEACgDACQgFAFgCAHIAiAAQABgHgEgFQgEgFgHAAIgGABg");
	this.shape_38.setTransform(267.6,-19.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AALAsIAFgrQACgIgBgFQgBgEgDgBQgCgDgFAAQgFAAgCACQgDACgDADQgDAFgCAJIgGArIgbAAIANhVIAZAAIgBAMIAAAAQAEgGAFgEQADgCAFgBIAJgBQAKAAAGADQAGADADAGQACAFAAAIQABAGgCAKIgGAug");
	this.shape_39.setTransform(256.6,-19.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgZArIgIgEIgGgGIATgSQADAFAEACQAFADAGAAQADAAADgCQAEgBABgDQAAgFgGgCIgOgEIgIgDIgGgEQgDgBgBgEQgCgFABgGQABgHAEgGQAEgFAGgEQAFgEAHgCQAFgBAHAAQAKAAAHACIAIAEIAGAFIgTARQgDgEgDgCQgEgCgFAAQgEAAgCACQgCACgBADQAAAEAFADIAPADIAIADIAGAEQADACACAEQABAFgBAGQgBAIgFAGQgEAFgGADQgGAEgIABIgMABQgLAAgIgCg");
	this.shape_40.setTransform(246.9,-19.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgVBBIAMhWIAZAAIgMBWgAgEglQgEgFABgGQABgHAFgEQADgFAGAAQAHAAAEAFQAEAEgBAHQgBAGgFAFQgFAEgHAAQgEAAgEgEg");
	this.shape_41.setTransform(240.4,-21.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag+A/IASh9IAqAAIANABIANACIANAFIAKAGQAFAEADAFQADAFACAGQACAHABAHIgBAOQgBAIgCAGQgDAHgEAGIgIALIgKAJQgGAEgGADIgNAFIgLADIgOABgAgfAlIAPAAQAKAAAGgCQAJgCAHgEQAHgFAEgHQAFgIABgJQACgJgDgHQgCgHgGgEQgFgFgIgCQgHgCgHAAIgRAAg");
	this.shape_42.setTransform(230.6,-21.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgjAsIAMhVIAZAAIgCAOQAGgIAGgEQAHgEAJAAIAJAAIgEAZQgGgCgGAAQgGAAgFADQgFABgEAFQgBADgBAGIgDAKIgEAkg");
	this.shape_43.setTransform(214,-19.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUAqQgIgDgGgGQgGgGgCgJIgCgIIABgKQABgFAFgMQAFgJAIgGQAHgGAJgDQAIgDAKAAQAJAAAHADQAIADAEAGQAFAGABAJQACAIgCAJIgBAIIg8AAQAAAIAFAEQAFAFAHAAQAFAAAFgDQAFgDAEgFIARAOIgIAHQgFAEgFACQgFACgGABIgIABQgKAAgJgDgAgBgYQgEACgDACQgFAFgCAHIAiAAQABgHgEgFQgEgFgHAAIgGABg");
	this.shape_44.setTransform(204.3,-19.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYArIgYhVIAdAAIAOA5IAAAAIAbg5IAbAAIgvBVg");
	this.shape_45.setTransform(194.3,-19.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgXAqQgJgDgFgGQgGgGgDgJIgBgIIAAgKQABgFAGgMQAEgJAIgGQAIgGAJgDQAJgDAIAAQAKAAAJADQAIADAGAGQAGAGACAJQACAMgBAFIgCAKIgEAIQgFAJgIAGQgHAGgJADQgKADgIAAQgKAAgIgDgAgEgTQgFACgDACQgDADgCAFQgCAEgBADIAAAJQABAEADACIAGAFQAEACAFAAQADAAAEgCQAEgCADgDQAEgCACgEQACgFAAgEQABgDgBgEQgBgFgCgDIgGgEQgEgCgFAAQgDAAgEACg");
	this.shape_46.setTransform(182.7,-19.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgRAqQgJgDgFgGQgGgGgDgJIgBgIIABgKQABgFAFgMQAFgJAHgGQAIgGAJgDQAHgDAKAAQAJAAAIACIAHAEIAGAFIgVATQgBgDgDgCQgEgCgEAAQgFAAgEACQgCACgDACQgEADgCAFQgCAEgBADIAAAJQACAEACACIAGAFQAEACADAAQAEAAAEgCQADgCADgDIAPATIgIAFIgIAEQgIACgIAAQgIAAgJgDg");
	this.shape_47.setTransform(173,-19.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgZArIgIgEIgGgGIATgSQADAFAEACQAFADAGAAQADAAADgCQAEgBABgDQAAgFgGgCIgOgEIgIgDIgGgEQgDgBgBgEQgCgFABgGQABgHAEgGQAEgFAGgEQAFgEAHgCQAFgBAHAAQAKAAAHACIAIAEIAGAFIgTARQgDgEgDgCQgEgCgFAAQgEAAgCACQgCACgBADQAAAEAFADIAPADIAIADIAGAEQADACACAEQABAFgBAGQgBAIgFAGQgEAFgGADQgGAEgIABIgMABQgLAAgIgCg");
	this.shape_48.setTransform(163.3,-19.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVBBIAMhWIAZAAIgMBWgAgEglQgEgFABgGQABgHAFgEQADgFAGAAQAHAAAEAFQAEAEgBAHQgBAGgFAFQgFAEgHAAQgEAAgEgEg");
	this.shape_49.setTransform(156.8,-21.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ag+A/IASh9IAqAAIANABIANACIANAFIAKAGQAFAEADAFQADAFACAGQACAHABAHIgBAOQgBAIgCAGQgDAHgEAGIgIALIgKAJQgGAEgGADIgNAFIgLADIgOABgAgfAlIAPAAQAKAAAGgCQAJgCAHgEQAHgFAEgHQAFgIABgJQACgJgDgHQgCgHgGgEQgFgFgIgCQgHgCgHAAIgRAAg");
	this.shape_50.setTransform(147,-21.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AACA4QgEgCgEgDQgFgDgBgFQgDgFAAgHIAAgoIgSAAIAAgVIASAAIAAgaIAZAAIAAAaIAYAAIAAAVIgYAAIAAAcQAAAIACADIAEAEIAHABQAIAAADgDIAAAXQgIACgLAAQgIAAgFgBg");
	this.shape_51.setTransform(129.3,-20.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAPAsIAAgrQAAgIgCgFQgCgEgCgBQgEgDgFAAQgDAAgDACQgDACgCADQgDAFAAAJIAAArIgbAAIAAhVIAaAAIAAAMIABAAQADgGAGgEQADgCACgBIAJgBQAKAAAHADQAGADAEAGQADAFABAIQACAGAAAKIAAAug");
	this.shape_52.setTransform(120.1,-19.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgOAqQgJgDgGgGQgHgGgEgJIgCgIIgBgKQAAgFADgMQAEgJAHgGQAGgGAJgDQAJgDAIAAQAKAAAHADQAIADAFAGQAGAGACAJQADAIAAAJIAAAIIg8AAQABAIAGAEQAFAFAGAAQAGAAAFgDQAFgDADgFIATAOIgHAHQgEAEgFACIgKADIgLABQgIAAgJgDgAARgIQAAgHgEgFQgFgFgHAAIgGABIgGAEQgFAFAAAHIAhAAIAAAAg");
	this.shape_53.setTransform(109.3,-19.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgVBBQgHgDgHgGQgFgGgDgIQgDgJAAgJQAAgJACgJQAEgHAEgGQAGgGAHgEQAIgEAIAAQAHAAAHADQAIACAEAHIABAAIAAg7IAbAAIAACGIgZAAIAAgLIAAAAQgEAFgHAEQgKAFgEAAQgKgBgIgDgAgHACIgHAFQgDADgBAEQgBAEAAAEQAAAGABAEQABAEADACIAHAGQAFABACAAQAGAAADgBIAHgGQADgCABgEQACgEAAgGQAAgEgCgEQgBgEgDgDIgHgFQgDgCgGAAQgCAAgFACg");
	this.shape_54.setTransform(97.8,-21.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMBBIAAhWIAZAAIAABWgAgJglQgFgFAAgGQAAgHAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAHQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_55.setTransform(89.5,-21.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgUArQgMgFgEgFIAQgSQAEAFAFACQAFADAGAAQADAAADgCQAEgBAAgDQAAgFgHgCIgOgEIgIgDIgIgEQgDgBgCgEQgCgFAAgGQAAgHADgGQADgFAGgEQAFgEAGgCQAHgBAFAAQAJAAAIACIAIAEIAHAFIgQARQgDgEgEgCQgEgCgFAAQgCAAgDACQgDACAAADQAAAEAHADIAOADIAIADIAIAEQADACACAEQACAFAAAGQAAAIgEAGQgDAFgGADQgGAEgHABIgNABQgKAAgIgCg");
	this.shape_56.setTransform(82.6,-19.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgOAqQgJgDgGgGQgHgGgEgJIgCgIIgBgKQAAgFADgMQAEgJAHgGQAGgGAJgDQAJgDAIAAQAKAAAHADQAIADAFAGQAGAGACAJQADAIAAAJIAAAIIg8AAQABAIAGAEQAFAFAGAAQAGAAAFgDQAFgDADgFIATAOIgHAHQgEAEgFACIgKADIgLABQgIAAgJgDgAARgIQAAgHgEgFQgFgFgHAAIgGABIgGAEQgFAFAAAHIAhAAIAAAAg");
	this.shape_57.setTransform(72.8,-19.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AARA/IgZgzIgNAAIAAAzIgcAAIAAh9IAxAAQAIAAAIACQAJACAHAEQAGAFAEAHIADAIIABAKQAAAHgCAGQgCAGgDAEQgDADgGADQgFADgHABIAhA2gAgVgJIAQAAQAJAAAEgCQAFgCACgDQABgDAAgFQAAgEgBgDQgCgDgEgCQgEgCgIAAIgSAAg");
	this.shape_58.setTransform(61.9,-21.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgVAsIgKgFQgFgEgCgFQgDgFAAgHQAAgFACgFQACgEADgDQADgCAMgFQAMgEAYAAQAAgHgFgFQgFgEgHAAQgFAAgGADQgFACgFAFIgOgOIAIgGIAKgFQAGgCANgBQALAAAIADQAIACAEAGQAFAGACAIQACAIAAALIAAArIgZAAIAAgLIgBAAIgFAGIgHAEQgFADgIAAQgHAAgFgBgAgPARQAAAFAFADQADACAFAAQAHAAAFgEIAFgFQACgDAAgEIAAgGIgHAAQgZABAAALg");
	this.shape_59.setTransform(44.2,-19.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVBBQgIgDgFgGQgGgGgDgIQgDgJAAgJQAAgJADgJQACgHAGgGQAFgGAHgEQAHgEAKAAQAHAAAHADQAHACAEAHIABAAIAAg7IAbAAIAACGIgZAAIAAgLIgBAAQgDAFgHAEQgKAFgEAAQgKgBgIgDgAgGACIgIAFQgCADgBAEQgCAEAAAEQAAAGACAEQABAEACACIAIAGQAEABADAAQAFAAAEgBIAHgGQACgCABgEQACgEAAgGQAAgEgCgEQgBgEgCgDIgHgFQgEgCgFAAQgDAAgEACg");
	this.shape_60.setTransform(33.1,-21.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMBBIAAhWIAZAAIAABWgAgJglQgFgFAAgGQAAgHAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAHQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
	this.shape_61.setTransform(24.9,-21.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgdAsIAAhVIAbAAIAAAOIAAAAQADgIAFgEQAHgEAIAAIAJAAIAAAZQgGgCgFAAQgIAAgEADQgFABgCAFQgBADAAAGIgBAKIAAAkg");
	this.shape_62.setTransform(18.8,-19.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgRAqQgJgDgHgGQgHgGgDgJIgDgIIgBgKQAAgFAEgMQADgJAHgGQAHgGAJgDQAIgDAJAAQAKAAAJADQAIADAHAGQAHAGADAJQAEAMAAAFIgBAKIgDAIQgDAJgHAGQgHAGgIADQgJADgKAAQgJAAgIgDgAgHgTIgIAEQgCADgBAFQgCAEAAADQAAAEACAFQABAEACACIAIAFQADACAEAAQAEAAAFgCIAHgFQACgCACgEQABgFAAgEQAAgDgBgEQgCgFgCgDIgHgEQgFgCgEAAQgEAAgDACg");
	this.shape_63.setTransform(8.8,-19.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgMBDIAAiGIAZAAIAACGg");
	this.shape_64.setTransform(0.5,-21.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgpA/IAAh9IBTAAIAAAaIg3AAIAAAaIAzAAIAAAYIgzAAIAAAxg");
	this.shape_65.setTransform(-7.3,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-30.6,398.7,73);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAYIAHguIAMAAIAAAIQADgFADgCQAEgCAFAAIAFAAIgCAOIgGgBIgHABQgDABgCADIAAAEIgCAFIgCAUg");
	this.shape.setTransform(139.8,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAYQgDgBgCgCIgDgEQgBgDAAgEQAAgDACgDIADgEQACAAAHgDQAHgCAMAAQABgEgDgDQgCgCgEAAQgCABgDABIgGAEIgHgIIALgGIAKgCQAGAAAEACQAEACACADQACADABAFIgBAJIgDAYIgOAAIABgGIgEADIgDADQgDABgFAAIgGgBgAgIAJQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQADAAADgDIADgCIACgEIAAgEIgEAAQgNABAAAGg");
	this.shape_1.setTransform(135,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAfIgFgCIgDgFQgBgDAAgEIAEgVIgKAAIACgMIAJAAIACgPIANAAIgCAPIANAAIgBAMIgNAAIgDAOQAAAEABADIABACIAEAAQAFAAABgBIgBAMQgFACgGgBIgFAAg");
	this.shape_2.setTransform(130.8,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAYQgDgBgCgCIgDgEQgBgDAAgEQAAgDACgDIADgEQACAAAHgDQAHgCAMAAQABgEgDgDQgCgCgEAAQgCABgDABIgGAEIgHgIIALgGIAKgCQAGAAAEACQAEACACADQACADABAFIgBAJIgDAYIgOAAIABgGIgEADIgDADQgDABgFAAIgGgBgAgIAJQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQADAAADgDIADgCIACgEIAAgEIgEAAQgNABAAAGg");
	this.shape_3.setTransform(126.1,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAYIgOgvIAQAAIAIAfIAOgfIAPAAIgaAvg");
	this.shape_4.setTransform(121.4,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAjIgEgPIgaAAIgIAPIgQAAIAmhFIANAAIAVBFgAAMAHIgGgUIgKAUIAQAAg");
	this.shape_5.setTransform(114.5,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAmIAFgkIgKAAIACgLIAKAAIABgIIACgIQABgEACgCQACgDACgBQAFgCAGAAIAIABIgCANIgFgBQgEAAgCACQgCABAAAEIgBAIIALAAIgCALIgLAAIgDAkg");
	this.shape_6.setTransform(107.3,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAYQgFgDgDgDQgDgDgCgFIgBgEIABgGIADgJQADgEAEgEIAJgFQAGgCADAAQAGAAAFACQAEACADADQAEAEABAEIABAJIgCAGIgCAEQgDAFgEADQgEADgFADQgFABgEAAQgGAAgEgBgAgCgJQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgBAEIAAAEIACAFIADACIAFABIADgBIAEgCIADgFIACgEIAAgEIgCgDQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgFgBIgDABg");
	this.shape_7.setTransform(102.1,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAkQgEgCgCgDQgDgDgBgFQgBgFABgFQAAgFADgFQACgDADgDQAEgEAEgCQAEgCAFAAQADAAAEABQAEACACADIAAAAIAFggIAPAAIgLBKIgOAAIABgHIAAAAQgCADgEACQgFADgDAAQgFAAgFgCgAgFABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABIgDADIgBAFIAAAFIACAEIADADIAFABIADgBIAEgDIADgEIACgFIAAgFIgCgDQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDgBIgFABg");
	this.shape_8.setTransform(93.7,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAlIAKhJIANAAIgKBJg");
	this.shape_9.setTransform(89.5,5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAYIAGguIAOAAIgBAIQADgFADgCQAEgCAFAAIAFAAIgCAOIgGgBIgHABQgDABgBADIgBAEIgCAFIgCAUg");
	this.shape_10.setTransform(86.5,7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAYQgFgDgDgDQgDgDgCgFIgBgEIABgGIADgJQADgEAEgEIAJgFQAGgCADAAQAGAAAFACQAEACADADQAEAEABAEIABAJIgCAGIgCAEQgDAFgEADQgEADgFADQgFABgEAAQgGAAgEgBgAgCgJQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgBAEIAAAEIACAFIADACIAFABIADgBIAEgCIADgFIACgEIAAgEIgCgDQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgFgBIgDABg");
	this.shape_11.setTransform(81.4,7.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAFAjIgGgvIgBAAIgXAvIgMAAIgMhFIARAAIAFAsIABAAIAUgsIANAAIAIAtIABAAIASgtIAQAAIgfBFg");
	this.shape_12.setTransform(74.3,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAYQgFgDgDgDQgEgDgBgFIgBgEIAAgGIAEgJQADgEAEgEIAJgFQAEgCAFAAQAFAAAEACQAEACADADQACAEABAEQABAFgBAEIAAAEIghAAQAAAFADACQACADAEAAQACAAADgCIAFgEIAKAIIgFADIgFADIgGADIgEAAQgGAAgEgBgAAAgMIgEACQgDADgBADIASAAQABgDgDgDQgCgDgEAAIgCABg");
	this.shape_13.setTransform(63.3,7.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAFAlIAEgYQABgFgBgDIgCgDIgEgBIgDABIgDACQgCADgBAGIgDAYIgPAAIAKhJIAOAAIgEAhIABAAQACgDABgCIAEgCIAGgBQAFAAAEACQADACABADQACADAAACIgBAJIgEAbg");
	this.shape_14.setTransform(57.8,5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAjIAIg3IgVAAIACgOIA3AAIgDAOIgUAAIgGA3g");
	this.shape_15.setTransform(53,6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgyAGIACgKIBiAAIgCAKg");
	this.shape_16.setTransform(44.8,7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAYQgDgBgCgCIgDgEQgBgDAAgEQAAgDACgDIADgEQACAAAHgDQAHgCAMAAQABgEgDgDQgCgCgEAAQgCABgDABIgGAEIgHgIIALgGIAKgCQAGAAAEACQAEACACADQACADABAFIgBAJIgDAYIgOAAIABgGIgEADIgDADQgDABgFAAIgGgBgAgIAJQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQADAAADgDIADgCIACgEIAAgEIgEAAQgNABAAAGg");
	this.shape_17.setTransform(37.3,7.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAYIAHguIAMAAIAAAIQADgFADgCQAEgCAFAAIAFAAIgCAOIgGgBIgHABQgDABgCADIAAAEIgCAFIgCAUg");
	this.shape_18.setTransform(33.2,7.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAYQgFgDgDgDQgDgDgCgFIgBgEIABgGIADgJQADgEAEgEIAJgFQAGgCADAAQAGAAAFACQAEACADADQAEAEABAEIABAJIgCAGIgCAEQgDAFgEADQgEADgFADQgFABgEAAQgGAAgEgBgAgCgJQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgBAEIAAAEIACAFIADACIAFABIADgBIAEgCIADgFIACgEIAAgEIgCgDQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgFgBIgDABg");
	this.shape_19.setTransform(28.1,7.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAkQgEgCgCgDQgDgDgBgFQgBgFABgFQAAgFADgFQACgDADgDQAEgEAEgCQAEgCAFAAQADAAAEABQAEACACADIAAAAIAFggIAPAAIgLBKIgOAAIABgHIAAAAQgCADgEACQgFADgDAAQgFAAgFgCgAgFABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABIgDADIgBAFIAAAFIACAEIADADIAFABIADgBIAEgDIADgEIACgFIAAgFIgCgDQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDgBIgFABg");
	this.shape_20.setTransform(22.3,5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAGAYIADgYQABgDgBgDIgCgDIgEgBIgDABIgDACQgCAEgBADIgDAYIgPAAIAGguIAPAAIgBAGIABAAIADgFIAFgBIAEgBQAGAAADACQAEABACADQABADAAAEIAAAJIgFAZg");
	this.shape_21.setTransform(16.3,7.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAYQgDgBgCgCIgDgEQgBgDAAgEQAAgDACgDIADgEQACAAAHgDQAHgCAMAAQABgEgDgDQgCgCgEAAQgCABgDABIgGAEIgHgIIALgGIAKgCQAGAAAEACQAEACACADQACADABAFIgBAJIgDAYIgOAAIABgGIgEADIgDADQgDABgFAAIgGgBgAgIAJQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQADAAADgDIADgCIACgEIAAgEIgEAAQgNABAAAGg");
	this.shape_22.setTransform(11,7.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAjIAKhFIAZAAIAKABIAIADQAEADABAEIABAFIAAAFIgCAHIgCAEQgCACgEADIgJADIgLACIgJAAIgEAbgAgHgEIAIAAQAFAAADgBIADgDQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgDgBgGgBIgGAAg");
	this.shape_23.setTransform(5.8,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.1,14);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBIQgGgGAAgIQAAgJAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAJQAAAIgGAGQgGAGgIAAQgHAAgGgGgAgPAZIAAhmIAfAAIAABmg");
	this.shape.setTransform(264,-25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASA2IAAg0QAAgLgCgGQgCgEgDgDQgEgCgGAAQgEAAgFACQgDACgCAEQgEAHAAAKIAAA1IghAAIAAhpIAgAAIAAAPIAAAAQAEgHAHgFIAHgEIAMgBQALAAAJAEQAHADAFAHQAEAHACAJQABAJAAALIAAA5g");
	this.shape_1.setTransform(253.1,-22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRA0QgLgFgIgHQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgGALgFQALgDAKAAQALAAAKADQAJAFAHAGQAGAIAEAKQADALAAALIAAAKIhKAAQACAKAGAFQAHAGAHgBQAIABAGgEQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNABQgKAAgLgDgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAIIApAAIAAAAg");
	this.shape_2.setTransform(240.8,-22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRA0QgLgFgIgHQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgGALgFQALgDAKAAQALAAAKADQAJAFAHAGQAGAIAEAKQADALAAALIAAAKIhKAAQACAKAGAFQAHAGAHgBQAIABAGgEQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNABQgKAAgLgDgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAIIApAAIAAAAg");
	this.shape_3.setTransform(228.4,-22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBSIgJgDQgIgFgFgGIAAAAIAAANIgfAAIAAikIAhAAIAABHIABAAQAFgHAKgEQAIgDAJAAQALAAAJAFQAJAEAHAIQAGAIADAIQAEALAAALQAAAMgEAKQgEAKgHAIQgHAHgJAEQgKAEgMAAIgJgCgAgLADQgFACgDADQgEAEgBAFQgCAFAAAGQAAAGACAFQABAFAEADQADAEAFACQAFACAGAAQAEAAAFgCQAFgCAEgEQADgDACgFQACgFAAgGQAAgGgCgFQgCgFgDgEQgEgDgFgCQgFgCgEAAQgGAAgFACg");
	this.shape_4.setTransform(215.8,-25.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AADBEQgGgCgFgDQgFgFgDgFQgDgHAAgIIAAgxIgVAAIAAgbIAVAAIAAgfIAfAAIAAAfIAdAAIAAAbIgdAAIAAAhQAAALACAEQACADADABQADABAFAAQAKAAAEgDIAAAcQgJADgOAAQgJAAgGgCg");
	this.shape_5.setTransform(197.9,-24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAfIAQg9IAeAAIgUA9g");
	this.shape_6.setTransform(190.6,-29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASA2IAAg0QAAgLgCgGQgCgEgDgDQgEgCgGAAQgEAAgEACQgEACgDAEQgDAHAAAKIAAA1IghAAIAAhpIAgAAIAAAPIABAAQADgHAHgFIAHgEIALgBQAMAAAJAEQAIADAEAHQAEAHABAJQACAJAAALIAAA5g");
	this.shape_7.setTransform(181.3,-22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRA0QgLgFgIgHQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgGALgFQALgDAKAAQALAAAKADQAJAFAHAGQAGAIAEAKQADALAAALIAAAKIhKAAQACAKAGAFQAHAGAHgBQAIABAGgEQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNABQgKAAgLgDgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAIIApAAIAAAAg");
	this.shape_8.setTransform(168.9,-22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPA1IgshpIAjAAIAZBHIABAAIAZhHIAhAAIgqBpg");
	this.shape_9.setTransform(156.8,-22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA2QgHgCgFgFQgGgEgDgGQgDgGAAgJQAAgGACgGQACgEAEgFQAEgDAOgGQAPgFAdAAQAAgIgGgGQgGgFgIAAQgHAAgGADQgHAEgFAFIgSgSIAKgHIAMgGQAIgCAPgBQAOAAAKADQAJAEAGAGQAFAIADAKQACAJAAAOIAAA1IgfAAIAAgOIgGAIIgJAFQgGADgLAAQgHAAgHgBgAgSAVQAAAGAFADQAEADAGAAQAJAAAHgFQAEgDABgDQACgEAAgFIAAgHIgIAAQgeABAAAOg");
	this.shape_10.setTransform(144.9,-22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASBTIAAg1QAAgNgCgFQgCgFgDgCQgEgDgGAAQgEAAgFADQgDACgCAEQgEAGAAAMIAAA2IghAAIAAilIAhAAIAABKIAAAAQADgHAHgEIAHgEQAFgCAHAAQAMAAAIAEQAHAEAFAHQAEAGACAIQABAIAAAMIAAA7g");
	this.shape_11.setTransform(133.1,-25.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADBFQgGgCgFgFQgFgEgDgFQgDgHAAgIIAAgxIgVAAIAAgaIAVAAIAAggIAfAAIAAAgIAdAAIAAAaIgdAAIAAAiQAAAJACAFQACADADABQADABAGABQAJAAAEgEIAAAcQgJADgOAAQgJAAgGgBg");
	this.shape_12.setTransform(202.5,-48.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZA0QgOgFgFgGIAUgWQAEAFAGADQAGADAHABQAEAAAEgCQAFgCAAgEQAAgFgIgDIgRgFIgLgDIgJgGQgEgBgCgGQgCgFAAgHQAAgJADgIQAEgGAGgFQAHgFAIgCQAIgBAHAAQALAAAKACIAJAFQAFACAEAEIgUAVQgEgFgFgCQgEgCgGAAQgEAAgCACQgFACAAAFQAAAFAJACIARAEIAKAEIAJAFQAFADABAEQADAGAAAHQAAAKgEAHQgEAHgIAFQgGADgKACQgIABgHAAQgMAAgLgDg");
	this.shape_13.setTransform(193.4,-46.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAyQgIgDgEgHQgFgHgBgJQgCgIAAgMIAAg5IAhAAIAAA0QAAALADAGQABAEADADQAFACAFAAQAFAAADgCQAFgCABgEQAEgGAAgLIAAg1IAhAAIAABpIgfAAIAAgPIgBAAQgEAHgIAFQgJAFgJAAQgMAAgHgEg");
	this.shape_14.setTransform(182.2,-46.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbBoIACgdQAEABAEAAQAMAAAAgVIAAhrIAfAAIAABxQAAAKgCAIQgCAJgFAFQgEAGgIADQgGAEgLAAQgKAAgFgCgAgChIQgGgGAAgIQAAgIAGgFQADgGAIAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIAAQgIAAgDgFg");
	this.shape_15.setTransform(172.3,-46.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAyQgIgDgFgHQgDgHgCgJQgCgIAAgMIAAg5IAhAAIAAA0QAAALACAGQACAEAEADQAEACAFAAQAFAAADgCQAFgCACgEQADgGAAgLIAAg1IAhAAIAABpIggAAIAAgPIAAAAQgEAHgIAFQgJAFgIAAQgNAAgHgEg");
	this.shape_16.setTransform(158.2,-46.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWA0QgLgEgHgHQgJgIgEgKIgEgLIgBgMQAAgHAFgOQAEgLAJgHQAHgHALgFQAMgDAKAAQAMAAALADQAKAFAIAHQAJAHAFALQAEAOAAAHIgBAMIgDALQgFAKgJAIQgIAHgKAEQgLADgMAAQgKAAgMgDgAgKgYQgFACgDAEQgDAEgCAFQgCAFAAAEQAAAGACAEQACAGADADQADAEAFACQAGABAEAAQAFAAAGgBQAEgCAEgEQADgDACgGQACgEAAgGQAAgEgCgFQgCgFgDgEQgEgEgEgCQgGgCgFAAQgEAAgGACg");
	this.shape_17.setTransform(145.4,-46.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BLIAEgbQAIADAIAAQAKABAFgFQADgDADgLIADgFIgvhqIAkAAIAZBGIAYhGIAiAAIgwB6IgGAPQgEAHgCAEQgFAEgHADQgIACgMAAQgNAAgLgEg");
	this.shape_18.setTransform(132.9,-44);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_19.setTransform(123.8,-43.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_20.setTransform(117.5,-43.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_21.setTransform(111.3,-43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106,-60,172,50);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7AOQgHgGABgIQgBgHAHgGQAFgGAJAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgJAAgFgGgAgNAOQgGgGABgIQgBgHAGgGQAGgGAHAAQAIAAAGAGQAGAGgBAHQABAIgGAGQgGAGgIAAQgHAAgGgGgAhWAOQgGgGAAgIQAAgHAGgGQAGgGAIAAQAJAAAFAGQAHAGgBAHQABAIgHAGQgFAGgJAAQgIAAgGgGg");
	this.shape.setTransform(253.4,-38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4BMIAEgbQAIADAIAAQAKgBAEgEQADgDAEgKIADgHIgvhqIAkAAIAZBHIAZhHIAhAAIgwB7IgHAPQgDAHgCAEQgGAFgHACQgHACgMAAQgMAAgMgDg");
	this.shape_1.setTransform(236.5,-39);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_2.setTransform(227.8,-44.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAzQgLgDgIgIQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgGALgEQALgEAKgBQALABAKAEQAJAEAHAGQAGAIAEAKQADALAAALIAAAKIhKAAQACAKAGAFQAHAFAHAAQAIAAAGgDQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNACQgKAAgLgFgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAIIApAAIAAAAg");
	this.shape_3.setTransform(218.9,-41.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADBEQgGgCgFgDQgFgFgDgGQgDgFAAgJIAAgxIgVAAIAAgbIAVAAIAAgfIAfAAIAAAfIAdAAIAAAbIgdAAIAAAhQAAALACAEQACACADACQADABAFAAQAKAAAEgDIAAAcQgJADgOAAQgJAAgGgCg");
	this.shape_4.setTransform(208.2,-43.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaA2QgHgCgFgFQgGgEgDgGQgDgGAAgJQAAgGACgFQACgFAEgFQAEgDAOgGQAPgFAdAAQAAgJgGgFQgGgFgIAAQgHAAgGADQgHAEgFAFIgSgSIAKgHIAMgFQAIgDAPgCQAOAAAKAEQAJAEAGAGQAFAIADAKQACAKAAANIAAA1IgfAAIAAgOIgGAIIgJAFQgGADgLABQgHAAgHgCgAgSAVQAAAGAFADQAEADAGAAQAJAAAHgFQAEgDABgDQACgEAAgFIAAgHIgIAAQgeABAAAOg");
	this.shape_5.setTransform(198.1,-41.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_6.setTransform(189.8,-44.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAzQgLgDgIgIQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgGALgEQALgEAKgBQALABAKAEQAJAEAHAGQAGAIAEAKQADALAAALIAAAKIhKAAQACAKAGAFQAHAFAHAAQAIAAAGgDQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNACQgKAAgLgFgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAIIApAAIAAAAg");
	this.shape_7.setTransform(174.6,-41.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIAhAAIAAARIAAAAQAEgKAHgEQAIgFAKAAIALABIAAAeQgIgCgGAAQgJAAgGACQgFADgDAFQgBAEgBAHIgBANIAAAsg");
	this.shape_8.setTransform(164.5,-41.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAzQgLgDgIgIQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgGALgEQALgEAKgBQALABAKAEQAJAEAHAGQAGAIAEAKQADALAAALIAAAKIhKAAQACAKAGAFQAHAFAHAAQAIAAAGgDQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNACQgKAAgLgFgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAIIApAAIAAAAg");
	this.shape_9.setTransform(153.6,-41.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASBTIAAg1QAAgNgCgFQgCgFgDgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAGAAAMIAAA2IghAAIAAilIAhAAIAABKIABAAQACgHAHgEIAIgEQAEgCAGAAQAMAAAJAEQAIAEAEAHQAEAGABAIQACAIAAAMIAAA7g");
	this.shape_10.setTransform(141.2,-44.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASA2IAAg0QAAgLgCgGQgCgEgDgDQgEgCgGAAQgEAAgFACQgDACgCAEQgEAHAAAKIAAA1IghAAIAAhpIAgAAIAAAPIAAAAQAEgHAHgFIAHgEIAMgBQALAAAJAEQAHADAFAHQAEAHACAJQABAJAAALIAAA5g");
	this.shape_11.setTransform(122.6,-41.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAzQgLgDgIgIQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgGALgEQALgEAKgBQALABAKAEQAJAEAHAGQAGAIAEAKQADALAAALIAAAKIhKAAQACAKAGAFQAHAFAHAAQAIAAAGgDQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNACQgKAAgLgFgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAIIApAAIAAAAg");
	this.shape_12.setTransform(110.3,-41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAzQgLgDgIgIQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgGALgEQALgEAKgBQALABAKAEQAJAEAHAGQAGAIAEAKQADALAAALIAAAKIhKAAQACAKAGAFQAHAFAHAAQAIAAAGgDQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNACQgKAAgLgFgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAIIApAAIAAAAg");
	this.shape_13.setTransform(97.9,-41.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBSIgJgDQgIgFgFgGIAAAAIAAANIgfAAIAAikIAhAAIAABHIABAAQAFgIAKgDQAIgDAJAAQALAAAJAEQAJAFAHAJQAGAHADAJQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgJAEQgKAEgMAAIgJgCgAgLADQgFACgDADQgEAEgBAFQgCAFAAAGQAAAGACAFQABAFAEADQADAEAFACQAFACAGAAQAEAAAFgCQAFgCAEgEQADgDACgFQACgFAAgGQAAgGgCgFQgCgFgDgEQgEgDgFgCQgFgCgEAAQgGAAgFACg");
	this.shape_14.setTransform(85.3,-44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AADBFQgGgDgFgDQgFgEgDgGQgDgHAAgIIAAgxIgVAAIAAgaIAVAAIAAggIAfAAIAAAgIAdAAIAAAaIgdAAIAAAhQAAAKACAFQACADADABQADACAFAAQAKAAAEgEIAAAcQgJADgOAAQgJAAgGgBg");
	this.shape_15.setTransform(213.2,-67.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAfIAQg9IAeAAIgUA9g");
	this.shape_16.setTransform(205.9,-72.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASA2IAAg0QAAgLgCgGQgCgEgDgDQgEgCgGAAQgEAAgEACQgEACgDAEQgDAHAAAKIAAA1IghAAIAAhpIAgAAIAAAPIABAAQADgHAHgFIAHgEIALgBQAMAAAJAEQAIADAEAHQAEAHABAJQACAJAAALIAAA5g");
	this.shape_17.setTransform(196.6,-65.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRA0QgLgFgIgGQgIgIgFgKIgDgLIgBgMQAAgHAEgPQAFgKAIgIQAIgGALgFQALgDAKAAQALAAAKADQAJAFAHAGQAGAIAEAKQADALAAALIAAAKIhKAAQACAJAGAGQAHAGAHgBQAIAAAGgDQAGgEAEgGIAXASIgJAJIgLAGQgGADgGABIgNABQgKAAgLgDgAAVgKQAAgJgFgGQgGgGgJAAQgDAAgFACQgEABgDADQgGAGAAAJIApAAIAAAAg");
	this.shape_18.setTransform(184.2,-65.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPA1IgshpIAjAAIAZBGIABAAIAZhGIAhAAIgqBpg");
	this.shape_19.setTransform(172.1,-65.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaA1QgHgCgFgEQgGgEgDgGQgDgHAAgHQAAgHACgGQACgEAEgFQAEgDAOgGQAPgFAdAAQAAgIgGgGQgGgFgIAAQgHAAgGAEQgHACgFAHIgSgSIAKgIIAMgGQAIgCAPgBQAOgBAKAEQAJAEAGAGQAFAIADAKQACAJAAAOIAAA1IgfAAIAAgOIgGAIIgJAFQgGAEgLgBQgHAAgHgCgAgSAVQAAAGAFADQAEADAGAAQAJAAAHgFQAEgDABgDQACgEAAgFIAAgHIgIAAQgeABAAAOg");
	this.shape_20.setTransform(160.2,-65.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASBTIAAg1QAAgNgCgFQgCgFgDgCQgEgDgGAAQgEAAgFADQgDACgCAEQgEAGAAAMIAAA2IghAAIAAilIAhAAIAABKIAAAAQADgHAHgEIAHgEQAFgCAHAAQAMAAAIAEQAHAEAFAHQAEAGACAIQABAIAAAMIAAA7g");
	this.shape_21.setTransform(148.4,-68.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgfAyQgHgDgEgHQgFgHgCgJQgBgIAAgMIAAg5IAhAAIAAA0QAAALADAGQABAEADADQAFACAFAAQAEAAAFgCQADgCACgEQAEgGAAgLIAAg1IAhAAIAABpIgfAAIAAgPIgBAAQgEAHgHAFQgKAFgJAAQgLAAgJgEg");
	this.shape_22.setTransform(129.8,-65.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWA0QgKgFgJgGQgHgIgFgKIgDgLIgCgMQAAgHAFgPQAFgKAHgIQAJgGAKgFQALgDALAAQAMAAALADQAKAFAJAGQAIAIAEAKQAFAPAAAHIgBAMIgEALQgEAKgIAIQgJAGgKAFQgLADgMAAQgLAAgLgDgAgJgYQgFACgEAEQgDAEgCAFQgCAFAAAEQAAAFACAFQACAFADAEQAEAEAFACQAFABAEAAQAFAAAFgBQAFgCAEgEQADgEACgFQACgFAAgFQAAgEgCgFQgCgFgDgEQgEgEgFgCQgFgCgFAAQgEAAgFACg");
	this.shape_23.setTransform(117,-65.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag4BMIAEgbQAIACAHAAQALABAFgFQACgDAFgLIACgFIgvhqIAkAAIAaBGIAYhGIAhAAIgwB6IgHAPQgDAHgDAEQgEAEgIADQgHACgLAAQgNAAgMgDg");
	this.shape_24.setTransform(104.5,-63);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSBUIAAhRIgWAAIAAgYIAWAAIAAgTQAAgJABgIQACgHAEgGQAFgGAGgDQAJgEANAAQALAAAIACIgCAcQgGgCgEgBQgJABgDADQgEAEAAAKIAAARIAYAAIAAAYIgYAAIAABRg");
	this.shape_25.setTransform(88.5,-68.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPBNIAAiaIAgAAIAACag");
	this.shape_26.setTransform(81.3,-68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76,-79,217,50);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAYIgIgFIAJgKIAEADIAGACIADgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgDgEgCIgGgCIgFgBIgEgCIgDgDIgBgFQAAgEACgEIAEgFQADgCAEgBIAFgBQAGAAAEABIAEACIAEAEIgJAJIgEgEIgFgBIgBABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAACADABIAIACIAEACIAEABIADADIABAGQAAAFgCADQgCADgDACIgHACIgGABIgLgBg");
	this.shape.setTransform(139.7,163.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAlIgPgYIAAAYIgPAAIAAhJIAPAAIAAAsIAPgRIASAAIgTAUIAUAag");
	this.shape_1.setTransform(135.1,162.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAZIAAgvIAQAAIAAAHQAAgEADgCQADgDAFAAIAGABIAAAOIgHgBIgHABQgCABgBACIAAAGIAAAEIAAAVg");
	this.shape_2.setTransform(130.5,163.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAXQgFgCgDgDQgFgDgCgFIgBgFIAAgFIABgJQACgFAFgDQADgDAFgCQAFgCAEAAQAFAAAFACQAFACADADQAFADACAFIACAJIgBAFIgBAFQgCAFgFADQgDADgFACQgFACgFAAQgEAAgFgCgAgEgKQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgCADIgBAEIABAEIACAFIADACIAEABIAEgBIAFgCIABgFIABgEIgBgEIgBgDIgFgDIgEgBIgEABg");
	this.shape_3.setTransform(125.5,163.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJAYIgJgfIgIAfIgPAAIgSgvIAQAAIAKAdIAJgdIAOAAIAJAdIAJgdIAQAAIgSAvg");
	this.shape_4.setTransform(118.5,163.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAXQgFgCgEgDQgDgDgCgFIgCgFIAAgFIACgJQACgFADgDIAJgFQAFgCAEAAQAFAAAEACIAHAFQADADACAFQABAFAAAEIAAAEIggAAQAAAFADACQAEADACAAQADAAADgCIAFgEIAKAHIgEAFIgFACIgGACIgFABQgEAAgFgCgAAJgEQAAgDgCgEQgDgCgEAAIgCABIgDACQgDACAAAEIARAAIAAAAg");
	this.shape_5.setTransform(111.8,163.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAZIAAgvIAPAAIAAAHQAAgEADgCQAEgDAEAAIAGABIAAAOIgHgBIgHABQgCABgBACIAAAGIAAAEIAAAVg");
	this.shape_6.setTransform(107.4,163.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAkIAAgvIANAAIAAAvgAgFgUQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDADgDAAQgCAAgDgDg");
	this.shape_7.setTransform(104.1,162.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAmIAAglIgJAAIAAgKIAJAAIAAgIIABgIQABgEACgCQACgDACgBQAEgCAFAAIAJABIgBANIgFgBQgDAAgBABQgCACAAAEIAAAIIALAAIAAAKIgLAAIAAAlg");
	this.shape_8.setTransform(101.3,162.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAZIAAgvIAQAAIAAAHQAAgEADgCQADgDAFAAIAGABIAAAOIgHgBIgGABQgDABgBACIAAAGIAAAEIAAAVg");
	this.shape_9.setTransform(95.1,163.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAXQgFgCgEgDQgDgDgCgFIgCgFIAAgFIACgJQACgFADgDIAJgFQAFgCAEAAQAFAAAEACIAHAFQADADACAFQABAFAAAEIAAAEIggAAQAAAFADACQAEADACAAQADAAADgCIAFgEIAKAHIgEAFIgFACIgGACIgFABQgEAAgFgCgAAJgEQAAgDgCgEQgDgCgEAAIgCABIgDACQgDACAAAEIARAAIAAAAg");
	this.shape_10.setTransform(90.2,163.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AABAfIgDgCIgFgFQgBgDAAgEIAAgVIgJAAIAAgMIAJAAIAAgOIANAAIAAAOIANAAIAAAMIgNAAIAAAOQAAAEACACIACADIADAAQAFAAABgCIAAANQgDABgHABIgHgBg");
	this.shape_11.setTransform(85.5,162.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAmIAAglIgKAAIAAgKIAKAAIAAgIIAAgIQABgEACgCQACgDACgBQADgCAHAAIAJABIgBANIgGgBQgDAAgBABQgDACAAAEIAAAIIAMAAIAAAKIgMAAIAAAlg");
	this.shape_12.setTransform(82.1,162.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAjIgGgPIgaAAIgGAPIgQAAIAehFIALAAIAfBFgAAIAHIgIgUIgHAUIAPAAg");
	this.shape_13.setTransform(76.7,162.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAZIAAgvIAPAAIAAAHQABgEADgCQADgDAGAAIAEABIAAAOIgGgBIgGABQgDABgBACIgBAGIAAAEIAAAVg");
	this.shape_14.setTransform(68.7,163.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAXQgFgCgEgDQgDgDgCgFIgCgFIAAgFIACgJQACgFADgDIAJgFQAFgCAEAAQAFAAAEACIAHAFQADADACAFQABAFAAAEIAAAEIggAAQAAAFADACQAEADACAAQADAAADgCIAFgEIAKAHIgEAFIgFACIgGACIgFABQgEAAgFgCgAAJgEQAAgDgCgEQgDgCgEAAIgCABIgDACQgDACAAAEIARAAIAAAAg");
	this.shape_15.setTransform(63.9,163.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAYIgUgvIAQAAIAKAfIABAAIALgfIAPAAIgTAvg");
	this.shape_16.setTransform(58.5,163.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAjIAAhFIAuAAIAAAOIgfAAIAAAOIAdAAIAAAMIgdAAIAAAPIAgAAIAAAOg");
	this.shape_17.setTransform(52.9,162.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAiIACgMIAHABQAFAAACgCIADgGIABgDIgVgvIAQAAIAKAgIALggIAQAAIgWA3IgDAGIgCAGIgFADIgJABQgGAAgFgCg");
	this.shape_18.setTransform(44.5,164.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGAlIAAhJIANAAIAABJg");
	this.shape_19.setTransform(40.6,162.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAkIAAgvIANAAIAAAvgAgFgUQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDADgDAAQgCAAgDgDg");
	this.shape_20.setTransform(38.3,162.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAkIAAhGIAOAAIAAAHQACgDAEgDIAEgBIADgBQAGAAAEACQAEACADADIAGAIQABAFAAAGQAAAFgBAEQgCADgDAEQgDADgEACQgEACgFAAIgHgBQgEgCgCgDIgBAAIAAAcgAgEgVQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCADIgBAGIABAEIACAFIAEAAIAEABIAEgBIAEAAIACgFIABgEIgBgGIgCgDIgEgDIgEgBIgEABg");
	this.shape_21.setTransform(34.2,164.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAkIAAhGIAOAAIAAAHQACgDAEgDIAEgBIADgBQAFAAAFACQAFACACADIAGAIQABAFAAAGQAAAFgBAEQgCADgDAEQgDADgEACQgEACgFAAIgHgBQgEgCgCgDIgBAAIAAAcgAgEgVQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCADIgBAGIABAEIACAFIAEAAIAEABIAEgBIAEAAIACgFIABgEIgBgGIgCgDIgEgDIgEgBIgEABg");
	this.shape_22.setTransform(28.2,164.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLAYQgDgBgDgCQgCgBgBgDQgCgDAAgEIABgGIADgDQACgBAGgDQAHgCAMAAQAAgEgDgDQgDgCgDAAQgCABgDABIgGAEIgIgIIAFgEIAFgCIAKgCQAGAAAEACQAFABACAEQADADABAEIABAKIAAAYIgOAAIAAgGIAAAAIgDADIgEACQgCACgFAAIgGgBgAgHAKQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQACACADAAQACAAAEgDIACgCIABgEIAAgDIgEAAQgMAAAAAHg");
	this.shape_23.setTransform(22.4,163.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAPAjIAAgfIgcAAIAAAfIgQAAIAAhFIAQAAIAAAaIAcAAIAAgaIAPAAIAABFg");
	this.shape_24.setTransform(16.2,162.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLAYIgIgFIAJgKIAEADIAGACIADgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgCgEgBIgGgDIgFgBIgEgCIgDgDIgBgFQAAgFACgDIAEgFQADgCAEgBIAFgBQAGAAAEABIAEACIAEAEIgJAJIgEgEIgFgBIgBABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAACADABIAIACIAEACIAEABIADADIABAGQAAAFgCADQgCADgDACIgHADIgGAAIgLgBg");
	this.shape_25.setTransform(140.7,164.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAGAlIgPgYIAAAYIgPAAIAAhJIAPAAIAAAsIAPgRIASAAIgTAUIAUAag");
	this.shape_26.setTransform(136.1,163.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAYIAAguIAQAAIAAAHQAAgEADgCQADgDAFAAIAFABIAAAOIgGgBIgGABQgDABgBACIAAAGIAAAEIAAAUg");
	this.shape_27.setTransform(131.5,164.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJAXQgFgBgDgEQgEgDgDgFIgBgFIgBgFIACgJQADgFAEgDQADgDAFgCQAFgCAEAAQAFAAAFACQAFACADADQAEADADAFIABAJIAAAFIgBAFQgDAFgEADQgDAEgFABQgFACgFAAQgEAAgFgCgAgEgJQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgCADIgBAEIABAEIACAFIADACIAEABIAFgBIADgCIACgFIABgEIgBgEIgCgDIgDgCIgFgCIgEACg");
	this.shape_28.setTransform(126.5,164.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAJAYIgJgfIgIAfIgPAAIgSgvIAQAAIAKAdIAJgdIAOAAIAJAdIAJgdIAQAAIgSAvg");
	this.shape_29.setTransform(119.5,164.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAXQgFgBgEgEQgDgDgCgFIgCgFIAAgFIACgJQACgFADgDIAJgFQAFgCAEAAQAFAAAEACIAHAFQADADACAFQABAFAAAEIAAAEIggAAQAAAFADACQAEADACAAQADAAADgCIAFgEIAKAIIgEAEIgFACIgGADIgFAAQgEAAgFgCgAAJgEQAAgEgCgDQgDgCgEAAIgCABIgDACQgDACAAAEIARAAIAAAAg");
	this.shape_30.setTransform(112.8,164.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgPAYIAAguIAPAAIAAAHQAAgEADgCQAEgDAEAAIAGABIAAAOIgHgBIgHABQgCABgBACIAAAGIAAAEIAAAUg");
	this.shape_31.setTransform(108.4,164.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAkIAAgvIANAAIAAAvgAgEgUQgDgDAAgDQAAgEADgCQACgDACAAQADAAADADQACACAAAEQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_32.setTransform(105.1,163.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIAmIAAglIgKAAIAAgKIAKAAIAAgIIABgIQABgEACgCQACgDACgBQADgCAGAAIAJABIgBANIgEgBQgEAAgCACQgBABAAAEIAAAIIAKAAIAAAKIgKAAIAAAlg");
	this.shape_33.setTransform(102.3,163.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAYIAAguIAPAAIAAAHQABgEADgCQADgDAGAAIAEABIAAAOIgGgBIgGABQgDABgBACIgBAGIAAAEIAAAUg");
	this.shape_34.setTransform(96.1,164.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHAXQgFgBgEgEQgDgDgCgFIgCgFIAAgFIACgJQACgFADgDIAJgFQAFgCAEAAQAFAAAEACIAHAFQADADACAFQABAFAAAEIAAAEIggAAQAAAFADACQAEADACAAQADAAADgCIAFgEIAKAIIgEAEIgFACIgGADIgFAAQgEAAgFgCgAAJgEQAAgEgCgDQgDgCgEAAIgCABIgDACQgDACAAAEIARAAIAAAAg");
	this.shape_35.setTransform(91.2,164.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AABAfIgDgCIgFgFQgBgDAAgEIAAgVIgKAAIAAgMIAKAAIAAgPIANAAIAAAPIANAAIAAAMIgNAAIAAAOQAAAFACABIABADIAFAAQAEAAABgBIAAAMQgEACgGgBIgHAAg");
	this.shape_36.setTransform(86.5,163.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHAmIAAglIgKAAIAAgKIAKAAIAAgIIAAgIQABgEACgCQACgDACgBQADgCAHAAIAJABIgBANIgGgBQgDAAgBACQgCABgBAEIAAAIIAMAAIAAAKIgMAAIAAAlg");
	this.shape_37.setTransform(83.1,163.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATAjIgGgPIgaAAIgFAPIgRAAIAehFIALAAIAfBFgAAIAHIgIgUIgHAUIAPAAg");
	this.shape_38.setTransform(77.7,163.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgPAYIAAguIAOAAIAAAHQABgEADgCQAEgDAFAAIAEABIAAAOIgGgBIgGABQgDABgBACIgBAGIAAAEIAAAUg");
	this.shape_39.setTransform(69.7,164.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHAXQgFgBgEgEQgDgDgCgFIgCgFIAAgFIACgJQACgFADgDIAJgFQAFgCAEAAQAFAAAEACIAHAFQADADACAFQABAFAAAEIAAAEIggAAQAAAFADACQAEADACAAQADAAADgCIAFgEIAKAIIgEAEIgFACIgGADIgFAAQgEAAgFgCgAAJgEQAAgEgCgDQgDgCgEAAIgCABIgDACQgDACAAAEIARAAIAAAAg");
	this.shape_40.setTransform(64.9,164.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgGAYIgUgvIAQAAIAKAfIABAAIALgfIAPAAIgTAvg");
	this.shape_41.setTransform(59.5,164.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAjIAAhFIAuAAIAAAOIgfAAIAAAOIAdAAIAAAMIgdAAIAAAPIAgAAIAAAOg");
	this.shape_42.setTransform(53.9,163.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZAiIACgMIAHABQAEAAADgCIADgGIABgDIgVgvIAQAAIAKAgIALggIAQAAIgWA3IgDAGIgCAGIgFADIgJABQgGAAgFgCg");
	this.shape_43.setTransform(45.5,165.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGAlIAAhJIANAAIAABJg");
	this.shape_44.setTransform(41.6,163.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGAkIAAgvIANAAIAAAvgAgFgUQgCgDAAgDQAAgEACgCQADgDACAAQADAAADADQACACAAAEQAAADgCADQgDADgDAAQgCAAgDgDg");
	this.shape_45.setTransform(39.3,163.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAkIAAhGIAOAAIAAAHQACgDAEgDIAEgBIADgBQAFAAAFACQAEACADADIAGAIQABAFAAAGQAAAEgBAFQgCACgDAFQgDADgEACQgEACgFAAIgHgBQgEgCgCgDIgBAAIAAAcgAgEgUQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCADIgBAGIABAEIACAFIAEAAIAEABIAEgBIAEAAIACgFIABgEIgBgGIgCgDIgEgCIgEgCIgEACg");
	this.shape_46.setTransform(35.2,165.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAkIAAhGIAOAAIAAAHQACgDAEgDIAEgBIADgBQAFAAAFACQAEACADADIAGAIQABAFAAAGQAAAEgBAFQgCACgDAFQgDADgEACQgEACgFAAIgHgBQgEgCgCgDIgBAAIAAAcgAgEgUQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCADIgBAGIABAEIACAFIAEAAIAEABIAEgBIAEAAIACgFIABgEIgBgGIgCgDIgEgCIgEgCIgEACg");
	this.shape_47.setTransform(29.2,165.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgLAYQgDgBgDgCQgCgCgBgCQgCgEAAgDIABgGIADgDQACgBAGgDQAHgCAMAAQAAgEgDgDQgDgCgDAAQgCABgDABIgGAEIgIgIIAFgEIAFgCIAKgCQAGAAAEACQAFABACAEQADADABAFIABAJIAAAYIgOAAIAAgGIAAAAIgDADIgEACQgCACgFAAIgGgBgAgHAKQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQACACADAAQACAAAEgDIACgCIABgEIAAgEIgEAAQgMABAAAHg");
	this.shape_48.setTransform(23.4,164.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAPAjIAAgfIgcAAIAAAfIgQAAIAAhFIAQAAIAAAbIAcAAIAAgbIAPAAIAABFg");
	this.shape_49.setTransform(17.2,163.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// Layer 1
	this.instance = new lib.mk_hea();
	this.instance.parent = this;
	this.instance.setTransform(0,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-90,728,300);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(114.1,201.4,1,1,0,0,0,14.3,7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(596.1,199.4,1,1,0,0,0,71.5,7);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.pandora_bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(82,27,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,27,592.6,284.8);


// stage content:
(lib.rl_FLRES1862219_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		richloadName = window.document.title;
		myTimeline = this;
		
		
		
		var i = 0;
		var int = setInterval(function(){
			if(i++ > 599) clearInterval(int);
			//IE polyfill
			var functionName = myFT.callbacks.richloadready[0].toString().match(/^function\s*([^\s(]+)/)[1];
			if(functionName == 'onRichloadReady') myFT.callbacks.richloadready[0].name = 'onRichloadReady';
			try {
				if(myFT.callbacks.richloadready[0].name == 'onRichloadReady'){
					myFT.on("startrichload", function (fileRef) {
						//Get the directory name of the Richload
						var calledName = fileRef.split("/")[0];
						//If argument matches the name of this file, start the animation
						if (calledName == richloadName) {
							myTimeline.play();
						}
					});
					myFT.dispatch("richloadready", richloadName);
					clearInterval(int);
				}
			} catch (err) {}
		}, 100);
	}
	this.frame_280 = function() {
		try {
			//Dispatch the end event for this file
			myFT.dispatch("endrichload", richloadName);
		} catch (err) {}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(280).call(this.frame_280).wait(1));

	// Layer 3
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,149.5,25);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,105,1,1,0,0,0,149.5,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.6,119.5,1,1,0,0,0,124.1,77);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({alpha:0},10).to({_off:true},1).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(64).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(268).to({_off:false},0).to({alpha:1},12).wait(1));

	// Layer 6
	this.instance_3 = new lib.Symbol7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({alpha:0.73},11,cjs.Ease.get(1)).wait(64).to({alpha:0},9).wait(75).to({alpha:0.609},12,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(57,124,1,1,0,0,0,150,248);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(184).to({_off:false},0).to({alpha:1},9).wait(47).to({y:226},40,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,218,1,1,0,0,0,150,248);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({y:160},29,cjs.Ease.get(1)).wait(203));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-75,728,300);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;