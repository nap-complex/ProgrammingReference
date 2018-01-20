(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/rl_FLRES_18_62219_160x600_atlas_.png", id:"rl_FLRES_18_62219_160x600_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"rl_FLRES_18_62219_160x600_atlas_", frames: [[0,0,160,800],[162,0,160,800]]}
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
	this.spriteSheet = ss["rl_FLRES_18_62219_160x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pandora_bg = function() {
	this.spriteSheet = ss["rl_FLRES_18_62219_160x600_atlas_"];
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
	this.shape.graphics.f("#000000").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVArIgVgfIgWAfIgZAAIAigtIgdgoIAaAAIAQAaIASgaIAZAAIgeAoIAjAtg");
	this.shape.setTransform(120.1,232.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSArQgGgBgEgEQgFgDgDgFQgCgFAAgGQAAgFABgEIAFgIQADgCAKgFQALgEAWAAIAGAAIAAgCQAAgEgBgDQgCgDgDgCQgFgFgJAAQgEAAgHADQgFACgFAEIgLgLQADgEAFgCIAJgFQAIgDAKAAIALABQAFABAEADQAIADADAHQAEAFABAIIAAALIAAAwIgTAAIAAgMIgBAAQgEAHgIAEQgHADgGAAQgHAAgFgCgAgEAGQgGACgDACQgEADAAAEQABAGAEADQAFADAFAAQAEAAAEgCQAFgBACgDQADgCABgEQACgEAAgEIAAgFIgFAAQgNAAgFACg");
	this.shape_1.setTransform(110.7,232.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAA3QgEgCgDgEQgDgEgBgGIgBgNIAAgmIgSAAIAAgSIASAAIAAgZIATAAIAAAZIAYAAIAAASIgYAAIAAAkQAAAHADADQADAEAGAAQAIAAAEgDIAAATQgGACgLAAQgJAAgFgBg");
	this.shape_2.setTransform(102.9,231.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAwIAAgnIgoAAIAAgQIAoAAIAAgoIAQAAIAAAoIAnAAIAAAQIgnAAIAAAng");
	this.shape_3.setTransform(89.3,231.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAqIgIgEIgHgGIAPgOQAEAFAFADQAEADAGAAQAEAAAEgDQAGgCAAgFQAAgDgCgDIgGgDIgOgEIgJgDQgEgBgDgCQgDgCgCgEQgCgEAAgGQAAgHADgFQACgFAGgEIALgFQAFgCAFAAQAKAAAHADIAIAEIAGAGIgOANQgDgEgFgCQgEgDgFAAQgDAAgEADQgDACAAAFQgBAAABABQAAABAAAAQAAABABAAQAAABAAAAIAGADIAOAEIAIADIAHADQAEACACAFQACAEAAAGQAAAIgDAFQgDAFgGAEQgFADgHABQgGACgFAAQgLAAgIgDg");
	this.shape_4.setTransform(75.4,199.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA+IADgTQAGACAFAAQAHAAAEgDQADgCADgIIAEgKIglhVIAYAAIAWA8IABAAIAVg8IAXAAIgpBnIgFALIgFAHQgEADgFACQgFABgHAAQgJAAgIgCg");
	this.shape_5.setTransform(67.2,201.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSArQgGgBgEgEQgFgDgDgFQgCgFAAgGQAAgFABgEIAFgIQADgCAKgFQALgEAWAAIAGAAIAAgCQAAgEgBgDQgCgDgDgCQgFgFgJAAQgEAAgHADQgFACgFAEIgLgLQADgEAFgCIAJgFQAIgDAKAAIALABQAFABAEADQAIADADAHQAEAFABAIIAAALIAAAwIgTAAIAAgMIgBAAQgEAHgIAEQgHADgGAAQgHAAgFgCgAgEAGQgGACgDACQgEADAAAEQABAGAFADQAEADAFAAQAEAAAEgCQAFgBACgDQADgCABgEQACgEAAgEIAAgFIgFAAQgNAAgFACg");
	this.shape_6.setTransform(58,199.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBBQgHgDgGgHQgFgFgDgJQgDgIAAgJQAAgKADgIQADgHAFgGQAGgGAIgEQAIgDAIAAQAHAAAKAEQAHAEAEAFIABAAIAAg8IAVAAIAACGIgUAAIAAgOIgBAAQgCAFgEACIgHAFQgHADgIABQgJgBgJgDgAgJAAQgEABgDAEQgEAEgCAFQgCAEAAAGQAAAEACAFQACAFAEAEQADADAEACQAFACAEAAQAGAAAEgCQAFgCAEgDQADgEACgFQABgFAAgEQAAgGgBgEQgCgFgDgEQgEgEgFgBQgEgBgGAAQgEAAgFABg");
	this.shape_7.setTransform(48.1,197.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBAQgHgCgGgEQgGgDgEgGQgEgGgCgHIAXgHQACAIAFAFQAFAEAHAAIAIgBQAEgCADgDQADgCABgEQACgEAAgEQAAgGgCgEQgDgEgEgCQgEgCgFgBIgIAAIgFAAIAAgSIAFAAIAHAAIAIgDQAEgCACgDQACgEAAgFQAAgHgFgFQgFgFgIAAQgFAAgFAEQgFAEgCAGIgXgGQACgHAEgFQAEgFAGgEQAFgDAGgCQAHgBAGAAQAHAAAIACQAHACAGAEQAFAFADAGQAEAGAAAJQAAAFgCAEQgBAFgDAEQgDAEgEACQgEADgFABIAAABQAGABAFAAQAEADADAEQAEAEABAGQACAFAAAGQAAAJgEAHQgDAHgGAFQgGAEgIADQgIACgIAAQgGAAgHgBg");
	this.shape_8.setTransform(32.8,197.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHClIBKh0QgLADgKAAQgXAAgSgIQgTgIgOgPQgNgOgIgSQgHgTAAgWQAAgZAJgVQAKgUAQgPQARgPAWgIQAWgIAYAAQAZAAAWAIQAXAIAQAPQARAPAIAUQAKAVAAAZQAAARgDAPQgDAOgGALQgHARgUAgIhHBvgAgUhhQgJAEgHAHQgHAHgEAJQgEAKAAALQAAALAEAJQAEAJAHAHQAHAHAJAEQAKACAKAAQALAAAKgCQAJgEAHgHQAIgHADgJQAEgJAAgLQAAgLgEgKQgDgJgIgHQgHgHgJgEQgKgDgLAAQgKAAgKADg");
	this.shape_9.setTransform(67.3,232.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsCgQgSgGgPgKQgOgKgJgQQgLgQgFgUIBIgRQADASAMALQAMAKARAAQAKAAAJgEQAJgDAGgHQAHgGADgJQAEgJgBgLQAAgPgGgLQgHgKgKgGQgKgGgOgDQgLgCgPAAQgQAAgSADIghAJIAEiyIDDAAIAAA8IiAAAIgCAzQALgEAQAAQAZAAAVAHQAVAIAOAOQAQAOAIASQAIAUAAAZIgCAaIgHAXQgJAVgRAPQgRAPgWAJQgXAHgZAAQgVAAgRgFg");
	this.shape_10.setTransform(39.6,233.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASCiIAAj2Ig/A5IgngtIBphZIBAAAIAAFDg");
	this.shape_11.setTransform(10.6,232.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHCCIAAgVQgbgCgNgEQgKgDgIgEQgJgFgHgGIAfgkQAIAJALAFQAKAEAOABIAAgzIgWgHQgMgDgIgFQgJgDgGgHQgGgHgDgIQgDgJAAgLQAAgOAGgMQAFgLAKgIQAKgIAMgGQAMgEAOgCIAAgVIARAAIAAAVQASAAAQAEIAQAGQAIAEAGAFIgcAjQgHgGgKgDQgIgDgLgBIAAAwIAdAIQAKADAIAFQAIADAGAHQAFAHADAIQADAJAAAKQAAAPgFANQgGAMgKAIQgKAJgNAEQgNAFgPACIAAAVgAAKBDQALgCAHgFQAIgGAAgJQAAgJgGgFQgEgDgKgEIgGgCgAgWg7QgHAFAAAIQAAAHADAEQACAEAEACIANAFIAAgqQgKACgFAFg");
	this.shape_12.setTransform(-9.8,226.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAwIABgMIAIACQAFAAADgDQADgDABgFIAFgLIgchAIAOAAIATAxIATgxIANAAIgfBPIgCAHQgCAEgCACQgDADgEABQgDACgFAAQgHAAgEgCg");
	this.shape_13.setTransform(73.3,286.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAhIgHgEIgFgGQgCgEABgEQgBgHADgEQADgEAFgBIALgEIANgBIAJAAIAAgDQAAgGgEgEIgEgDQgEgBgEAAQgEAAgFACIgIAFIgHgHQAFgFAHgDQAHgCAFAAQAHAAAFACQAGABADADQAEADABAFQACADAAAFIAAAgIAAAMIgLAAIAAgKIAAAAIgFAFIgFAEQgGACgGAAIgJgBgAgHADQgDACgDACQgCADAAAEQAAAFAEADQAEACAGAAQADAAAEgBIAGgFIADgGIABgHIAAgEIgHAAQgKAAgGACg");
	this.shape_14.setTransform(66.6,284.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAzQgGgDgEgFQgFgEgCgHQgCgGAAgHQAAgIACgGQACgFAFgEQAEgFAGgDQAHgCAHAAQAFAAAHADQAGADADAFIABAAIAAgxIAMAAIAABoIgMAAIAAgKIgBAAIgEAFIgGAEQgGACgFAAQgHAAgHgCgAgHgBQgEABgDACIgEAHQgCAFAAAFQAAAFACAEQABAEADADQADADAEACQAEACADAAQAFAAAEgCQAEgCADgDQADgDABgEQACgEAAgFQAAgFgCgFQgBgEgDgDQgDgCgEgBQgEgCgFAAQgDAAgEACg");
	this.shape_15.setTransform(59.1,282.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAhIAAhAIANAAIAAAKIAAAAQADgFADgDQAGgDAGAAIAGABIgBANIgGgBIgIABIgEAEQgDADgBAEQgBAEAAADIAAAhg");
	this.shape_16.setTransform(49.9,284.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAgQgGgDgFgFQgEgEgCgHQgDgGAAgHQAAgGADgGQACgHAFgEQAEgFAHgDQAGgCAFAAIAIAAIAIADQAGADAEAFQADAFACAGQACAGAAAFIAAAEIgzAAQAAAEABAEQACAEAEACIAGAEQAEACADAAQAGAAAEgDQAEgDAEgEIAJAHIgFAGIgHAEIgIADIgJAAQgFAAgHgCgAATgEIgBgIIgDgGIgHgEQgDgBgFAAQgDAAgEACQgDABgDADIgEAGIgBAHIAlAAIAAAAg");
	this.shape_17.setTransform(43.7,284.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghA1IAAhoIAMAAIAAAKIABAAIAEgFIAGgDQAGgDAFAAQAHAAAHACQAGADAEAFQAFAEACAHQACAGAAAIQAAAHgCAGQgCAFgFAEQgEAFgGADQgHACgHAAQgFAAgHgDQgGgDgDgFIgBAAIAAAxgAgIgnQgEACgDADQgDADgBAEQgCAFAAAFQAAAFACAEQABAEADADQADABAEACQAEACAEAAQAEAAAEgCQAEgCADgBQADgDACgEQABgEAAgFQAAgFgBgFQgCgEgDgDQgDgDgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_18.setTransform(36.1,286.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAMA1IgdgjIAAAjIgMAAIAAhpIAMAAIAABDIAbgaIARAAIgcAcIAfAkg");
	this.shape_19.setTransform(100.7,268.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAiIAAhBIANAAIAAALIAAAAQADgGADgDQAGgEAGAAIAGABIgBAOIgGgBIgIABIgEAEQgDADgBADQgBAEAAAEIAAAig");
	this.shape_20.setTransform(94.9,270.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAhIgIgEIgFgGQgBgEgBgEQABgHACgEQADgEAFgBIALgEIANgBIAJAAIAAgDQAAgGgEgEIgFgDQgDgBgEAAQgEAAgFACIgIAFIgHgHQAFgFAHgDQAHgCAFAAQAHAAAGACQAFABAEADQACADACAFQACADAAAFIAAAgIAAAMIgLAAIAAgKIgBAAIgEAFIgGAEQgFACgFAAIgJgBgAgHADQgDACgCACQgDADAAAEQAAAFAEADQAEACAGAAQADAAAEgBIAGgFIADgGIABgHIAAgEIgHAAQgKAAgGACg");
	this.shape_21.setTransform(88.9,270.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggAxIAAhhIAhAAQAGAAAJADQAHACADAEQAEAEACAFQABAEAAAFQAAAGgBAEQgCAFgEAEQgDACgHACQgJADgGABIgUAAIAAArgAgTgFIATAAIAFAAQAEAAADgCQADgCACgDQABgDAAgGQAAgEgBgDIgFgGIgHgBIgFgBIgTAAg");
	this.shape_22.setTransform(82.1,269);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAgQgGgDgEgFQgFgEgDgHQgCgGAAgHQAAgGACgGQADgHAFgEQAFgFAFgDQAHgCAGAAIAIAAIAGADQAGADAFAFQADAFACAGQACAGAAAFIAAAEIg0AAQABAEACAEQABAEADACIAHAEQAEACADAAQAFAAAFgDIAIgHIAJAHIgFAGIgHAEIgIADIgIAAQgHAAgGgCgAAUgEIgCgIIgEgGIgFgEQgEgBgFAAQgCAAgEACQgEABgDADIgEAGIgCAHIAnAAIAAAAg");
	this.shape_23.setTransform(70.8,270.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAlAiIAAgjIgBgIIgCgGQgBgDgDgBQgDgCgEAAQgFAAgDACQgDABgCADIgDAGIgBAJIAAAiIgLAAIAAgiIAAgIIgCgHQgCgDgDgBQgCgCgFAAQgDAAgDACQgEABgCACIgEAHQgBAEAAAFIAAAiIgNAAIAAhBIAMAAIAAALQACgEAFgEIAGgDQAEgCAFAAQAHAAAFAEQADADADAGIAEgGIAFgDQAGgEAGAAQAIAAAFADQAFACADAEQACAEABAGQACAFAAAGIAAAlg");
	this.shape_24.setTransform(61.5,270.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAgQgGgDgEgFQgFgEgDgHQgCgGAAgHQAAgGACgGQADgHAFgEQAFgFAFgDQAHgCAGAAIAHAAIAHADQAHADADAFQAEAFACAGQACAGAAAFIAAAEIg0AAQAAAEACAEQACAEADACIAIAEQAEACACAAQAGAAAEgDQAEgDAEgEIAKAHIgGAGIgHAEIgIADIgIAAQgGAAgHgCgAAUgEIgCgIIgEgGIgGgEQgDgBgFAAQgCAAgEACQgEABgDADIgEAGIgCAHIAnAAIAAAAg");
	this.shape_25.setTransform(52.2,270.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAQA1IAAgnIgBgIQgBgEgDgCIgEgBIgGgBQgCAAgDACIgGABIgEAHQgBAFAAAFIAAAjIgNAAIAAhpIANAAIAAAzIAAAAQADgGAFgDQADgCAEgBIAEgBQAGAAAEACQAEACADADQAEADACAEQACADAAAHIAAArg");
	this.shape_26.setTransform(44.9,268.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAxIAAhUIggAAIAAgNIBLAAIAAANIggAAIAABUg");
	this.shape_27.setTransform(37.5,269);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMAgQgGgDgFgFQgEgEgDgHQgCgGAAgHQAAgGACgGQADgHAFgEQAFgFAFgDQAHgCAGAAIAIAAIAHADQAFADAFAFQADAFACAGQACAGAAAFIAAAEIgzAAQAAAEACAEQABAEADACIAHAEQAEACADAAQAFAAAFgDIAIgHIAJAHIgFAGIgHAEIgIADIgIAAQgHAAgGgCgAATgEIgBgIIgEgGIgFgEQgEgBgFAAQgDAAgDACQgEABgDADIgEAGIgBAHIAlAAIAAAAg");
	this.shape_28.setTransform(26.8,270.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAQAiIAAglIgBgIQgBgEgCgCIgFgDIgGgBQgCAAgDACIgGADIgEAHQgCAFAAAEIAAAiIgMAAIAAhBIAMAAIAAALIABAAQACgGAGgDQADgCAEgBIAFgBQAEAAAFACQAEACAEADQADADACAFQACAEAAAHIAAApg");
	this.shape_29.setTransform(19.6,270.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAzIgKgEIgJgEIgIgHIgGgHIgEgJIgDgKIgBgKIABgJIADgKQABgFADgEIAGgHIAIgHIAJgEIAKgEIAJgBIAKABIAKAEIAJAEIAIAHIAGAHIAEAJIADAKIABAJIgBAKIgDAKIgEAJIgGAHIgIAHIgJAEIgKAEIgKABIgJgBgAgHglIgHACQgHADgFAGQgFAFgCAHQgDAHAAAHQAAAHADAIQACAHAFAFQAFAGAHADIAHACIAHABIAIgBIAHgCQAHgDAFgGQAFgFACgHQADgIAAgHQAAgHgDgHQgCgHgFgFQgFgGgHgDIgHgCIgIgBIgHABg");
	this.shape_30.setTransform(10.4,269);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACAyQgEgBgDgDQgEgDgCgFQgCgEAAgGIAAgkIgQAAIAAgTIAQAAIAAgXIAWAAIAAAXIAVAAIAAATIgVAAIAAAYQAAAIABACIAEAEQACABAEAAQAHAAADgCIAAAUQgHACgKAAQgGAAgFgBg");
	this.shape_31.setTransform(75.1,174.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMAlQgIgDgGgFQgGgFgDgIIgDgIIAAgIQAAgFADgKQADgIAGgFQAGgGAIgDQAIgCAHAAQAIAAAHACQAGADAGAGQAEAFACAIQAEAHAAAIIAAAHIg2AAQABAHAFAEQAFAEAFAAQAFAAAFgDQAEgCADgFIAQANIgGAGIgIAFIgJADIgJABQgHAAgIgDgAAPgHQAAgGgEgFQgEgEgHAAQgBAAgDABIgGADQgEAFAAAGIAdAAIAAAAg");
	this.shape_32.setTransform(66.9,175.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAKA8IgYgnIgBAAIAAAnIgYAAIAAh3IAYAAIAABIIAZgdIAdAAIgfAhIAgArg");
	this.shape_33.setTransform(57.9,173.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIAlQgHgDgGgFQgHgFgCgIIgDgIIgBgIQAAgFAEgKQACgIAHgFQAGgGAHgDQAIgCAHAAQAIAAAHACIAHADIAGAFIgQARIgFgFQgDgBgEAAQgEAAgDABQgDACgCACQgDADgBADIgBAHQAAAEABADQABAEADADQACACADACQADABAEAAQAEAAADgCIAFgEIAQARIgGAFIgHADQgHACgIAAQgHAAgIgDg");
	this.shape_34.setTransform(48.9,175.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKA5IAAhLIAWAAIAABLgAgIghQgEgEAAgGQAAgGAEgDQAEgEAEAAQAFAAAEAEQAEADAAAGQAAAGgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_35.setTransform(42.2,173.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLA4IAAhZIggAAIAAgWIBXAAIAAAWIggAAIAABZg");
	this.shape_36.setTransform(35,173.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgxA3IAFgUQAFACAGAAQAHAAAFgDIAGgKIADgEIgYhNIAbAAIAKAzIAAAAIAYgzIAaAAIgwBYIgEAMQgEAFgEACQgDAEgGABQgGACgIAAQgKAAgHgCg");
	this.shape_37.setTransform(114.5,159.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRAlQgIgDgFgFQgFgFgCgIIgCgIIABgIQABgFAFgKQAEgIAHgFQAGgGAIgDQAHgCAJAAQAIAAAGACQAHADAEAGQAEAFABAIQACAHgCAIIgBAHIg1AAQAAAHAEAEQAFAEAGAAQAEAAAFgDIAIgHIAPANIgHAGIgJAFIgJADIgIABQgJAAgHgDgAgBgVIgGADQgFAFgBAGIAeAAQABgGgEgFQgDgEgHAAQgEAAgBABg");
	this.shape_38.setTransform(105.1,157.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJAnIAGgmQABgHgBgEQgBgEgCgBQgDgCgEAAQgEAAgBABQgEACgCADQgDAEgBAIIgGAmIgYAAIAMhLIAWAAIgBAKIAAAAQAEgFAEgDIAHgDIAIgBQAIAAAGACQAFADADAFQACAFAAAHIgBAOIgFApg");
	this.shape_39.setTransform(95.3,157.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgWAmIgHgDIgFgFIARgRQADAFADACQAEACAFAAIAGgBQADgCABgDQAAgEgGgCIgLgDIgHgCQgEgCgCgDIgEgEQgBgEABgFQAAgHAEgFQADgFAGgDQAEgDAHgCIAKgBQAJAAAGACIAHADIAGAFIgRAOIgGgFQgDgBgFAAIgFABQgCACAAADQgBAEAFACIANADIAHADIAGADQADACAAADQACAEgBAGQgBAHgEAFQgEAFgFADQgGADgHABQgFABgFAAQgJAAgIgCg");
	this.shape_40.setTransform(86.6,157.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgTA5IALhLIAWAAIgLBLgAgEghQgDgEABgGQAAgGAFgDQADgEAFAAQAGAAAEAEQADADgBAGQAAAGgFAEQgFAEgFAAQgEAAgEgEg");
	this.shape_41.setTransform(80.7,155.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag3A4IAQhvIAlAAIALABIANACIAKAEIAKAGIAHAIIAFAKIACAMIgBAMQgBAHgCAGQgCAGgEAFIgHAKIgJAIIgKAGIgMAFIgKACIgMABgAgbAhIANAAQAJAAAFgCQAIgBAGgEQAGgFAEgGQAEgHABgIQACgHgDgHQgCgGgFgEQgEgEgHgCQgHgCgGAAIgPAAg");
	this.shape_42.setTransform(72,155.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgfAnIALhLIAWAAIgCAMIAAAAQAFgHAGgEQAGgDAIAAIAHAAIgDAWIgKgBQgGAAgFACQgEABgDAEQgBADgBAFIgCAJIgEAgg");
	this.shape_43.setTransform(57.1,157.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgRAlQgIgDgFgFQgFgFgCgIIgCgIIABgIQABgFAFgKQAEgIAHgFQAGgGAIgDQAHgCAJAAQAIAAAGACQAHADAEAGQAEAFABAIQACAHgCAIIgBAHIg1AAQAAAHAEAEQAFAEAGAAQAEAAAFgDQAEgCAEgFIAPANIgHAGIgJAFIgJADIgIABQgJAAgHgDgAgBgVIgGADQgFAFgBAGIAeAAQABgGgEgFQgDgEgHAAQgEAAgBABg");
	this.shape_44.setTransform(48.5,157.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVAmIgWhLIAaAAIANAyIAAAAIAYgyIAYAAIgqBLg");
	this.shape_45.setTransform(39.5,157.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVAlQgHgDgFgFQgGgFgCgIIgBgIIAAgIQABgFAFgKQAEgIAHgFQAHgGAIgDQAIgCAHAAQAJAAAIACQAHADAFAGQAGAFACAIQACAKgBAFIgCAIIgEAIQgEAIgHAFQgHAFgIADQgIADgHAAQgJAAgIgDgAgEgRIgHAEQgDADgBADIgDAHIAAAHIADAHIAGAEQADABAFAAQACAAAEgBIAHgEIAEgHQACgDABgEIgBgHQAAgDgCgDIgGgEQgDgBgFAAQgCAAgEABg");
	this.shape_46.setTransform(29.2,157.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgPAlQgHgDgFgFQgGgFgCgIIgBgIIAAgIQABgFAFgKQAEgIAHgFQAHgGAIgDQAGgCAJAAQAIAAAGACIAHADIAFAFIgSARIgEgFQgDgBgEAAQgEAAgEABIgFAEIgEAGIgDAHIAAAHIADAHIAGAEQADABADAAQADAAAEgCIAFgEIAOARIgHAFIgHADQgIACgHAAQgHAAgIgDg");
	this.shape_47.setTransform(20.4,157.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAmIgHgDIgFgFIAQgRQADAFAEACQAEACAFAAIAGgBQAEgCAAgDQAAgEgFgCIgMgDIgHgCQgEgCgCgDIgEgEQgBgEABgFQAAgHAEgFQAEgFAFgDQAFgDAGgCIAKgBQAJAAAGACIAHADIAGAFIgRAOIgGgFQgDgBgFAAIgFABQgCACAAADQgBAEAFACIANADIAHADIAGADQACACABADQACAEgBAGQgBAHgEAFQgDAFgGADQgFADgIABQgFABgFAAQgJAAgIgCg");
	this.shape_48.setTransform(11.8,157.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgTA5IALhLIAWAAIgLBLgAgEghQgDgEABgGQAAgGAFgDQADgEAFAAQAGAAAEAEQADADgBAGQAAAGgFAEQgFAEgFAAQgEAAgEgEg");
	this.shape_49.setTransform(5.9,155.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ag3A4IAQhvIAlAAIALABIANACIAKAEIAKAGIAHAIIAFAKIACAMIgBAMQgBAHgCAGQgCAGgEAFIgHAKIgJAIIgKAGIgMAFIgKACIgMABgAgbAhIANAAQAJAAAFgCQAIgBAGgEQAGgFAEgGQAEgHABgIQACgHgDgHQgCgGgFgEQgEgEgHgCQgHgCgGAAIgPAAg");
	this.shape_50.setTransform(-2.8,155.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AACAyQgEgBgDgDQgEgDgCgFQgCgEAAgGIAAgkIgQAAIAAgTIAQAAIAAgXIAWAAIAAAXIAVAAIAAATIgVAAIAAAYQAAAIABACIAEAEQACABAEAAQAHAAADgCIAAAUQgHACgKAAQgGAAgFgBg");
	this.shape_51.setTransform(116.4,138.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AANAnIAAgmQAAgHgCgEQgBgEgCgBQgDgCgEAAQgDAAgDABQgDACgBADQgDAEAAAIIAAAmIgYAAIAAhLIAXAAIAAAKIAAAAQADgFAFgDIAFgDIAIgBQAJAAAGACQAFADADAFQAEAFABAHIABAOIAAApg");
	this.shape_52.setTransform(108.3,139.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMAlQgIgDgGgFQgGgFgDgIIgDgIIgBgIQABgFADgKQADgIAGgFQAGgGAIgDQAIgCAHAAQAIAAAHACQAHADAFAGQAEAFADAIQACAHAAAIIAAAHIg1AAQABAHAFAEQAFAEAFAAQAFAAAFgDQADgCAEgFIARANIgHAGIgIAFIgJADIgJABQgHAAgIgDgAAPgHQABgGgFgFQgEgEgGAAQgDAAgCABIgGADQgEAFAAAGIAdAAIAAAAg");
	this.shape_53.setTransform(98.6,139.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgSA6QgHgDgFgFQgFgFgDgIQgDgIAAgIQAAgIADgIQACgGAFgFQAFgGAGgDQAHgDAIgBQAGAAAGACQAHADAEAFIAAgzIAYAAIAAB3IgWAAIAAgKIgBAAQgDAFgGADQgJAEgDAAQgJAAgHgDgAgGACIgGAEQgCADgBADIgCAIQAAAEACAEQABADACADIAGAFQAEABADAAIAIgBIAGgFQACgDABgDQACgEAAgEIgCgIQgBgDgCgDIgGgEIgIgCQgDAAgEACg");
	this.shape_54.setTransform(88.2,137.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgKA5IAAhLIAWAAIAABLgAgIghQgEgEAAgGQAAgGAEgDQAEgEAEAAQAFAAAEAEQAEADAAAGQAAAGgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_55.setTransform(80.9,137.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgRAmQgLgEgEgEIAPgRQAEAFAEACQAEACAFAAIAGgBQADgCAAgDQAAgEgHgCIgLgDIgIgCIgHgFQgDAAgBgEQgCgEAAgFQAAgHADgFQACgFAGgDQAEgDAGgCQAGgBAEAAQAIAAAIACIAHADIAFAFIgOAOIgGgFQgEgBgEAAQgCAAgCABQgCACgBADQAAAEAGACIAMADIAIADQAEABADACQADACABADQACAEAAAGQgBAHgDAFQgDAFgFADQgFADgHABQgFABgFAAQgJAAgHgCg");
	this.shape_56.setTransform(74.6,139.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMAlQgIgDgGgFQgGgFgDgIIgDgIIgBgIQABgFADgKQADgIAGgFQAGgGAIgDQAIgCAHAAQAIAAAHACQAHADAEAGQAFAFADAIQACAHAAAIIAAAHIg1AAQABAHAFAEQAFAEAFAAQAFAAAEgDQAEgCAEgFIARANIgHAGIgIAFIgJADIgJABQgHAAgIgDgAAPgHQABgGgFgFQgEgEgGAAQgDAAgCABIgGADQgEAFAAAGIAdAAIAAAAg");
	this.shape_57.setTransform(65.9,139.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAPA4IgWgtIgMAAIAAAtIgZAAIAAhvIAsAAQAHAAAHACQAJABAFAEQAGAEADAHQACADABAEIABAJQgBAGgBAGQgCAFgDAEIgIAFQgEACgGABIAdAwgAgTgIIAPAAQAHAAAEgCQAEgBACgDQABgCAAgFQAAgEgBgDQgBgCgEgCQgEgCgGAAIgRAAg");
	this.shape_58.setTransform(56.1,137.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgTAnQgFgCgEgDQgDgDgDgEQgCgFAAgGQAAgFABgEIAFgGQADgCAKgFQALgDAVAAQAAgGgFgEQgEgEgGAAQgFAAgFACQgEADgEAEIgNgNIAIgFIAIgEQAFgCAMgBQAJAAAHACQAHADAFAFQAEAFABAIQACAHAAAJIAAAmIgWAAIAAgKIgBAAIgEAGIgGADQgFADgHAAQgGAAgFgBgAgNAPQAAAEAEADQADACAEAAQAGAAAFgEIAFgEQABgDAAgEIAAgFIgGAAQgWABAAAKg");
	this.shape_59.setTransform(40.4,139.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgSA6QgHgDgFgFQgFgFgDgIQgDgIAAgIQAAgIADgIQACgGAFgFQAFgGAGgDQAHgDAIgBQAGAAAGACQAHADAEAFIAAgzIAYAAIAAB3IgWAAIAAgKIgBAAQgDAFgGADQgJAEgDAAQgJAAgHgDgAgGACIgGAEQgCADgBADIgCAIQAAAEACAEQABADACADIAGAFQAEABADAAIAIgBIAGgFQACgDABgDQACgEAAgEIgCgIQgBgDgCgDIgGgEIgIgCQgDAAgEACg");
	this.shape_60.setTransform(30.4,137.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKA5IAAhLIAWAAIAABLgAgIghQgEgEAAgGQAAgGAEgDQAEgEAEAAQAFAAAEAEQAEADAAAGQAAAGgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_61.setTransform(23,137.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgaAnIAAhLIAYAAIAAAMIABAAQABgHAGgEQAFgDAIAAIAIAAIAAAWIgKgBQgHAAgEACQgEABgCAEIgBAIIgBAJIAAAgg");
	this.shape_62.setTransform(17.5,139.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgPAlQgIgDgGgFQgGgFgDgIIgDgIIgBgIQAAgFAEgKQADgIAGgFQAGgGAIgDQAIgCAHAAQAIAAAIACQAIADAGAGQAGAFADAIQAEAKAAAFIgBAIIgDAIQgDAIgGAFQgGAFgIADQgIADgIAAQgHAAgIgDgAgHgRIgGAEQgCADgBADIgCAHQAAAEACADQABAEACADIAGAEQAEABADAAIAIgBIAGgEQACgDABgEQACgDAAgEIgCgHQgBgDgCgDIgGgEIgIgBQgDAAgEABg");
	this.shape_63.setTransform(8.6,139.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgLA8IAAh3IAWAAIAAB3g");
	this.shape_64.setTransform(1.2,137.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgkA4IAAhvIBJAAIAAAXIgwAAIAAAXIAtAAIAAAVIgtAAIAAAsg");
	this.shape_65.setTransform(-5.8,137.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,129.4,149.5,164);


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
	this.shape.setTransform(104.9,58.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASA2IAAg0QAAgLgCgGQgCgEgDgDQgEgCgGAAQgEAAgFACQgDACgCAEQgEAHAAAKIAAA1IghAAIAAhpIAgAAIAAAPIAAAAQAEgHAIgFIAHgEQAFgBAGAAQAMAAAIAEQAIADAEAHQAEAHACAJQABAJAAALIAAA5g");
	this.shape_1.setTransform(94,61.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRA0QgLgEgIgHQgIgIgFgKIgDgLIgBgMQAAgHAEgOQAFgLAIgHQAIgHALgFQALgDAKAAQALAAAKADQAJAFAHAHQAGAHAEALQADAKAAALIAAAKIhKAAQACAJAGAGQAHAGAHAAQAIAAAGgEQAGgEAEgGIAXARIgJAJIgLAHQgGADgGABIgNABQgKAAgLgDgAAVgKQAAgJgFgGQgGgGgJAAQgDAAgFACQgEABgDADQgGAGAAAJIApAAIAAAAg");
	this.shape_2.setTransform(81.7,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRA0QgLgEgIgHQgIgIgFgKIgDgLIgBgMQAAgHAEgOQAFgLAIgHQAIgHALgFQALgDAKAAQALAAAKADQAJAFAHAHQAGAHAEALQADAKAAALIAAAKIhKAAQACAJAGAGQAHAGAHAAQAIAAAGgEQAGgEAEgGIAXARIgJAJIgLAHQgGADgGABIgNABQgKAAgLgDgAAVgKQAAgJgFgGQgGgGgJAAQgDAAgFACQgEABgDADQgGAGAAAJIApAAIAAAAg");
	this.shape_3.setTransform(69.3,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBTIgJgFQgIgEgFgHIAAAAIAAAPIgfAAIAAilIAhAAIAABHIABAAQAFgIAKgDQAIgDAJAAQALAAAJAFQAJAEAHAIQAGAIADAIQAEALAAALQAAAMgEAKQgEAKgHAHQgHAIgJAEQgKAEgMAAIgJgBgAgLADQgFACgDADQgEAEgBAFQgCAFAAAGQAAAGACAFQABAFAEAEQADADAFACQAFACAGAAQAEAAAFgCQAFgCAEgDQADgEACgFQACgFAAgGQAAgGgCgFQgCgFgDgEQgEgDgFgCQgFgCgEAAQgGAAgFACg");
	this.shape_4.setTransform(56.7,58.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACBEQgEgBgGgFQgFgDgDgHQgDgFAAgJIAAgxIgVAAIAAgaIAVAAIAAggIAfAAIAAAgIAdAAIAAAaIgdAAIAAAiQAAAKADAEQABACADACQAEACAFgBQAKAAADgCIAAAbQgJADgOAAQgIAAgIgCg");
	this.shape_5.setTransform(112.9,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAfIARg9IAdAAIgUA9g");
	this.shape_6.setTransform(105.6,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASA2IAAg0QAAgLgCgGQgCgEgDgDQgEgCgGAAQgEAAgFACQgDACgCAEQgEAHAAAKIAAA1IghAAIAAhpIAgAAIAAAPIAAAAQAEgHAIgFIAHgEIALgBQAMAAAIAEQAIADAEAHQAEAHACAJQABAJAAALIAAA5g");
	this.shape_7.setTransform(96.3,37.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAzQgLgDgIgIQgIgHgFgLIgDgKIgBgMQAAgHAEgOQAFgLAIgHQAIgIALgDQALgFAKAAQALAAAKAFQAJADAHAIQAGAHAEALQADAKAAALIAAAKIhKAAQACAJAGAGQAHAFAHABQAIgBAGgDQAGgDAEgHIAXARIgJAJIgLAHQgGADgGABIgNACQgKAAgLgFgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEABgDAEQgGAFAAAIIApAAIAAAAg");
	this.shape_8.setTransform(83.9,37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPA1IgshpIAjAAIAZBHIABAAIAZhHIAhAAIgqBpg");
	this.shape_9.setTransform(71.8,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA1QgHgBgFgFQgGgEgDgGQgDgGAAgJQAAgGACgFQACgGAEgEQAEgDAOgGQAPgFAdAAQAAgIgGgGQgGgFgIAAQgHAAgGADQgHAEgFAFIgSgSIAKgHIAMgFQAIgDAPgCQAOABAKADQAJADAGAIQAFAGADALQACAJAAAOIAAA1IgfAAIAAgNIgGAHIgJAFQgGAEgLAAQgHAAgHgDgAgSAWQAAAFAFAEQAEACAGAAQAJAAAHgFQAEgCABgEQACgEAAgFIAAgHIgIAAQgeABAAAPg");
	this.shape_10.setTransform(59.9,37.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASBTIAAg1QAAgNgCgFQgCgFgDgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAGAAAMIAAA2IghAAIAAilIAhAAIAABKIABAAQACgHAIgEIAGgEQAFgCAGAAQAMAAAJAEQAIAEAEAHQAEAGABAIQACAIAAAMIAAA7g");
	this.shape_11.setTransform(48.1,34.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADBEQgGgCgFgDQgFgFgDgFQgDgHAAgIIAAgxIgVAAIAAgbIAVAAIAAgfIAfAAIAAAfIAdAAIAAAbIgdAAIAAAhQAAALADAEQABADADABQADABAFAAQAKAAAEgDIAAAcQgJADgOAAQgJAAgGgCg");
	this.shape_12.setTransform(124.5,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZA1QgOgHgFgFIAUgWQAFAGAFADQAGACAHAAQAFABADgCQAFgCAAgEQAAgGgIgDIgRgEIgLgDIgJgGQgEgCgCgFQgDgFAAgHQABgKAEgGQADgHAGgFQAGgEAJgCQAIgCAGAAQAMAAAKADIAKAEQAEADAEADIgUAUQgEgEgFgCQgEgDgHAAQgCAAgDADQgFACAAAEQAAAFAJADIARAFIAKADIAJAFQAFACABAGQADAFAAAHQAAAKgEAIQgFAGgHAEQgGAEgKACQgIABgHAAQgMABgLgDg");
	this.shape_13.setTransform(115.4,13.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAyQgIgDgFgHQgEgHgBgJQgCgIAAgMIAAg5IAhAAIAAA0QAAALADAGQABAEADADQAEACAGAAQAFAAADgCQAFgCACgEQADgGAAgLIAAg1IAhAAIAABpIgfAAIAAgPIgBAAQgEAHgIAFQgJAFgJAAQgMAAgHgEg");
	this.shape_14.setTransform(104.3,13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbBoIACgdQAEABAEAAQAMAAAAgVIAAhrIAfAAIAABxQAAAKgCAIQgCAJgFAFQgEAGgIADQgGAEgLAAQgKAAgFgCgAgChIQgGgGAAgIQAAgIAGgFQADgGAIAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIAAQgIAAgDgFg");
	this.shape_15.setTransform(94.4,13.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAyQgIgDgFgHQgDgHgCgJQgCgIAAgMIAAg5IAhAAIAAA0QAAALACAGQACAEAEADQAEACAFAAQAEAAAEgCQAEgCADgEQADgGAAgLIAAg1IAhAAIAABpIggAAIAAgPIAAAAQgEAHgHAFQgKAFgIAAQgNAAgHgEg");
	this.shape_16.setTransform(80.2,13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVA0QgMgFgHgHQgJgHgEgLIgEgKIgBgMQAAgHAFgPQAEgKAJgIQAHgGAMgFQALgDAKAAQAMAAALADQALAFAHAGQAJAIAFAKQAEAPAAAHIgBAMIgDAKQgFALgJAHQgHAHgLAFQgLAEgMgBQgKABgLgEgAgKgXQgEACgEADQgDADgCAGQgCAEAAAFQAAAGACAEQACAFADAEQAEADAEADQAGACAEAAQAFAAAGgCQAFgDADgDQADgEACgFQACgEAAgGQAAgFgCgEQgCgGgDgDQgDgDgFgCQgGgCgFAAQgEAAgGACg");
	this.shape_17.setTransform(67.5,13.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4BMIAEgbQAIADAIgBQAKAAAEgEQAEgDADgKIADgHIgvhqIAkAAIAZBHIAYhHIAiAAIgwB7IgGAPQgEAHgCAEQgGAEgHADQgHADgMgBQgNAAgLgDg");
	this.shape_18.setTransform(54.9,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_19.setTransform(45.8,16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_20.setTransform(39.6,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_21.setTransform(33.3,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,0,143,74);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AOQgFgGAAgIQAAgHAFgGQAHgGAIAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgIAAgHgGgAgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAFAGABAHQgBAIgFAGQgGAGgIAAQgHAAgGgGgAhWAOQgGgGAAgIQAAgHAGgGQAGgGAIAAQAJAAAFAGQAHAGAAAHQAAAIgHAGQgFAGgJAAQgIAAgGgGg");
	this.shape.setTransform(106.4,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4BLIAEgbQAIAEAHAAQALgBAFgEQACgDAFgKIACgHIgvhqIAkAAIAaBHIAXhHIAiAAIgwB7IgHAPQgDAHgDAEQgFAFgGACQgIACgLABQgOAAgLgFg");
	this.shape_1.setTransform(89.5,68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_2.setTransform(80.8,62.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAzQgLgDgIgIQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgHQAIgIALgDQALgFAKAAQALAAAKAFQAJADAHAIQAGAHAEAKQADALAAALIAAAKIhKAAQACAJAGAGQAHAFAHABQAIgBAGgDQAGgDAEgGIAXAQIgJAJIgLAHQgGADgGABIgNACQgKAAgLgFgAAVgLQAAgIgFgGQgGgGgJAAQgDAAgFACQgEABgDAEQgGAFAAAIIApAAIAAAAg");
	this.shape_3.setTransform(71.9,65.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACBEQgEgBgGgFQgFgDgDgHQgDgFAAgJIAAgxIgVAAIAAgbIAVAAIAAgfIAfAAIAAAfIAdAAIAAAbIgdAAIAAAiQAAAKADAEQABACADACQAEACAEgBQALAAADgCIAAAbQgJADgOAAQgIAAgIgCg");
	this.shape_4.setTransform(61.2,63.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaA2QgHgDgFgEQgGgEgDgGQgDgGAAgJQAAgGACgFQACgFAEgFQAEgDAOgGQAPgFAdAAQAAgJgGgFQgGgFgIAAQgHAAgGADQgHADgFAGIgSgSIAKgHIAMgFQAIgDAPgCQAOAAAKAEQAJADAGAIQAFAHADAKQACAJAAAOIAAA1IgfAAIAAgOIgGAIIgJAFQgGADgLABQgHAAgHgCgAgSAVQAAAGAFAEQAEACAGAAQAJAAAHgFQAEgCABgEQACgEAAgFIAAgHIgIAAQgeABAAAOg");
	this.shape_5.setTransform(51.1,65.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAfAAIAAClg");
	this.shape_6.setTransform(42.8,62.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRA0QgLgFgIgHQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgHALgEQALgDAKAAQALAAAKADQAJAEAHAHQAGAIAEAKQADALAAALIAAAKIhKAAQACAJAGAGQAHAGAHgBQAIABAGgEQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNABQgKAAgLgDgAAVgKQAAgJgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAJIApAAIAAAAg");
	this.shape_7.setTransform(123.8,41.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIAhAAIAAARIAAAAQAEgKAHgEQAIgFAKAAIALABIAAAeQgIgCgGAAQgJAAgGACQgFADgDAFQgBAEgBAHIgBANIAAAsg");
	this.shape_8.setTransform(113.7,41.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRA0QgLgFgIgHQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgHALgEQALgDAKAAQALAAAKADQAJAEAHAHQAGAIAEAKQADALAAALIAAAKIhKAAQACAJAGAGQAHAGAHgBQAIABAGgEQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNABQgKAAgLgDgAAVgKQAAgJgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAJIApAAIAAAAg");
	this.shape_9.setTransform(102.7,41.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASBTIAAg1QAAgNgCgFQgCgFgDgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAGAAAMIAAA2IghAAIAAilIAhAAIAABKIABAAQACgHAHgEIAHgEQAFgCAGAAQAMAAAJAEQAIAEAEAHQAEAGABAIQACAIAAAMIAAA7g");
	this.shape_10.setTransform(90.4,38.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASA2IAAg0QAAgLgCgGQgCgEgDgDQgEgCgGAAQgEAAgFACQgDACgCAEQgEAHAAAKIAAA1IghAAIAAhpIAgAAIAAAPIAAAAQAEgHAHgFIAHgEIAMgBQALAAAJAEQAHADAFAHQAEAHACAJQABAJAAALIAAA5g");
	this.shape_11.setTransform(71.8,41.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRA0QgLgFgIgHQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgHALgEQALgDAKAAQALAAAKADQAJAEAHAHQAGAIAEAKQADALAAALIAAAKIhKAAQACAJAGAGQAHAGAHgBQAIABAGgEQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNABQgKAAgLgDgAAVgKQAAgJgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAJIApAAIAAAAg");
	this.shape_12.setTransform(59.4,41.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRA0QgLgFgIgHQgIgHgFgLIgDgKIgBgMQAAgHAEgPQAFgKAIgIQAIgHALgEQALgDAKAAQALAAAKADQAJAEAHAHQAGAIAEAKQADALAAALIAAAKIhKAAQACAJAGAGQAHAGAHgBQAIABAGgEQAGgEAEgFIAXARIgJAJIgLAGQgGADgGABIgNABQgKAAgLgDgAAVgKQAAgJgFgGQgGgGgJAAQgDAAgFACQgEACgDADQgGAFAAAJIApAAIAAAAg");
	this.shape_13.setTransform(47.1,41.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBSIgJgEQgIgEgFgGIAAAAIAAANIgfAAIAAikIAhAAIAABHIABAAQAFgHAKgEQAIgDAJAAQALAAAJAFQAJAEAHAIQAGAIADAIQAEALAAALQAAAMgEAKQgEAKgHAIQgHAHgJAEQgKAEgMAAQgFAAgEgCgAgLADQgFACgDADQgEAEgBAFQgCAFAAAGQAAAGACAFQABAFAEAEQADADAFACQAFACAGAAQAEAAAFgCQAFgCAEgDQADgEACgFQACgFAAgGQAAgGgCgFQgCgFgDgEQgEgDgFgCQgFgCgEAAQgGAAgFACg");
	this.shape_14.setTransform(34.4,38.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACBFQgEgDgGgEQgFgEgDgGQgDgFAAgJIAAgxIgVAAIAAgaIAVAAIAAggIAfAAIAAAgIAdAAIAAAaIgdAAIAAAiQAAAJACAFQACACADACQAEABAFABQAKAAADgDIAAAbQgJADgOAAQgIAAgIgBg");
	this.shape_15.setTransform(111.9,15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAfIAQg9IAdAAIgUA9g");
	this.shape_16.setTransform(104.6,10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASA2IAAg0QAAgLgCgGQgCgEgDgDQgEgCgGAAQgEAAgFACQgDACgCAEQgEAHAAAKIAAA1IghAAIAAhpIAgAAIAAAPIAAAAQAEgHAHgFIAHgEIAMgBQAMAAAIAEQAHADAFAHQAEAHACAJQABAJAAALIAAA5g");
	this.shape_17.setTransform(95.3,17.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRA0QgLgFgIgGQgIgIgFgKIgDgLIgBgMQAAgHAEgOQAFgLAIgHQAIgHALgFQALgEAKAAQALAAAKAEQAJAFAHAHQAGAHAEALQADAKAAALIAAAKIhKAAQACAKAGAFQAHAGAHAAQAIAAAGgEQAGgDAEgHIAXARIgJAJIgLAHQgGADgGABIgNABQgKAAgLgDgAAVgKQAAgJgFgGQgGgGgJAAQgDAAgFACQgEABgDADQgGAGAAAJIApAAIAAAAg");
	this.shape_18.setTransform(82.9,17.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPA1IgshpIAjAAIAZBGIABAAIAZhGIAhAAIgqBpg");
	this.shape_19.setTransform(70.8,17.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaA1QgHgCgFgEQgGgEgDgGQgDgHAAgHQAAgHACgGQACgFAEgEQAEgDAOgGQAPgFAdAAQAAgJgGgFQgGgFgIAAQgHAAgGAEQgHACgFAHIgSgSIAKgIIAMgGQAIgCAPgCQAOABAKADQAJADAGAIQAFAGADALQACAKAAANIAAA1IgfAAIAAgNIgGAHIgJAFQgGADgLAAQgHAAgHgCgAgSAWQAAAFAFAEQAEACAGAAQAJAAAHgFQAEgDABgDQACgEAAgFIAAgHIgIAAQgeABAAAPg");
	this.shape_20.setTransform(58.9,17.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASBTIAAg1QAAgNgCgFQgCgFgDgCQgEgDgGAAQgEAAgEADQgEACgDAEQgDAGAAAMIAAA2IghAAIAAilIAhAAIAABKIABAAQACgHAIgEIAHgEQAFgCAFAAQAMAAAJAEQAHAEAFAHQAEAGABAIQACAIAAAMIAAA7g");
	this.shape_21.setTransform(47.1,14.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeAyQgIgDgFgHQgDgHgCgJQgCgIAAgMIAAg5IAhAAIAAA0QAAALACAGQACAEAEADQAEACAFAAQAEAAAEgCQAEgCADgEQADgGAAgLIAAg1IAhAAIAABpIggAAIAAgPIAAAAQgEAHgHAFQgKAFgIAAQgNAAgHgEg");
	this.shape_22.setTransform(101.4,-6.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAzQgMgDgHgIQgJgHgEgLIgEgKIgBgMQAAgHAFgPQAEgKAJgIQAHgHAMgDQALgFAKAAQAMAAALAFQALADAHAHQAJAIAFAKQAEAPAAAHIgBAMIgDAKQgFALgJAHQgHAIgLADQgLAFgMAAQgKAAgLgFgAgKgXQgEACgEADQgDADgCAFQgCAGAAAEQAAAFACAGQACAEADAEQAEADAEACQAGACAEABQAFgBAGgCQAFgCADgDQADgEACgEQACgGAAgFQAAgEgCgGQgCgFgDgDQgDgDgFgCQgGgCgFAAQgEAAgGACg");
	this.shape_23.setTransform(88.6,-6.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag4BLIAEgbQAIAEAIAAQAKgBAEgEQAEgDADgKIADgHIgvhqIAkAAIAZBHIAZhHIAhAAIgwB7IgGAPQgEAHgCAEQgGAFgHACQgHACgMABQgNAAgLgFg");
	this.shape_24.setTransform(76.1,-4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSBUIAAhQIgWAAIAAgZIAWAAIAAgTQAAgKABgGQACgJAEgFQAFgHAGgDQAJgDANAAQALAAAIACIgCAcQgGgDgEABQgJgBgDAEQgEAEAAAKIAAARIAYAAIAAAZIgYAAIAABQg");
	this.shape_25.setTransform(60.1,-9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQBNIAAiZIAgAAIAACZg");
	this.shape_26.setTransform(52.9,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-20,137,98);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAYIgIgGIAJgJIAEADIAGACIADgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgCgEgBIgGgDIgFgBIgEgDIgDgBIgBgGQAAgEACgEIAEgFQADgCAEgBIAFgBQAGAAAEABIAEACIAEAEIgJAJIgEgEIgFgBIgBABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAACADABIAIACIAEACIAEABIADADIABAGQAAAFgCADQgCADgDACIgHADIgGAAIgLgBg");
	this.shape.setTransform(141.7,674.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAlIgPgYIAAAYIgPAAIAAhJIAPAAIAAAsIAPgRIASAAIgTAUIAUAag");
	this.shape_1.setTransform(137.1,673.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAYIAAguIAQAAIAAAIQAAgFADgCQADgCAGAAIAEAAIAAAOIgGgBIgGABQgDABgBADIAAAEIAAAFIAAAUg");
	this.shape_2.setTransform(132.5,674.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAYQgFgDgDgDQgFgDgCgFIgBgEIgBgGIACgJQACgEAFgEQADgDAFgCQAFgCAEAAQAFAAAFACQAFACADADQAFAEACAEIABAJIAAAGIgBAEQgCAFgFADQgDADgFADQgFABgFAAQgEAAgFgBgAgDgJQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgBADIgBAEIABAEIABAFIAFACIADABIAFgBIADgCIACgFIABgEIgBgEIgCgDIgDgCIgFgBIgDABg");
	this.shape_3.setTransform(127.5,674.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJAYIgJgfIgIAfIgPAAIgSgvIAQAAIAKAdIAJgdIAOAAIAJAdIAJgdIAQAAIgSAvg");
	this.shape_4.setTransform(120.5,674.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAYQgFgDgEgDQgDgDgCgFIgCgEIAAgGIACgJQACgEADgEIAJgFQAFgCAEAAQAFAAAEACIAHAFQADAEACAEQABAFAAAEIAAAEIggAAQAAAFADACQAEADACAAQADAAADgCIAFgEIAKAIIgEADIgFADIgGADIgFAAQgEAAgFgBgAAJgEQAAgDgCgDQgDgDgEAAIgCABIgDACQgDADAAADIARAAIAAAAg");
	this.shape_5.setTransform(113.8,674.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAYIAAguIAQAAIAAAIQAAgFADgCQADgCAFAAIAGAAIAAAOIgHgBIgHABQgCABgBADIAAAEIAAAFIAAAUg");
	this.shape_6.setTransform(109.4,674.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAkIAAgvIANAAIAAAvgAgEgUQgDgDAAgDQAAgEADgCQACgDACAAQADAAADADQACACAAAEQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_7.setTransform(106.1,673.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAmIAAgkIgKAAIAAgLIAKAAIAAgIIABgIQABgEACgCQACgDACgBQAEgCAFAAIAJABIgBANIgEgBQgEAAgCACQgBABAAAEIAAAIIAKAAIAAALIgKAAIAAAkg");
	this.shape_8.setTransform(103.3,673.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAYIAAguIAPAAIAAAIQABgFADgCQADgCAGAAIAEAAIAAAOIgGgBIgGABQgDABgBADIgBAEIAAAFIAAAUg");
	this.shape_9.setTransform(97.1,674.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAYQgFgDgEgDQgDgDgCgFIgCgEIAAgGIACgJQACgEADgEIAJgFQAFgCAEAAQAFAAAEACIAHAFQADAEACAEQABAFAAAEIAAAEIggAAQAAAFADACQAEADACAAQADAAADgCIAFgEIAKAIIgEADIgFADIgGADIgFAAQgEAAgFgBgAAJgEQAAgDgCgDQgDgDgEAAIgCABIgDACQgDADAAADIARAAIAAAAg");
	this.shape_10.setTransform(92.2,674.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AABAfIgDgCIgFgFQgBgDAAgEIAAgVIgKAAIAAgMIAKAAIAAgPIANAAIAAAPIANAAIAAAMIgNAAIAAAOQAAAEABADIACACIAFAAQAEAAABgBIAAAMQgEABgGAAIgHAAg");
	this.shape_11.setTransform(87.5,673.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAmIAAgkIgKAAIAAgLIAKAAIAAgIIAAgIQABgEACgCQACgDACgBQAEgCAFAAIAJABIAAANIgGgBQgDAAgBACQgCABAAAEIAAAIIALAAIAAALIgLAAIAAAkg");
	this.shape_12.setTransform(84.1,673.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAjIgGgPIgaAAIgFAPIgRAAIAehFIALAAIAeBFgAAIAHIgIgUIgHAUIAPAAg");
	this.shape_13.setTransform(78.7,673.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAYIAAguIAOAAIAAAIQABgFADgCQAEgCAFAAIAEAAIAAAOIgGgBIgHABQgCABgBADIgBAEIAAAFIAAAUg");
	this.shape_14.setTransform(70.7,674.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAYQgFgDgEgDQgDgDgCgFIgCgEIAAgGIACgJQACgEADgEIAJgFQAFgCAEAAQAFAAAEACIAHAFQADAEACAEQABAFAAAEIAAAEIggAAQAAAFADACQAEADACAAQADAAADgCIAFgEIAKAIIgEADIgFADIgGADIgFAAQgEAAgFgBgAAJgEQAAgDgCgDQgDgDgEAAIgCABIgDACQgDADAAADIARAAIAAAAg");
	this.shape_15.setTransform(65.9,674.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAYIgUgvIAQAAIAKAfIABAAIALgfIAPAAIgTAvg");
	this.shape_16.setTransform(60.5,674.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAjIAAhFIAuAAIAAAOIgfAAIAAAOIAdAAIAAAMIgdAAIAAAPIAgAAIAAAOg");
	this.shape_17.setTransform(54.9,673.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAiIACgMIAHABQAEAAADgCIADgGIABgDIgVgvIAQAAIAKAgIALggIAQAAIgWA3IgDAGIgCAGIgFADIgJABQgGAAgFgCg");
	this.shape_18.setTransform(46.5,675.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGAlIAAhJIANAAIAABJg");
	this.shape_19.setTransform(42.6,673.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAkIAAgvIANAAIAAAvgAgEgUQgDgDAAgDQAAgEADgCQACgDACAAQADAAADADQACACAAAEQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_20.setTransform(40.3,673.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAkIAAhGIAOAAIAAAHQACgDAEgDIAEgBIADgBQAFAAAFACQAEACADADIAGAIQABAFAAAGQAAAEgBAFQgCADgDAEQgDADgEACQgEACgFAAIgHgBQgEgCgDgDIAAAAIAAAcgAgEgUQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCADIgBAGIABAEIACAFIAEAAIAEABIAEgBIAEAAIACgFIABgEIgBgGIgCgDIgEgCIgEgBIgEABg");
	this.shape_21.setTransform(36.2,675.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAkIAAhGIAOAAIAAAHQACgDAEgDIAEgBIADgBQAGAAAEACQAEACADADIAGAIQABAFAAAGQAAAEgBAFQgCADgDAEQgDADgEACQgEACgFAAIgHgBQgEgCgCgDIgBAAIAAAcgAgEgUQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgCADIgBAGIABAEIACAFIAEAAIAEABIAEgBIAEAAIACgFIABgEIgBgGIgCgDIgEgCIgEgBIgEABg");
	this.shape_22.setTransform(30.2,675.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLAYQgDgBgDgCQgCgCgBgCQgCgDAAgEIABgGIADgEQACAAAGgDQAHgCAMAAQAAgEgDgDQgDgCgDAAQgCAAgDACIgGAEIgIgIIAFgDIAFgDIAKgCQAGAAAEACQAFACACADQADADABAFIABAJIAAAYIgOAAIAAgGIAAAAIgDADIgEADQgCABgFAAIgGgBgAgHAKQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQACACADAAQACAAAEgDIACgCIABgEIAAgEIgEAAQgMABAAAHg");
	this.shape_23.setTransform(24.4,674.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAPAjIAAgfIgcAAIAAAfIgQAAIAAhFIAQAAIAAAbIAcAAIAAgbIAPAAIAABFg");
	this.shape_24.setTransform(18.2,673.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLAYIgIgGIAJgKIAEAEIAGACIADgBQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgCgEgBIgGgCIgFgCIgEgDIgDgBIgBgHQAAgDACgEIAEgFQADgCAEgBIAFgBQAGAAAEABIAEADIAEADIgJAJIgEgDIgFgCIgBACQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAACADABIAIACIAEACIAEABIADADIABAGQAAAEgCAEQgCADgDACIgHADIgGAAIgLgBg");
	this.shape_25.setTransform(142.7,675.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAGAlIgPgYIAAAYIgPAAIAAhJIAPAAIAAAsIAPgRIASAAIgTAUIAUAag");
	this.shape_26.setTransform(138.1,674.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAYIAAguIAPAAIAAAIQABgFADgCQADgCAGAAIAEAAIAAAOIgGgBIgGABQgDABgBADIgBAEIAAAFIAAAUg");
	this.shape_27.setTransform(133.5,675.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJAYQgFgCgEgEQgDgDgDgFIgBgEIgBgGIACgJQADgEADgEQAEgDAFgCQAFgCAEAAQAFAAAFACQAFACADADQAFAEABAEIACAJIAAAGIgCAEQgBAFgFADQgDAEgFACQgFABgFAAQgEAAgFgBgAgDgJQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABgBAAIgCADIAAAEIAAAFIACADIAFADIADABIAFgBIADgDIACgDIACgFIgCgEIgCgDIgDgCIgFgBIgDABg");
	this.shape_28.setTransform(128.5,675.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAJAYIgJgfIgIAfIgPAAIgSgvIAQAAIAKAdIAJgdIAOAAIAJAdIAJgdIAQAAIgSAvg");
	this.shape_29.setTransform(121.5,675.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAYQgFgCgEgEQgDgDgCgFIgCgEIAAgGIACgJQACgEADgEIAJgFQAFgCAEAAQAFAAAEACIAHAFQADAEACAEQABAFAAAEIAAAFIggAAQAAAEADACQAEADACAAQADAAADgCIAFgEIAKAIIgEADIgFAEIgGACIgFAAQgEAAgFgBgAAJgEQAAgDgCgDQgDgDgEAAIgCABIgDACQgDADAAADIARAAIAAAAg");
	this.shape_30.setTransform(114.8,675.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAYIAAguIAQAAIAAAIQAAgFADgCQADgCAFAAIAFAAIAAAOIgGgBIgGABQgDABgBADIAAAEIAAAFIAAAUg");
	this.shape_31.setTransform(110.4,675.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAkIAAgvIANAAIAAAvgAgEgUQgDgDAAgDQAAgEADgCQACgDACAAQADAAACADQADACAAAEQAAADgDADQgCADgDAAQgCAAgCgDg");
	this.shape_32.setTransform(107.1,674.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIAmIAAgkIgKAAIAAgLIAKAAIAAgIIABgHQABgEACgDQACgDACgBQAEgCAFAAIAJABIgBANIgEgBQgEAAgCACQgCABAAAEIAAAIIALAAIAAALIgLAAIAAAkg");
	this.shape_33.setTransform(104.3,674.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPAYIAAguIAOAAIAAAIQABgFADgCQAEgCAFAAIAEAAIAAAOIgGgBIgGABQgDABgBADIgBAEIAAAFIAAAUg");
	this.shape_34.setTransform(98.1,675.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHAYQgFgCgEgEQgDgDgCgFIgCgEIAAgGIACgJQACgEADgEIAJgFQAFgCAEAAQAFAAAEACIAHAFQADAEACAEQABAFAAAEIAAAFIggAAQAAAEADACQAEADACAAQADAAADgCIAFgEIAKAIIgEADIgFAEIgGACIgFAAQgEAAgFgBgAAJgEQAAgDgCgDQgDgDgEAAIgCABIgDACQgDADAAADIARAAIAAAAg");
	this.shape_35.setTransform(93.2,675.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AABAfIgDgCIgFgFQgBgDAAgEIAAgVIgKAAIAAgMIAKAAIAAgPIANAAIAAAPIANAAIAAAMIgNAAIAAAOQAAAEABADIACACIAFAAQAEAAABgBIAAAMQgEABgGAAIgHAAg");
	this.shape_36.setTransform(88.5,674.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHAmIAAgkIgKAAIAAgLIAKAAIAAgIIAAgHQABgEACgDQACgDACgBQAEgCAFAAIAJABIgBANIgFgBQgDAAgBACQgCABAAAEIAAAIIALAAIAAALIgLAAIAAAkg");
	this.shape_37.setTransform(85.1,674.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATAjIgGgPIgaAAIgFAPIgRAAIAehFIALAAIAeBFgAAIAHIgIgUIgIAUIAQAAg");
	this.shape_38.setTransform(79.7,674.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgPAYIAAguIAOAAIAAAIQABgFADgCQAEgCAFAAIAFAAIAAAOIgHgBIgHABQgCABgBADIgBAEIAAAFIAAAUg");
	this.shape_39.setTransform(71.7,675.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHAYQgFgCgEgEQgDgDgCgFIgCgEIAAgGIACgJQACgEADgEIAJgFQAFgCAEAAQAFAAAEACIAHAFQADAEACAEQABAFAAAEIAAAFIggAAQAAAEADACQAEADACAAQADAAADgCIAFgEIAKAIIgEADIgFAEIgGACIgFAAQgEAAgFgBgAAJgEQAAgDgCgDQgDgDgEAAIgCABIgDACQgDADAAADIARAAIAAAAg");
	this.shape_40.setTransform(66.9,675.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgGAYIgUgvIAQAAIAKAfIABAAIALgfIAPAAIgTAvg");
	this.shape_41.setTransform(61.5,675.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAjIAAhFIAuAAIAAAOIgfAAIAAAOIAdAAIAAAMIgdAAIAAAOIAgAAIAAAPg");
	this.shape_42.setTransform(55.9,674.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZAiIACgMIAHABQAEAAADgCIADgGIABgDIgVgvIAQAAIAKAgIAMggIAPAAIgWA3IgDAGIgCAGIgFADIgJABQgFAAgGgCg");
	this.shape_43.setTransform(47.5,676.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGAlIAAhJIANAAIAABJg");
	this.shape_44.setTransform(43.6,674.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGAkIAAgvIANAAIAAAvgAgEgUQgDgDAAgDQAAgEADgCQACgDACAAQADAAACADQADACAAAEQAAADgDADQgCADgDAAQgCAAgCgDg");
	this.shape_45.setTransform(41.3,674.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAkIAAhGIAOAAIAAAHQACgDAEgDIAEgBIADgBQAGAAAEACQAFACADADIAEAIQACAFAAAGQAAAEgCAFQgBADgDAEQgDADgEACQgEACgFAAIgHgBQgEgCgDgDIAAAAIAAAcgAgEgUQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAIgCADIgBAGIABAFIACADIAEABIAEABIAEgBIAEgBIACgDIABgFIgBgGIgCgDIgEgCIgEgBIgEABg");
	this.shape_46.setTransform(37.2,676.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAkIAAhGIAOAAIAAAHQACgDAEgDIAEgBIADgBQAFAAAFACQAEACADADIAGAIQABAFAAAGQAAAEgBAFQgCADgDAEQgDADgEACQgEACgFAAIgHgBQgEgCgCgDIgBAAIAAAcgAgEgUQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAIgCADIgBAGIABAFIACADIAEABIAEABIAEgBIAEgBIACgDIABgFIgBgGIgCgDIgEgCIgEgBIgEABg");
	this.shape_47.setTransform(31.2,676.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgLAYQgDAAgDgDQgCgCgBgCQgCgDAAgEIABgFIADgFQACAAAGgCQAHgDAMAAQAAgEgDgCQgDgDgDAAQgCAAgDACIgGAEIgIgIIAFgDIAFgDIAKgCQAGAAAEACQAFACACADQADADABAFIABAJIAAAYIgOAAIAAgGIAAAAIgDADIgEADQgCABgFAAIgGgBgAgHAJQAAABAAABQAAAAAAABQAAAAABABQAAAAABABQACABADAAQACAAAEgDIACgCIABgEIAAgEIgEAAQgMABAAAGg");
	this.shape_48.setTransform(25.4,675.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAPAjIAAgfIgcAAIAAAfIgQAAIAAhFIAQAAIAAAbIAcAAIAAgbIAPAAIAABFg");
	this.shape_49.setTransform(19.2,674.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// Layer 1
	this.instance = new lib.mk_hea();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,800);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(23.1,606.4,1,1,0,0,0,14.3,7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.3,593.4,1,1,0,0,0,71.5,7);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_2 = new lib.pandora_bg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-55,160,800);


// stage content:
(lib.rl_FLRES1862219_160x600 = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({alpha:0.73},11,cjs.Ease.get(1)).wait(64).to({alpha:0},9).wait(75).to({alpha:0.531},12,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,138,1,1,0,0,0,150,248);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(184).to({_off:false},0).to({alpha:1},9).wait(47).to({y:303.5},40,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,218,1,1,0,0,0,150,248);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({y:67},29,cjs.Ease.get(1)).wait(203));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,270,160,800);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;