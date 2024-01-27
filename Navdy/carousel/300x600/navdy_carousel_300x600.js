(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"navdy_carousel_300x600_atlas_P_", frames: [[814,0,750,1016],[0,0,812,974],[892,1184,219,86],[442,1018,448,166],[0,976,440,176],[0,1154,390,150],[892,1018,274,164]]},
		{name:"navdy_carousel_300x600_atlas_NP_", frames: [[752,592,750,590],[0,592,750,590],[0,0,750,590],[752,0,750,590]]}
];


// symbols:



(lib.dash = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hand_blur = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.navdylogo = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.navdy0 = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.navdy1 = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.navdy2 = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.navdy3 = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.road_city = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.road_country = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.road_night = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.road_ocean = function() {
	this.spriteSheet = ss["navdy_carousel_300x600_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.m_screen3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image
	this.instance = new lib.navdy3();
	this.instance.parent = this;
	this.instance.setTransform(116,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// placeholder
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().dr(-253,-107.5,506,215);
	this.shape.setTransform(253,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_screen3, new cjs.Rectangle(0,0,506,215), null);


(lib.m_screen2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image
	this.instance = new lib.navdy2();
	this.instance.parent = this;
	this.instance.setTransform(58,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// placeholder
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0)").s().dr(-253,-107.5,506,215);
	this.shape.setTransform(253,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_screen2, new cjs.Rectangle(0,0,506,215), null);


(lib.m_screen1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image
	this.instance = new lib.navdy1();
	this.instance.parent = this;
	this.instance.setTransform(33,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// placeholder
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(65,65,65,0)").s().dr(-253,-107.5,506,215);
	this.shape.setTransform(253,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_screen1, new cjs.Rectangle(0,0,506,215), null);


(lib.m_screen0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image
	this.instance = new lib.navdy0();
	this.instance.parent = this;
	this.instance.setTransform(29,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// placeholder
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0)").s().dr(-253,-107.5,506,215);
	this.shape.setTransform(253,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_screen0, new cjs.Rectangle(0,0,506,215), null);


(lib.m_navbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_navbutton, new cjs.Rectangle(0,0,16,16), null);


(lib.m_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.navdylogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_logo, new cjs.Rectangle(0,0,219,86), null);


(lib.m_hand = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hand_blur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_hand, new cjs.Rectangle(0,0,812,974), null);


(lib.m_dash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_dash, new cjs.Rectangle(0,0,750,1016), null);


(lib.m_arrowbutton = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.008)").s().p("AhjC0IAAlnIDHAAIAAFng");
	this.shape.setTransform(10,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// arrow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#64BBD2").s().p("Ah/D9IDkj9Ijkj8IAPgOIDwEKIjwELg");
	this.shape_1.setTransform(9.6,18,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_arrowbutton, new cjs.Rectangle(0,0,20,36), null);


(lib.m_image3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image
	this.instance = new lib.road_ocean();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_image3, new cjs.Rectangle(0,0,750,590), null);


(lib.m_image2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image
	this.instance = new lib.road_city();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_image2, new cjs.Rectangle(0,0,750,590), null);


(lib.m_image1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image
	this.instance = new lib.road_country();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_image1, new cjs.Rectangle(0,0,750,590), null);


(lib.m_image0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image
	this.instance = new lib.road_night();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_image0, new cjs.Rectangle(0,0,750,590), null);


(lib.m_ctatext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNApQgIgEgHgFQgGgGgDgIQgEgIABgKQAAgIADgJQADgHAGgGQAFgGAIgDQAIgEAIAAQAJAAAHADQAIADAFAGQAGAGADAHQADAIAAAKIgBAGIg8AAIADAJIAGAHIAIAEQAEACAFAAQAFAAAGgCQAGgCAHgDIAGAOQgIAFgJACQgJACgHAAQgJAAgIgDgAAVgHIgDgIIgDgGQgDgDgDgBQgDgBgFAAQgDAAgDABQgEABgDADIgFAGIgCAIIAoAAIAAAAg");
	this.shape.setTransform(107.4,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAqIAAhSIARAAIADANQADgHAGgEQAGgDAJAAIAKABIgCARIgLgBQgEAAgEACIgHAFQgBADgCAEQgBAFgBAFIAAAqg");
	this.shape_1.setTransform(99.7,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRApQgJgEgFgFQgHgGgCgIQgEgIAAgKQAAgIAEgJQACgHAHgGQAFgGAJgDQAIgEAJAAQAKAAAIAEQAIADAHAGQAFAGAEAHQADAJAAAIQAAAKgDAIQgEAIgFAGQgHAFgIAEQgIADgKAAQgJAAgIgDgAgIgYQgFACgDAEQgCADgCAFQgCAFAAAFQAAAGACAFQACAFACADQADAEAFACQAEACAEAAQAFAAAEgCQAFgCACgEQADgDACgFQACgFAAgGQAAgFgCgFQgCgFgDgDQgCgEgFgCQgEgCgFAAQgEAAgEACg");
	this.shape_2.setTransform(90.7,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmA5IAAhTIgfArIgMAAIgggrIAABTIgVAAIAAhxIAWAAIAkAzIAlgzIAWAAIAABxg");
	this.shape_3.setTransform(78.3,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATArIAAgxQAAgEgCgDQgBgEgCgCQgCgCgEgBQgDgCgEAAIgHACQgDABgDADIgEAHQgCAEAAAFIAAAtIgWAAIAAhTIASAAIACANQAFgHAIgEQAHgEAIAAQAHAAAGADQAGACAEAEQAFAFACAFQADAGAAAHIAAA1g");
	this.shape_4.setTransform(61.8,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAqIAAhSIASAAIACANQAEgHAFgEQAHgDAIAAIAKABIgCARIgJgBQgFAAgEACIgHAFQgCADgBAEQgBAFAAAFIAAAqg");
	this.shape_5.setTransform(53.7,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVApQgFgDgCgFQgFAFgIADQgGADgHAAQgHAAgFgCQgGgCgEgEQgEgDgCgFQgCgFAAgFQAAgHACgFQADgFAFgDQAFgDAHgCQAHgCAJAAQAIAAAHACIAAgFQAAgGgEgEQgFgEgHAAIgNABIgOAEIgGgPQAKgDAJgCQAIgCAJAAQAHAAAGADQAHACAEAEQAFAEACAGQADAGAAAHIAAAgQAAAGAGAAIAEAAIABAQIgLABQgGAAgFgDgAgKADIgGADIgEAFQgBACAAADQAAAFAEAEQAEADAGAAIAHgBIAGgEQADgCABgEIABgIIAAgFQgGgCgGAAIgJABg");
	this.shape_6.setTransform(45.4,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNApQgIgEgHgFQgGgGgDgIQgEgIABgKQAAgIACgJQAEgHAFgGQAGgGAIgDQAIgEAJAAQAIAAAHADQAIADAFAGQAFAGAEAHQADAIgBAKIAAAGIg8AAIADAJIAGAHIAIAEQAEACAEAAQAGAAAGgCQAGgCAHgDIAHAOQgJAFgJACQgJACgHAAQgJAAgIgDgAAVgHIgDgIIgDgGQgDgDgDgBQgDgBgEAAQgEAAgDABQgEABgDADIgFAGIgCAIIAoAAIAAAAg");
	this.shape_7.setTransform(35.9,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA5IAAhxIAXAAIAABfIAxAAIAAASg");
	this.shape_8.setTransform(27.2,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_ctatext, new cjs.Rectangle(0,0,134,24.7), null);


(lib.m_ctabg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02BDD4").s().p("AnkC5QhNAAg2g2Qg2g3AAhMQAAhMA2g2QA2g2BNAAIPJAAQBMAAA2A2QA3A2AABMQAABMg3A3Qg2A2hMAAg");
	this.shape.setTransform(67,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_ctabg, new cjs.Rectangle(0,0,134,37), null);


(lib.m_caption3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(281.3,75.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAsQgFgCgEgEQgDgFgCgGQgDgGAAgHQAAgIADgGQACgFADgFQAEgEAFgCQAGgDAGAAIAFABIAGACIAFAEIADAFIAAgnIALAAIAABbIgIAAIgCgLIgDAGIgGADIgGADIgFABQgGAAgGgDgAgGgJIgHAFIgDAIQgCAEAAAGQAAAFACAEQABAFACADIAHAGQAEABAEAAQADAAAEgBQADgCACgDIAFgGQABgDAAgEIAAgLQAAgEgBgDIgFgGIgFgEQgEgBgDgBQgEAAgEACg");
	this.shape_1.setTransform(275.7,71.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAeQgCgDgBgEQgEAEgGAEQgFACgHAAQgEAAgEgCIgHgDQgDgDgCgDQgBgEAAgEQAAgFABgEQACgDAFgDQADgCAGgBQAFgCAGAAQAHAAAHACIAAgHQAAgDgCgCIgDgFIgEgCIgFgBQgGAAgFABIgKADIgEgHIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQACAEAAAEIAAAeQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIAEgBIABAIIgHABQgGAAgDgDgAgJABQgEABgCACIgEADIgBAGIABAFIADAEIAFACIAFABQAEAAACgBIAGgEIAEgGQACgDAAgFIAAgFIgNgBIgIABg");
	this.shape_2.setTransform(268.9,72.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_3.setTransform(261.4,72.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAIAAIACAMIADgGIAEgDIAFgEIAHAAIAIABIgCAIIgHgBQgFAAgCACQgDACgDACQgCADgBAEQgBAEAAAFIAAAhg");
	this.shape_4.setTransform(255.6,72.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_5.setTransform(246.2,72.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgCgGQAAgDgDgCIgFgDIgHgBQgDAAgDABIgHAEIgDAGQgCAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAFAAAFACQAEABAEAEIAEAHQACAEAAAFIAAApg");
	this.shape_6.setTransform(239,71.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_7.setTransform(232.5,72);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAuIAAg1IgNAAIAAgJIANAAIAAgLQAAgEABgDQABgEADgDQADgCACgBIAIgBIAMABIgBAIIgJgBQgFAAgDADQgDADAAAFIAAAKIASAAIAAAJIgSAAIAAA1g");
	this.shape_8.setTransform(224.6,71.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_9.setTransform(218.3,72.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAuIAAg1IgNAAIAAgJIANAAIAAgLQAAgEABgDQABgEADgDQADgCACgBIAIgBIAMABIgBAIIgJgBQgFAAgDADQgDADAAAFIAAAKIASAAIAAAJIgSAAIAAA1g");
	this.shape_10.setTransform(209.2,71.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAuIAAg1IgNAAIAAgJIANAAIAAgLQAAgEABgDQABgEADgDQADgCACgBIAIgBIAMABIgBAIIgJgBQgFAAgDADQgDADAAAFIAAAKIASAAIAAAJIgSAAIAAA1g");
	this.shape_11.setTransform(204.5,71.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_12.setTransform(198.1,72.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAgIgMgDIACgIIALADIAJABQAGAAADgCQAFgDAAgFQgBgDgBgCIgEgEIgLgDIgIgCIgFgDQgDgDgBgCQgCgDAAgEQAAgFACgCQACgEACgCQADgCAFgCIAIgBIAKABIAMADIgDAIIgKgDIgIgBQgFAAgEADQgDACAAAFQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIAMADIAGACIAGADIAEAFQABAEABAEQgBAEgBADQgCAEgDACQgDACgEABQgEACgGAAIgKgBg");
	this.shape_13.setTransform(188.4,72.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_14.setTransform(182,72.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_15.setTransform(175.2,74.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_16.setTransform(168.4,72.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIADgGIAFgDIAEgEIAGAAIAJABIgBAIIgJgBQgEAAgDACQgCACgCACQgDADgBAEQgBAEgBAFIAAAhg");
	this.shape_17.setTransform(159.7,72.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_18.setTransform(153,73);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_19.setTransform(145.5,72.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_20.setTransform(138.4,74.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMAtQgGgBgHgDIADgIIALAEIAKABIAIgBQAEgBACgDQADgDACgDQABgDABgEIAAgMIgEAFIgFADIgGADIgFABQgGAAgGgDQgFgCgEgEQgDgFgCgGQgDgFAAgHQAAgIADgGQACgGADgFQAEgEAFgCQAGgDAGAAIAFABIAHADIAEADIAFAGIABgLIAIAAIAAA/QAAAGgCAFQgDAFgDAEQgFAEgFABQgHADgFAAIgMgCgAgGgkIgHAFIgDAJQgCAEAAAGQAAAFACAEQABAEACADIAHAGQAEABAEAAQAEAAADgBQADgCACgDIAFgFQABgDAAgEIAAgLQAAgEgBgDIgFgHIgFgEQgDgBgEgBQgEAAgEACg");
	this.shape_21.setTransform(127.9,74.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgCgDgCgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAEgGIAFgEIAHgDIAGAAQAFAAAFABQAEACADADIAFAHQACAFAAAFIAAAog");
	this.shape_22.setTransform(120.7,72.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_23.setTransform(115.3,71.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOAuIgXgcIgHAHIAAAVIgKAAIAAhbIAKAAIAAA7IAdgeIANAAIgcAcIAcAig");
	this.shape_24.setTransform(110.9,71.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARAeQgDgDgCgEQgDAEgGAEQgFACgGAAQgFAAgEgCIgHgDQgDgDgBgDQgCgEgBgEQABgFACgEQACgDADgDQAEgCAFgBQAGgCAHAAQAGAAAHACIAAgHQAAgDgCgCIgCgFIgGgCIgEgBQgGAAgFABIgLADIgCgHIAMgEIANgBQAEAAAEABQAFACADADIAFAHQABAEAAAEIAAAeQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIACgBIABAIIgGABQgFAAgDgDgAgIABQgEABgDACIgEADIgBAGIABAFIADAEIAFACIAFABQAEAAACgBIAHgEIADgGQACgDAAgFIAAgFIgMgBIgIABg");
	this.shape_25.setTransform(103.9,72.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_26.setTransform(97.6,72);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIADgGIAFgDIAEgEIAHAAIAIABIgBAIIgIgBQgEAAgEACQgCACgDACQgCADgBAEQgCAEABAFIAAAhg");
	this.shape_27.setTransform(89.9,72.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_28.setTransform(83.5,72.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAfIgag+IALAAIATAzIAUgzIALAAIgaA+g");
	this.shape_29.setTransform(76.7,72.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_30.setTransform(69.9,72.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_31.setTransform(60.6,72);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_32.setTransform(54.2,73);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_33.setTransform(46.7,72.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgCgGQgBgDgCgCIgFgDIgHgBQgDAAgDABIgHAEIgDAGQgCAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAFAAAFACQAEABADAEIAGAHQABAEAAAFIAAApg");
	this.shape_34.setTransform(39.3,71.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_35.setTransform(32.8,72);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_36.setTransform(28.7,71.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAPAfIgPgyIgOAyIgLAAIgVg+IALAAIAPAyIAQgyIAIAAIARAyIAPgyIALAAIgWA+g");
	this.shape_37.setTransform(22.2,72.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_38.setTransform(269.7,56.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMAsQgFgDgEgDQgDgFgDgGQgCgGAAgIQAAgGACgHQADgFADgEQAEgFAFgCQAFgCAHAAIAFAAIAGACIAFAEIAEAFIAAgmIAKAAIAABaIgIAAIgBgKIgFAEIgEAFIgHACIgFABQgHgBgFgCgAgGgIIgHAEIgDAHQgCAFAAAFQAAAGACAEQABAFACADIAHAGQAEABAEAAQAEAAADgBQADgBACgEIAFgFQABgEAAgEIAAgKQAAgFgBgDIgFgGIgFgEQgDgCgEAAQgEABgEACg");
	this.shape_39.setTransform(262.4,53.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEAfIgag+IALAAIATAzIAUgzIALAAIgaA+g");
	this.shape_40.setTransform(255.5,55.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAQAeQgCgDgBgFQgEAGgGACQgFADgHAAQgEAAgEgCIgHgDQgDgDgCgEQgBgDgBgEQABgFABgEQADgDAEgCQADgDAGgCQAFgBAGAAQAHAAAHACIAAgHQAAgCgBgDIgEgFIgEgDIgGAAQgFgBgFACIgKADIgEgHIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQABAEABAEIAAAeQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIADgBIABAIIgHABQgFAAgEgDgAgJABQgEABgCABIgEAFIgBAFIABAFIADAEIAEACIAGACQAEAAADgCIAFgEIAFgGQABgDAAgFIAAgFIgNgBIgIABg");
	this.shape_41.setTransform(248.9,55.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAaAsIg0hIIAABIIgKAAIAAhXIALAAIA0BIIAAhIIAKAAIAABXg");
	this.shape_42.setTransform(240.2,53.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDAuIgEgEIgDgEIgCgHIAAhMIALAAIAABLQAAAEABACQACACADAAIAGgBIABAJIgJABIgGgBg");
	this.shape_43.setTransform(230.7,53.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAFACAFQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAFADADIAGAFQAFACADAAQAFAAAEgCIAHgFQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_44.setTransform(224.6,55.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAHAAIACAMIADgGIAEgDIAFgDIAHgBIAIABIgBAJIgIgBQgFAAgCABQgDABgDADQgCADgBAEQgBAEAAAFIAAAhg");
	this.shape_45.setTransform(218.8,55.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_46.setTransform(213.3,54.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQAAgDgDgCIgFgEIgHgBQgDAAgDACIgHAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAFgGIAEgEIAHgDIAGAAQAFAAAFABQAEACAEADIAEAHQACAFAAAFIAAAog");
	this.shape_47.setTransform(207,55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAFACAFQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAFADADIAGAFQAFACADAAQAFAAAEgCIAHgFQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_48.setTransform(199.4,55.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgHAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgCQgFABgDABQgEACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAEADAEQADADAEACQADABAFAAIAJgBIAIgEIAEAHIgLAFQgFACgGAAQgGAAgGgDg");
	this.shape_49.setTransform(192.5,55.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_50.setTransform(182.3,55.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAFACAFQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAFADADIAGAFQAFACADAAQAFAAAEgCIAHgFQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_51.setTransform(174.8,55.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_52.setTransform(167.7,56.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_53.setTransform(158.6,54.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_54.setTransform(152.6,55.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgDAuIgEgEIgEgEIgBgHIAAhMIAKAAIAABLQAAAEACACQABACAEAAIAHgBIAAAJIgJABIgGgBg");
	this.shape_55.setTransform(147.7,53.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQAAgDgDgCIgFgEIgHgBQgDAAgDACIgHAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAFgGIAEgEIAHgDIAGAAQAFAAAFABQAEACAEADIAEAHQACAFAAAFIAAAog");
	this.shape_56.setTransform(138.6,55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAFACAFQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAFADADIAGAFQAFACADAAQAFAAAEgCIAHgFQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_57.setTransform(131,55.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_58.setTransform(125.7,53.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_59.setTransform(121.5,54.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_60.setTransform(117.5,53.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQgBgDgCgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAFgGIAEgEIAHgDIAGAAQAGAAAEABQAEACAEADIAEAHQACAFAAAFIAAAog");
	this.shape_61.setTransform(112.2,55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgMAtQgGgBgHgDIADgIIAMAEIAJABIAIgBQAEgCACgCQAEgDABgDQACgEgBgDIAAgMIgDAFIgFAEIgFACIgGABQgGgBgFgCQgGgDgDgDQgFgFgBgGQgDgFAAgIQAAgGADgHQABgGAFgEQADgFAGgCQAFgCAGAAIAGAAIAFADIAGADIADAGIACgLIAIAAIAAA/QAAAGgCAFQgDAFgEAEQgEAEgGACQgFACgGAAIgMgCgAgGgjIgHAEIgEAIQgBAFAAAFQAAAGABAEQACAEACADIAHAGQAEABADAAQAEAAAEgBQADgBADgEIADgFQACgDAAgEIAAgKQAAgFgCgDIgDgHIgGgEQgEgCgEAAQgDABgEACg");
	this.shape_62.setTransform(104.4,56.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAFACAFQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAFADADIAGAFQAFACADAAQAFAAAEgCIAHgFQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_63.setTransform(97,55.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgHAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgCQgFABgDABQgEACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAEADAEQADADAEACQADABAFAAIAJgBIAIgEIAEAHIgLAFQgFACgGAAQgGAAgGgDg");
	this.shape_64.setTransform(90.2,55.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_65.setTransform(83.5,55.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAJAAIABAMIADgGIAFgDIAEgDIAGgBIAIABIAAAJIgJgBQgDAAgEABQgCABgCADQgDADgBAEQgBAEgBAFIAAAhg");
	this.shape_66.setTransform(77.9,55.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_67.setTransform(68.5,55.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAIAAIACAMIADgGIAEgDIAFgDIAHgBIAHABIgBAJIgIgBQgDAAgDABQgDABgDADQgCADgBAEQgCAEAAAFIAAAhg");
	this.shape_68.setTransform(62.9,55.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_69.setTransform(56.2,55.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_70.setTransform(49.8,54.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgKAgIgMgDIACgJIALAEIAJABQAGAAADgDQAFgDAAgEQgBgDgBgCIgEgEIgLgEIgHgBIgGgDQgDgCgBgDQgCgEAAgEQAAgEACgDQACgDACgCQADgCAFgCIAIgBIAKABIAMADIgDAIIgKgDIgIgBQgFAAgEACQgDADAAAEQAAABAAABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIAMADIAGADIAGACIAEAGQABADABAEQgBAEgBADQgCADgDADQgDADgEAAQgEACgGAAIgKgBg");
	this.shape_71.setTransform(44.4,55.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_72.setTransform(38,55.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgMAtQgHgBgGgDIADgIIALAEIAKABIAIgBQAEgCADgCQADgDABgDQACgEAAgDIAAgMIgEAFIgFAEIgGACIgFABQgHgBgFgCQgFgDgDgDQgFgFgCgGQgCgFAAgIQAAgGACgHQACgGAFgEQADgFAFgCQAFgCAHAAIAFAAIAHADIAEADIAFAGIABgLIAIAAIAAA/QAAAGgCAFQgCAFgEAEQgFAEgFACQgHACgFAAIgMgCgAgGgjIgGAEIgFAIQgBAFAAAFQAAAGABAEQACAEADADIAGAGQAEABAEAAQAEAAADgBQADgBADgEIADgFQACgDAAgEIAAgKQAAgFgCgDIgDgHIgGgEQgDgCgEAAQgEABgEACg");
	this.shape_73.setTransform(30.5,56.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgMAsQgFgDgDgEQgFgEgCgGQgCgGAAgIQAAgGACgHQACgFAFgEQADgFAFgCQAFgCAHAAIAFAAIAGACIAFAEIAEAFIAAgmIAKAAIAABaIgIAAIgBgKIgFAEIgEAFIgHACIgFAAQgHABgFgDgAgGgIIgGAEIgFAHQgBAFAAAFQAAAGABAFQACAEADADIAGAFQAEACAEAAQAEAAADgCQADAAACgDIAEgGQACgEAAgFIAAgJQAAgFgCgEIgEgFIgFgEQgDgBgEAAQgEAAgEACg");
	this.shape_74.setTransform(266.8,36);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgBgDgDgCIgFgEIgHgBQgDAAgEACIgGAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAGAAAEABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_75.setTransform(259.5,37.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AARAeQgDgCgCgGQgDAGgGACQgFADgGAAQgFAAgEgCIgHgEQgDgCgBgEQgCgDgBgEQABgFACgEQACgDADgCQAEgDAFgCQAGgBAHAAQAGAAAHACIAAgGQAAgEgCgCIgCgEIgGgEIgEgBQgGABgFABIgLAEIgCgIIAMgEIANgBQAEAAAEABQAFACADADIAFAHQABAEAAAFIAAAdQAAABABAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIADAAIABAIIgGAAQgFAAgDgDgAgIAAQgEABgDACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAHgEIADgGQACgDAAgEIAAgGIgMgBIgIAAg");
	this.shape_76.setTransform(252.4,37.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgBgGQgCgDgCgCIgFgDIgHgBQgDAAgEABIgGAEIgDAGQgCAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAFAAAFACQAEABADAEIAGAHQABAEAAAFIAAApg");
	this.shape_77.setTransform(245,35.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgCAtIgFgCIgDgGIgBgGIAAhMIAKAAIAABLQAAAEABACQACACADAAIAGgBIABAIIgJABIgFgBg");
	this.shape_78.setTransform(236.7,36);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAQAeQgCgCgBgGQgEAGgGACQgFADgHAAQgEAAgEgCIgHgEQgDgCgCgEQgBgDAAgEQAAgFABgEQACgDAFgCQADgDAGgCQAFgBAGAAQAHAAAHACIAAgGQAAgEgCgCIgDgEIgEgEIgFgBQgGABgFABIgKAEIgEgIIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQACAEAAAFIAAAdQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAEAAIABAIIgHAAQgGAAgDgDgAgJAAQgEABgCACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAHgEIADgGQACgDAAgEIAAgGIgNgBIgIAAg");
	this.shape_79.setTransform(231.1,37.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAIAAIACAMIADgFIAEgFIAFgCIAHgBIAHABIgBAJIgIgBQgDgBgDACQgDACgCACQgDADgBAEQgCAEAAAFIAAAhg");
	this.shape_80.setTransform(225.4,37.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_81.setTransform(218.6,37.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_82.setTransform(212.3,36.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAQAeQgCgCgBgGQgEAGgGACQgFADgHAAQgEAAgEgCIgHgEQgDgCgCgEQgBgDAAgEQAAgFABgEQACgDAFgCQADgDAGgCQAFgBAGAAQAHAAAHACIAAgGQAAgEgBgCIgEgEIgEgEIgGgBQgFABgFABIgKAEIgEgIIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQABAEABAFIAAAdQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAEAAIABAIIgHAAQgGAAgDgDgAgJAAQgEABgCACIgEAFIgBAFIABAFIADAEIAEADIAGABQAEgBACgBIAGgEIAFgGQABgDAAgEIAAgGIgNgBIgIAAg");
	this.shape_83.setTransform(206.5,37.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQgBgDgCgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAFgGIAEgEIAHgDIAGAAQAGAAAEABQAEACAEADIAEAHQACAFAAAFIAAAog");
	this.shape_84.setTransform(199.1,37.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgMAsQgFgDgEgEQgDgEgDgGQgCgGAAgIQAAgGACgHQADgFADgEQAEgFAFgCQAFgCAHAAIAFAAIAGACIAFAEIAEAFIAAgmIAKAAIAABaIgIAAIgBgKIgFAEIgEAFIgHACIgFAAQgHABgFgDgAgGgIIgGAEIgEAHQgCAFAAAFQAAAGACAFQABAEADADIAGAFQAEACAEAAQAEAAADgCQADAAACgDIAFgGQABgEAAgFIAAgJQAAgFgBgEIgFgFIgFgEQgDgBgEAAQgEAAgEACg");
	this.shape_85.setTransform(188.1,36);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgBgDgDgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAFAAAFABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_86.setTransform(180.9,37.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AARAeQgDgCgCgGQgDAGgGACQgFADgGAAQgFAAgEgCIgHgEQgDgCgBgEQgCgDAAgEQAAgFACgEQABgDAEgCQAEgDAFgCQAGgBAHAAQAGAAAHACIAAgGQAAgEgCgCIgCgEIgGgEIgEgBQgGABgFABIgLAEIgDgIIANgEIANgBQADAAAFABQAFACADADIAFAHQABAEAAAFIAAAdQAAABABAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIADAAIACAIIgHAAQgFAAgDgDgAgIAAQgEABgDACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAHgEIADgGQACgDAAgEIAAgGIgMgBIgIAAg");
	this.shape_87.setTransform(173.8,37.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgCAtIgGgCIgCgGIgBgGIAAhMIAKAAIAABLQAAAEABACQACACADAAIAGgBIABAIIgJABIgFgBg");
	this.shape_88.setTransform(165.6,36);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAQAeQgCgCgBgGQgEAGgGACQgFADgHAAQgEAAgEgCIgHgEQgDgCgBgEQgCgDAAgEQAAgFACgEQABgDAFgCQADgDAGgCQAFgBAGAAQAHAAAHACIAAgGQAAgEgCgCIgDgEIgEgEIgFgBQgGABgFABIgKAEIgEgIIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQACAEAAAFIAAAdQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAEAAIABAIIgHAAQgGAAgDgDgAgJAAQgEABgCACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAGgEIAEgGQACgDAAgEIAAgGIgNgBIgIAAg");
	this.shape_89.setTransform(160,37.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_90.setTransform(154.8,36);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAeAAIAIABQAFABAEACIAHADIAGAFIAGAHIADAHQACAEABAFIABAIIgBAJQgBAFgCAEIgDAHIgGAHIgGAFIgHAEIgJACIgIABgAgZAjIASAAQAEAAAIgCQAHgDAEgFQAFgEACgHQADgGAAgIQAAgHgDgGQgCgHgFgEQgEgFgHgDQgIgCgEAAIgSAAg");
	this.shape_91.setTransform(149,36.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgCAtIgGgCIgCgGIgBgGIAAhMIAKAAIAABLQAAAEABACQACACADAAIAGgBIABAIIgJABIgFgBg");
	this.shape_92.setTransform(139.5,36);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_93.setTransform(133.7,37.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_94.setTransform(126.8,37.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgBgGQgBgDgDgCIgFgDIgHgBQgDAAgEABIgGAEIgDAGQgCAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAGAAAEACQAEABADAEIAGAHQABAEAAAFIAAApg");
	this.shape_95.setTransform(119.6,35.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAPAfIgPgxIgOAxIgLAAIgVg+IALAAIAPAyIAQgyIAJAAIAQAyIAPgyIALAAIgWA+g");
	this.shape_96.setTransform(110.7,37.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgMAtQgGgBgHgDIADgIIALAEIAKABIAIgBQAEgCADgCQACgCACgEQACgEAAgEIAAgLIgEAFIgFAEIgGACIgFAAQgHABgFgDQgFgDgEgEQgDgEgDgGQgCgFAAgIQAAgGACgHQADgGADgEQAEgFAFgCQAFgCAHAAIAFAAIAHACIAEAEIAFAFIABgKIAIAAIAAA/QAAAGgCAFQgDAFgDAEQgFAEgFACQgHABgFAAIgMgBgAgGgjIgHAEIgDAIQgCAFAAAFQAAAGACAFQABADACADIAHAFQAEACAEAAQAEAAADgCQADAAACgDIAFgGQABgDAAgFIAAgJQAAgFgBgDIgFgHIgFgEQgDgBgEAAQgEAAgEACg");
	this.shape_97.setTransform(98.6,38.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgBgDgDgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAGAAAEABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_98.setTransform(91.3,37.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_99.setTransform(86,36);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAIAAIACAMIADgFIAEgFIAFgCIAHgBIAIABIgCAJIgHgBQgFgBgCACQgDACgDACQgCADgBAEQgBAEAAAFIAAAhg");
	this.shape_100.setTransform(82.4,37.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_101.setTransform(76,37.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_102.setTransform(69.1,37.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_103.setTransform(62.9,36.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgKAgIgNgEIADgIIALAEIAJABQAGAAAEgDQADgDAAgEQAAgDgBgCIgEgDIgMgFIgGgCIgGgCQgDgCgBgDQgCgDAAgFQAAgDACgEQACgDACgCQADgDAFgBIAJgBIAJABIALADIgCAIIgJgDIgJgCQgFAAgEADQgEADAAAEQAAABABABQAAAAAAABQAAAAAAABQABAAAAABIAEADIALAFIAHACIAGACIAEAGQABADAAAEQAAAEgBADQgCADgDADQgDACgEABQgFACgEAAIgLgBg");
	this.shape_104.setTransform(57.5,37.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_105.setTransform(48,37.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgBgGQgBgDgDgCIgFgDIgHgBQgDAAgEABIgGAEIgEAGQgBAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAGAAAEACQAEABADAEIAGAHQABAEAAAFIAAApg");
	this.shape_106.setTransform(40.8,35.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgEAsIAAhOIgfAAIAAgJIBGAAIAAAJIgeAAIAABOg");
	this.shape_107.setTransform(33.1,36.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgEBGQgFgCgDgDQgDgDgCgEQgBgEgBgGIAAh3IAQAAIAAB2QAAAFADADQACAEAGAAIAJgCIACANQgHACgHAAQgFAAgEgCg");
	this.shape_108.setTransform(227.4,13.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgTAvQgJgEgHgGQgGgHgEgJQgEgKABgLQgBgKAEgKQAEgJAGgHQAHgGAJgFQAJgDAKAAQALAAAIADQAKAFAGAGQAHAHADAJQAFAKAAAKQAAALgFAKQgDAJgHAHQgGAGgKAEQgIAEgLAAQgKAAgJgEgAgMgiQgHACgEAGQgEAEgDAIQgCAGAAAIQAAAJACAGQADAHAEAGQAEAEAHAEQAFACAHAAQAHAAAHgCQAGgEAEgEQAEgGADgHQACgGAAgJQAAgIgCgGQgDgIgEgEQgEgGgGgCQgHgEgHAAQgHAAgFAEg");
	this.shape_109.setTransform(218.1,15.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAFgIQADgEAEgCQACgCAFgCQAFgBAGAAQAFAAAHABIgCAOIgMgCQgGAAgGADQgDACgEAEQgEAEgCAHQgCAFAAAIIAAAzg");
	this.shape_110.setTransform(209,15.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AADA+QgEgCgEgEQgEgEgCgFQgCgFAAgGIAAg6IgVAAIAAgMIAVAAIAAgdIAOAAIAAAdIAgAAIAAAMIggAAIAAA4QABAIAEAFQAFAEAHAAQAGAAAJgCIABANQgKACgJAAQgGAAgGgCg");
	this.shape_111.setTransform(200.5,14.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAbAyIAAg8QAAgGgCgEQgBgFgEgDQgDgEgFgCQgFgBgFAAQgFAAgGACQgFACgEAEQgEAFgCAFQgDAGAAAHIAAA2IgPAAIAAhgIAMAAIACARIAGgIIAJgHQAEgCAFgBIAKgCQAIAAAHADQAHACAFAFQAFAFADAHQACAGAAAIIAAA/g");
	this.shape_112.setTransform(190.8,15.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgTAvQgJgEgGgGQgIgHgDgJQgDgKgBgLQABgKADgKQADgJAIgHQAGgGAJgFQAJgDAKAAQALAAAJADQAIAFAHAGQAHAHAEAJQADAKABAKQgBALgDAKQgEAJgHAHQgHAGgIAEQgJAEgLAAQgKAAgJgEgAgNgiQgFACgFAGQgEAEgDAIQgDAGABAIQgBAJADAGQADAHAEAGQAFAEAFAEQAGACAHAAQAHAAAGgCQAGgEAEgEQAFgGADgHQACgGAAgJQAAgIgCgGQgDgIgFgEQgEgGgGgCQgGgEgHAAQgHAAgGAEg");
	this.shape_113.setTransform(179.1,15.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgMAvQgIgEgHgGQgGgHgEgJQgDgKgBgLQABgKADgKQAEgJAGgHQAHgGAIgFQAKgDAKAAQAIAAAJACQAJADAHAGIgGALQgGgEgHgCQgGgDgGAAQgIAAgGADQgGACgFAGQgEAEgDAIQgDAGABAIQgBAIADAHQADAHAEAGQAFAFAGACQAGADAIAAQAGAAAGgCQAHgDAGgEIAGALQgHAFgJADQgJADgIAAQgKAAgKgEg");
	this.shape_114.setTransform(168.5,15.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgQAxIgTgGIADgMIARAGIAPACQAJAAAFgFQAHgEgBgHQABgEgDgEQgCgDgFgBQgDgCgPgFIgKgDIgIgFQgFgDgCgFQgDgEABgHQgBgFADgGQADgFAEgDQAFgEAGgCQAIgCAGAAIAQABIARAGIgEALIgPgEQgGgCgHAAQgIAAgGAEQgGAFABAGQAAAFACADIAGAEIASAHIALADIAJAEQADADADAFQACAGAAAGQAAAGgCAFQgDAGgFADQgFAEgHACQgGACgIAAQgHAAgJgCg");
	this.shape_115.setTransform(154.2,15.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgRAxIgSgGIAEgMIAQAGIAPACQAIAAAGgFQAGgEABgHQAAgEgDgEQgCgDgEgBQgEgCgOgFIgLgDIgJgFQgEgDgCgFQgDgEAAgHQAAgFADgGQACgFAGgDQAEgEAHgCQAGgCAHAAIAQABIARAGIgEALIgPgEQgHgCgGAAQgIAAgGAEQgFAFgBAGQABAFACADIAGAEIASAHIAKADIAJAEQAFADABAFQADAGAAAGQAAAGgDAFQgCAGgFADQgFAEgHACQgGACgIAAQgIAAgJgCg");
	this.shape_116.setTransform(145.3,15.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgPAvQgIgEgHgGQgIgHgDgJQgDgKgBgLQABgKADgKQADgJAGgHQAHgGAIgFQAJgDAJAAQALAAAHADQAIAEAHAGQAGAHADAJQACAJAAALIAAAFIhJAAQAAAIACAGQADAHAFAEQAFAFAGACQAHACAHABQAGAAAHgCQAJgCAHgFIAFALQgKAGgJABQgJADgIAAQgKAAgKgEgAAegFQAAgIgCgGQgCgGgEgEQgEgEgFgCQgFgDgHAAQgFAAgFADQgFABgFAFQgEAEgDAGQgCAGAAAIIA6AAIAAAAg");
	this.shape_117.setTransform(135.5,15.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgFBGQgEgCgDgDQgEgDgBgEQgCgEAAgGIAAh3IAQAAIAAB2QAAAFADADQADAEAFAAIAKgCIACANQgIACgIAAQgEAAgFgCg");
	this.shape_118.setTransform(127.9,13.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AADA+QgEgCgEgEQgEgEgCgFQgCgFAAgGIAAg6IgVAAIAAgMIAVAAIAAgdIAOAAIAAAdIAgAAIAAAMIggAAIAAA4QABAIAFAFQAEAEAHAAQAGAAAJgCIACANQgLACgJAAQgHAAgFgCg");
	this.shape_119.setTransform(120.3,14.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAFgIQADgEAEgCQACgCAFgCQAFgBAGAAQAFAAAHABIgCAOIgMgCQgGAAgGADQgDACgEAEQgEAEgCAHQgCAFAAAIIAAAzg");
	this.shape_120.setTransform(113.2,15.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgTAvQgJgEgGgGQgIgHgDgJQgEgKAAgLQAAgKAEgKQADgJAIgHQAGgGAJgFQAJgDAKAAQAKAAAJADQAKAFAHAGQAGAHAEAJQADAKAAAKQAAALgDAKQgEAJgGAHQgHAGgKAEQgJAEgKAAQgKAAgJgEgAgNgiQgFACgFAGQgFAEgCAIQgCAGgBAIQABAJACAGQACAHAFAGQAFAEAFAEQAHACAGAAQAHAAAGgCQAHgEADgEQAFgGACgHQADgGAAgJQAAgIgDgGQgCgIgFgEQgDgGgHgCQgGgEgHAAQgGAAgHAEg");
	this.shape_121.setTransform(102.9,15.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgNBHIAAhTIgVAAIAAgNIAVAAIAAgSQAAgFACgGQACgFAEgEQAEgEAEgCQAFgCAHAAQAJABALACIgCANQgJgCgGAAQgHgBgEAFQgGAEAAAIIAAAQIAcAAIAAANIgcAAIAABTg");
	this.shape_122.setTransform(93.7,13.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgNBHIAAhTIgUAAIAAgNIAUAAIAAgSQAAgFACgGQACgFAEgEQAEgEAEgCQAGgCAGAAQAJABAKACIgCANQgIgCgGAAQgHgBgFAFQgEAEAAAIIAAAQIAbAAIAAANIgbAAIAABTg");
	this.shape_123.setTransform(86.3,13.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgsBDIAAiFIBWAAIAAANIhFAAIAAAuIA+AAIAAAMIg+AAIAAAxIBHAAIAAANg");
	this.shape_124.setTransform(76.9,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_caption3, new cjs.Rectangle(0,0,300,81.7), null);


(lib.m_caption2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(260,75.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_1.setTransform(254.9,72.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgCgDgCgCIgFgEIgHgBQgDAAgDACIgHAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAFAAAFABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_2.setTransform(247.7,72.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_3.setTransform(240.1,72.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgBgGQgBgDgDgCIgFgDIgHgBQgDAAgEABIgFAEIgFAGQgBAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAFAAAFACQAEABADAEIAGAHQABAEAAAFIAAApg");
	this.shape_4.setTransform(232.6,71.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_5.setTransform(225.2,74.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAJAAIABAMIADgGIAFgDIAEgEIAGAAIAIABIAAAIIgJgBQgDAAgEACQgCACgCACQgDADgBAEQgBAEgBAFIAAAhg");
	this.shape_6.setTransform(216.1,72.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_7.setTransform(209.3,73);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_8.setTransform(201.8,72.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_9.setTransform(194.7,74.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgCgDgCgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAEgGIAFgEIAHgDIAGAAQAFAAAFABQAEACADADIAFAHQACAFAAAFIAAAog");
	this.shape_10.setTransform(184.6,72.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_11.setTransform(176.9,72.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAgIgNgDIADgIIALADIAJABQAGAAAEgCQADgDAAgFQABgDgCgCIgEgEIgMgDIgHgCIgFgDQgDgDgBgCQgCgDAAgEQAAgFACgCQACgEADgCQADgCAEgCIAJgBIAKABIAKADIgCAIIgJgDIgJgBQgFAAgEADQgEACAAAFQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIALADIAHACIAGADIAEAFQABAEAAAEQAAAEgBADQgCAEgDACQgDACgEABQgFACgEAAIgLgBg");
	this.shape_12.setTransform(167.2,72.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_13.setTransform(160.7,74.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_14.setTransform(153.2,74.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAQAeQgDgDgBgEQgDAEgGAEQgFACgGAAQgFAAgEgCIgHgDQgDgDgCgDQgCgEAAgEQAAgFACgEQACgDAFgDQADgCAFgBQAGgCAGAAQAHAAAHACIAAgHQAAgDgBgCIgEgFIgEgCIgGgBQgFAAgFABIgKADIgDgHIAMgEIAMgBQAFAAAEABQAFACADADIAFAHQABAEABAEIAAAeQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIACgBIABAIIgGABQgGAAgDgDgAgIABQgEABgDACIgEADIgBAGIABAFIADAEIAEACIAGABQAEAAADgBIAFgEIAFgGQABgDAAgFIAAgFIgNgBIgHABg");
	this.shape_15.setTransform(145.9,72.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_16.setTransform(135.7,72.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgBgGQgCgDgCgCIgFgDIgHgBQgDAAgDABIgHAEIgDAGQgCAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAFAAAFACQAEABADAEIAGAHQABAEAAAFIAAApg");
	this.shape_17.setTransform(128.5,71.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_18.setTransform(122,72);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_19.setTransform(112.5,72.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_20.setTransform(106.1,72);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLAsQgGgCgDgEQgFgFgCgGQgCgGAAgHQAAgIACgGQACgFAFgFQADgEAGgCQAEgDAHAAIAGABIAFACIAFAEIADAFIAAgnIALAAIAABbIgIAAIgCgLIgEAGIgFADIgFADIgGABQgHAAgEgDgAgGgJIgGAFIgFAIQgBAEAAAGQAAAFABAEQACAFADADIAGAGQAEABADAAQAEAAAEgBQADgCADgDIADgGQACgDAAgEIAAgLQAAgEgCgDIgDgGIgGgEQgEgBgEgBQgDAAgEACg");
	this.shape_21.setTransform(96.5,71.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_22.setTransform(89.5,72.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_23.setTransform(83.3,72);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgBQgFgBgDACQgEACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADADQADAEAEACQADACAFgBIAJgBIAIgEIAEAHIgLAFQgFACgGAAQgGAAgGgCg");
	this.shape_24.setTransform(77.7,72.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_25.setTransform(71,72.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgBgDgDgCIgFgEIgHgBQgDAAgEACIgGAEIgEAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAGAAAEABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_26.setTransform(63.8,72.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgBgDgDgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAGAAAEABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_27.setTransform(56.2,72.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_28.setTransform(48.6,72.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgBQgFgBgDACQgEACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADADQADAEAEACQADACAFgBIAJgBIAIgEIAEAHIgLAFQgFACgGAAQgGAAgGgCg");
	this.shape_29.setTransform(41.7,72.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_30.setTransform(272.5,56.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAQAeQgCgDgBgFQgEAGgGACQgFADgHAAQgEAAgEgCIgHgDQgDgDgCgEQgBgDAAgEQAAgFABgEQACgDAFgCQADgDAGgCQAFgBAGAAQAHAAAHACIAAgHQAAgCgBgDIgEgFIgEgDIgGAAQgFgBgFACIgKADIgEgHIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQABAEABAEIAAAeQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIAEgBIABAIIgHABQgGAAgDgDgAgJABQgEABgCABIgEAFIgBAFIABAFIADAEIAFACIAFACQAEAAACgCIAGgEIAFgGQABgDAAgFIAAgFIgNgBIgIABg");
	this.shape_31.setTransform(265.9,55.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_32.setTransform(259.5,54.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKAgIgMgDIACgJIALAEIAJABQAGAAADgDQAFgDAAgEQgBgDgBgCIgEgEIgLgEIgIgBIgFgDQgDgCgBgDQgCgEAAgEQAAgEACgDQACgDACgCQADgCAFgCIAIgBIAKABIAMADIgDAIIgKgDIgIgBQgFAAgEACQgDADAAAEQAAABAAABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIAMADIAGADIAGACIAEAGQABADABAEQgBAEgBADQgCADgDADQgDADgEAAQgEACgGAAIgKgBg");
	this.shape_33.setTransform(254.1,55.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLAsQgGgDgDgDQgFgFgCgGQgCgGAAgIQAAgGACgHQACgFAFgEQADgFAGgCQAEgCAHAAIAGAAIAFACIAFAEIADAFIAAgmIALAAIAABaIgIAAIgCgKIgEAEIgFAFIgFACIgGABQgHgBgEgCgAgGgIIgGAEIgFAHQgBAFAAAFQAAAGABAEQACAFADADIAGAGQAEABADAAQAEAAAEgBQADgBADgEIADgFQACgEAAgEIAAgKQAAgFgCgDIgDgGIgGgEQgEgCgEAAQgDABgEACg");
	this.shape_34.setTransform(244.1,53.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQgBgDgCgCIgFgEIgHgBQgDAAgDACIgHAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAFAAAFABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_35.setTransform(236.8,55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AARAeQgEgDgBgFQgDAGgGACQgFADgGAAQgFAAgEgCIgHgDQgDgDgCgEQgCgDAAgEQAAgFACgEQADgDADgCQAEgDAFgCQAGgBAGAAQAHAAAHACIAAgHQAAgCgBgDIgDgFIgGgDIgFAAQgFgBgFACIgKADIgDgHIAMgEIAMgBQAFAAAEABQAEACAEADIAFAHQACAEgBAEIAAAeQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIACgBIABAIIgGABQgFAAgDgDgAgIABQgEABgDABIgEAFIgBAFIABAFIADAEIAEACIAGACQAEAAADgCIAFgEIAFgGQABgDAAgFIAAgFIgMgBIgIABg");
	this.shape_36.setTransform(229.7,55.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIANQAEgEADgEQABgEAAgDQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgCgCAAgDQAAgDACgCQACgCACAAQADAAACADQADACAAAFIgBAGIgDAGIgFAGIgEAFg");
	this.shape_37.setTransform(221.2,58.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgCQgFABgDABQgEACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAEADAEQADADAEACQADABAFAAIAJgBIAIgEIAEAHIgLAFQgFACgGAAQgGAAgGgDg");
	this.shape_38.setTransform(216.6,55.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_39.setTransform(211.9,53.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKAgIgNgDIADgJIALAEIAJABQAGAAADgDQAEgDAAgEQAAgDgBgCIgEgEIgMgEIgGgBIgGgDQgDgCgBgDQgCgEAAgEQAAgEACgDQABgDADgCQADgCAFgCIAIgBIAKABIALADIgCAIIgKgDIgIgBQgFAAgEACQgDADAAAEQAAABAAABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIAMADIAGADIAGACIAEAGQACADAAAEQAAAEgCADQgBADgEADQgDADgEAAQgFACgFAAIgKgBg");
	this.shape_40.setTransform(207.4,55.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_41.setTransform(200.7,55.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAnAgIAAgnIgBgHIgEgEIgEgEIgHgBIgHACIgGAEIgEAGQgBADAAAFIAAAjIgJAAIAAgnIgBgHIgEgEQgCgDgCgBIgHgBQgEAAgDACIgGAEQgDACgBAEQgBADAAAFIAAAjIgKAAIAAg+IAIAAIABALIAEgFIAFgEIAHgDIAGAAIAHAAIAGADIAEAFIADAFIAEgFIAGgFIAGgDIAHAAQAFAAAEABQAFACACADIAGAHIABAJIAAApg");
	this.shape_42.setTransform(191.2,55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgCAuIgGgEIgCgEIgBgHIAAhMIAJAAIAABLQABAEABACQABACAEAAIAHgBIABAJIgKABIgFgBg");
	this.shape_43.setTransform(180.7,53.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAFACAFQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAFADADIAGAFQAFACADAAQAFAAAEgCIAHgFQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_44.setTransform(174.6,55.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAJAAIABAMIADgGIAFgDIAEgDIAGgBIAIABIAAAJIgJgBQgDAAgEABQgCABgCADQgDADgBAEQgBAEgBAFIAAAhg");
	this.shape_45.setTransform(168.8,55.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_46.setTransform(163.3,54.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgBgDgDgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAGAAAEABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_47.setTransform(157,55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAFACAFQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAFADADIAGAFQAFACADAAQAFAAAEgCIAHgFQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_48.setTransform(149.4,55.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgHAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgCQgFABgDABQgEACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAEADAEQADADAEACQADABAFAAIAJgBIAIgEIAEAHIgLAFQgFACgGAAQgGAAgGgDg");
	this.shape_49.setTransform(142.5,55.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgIANQAEgEADgEQABgEAAgDQAAAAAAAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgCgCAAgDQAAgDACgCQACgCACAAQADAAACADQADACAAAFIgBAGIgDAGIgFAGIgEAFg");
	this.shape_50.setTransform(134.5,58.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgKAgIgMgDIACgJIALAEIAJABQAGAAAEgDQADgDAAgEQAAgDgBgCIgEgEIgMgEIgHgBIgFgDQgDgCgBgDQgCgEAAgEQAAgEACgDQABgDAEgCQADgCAEgCIAJgBIAKABIALADIgDAIIgJgDIgJgBQgFAAgEACQgDADgBAEQAAABABABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIALADIAHADIAGACIAEAGQACADgBAEQABAEgCADQgCADgDADQgDADgEAAQgEACgFAAIgLgBg");
	this.shape_51.setTransform(130.1,55.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_52.setTransform(123.7,55.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMAtQgGgBgHgDIADgIIALAEIAKABIAIgBQAEgCACgCQADgDACgDQABgEABgDIAAgMIgEAFIgFAEIgGACIgFABQgGgBgGgCQgFgDgEgDQgDgFgCgGQgDgFAAgIQAAgGADgHQACgGADgEQAEgFAFgCQAGgCAGAAIAFAAIAHADIAEADIAFAGIABgLIAIAAIAAA/QAAAGgCAFQgDAFgEAEQgEAEgFACQgHACgFAAIgMgCgAgGgjIgHAEIgDAIQgCAFAAAFQAAAGACAEQABAEACADIAHAGQAEABAEAAQAEAAADgBQADgBACgEIAFgFQABgDAAgEIAAgKQAAgFgBgDIgFgHIgFgEQgDgCgEAAQgEABgEACg");
	this.shape_53.setTransform(116.2,56.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AARAeQgDgDgCgFQgDAGgGACQgFADgHAAQgEAAgEgCIgHgDQgDgDgBgEQgCgDAAgEQAAgFACgEQABgDAEgCQAEgDAFgCQAGgBAHAAQAGAAAHACIAAgHQAAgCgCgDIgCgFIgGgDIgEAAQgGgBgFACIgLADIgCgHIAMgEIANgBQADAAAFABQAFACADADIAFAHQABAEAAAEIAAAeQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIADgBIACAIIgHABQgFAAgDgDgAgJABQgDABgDABIgEAFIgBAFIABAFIADAEIAFACIAFACQAEAAACgCIAHgEIADgGQACgDAAgFIAAgFIgMgBIgJABg");
	this.shape_54.setTransform(109.4,55.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgKAgIgNgDIADgJIALAEIAJABQAGAAAEgDQADgDAAgEQABgDgCgCIgEgEIgMgEIgHgBIgFgDQgDgCgBgDQgCgEAAgEQAAgEACgDQACgDADgCQADgCAEgCIAJgBIAKABIAKADIgCAIIgJgDIgJgBQgFAAgEACQgEADAAAEQAAABABABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIALADIAHADIAGACIAEAGQABADAAAEQAAAEgBADQgBADgEADQgDADgEAAQgFACgEAAIgLgBg");
	this.shape_55.setTransform(102.8,55.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgKAgIgMgDIACgJIALAEIAJABQAGAAADgDQAFgDAAgEQgBgDgBgCIgEgEIgLgEIgIgBIgFgDQgDgCgBgDQgCgEAAgEQAAgEACgDQACgDACgCQADgCAFgCIAIgBIAKABIAMADIgDAIIgKgDIgIgBQgFAAgEACQgDADAAAEQAAABAAABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIAMADIAGADIAGACIAEAGQABADABAEQgBAEgBADQgCADgDADQgDADgEAAQgEACgGAAIgKgBg");
	this.shape_56.setTransform(97,55.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_57.setTransform(90.7,55.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAnAgIAAgnIgBgHIgEgEIgEgEIgHgBIgHACIgGAEIgEAGQgBADAAAFIAAAjIgJAAIAAgnIgBgHIgEgEQgCgDgCgBIgHgBQgEAAgDACIgGAEQgDACgBAEQgBADAAAFIAAAjIgKAAIAAg+IAIAAIACALIADgFIAFgEIAHgDIAGAAIAHAAIAGADIAEAFIADAFIAEgFIAGgFIAGgDIAHAAQAFAAAEABQAFACACADIAGAHIABAJIAAApg");
	this.shape_58.setTransform(81.4,55);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAFACAFQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAFADADIAGAFQAFACADAAQAFAAAEgCIAHgFQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_59.setTransform(68.5,55.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_60.setTransform(62.1,54.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQgBgDgCgCIgFgEIgHgBQgDAAgDACIgHAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAFAAAFABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_61.setTransform(52.8,55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_62.setTransform(45.5,55.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_63.setTransform(39.3,54.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgKAgIgNgDIADgJIALAEIAJABQAGAAAEgDQADgDAAgEQABgDgCgCIgEgEIgMgEIgHgBIgFgDQgDgCgBgDQgCgEAAgEQAAgEACgDQACgDADgCQADgCAEgCIAJgBIAKABIAKADIgCAIIgJgDIgJgBQgFAAgEACQgDADgBAEQAAABABABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIALADIAHADIAGACIAEAGQACADgBAEQABAEgCADQgCADgDADQgDADgEAAQgEACgFAAIgLgBg");
	this.shape_64.setTransform(33.9,55.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_65.setTransform(29.5,53.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgCAuIgGgEIgCgEIgBgHIAAhMIAKAAIAABLQAAAEABACQACACADAAIAGgBIABAJIgJABIgFgBg");
	this.shape_66.setTransform(26.5,53.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgIANQAFgEACgEQABgEABgDQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQgCgCAAgDQAAgDACgCQACgCACAAQAEAAABADQADACAAAFIgBAGIgDAGIgEAGIgGAFg");
	this.shape_67.setTransform(261.2,40.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKAgIgNgEIADgIIALAEIAJABQAGAAAEgDQADgDAAgEQAAgDgBgCIgEgDIgMgFIgGgCIgGgCQgDgCgBgDQgCgDAAgFQAAgDACgEQACgDACgCQADgDAFgBIAJgBIAKABIAKADIgCAIIgJgDIgJgCQgFAAgEADQgEADAAAEQAAABABABQAAAAAAABQAAAAAAABQABAAAAABIAEADIALAFIAHACIAGACIAEAGQABADAAAEQAAAEgBADQgCADgDADQgDACgEABQgFACgEAAIgLgBg");
	this.shape_68.setTransform(256.8,37.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgCAtIgGgCIgCgGIgBgGIAAhMIAKAAIAABLQAAAEABACQACACADAAIAGgBIABAIIgJABIgFgBg");
	this.shape_69.setTransform(252.5,36);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCAtIgGgCIgCgGIgBgGIAAhMIAKAAIAABLQAAAEABACQACACADAAIAGgBIABAIIgJABIgFgBg");
	this.shape_70.setTransform(248.8,36);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAQAeQgCgCgBgGQgEAGgGACQgFADgHAAQgEAAgEgCIgHgEQgDgCgBgEQgCgDAAgEQAAgFACgEQABgDAFgCQADgDAGgCQAFgBAGAAQAHAAAHACIAAgGQAAgEgCgCIgDgEIgEgEIgFgBQgGABgFABIgKAEIgEgIIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQACAEAAAFIAAAdQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAEAAIABAIIgHAAQgGAAgDgDgAgJAAQgEABgCACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAGgEIAEgGQACgDAAgEIAAgGIgNgBIgIAAg");
	this.shape_71.setTransform(243.3,37.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgHAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgGAEgEQAEgFAGgCQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgCQgFABgDABQgEACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAFADADQADADAEACQADACAFAAIAJgCIAIgFIAEAIIgLAFQgFACgGAAQgGAAgGgDg");
	this.shape_72.setTransform(236.5,37.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_73.setTransform(226.7,37.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgEAfIgag+IALAAIATAyIAUgyIALAAIgaA+g");
	this.shape_74.setTransform(219.8,37.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_75.setTransform(215,36);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_76.setTransform(210,37.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgHAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgGAEgEQAEgFAGgCQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgCQgFABgDABQgEACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAFADADQADADAEACQADACAFAAIAJgCIAIgFIAEAIIgLAFQgFACgGAAQgGAAgGgDg");
	this.shape_77.setTransform(203.4,37.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_78.setTransform(196.7,37.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIADgFIAFgFIAEgCIAGgBIAJABIgBAJIgIgBQgEgBgEACQgCACgDACQgCADgBAEQgCAEABAFIAAAhg");
	this.shape_79.setTransform(191.1,37.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgMAsQgFgDgEgEQgDgEgCgGQgDgGAAgIQAAgGADgHQACgFADgEQAEgFAFgCQAGgCAGAAIAFAAIAGACIAFAEIAEAFIAAgmIAKAAIAABaIgIAAIgCgKIgDAEIgFAFIgHACIgFAAQgGABgGgDgAgGgIIgHAEIgDAHQgCAFAAAFQAAAGACAFQABAEACADIAHAFQAEACAEAAQADAAAEgCQADAAACgDIAFgGQABgEAAgFIAAgJQAAgFgBgEIgFgFIgFgEQgEgBgDAAQgEAAgEACg");
	this.shape_80.setTransform(181.1,36);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQgBgDgCgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAFgGIAEgEIAHgDIAGAAQAGAAAEABQAEACAEADIAEAHQACAFAAAFIAAAog");
	this.shape_81.setTransform(173.9,37.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAQAeQgCgCgBgGQgEAGgGACQgFADgHAAQgEAAgEgCIgHgEQgDgCgBgEQgCgDAAgEQAAgFACgEQABgDAFgCQADgDAGgCQAFgBAGAAQAHAAAHACIAAgGQAAgEgCgCIgDgEIgEgEIgFgBQgGABgFABIgKAEIgEgIIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQACAEAAAFIAAAdQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAEAAIABAIIgHAAQgGAAgDgDgAgJAAQgEABgCACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAGgEIAEgGQACgDAAgEIAAgGIgNgBIgIAAg");
	this.shape_82.setTransform(166.8,37.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_83.setTransform(156.5,37.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAOAuIgXgcIgHAHIAAAVIgKAAIAAhbIAKAAIAAA7IAdgeIAMAAIgbAcIAcAig");
	this.shape_84.setTransform(150.1,35.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AARAeQgDgCgCgGQgDAGgGACQgFADgHAAQgEAAgEgCIgHgEQgDgCgBgEQgCgDAAgEQAAgFACgEQABgDAEgCQAEgDAFgCQAGgBAHAAQAGAAAHACIAAgGQAAgEgCgCIgCgEIgGgEIgEgBQgGABgFABIgLAEIgDgIIANgEIANgBQADAAAFABQAFACADADIAFAHQABAEAAAFIAAAdQAAABABAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIADAAIACAIIgHAAQgFAAgDgDgAgJAAQgDABgDACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAHgEIADgGQACgDAAgEIAAgGIgMgBIgJAAg");
	this.shape_85.setTransform(143.2,37.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAnAgIAAgnIgBgHIgEgEIgEgEIgHgBIgHACIgGAEIgEAGQgBADAAAFIAAAjIgJAAIAAgnIgBgHIgEgEQgCgDgCgBIgHgBQgEAAgDACIgGAEQgDACgBAEQgBADAAAFIAAAjIgKAAIAAg+IAIAAIABALIAFgFIAEgEIAHgDIAGAAIAHAAIAGADIAEAFIADAFIAEgFIAGgFIAGgDIAHAAQAFAAAEABQAFACACADIAGAHIABAJIAAApg");
	this.shape_86.setTransform(133.7,37.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_87.setTransform(120.8,37.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgGAEgEQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAEACAGQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDABgDAEQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgEgEgBQgEgCgFAAQgDAAgFACg");
	this.shape_88.setTransform(113.3,37.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_89.setTransform(106.2,38.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgKAgIgNgEIADgIIALAEIAJABQAGAAADgDQAEgDABgEQAAgDgCgCIgEgDIgLgFIgHgCIgGgCQgDgCgBgDQgCgDAAgFQAAgDACgEQABgDADgCQADgDAFgBIAIgBIAKABIALADIgCAIIgKgDIgIgCQgFAAgEADQgEADABAEQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIAEADIAMAFIAGACIAGACIAEAGQACADAAAEQAAAEgCADQgBADgEADQgDACgEABQgFACgFAAIgKgBg");
	this.shape_90.setTransform(96.8,37.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_91.setTransform(91.3,36.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_92.setTransform(85.3,37.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgCAtIgGgCIgDgGIAAgGIAAhMIAJAAIAABLQAAAEACACQABACAEAAIAHgBIABAIIgKABIgFgBg");
	this.shape_93.setTransform(80.4,36);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_94.setTransform(71.6,38.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgMAsQgFgDgEgEQgEgEgCgGQgCgGAAgIQAAgGACgHQACgFAEgEQAEgFAFgCQAFgCAHAAIAFAAIAGACIAFAEIAEAFIAAgmIAKAAIAABaIgIAAIgBgKIgFAEIgEAFIgHACIgFAAQgHABgFgDgAgGgIIgGAEIgFAHQgBAFAAAFQAAAGABAFQACAEADADIAGAFQAEACAEAAQAEAAADgCQADAAACgDIAEgGQACgEAAgFIAAgJQAAgFgCgEIgEgFIgFgEQgDgBgEAAQgEAAgEACg");
	this.shape_95.setTransform(64.3,36);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgEAfIgag+IALAAIATAyIAUgyIALAAIgaA+g");
	this.shape_96.setTransform(57.4,37.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAQAeQgCgCgBgGQgEAGgGACQgFADgHAAQgEAAgEgCIgHgEQgDgCgCgEQgBgDAAgEQAAgFABgEQACgDAFgCQADgDAGgCQAFgBAGAAQAHAAAHACIAAgGQAAgEgBgCIgEgEIgEgEIgGgBQgFABgFABIgKAEIgEgIIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQABAEABAFIAAAdQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAEAAIABAIIgHAAQgGAAgDgDgAgJAAQgEABgCACIgEAFIgBAFIABAFIADAEIAEADIAGABQAEgBACgBIAGgEIAFgGQABgDAAgEIAAgGIgNgBIgIAAg");
	this.shape_97.setTransform(50.8,37.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAaAsIg0hIIAABIIgKAAIAAhXIALAAIA0BIIAAhIIAKAAIAABXg");
	this.shape_98.setTransform(42.1,36.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgTBEQgIgEgGgHQgGgGgDgKQgDgJAAgLQAAgLADgKQADgIAGgHQAGgHAIgEQAJgDAJAAIAIABQAFABAFACIAHAGIAGAHIAAg7IAQAAIAACMIgNAAIgCgQIgGAIIgIAGQgEACgFABIgJACQgJAAgJgEgAgKgOQgGADgEAFQgEAFgDAGQgCAHAAAJQAAAIACAHQADAHAEAFQAEAFAGADQAGADAFAAQAHAAAFgDQAGgCADgEQAEgEACgFQACgGAAgHIAAgPQAAgHgCgFQgCgFgEgEQgDgEgGgCQgFgCgHAAQgFAAgGACg");
	this.shape_99.setTransform(214.4,13.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgOAvQgKgEgHgGQgGgHgEgJQgEgKABgLQgBgKAEgKQADgJAGgHQAHgGAJgFQAIgDAKAAQAJAAAJADQAHAEAGAGQAHAHACAJQAEAJAAALIAAAFIhLAAQABAIADAGQADAHAEAEQAFAFAHACQAGACAGABQAHAAAHgCQAJgCAHgFIAFALQgKAGgJABQgJADgIAAQgKAAgJgEgAAegFQAAgIgCgGQgCgGgEgEQgEgEgFgCQgFgDgGAAQgGAAgFADQgGABgEAFQgEAEgCAGQgDAGgBAIIA7AAIAAAAg");
	this.shape_100.setTransform(203.6,15.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AADA+QgEgCgEgEQgEgEgCgFQgCgFAAgGIAAg6IgVAAIAAgMIAVAAIAAgdIAOAAIAAAdIAgAAIAAAMIggAAIAAA4QABAIAFAFQAEAEAHAAQAGAAAJgCIACANQgLACgJAAQgHAAgFgCg");
	this.shape_101.setTransform(194.1,14.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgMAvQgJgEgGgGQgHgHgDgJQgDgKAAgLQAAgKADgKQADgJAHgHQAGgGAJgFQAKgDAJAAQAJAAAJACQAJADAHAGIgGALQgHgEgGgCQgGgDgGAAQgJAAgFADQgGACgEAGQgFAEgDAIQgCAGAAAIQAAAIACAHQADAHAFAGQAEAFAGACQAFADAJAAQAGAAAGgCQAGgDAHgEIAGALQgHAFgJADQgJADgJAAQgJAAgKgEg");
	this.shape_102.setTransform(185.4,15.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgPAvQgIgEgHgGQgIgHgDgJQgDgKAAgLQAAgKADgKQADgJAGgHQAHgGAIgFQAJgDAJAAQALAAAHADQAIAEAHAGQAGAHADAJQACAJAAALIAAAFIhJAAQAAAIACAGQADAHAFAEQAFAFAGACQAHACAHABQAGAAAHgCQAJgCAHgFIAFALQgKAGgJABQgJADgIAAQgKAAgKgEgAAegFQAAgIgCgGQgCgGgEgEQgEgEgFgCQgFgDgHAAQgFAAgFADQgFABgFAFQgEAEgDAGQgCAGAAAIIA6AAIAAAAg");
	this.shape_103.setTransform(175.1,15.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAbAyIAAg8QAAgGgCgEQgBgFgEgDQgDgEgFgCQgFgBgFAAQgFAAgGACQgFACgEAEQgEAFgCAFQgDAGAAAHIAAA2IgPAAIAAhgIAMAAIACARIAGgIIAJgHQAEgCAFgBIAKgCQAIAAAHADQAHACAFAFQAFAFADAHQACAGAAAIIAAA/g");
	this.shape_104.setTransform(163.9,15.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAbAyIAAg8QAAgGgCgEQgBgFgEgDQgDgEgFgCQgFgBgFAAQgFAAgGACQgFACgEAEQgEAFgCAFQgDAGAAAHIAAA2IgPAAIAAhgIAMAAIACARIAGgIIAJgHQAEgCAFgBIAKgCQAIAAAHADQAHACAFAFQAFAFADAHQACAGAAAIIAAA/g");
	this.shape_105.setTransform(152.3,15.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgTAvQgJgEgHgGQgGgHgEgJQgEgKABgLQgBgKAEgKQAEgJAGgHQAHgGAJgFQAJgDAKAAQAKAAAJADQAKAFAGAGQAHAHADAJQAFAKAAAKQAAALgFAKQgDAJgHAHQgGAGgKAEQgJAEgKAAQgKAAgJgEgAgMgiQgHACgEAGQgEAEgDAIQgDAGAAAIQAAAJADAGQADAHAEAGQAEAEAHAEQAFACAHAAQAHAAAHgCQAFgEAFgEQAEgGADgHQACgGAAgJQAAgIgCgGQgDgIgEgEQgFgGgFgCQgHgEgHAAQgHAAgFAEg");
	this.shape_106.setTransform(140.6,15.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgMAvQgJgEgGgGQgHgHgDgJQgEgKABgLQgBgKAEgKQADgJAHgHQAGgGAJgFQAKgDAJAAQAJAAAJACQAIADAIAGIgGALQgHgEgFgCQgHgDgHAAQgIAAgEADQgHACgEAGQgFAEgDAIQgCAGAAAIQAAAIACAHQADAHAFAGQAEAFAHACQAEADAIAAQAHAAAHgCQAFgDAHgEIAGALQgIAFgIADQgJADgJAAQgKAAgJgEg");
	this.shape_107.setTransform(130,15.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgsBFIACgNIAKABQAIABAEgFQAFgEAEgLIAFgMIgphgIARAAIAfBOIAdhOIARAAIgtBvIgFANQgDAGgFADQgEAEgFACQgEABgHABQgGAAgHgCg");
	this.shape_108.setTransform(115,18.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAZAvQgFgFgBgIQgGAIgJAFQgIAEgKAAQgHAAgGgDQgGgBgFgFQgEgDgDgGQgCgFAAgGQAAgIADgGQADgGAFgDQAGgEAIgCQAJgCAKgBQAKABALADIAAgKQAAgGgCgDQgCgEgDgDQgDgDgEgCQgEgBgFAAQgIAAgIACQgIACgIADIgFgLIAUgGQAKgCAJAAQAHAAAHACQAHADAFAEQAFAFACAGQADAGAAAIIAAAuQAAAEACACQADACAEABIAFgBIABAMIgKABQgIAAgFgEgAgOABQgGABgEADQgEADgCAEQgCAEAAAFQAAADACAEQABADADADIAHAEIAJABQAGAAAFgCQAFgCAEgEQAEgEACgFQACgFAAgHIAAgIQgKgCgJAAQgHAAgGABg");
	this.shape_109.setTransform(104.8,15.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AADA+QgEgCgEgEQgEgEgCgFQgCgFAAgGIAAg6IgVAAIAAgMIAVAAIAAgdIAOAAIAAAdIAgAAIAAAMIggAAIAAA4QAAAIAGAFQAEAEAHAAQAGAAAJgCIACANQgLACgJAAQgHAAgFgCg");
	this.shape_110.setTransform(95,14.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgWBDQgMgDgNgFIAEgNIAWAHQAMADAJAAQAGAAAGgBQAGgCAEgDQAFgDACgFQADgEgBgFQABgHgEgFQgDgEgGgDIgNgFIgNgFIgOgEIgNgGQgFgFgDgGQgEgHAAgJQAAgHAEgHQADgHAGgFQAGgEAJgDQAJgDAJAAQAKAAALADQAKACAMAEIgEANIgUgGQgJgCgJAAQgGAAgGABQgGACgEADQgFADgBAEQgDAEAAAFQAAAHAEAFQACAEAHADQAHAEATAFIAOAFQAHACAGAEQAFAFAEAGQADAHAAAJQAAAIgDAHQgEAHgGAEQgHAFgIADQgKADgKAAQgKAAgMgDg");
	this.shape_111.setTransform(85.3,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_caption2, new cjs.Rectangle(0,0,300,81.7), null);


(lib.m_caption1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(184.8,75.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAgIgNgDIADgIIALADIAJABQAGAAAEgCQADgDAAgFQAAgDgBgCIgEgEIgMgDIgGgCIgGgDQgDgDgBgCQgCgDAAgEQAAgFACgCQACgEACgCQADgCAFgCIAJgBIAJABIALADIgCAIIgJgDIgJgBQgFAAgEADQgEACAAAFQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIALADIAHACIAGADIAEAFQABAEAAAEQAAAEgBADQgCAEgDACQgDACgEABQgFACgEAAIgLgBg");
	this.shape_1.setTransform(180.3,72.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQAAgDgDgCIgFgEIgHgBQgDAAgDACIgHAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAFgGIAEgEIAHgDIAGAAQAFAAAFABQAEACAEADIAEAHQACAFAAAFIAAAog");
	this.shape_2.setTransform(173.7,72.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_3.setTransform(166.1,72.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_4.setTransform(160.8,71.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_5.setTransform(156.6,72);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgBQgFgBgDACQgEACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADADQADAEAEACQADACAFgBIAJgBIAIgEIAEAHIgLAFQgFACgGAAQgGAAgGgCg");
	this.shape_6.setTransform(151,72.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_7.setTransform(143.9,73);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIADgGIAFgDIAEgEIAGAAIAIABIAAAIIgIgBQgFAAgDACQgCACgCACQgDADgBAEQgBAEAAAFIAAAhg");
	this.shape_8.setTransform(138.1,72.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_9.setTransform(132.6,72);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAgIgNgDIADgIIALADIAJABQAGAAAEgCQADgDAAgFQABgDgCgCIgEgEIgMgDIgHgCIgFgDQgDgDgBgCQgCgDAAgEQAAgFACgCQACgEADgCQADgCAEgCIAJgBIAKABIAKADIgCAIIgJgDIgJgBQgFAAgEADQgEACAAAFQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIALADIAHACIAGADIAEAFQABAEAAAEQAAAEgBADQgCAEgDACQgDACgEABQgFACgEAAIgLgBg");
	this.shape_10.setTransform(127.1,72.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQAAgDgDgCIgFgEIgHgBQgDAAgDACIgHAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAFgGIAEgEIAHgDIAGAAQAGAAAEABQAEACAEADIAEAHQACAFAAAFIAAAog");
	this.shape_11.setTransform(120.5,72.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_12.setTransform(115.2,71.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgCgDgCgCIgFgEIgHgBQgDAAgEACIgGAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAFAAAFABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_13.setTransform(272.5,55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAJAAIABAMIADgGIAEgDIAFgDIAGgBIAIABIgBAJIgIgBQgDAAgEABQgCABgCADQgDADgBAEQgBAEgBAFIAAAhg");
	this.shape_14.setTransform(266.6,55.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_15.setTransform(259.8,55.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_16.setTransform(253.5,54.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_17.setTransform(248.8,55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_18.setTransform(243.4,56.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAuIgGgCIgFgFIgEgEIgCAKIgIAAIAAhaIAKAAIAAAmIAEgFIAFgEIAGgCIAFAAQAGAAAGACQAFACAEAFQAEAEACAFQACAHAAAGQAAAIgCAGQgCAGgEAFQgEADgFADQgGACgGABIgFgBgAgIgJIgGAEQgCADgBADQgCADAAAFIAAAKQAAAEACAEQABADACACQADAEADABQAEABAEAAQADAAAEgBIAHgGQACgDACgFQABgEAAgGQAAgFgBgFIgEgHIgHgEQgEgCgDgBQgEAAgEACg");
	this.shape_19.setTransform(236.5,53.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_20.setTransform(230.4,55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQgBgDgCgCIgFgEIgHgBQgDAAgDACIgHAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAFAAAFABQAEACAEADIAFAHQABAFAAAFIAAAog");
	this.shape_21.setTransform(224.7,55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAJAAIABAMIADgGIAFgDIAEgDIAGgBIAIABIAAAJIgJgBQgDAAgEABQgCABgCADQgDADgBAEQgBAEgBAFIAAAhg");
	this.shape_22.setTransform(218.8,55.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_23.setTransform(212,55.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_24.setTransform(205.7,54.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLAsQgGgDgDgDQgEgFgDgGQgCgGAAgIQAAgGACgHQADgFAEgEQADgFAGgCQAEgCAHAAIAGAAIAFACIAFAEIADAFIAAgmIALAAIAABaIgIAAIgBgKIgFAEIgEAFIgGACIgGABQgHgBgEgCgAgGgIIgGAEIgFAHQgBAFAAAFQAAAGABAEQACAFADADIAGAGQAEABADAAQAFAAADgBQADgBADgEIADgFQACgEAAgEIAAgKQAAgFgCgDIgDgGIgGgEQgDgCgFAAQgDABgEACg");
	this.shape_25.setTransform(196,53.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgCgDgCgCIgFgEIgHgBQgDAAgEACIgGAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAFAAAFABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_26.setTransform(188.8,55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AARAeQgEgDgBgFQgDAGgGACQgFADgGAAQgFAAgEgCIgHgDQgDgDgBgEQgDgDAAgEQAAgFADgEQACgDADgCQAEgDAFgCQAGgBAHAAQAGAAAHACIAAgHQAAgCgCgDIgCgFIgGgDIgFAAQgFgBgFACIgLADIgCgHIAMgEIANgBQAEAAAEABQAEACAEADIAFAHQACAEgBAEIAAAeQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIACgBIABAIIgGABQgFAAgDgDgAgIABQgFABgCABIgEAFIgBAFIABAFIADAEIAEACIAGACQAEAAADgCIAGgEIADgGQACgDAAgFIAAgFIgMgBIgIABg");
	this.shape_27.setTransform(181.7,55.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgCQgFABgDABQgEACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAEADAEQADADAEACQADABAFAAIAJgBIAIgEIAEAHIgLAFQgFACgGAAQgGAAgGgDg");
	this.shape_28.setTransform(171.8,55.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_29.setTransform(167,53.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIAuIAAg2IgNAAIAAgIIANAAIAAgLQAAgEABgEQABgDADgDQADgCACgBIAIgBIAMABIgBAIIgJgBQgFAAgDADQgDADAAAFIAAAKIASAAIAAAIIgSAAIAAA2g");
	this.shape_30.setTransform(163.3,53.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIAuIAAg2IgNAAIAAgIIANAAIAAgLQAAgEABgEQABgDADgDQADgCACgBIAIgBIAMABIgBAIIgJgBQgFAAgDADQgDADAAAFIAAAKIASAAIAAAIIgSAAIAAA2g");
	this.shape_31.setTransform(158.5,53.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAQAeQgCgDgBgFQgEAGgGACQgFADgHAAQgEAAgEgCIgHgDQgDgDgBgEQgCgDAAgEQAAgFACgEQABgDAFgCQADgDAGgCQAFgBAHAAQAGAAAHACIAAgHQAAgCgCgDIgDgFIgFgDIgEAAQgGgBgFACIgLADIgDgHIAOgEIAMgBQADAAAFABQAFACADADIAFAHQACAEAAAEIAAAeQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIAEgBIABAIIgHABQgGAAgDgDgAgJABQgDABgDABIgEAFIgBAFIABAFIADAEIAFACIAFACQAEAAACgCIAHgEIADgGQACgDAAgFIAAgFIgMgBIgJABg");
	this.shape_32.setTransform(152.7,55.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAIAAIACAMIADgGIAEgDIAFgDIAGgBIAIABIgBAJIgIgBQgDAAgDABQgDABgCADQgDADgBAEQgCAEAAAFIAAAhg");
	this.shape_33.setTransform(147,55.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_34.setTransform(141.4,54.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_35.setTransform(132.3,55.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAmAgIAAgnIgBgHIgDgEIgFgEIgGgBIgHACIgGAEIgDAGQgCADAAAFIAAAjIgJAAIAAgnIgCgHIgDgEQgBgDgDgBIgHgBQgEAAgDACIgGAEQgCACgCAEQgBADAAAFIAAAjIgKAAIAAg+IAIAAIACALIADgFIAGgEIAFgDIAHAAIAHAAIAGADIAEAFIADAFIAEgFIAGgFIAGgDIAHAAQAFAAAEABQAEACAEADIAEAHQACAEAAAFIAAApg");
	this.shape_36.setTransform(123,55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_37.setTransform(115.6,53.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_38.setTransform(111.4,54.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_39.setTransform(106.7,55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDAuIgEgEIgEgEIgBgHIAAhMIAKAAIAABLQABAEABACQACACADAAIAHgBIAAAJIgJABIgGgBg");
	this.shape_40.setTransform(103.3,53.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AARAeQgDgDgCgFQgDAGgGACQgFADgGAAQgFAAgEgCIgHgDQgDgDgBgEQgCgDAAgEQAAgFACgEQABgDAEgCQAEgDAFgCQAGgBAHAAQAGAAAHACIAAgHQAAgCgCgDIgCgFIgGgDIgEAAQgGgBgFACIgLADIgDgHIANgEIANgBQADAAAFABQAFACADADIAFAHQABAEAAAEIAAAeQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIADgBIACAIIgHABQgFAAgDgDgAgIABQgEABgDABIgEAFIgBAFIABAFIADAEIAFACIAFACQAEAAACgCIAHgEIADgGQACgDAAgFIAAgFIgMgBIgIABg");
	this.shape_41.setTransform(97.7,55.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_42.setTransform(90.6,55.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIADgGIAFgDIAEgDIAGgBIAIABIAAAJIgJgBQgEAAgDABQgCABgCADQgDADgBAEQgBAEAAAFIAAAhg");
	this.shape_43.setTransform(85,55.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgCgGQgBgDgCgCIgFgDIgHgBQgDAAgEABIgFAEIgFAGQgBAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAGAAAEACQAEABAEAEIAEAHQACAEAAAFIAAApg");
	this.shape_44.setTransform(75.3,53.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_45.setTransform(68.8,54.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_46.setTransform(64.8,53.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAQAfIgQgxIgPAxIgKAAIgVg+IALAAIAQAyIAPgyIAJAAIAPAyIAQgyIAKAAIgVA+g");
	this.shape_47.setTransform(58.2,55.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_48.setTransform(46.5,56.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAQAeQgDgDAAgFQgEAGgGACQgFADgGAAQgFAAgEgCIgHgDQgDgDgCgEQgCgDAAgEQAAgFACgEQACgDAEgCQAEgDAFgCQAGgBAGAAQAHAAAHACIAAgHQAAgCgBgDIgEgFIgEgDIgGAAQgFgBgFACIgKADIgDgHIAMgEIAMgBQAFAAAEABQAFACADADIAFAHQABAEAAAEIAAAeQABABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIACgBIABAIIgGABQgGAAgDgDgAgIABQgEABgDABIgEAFIgBAFIABAFIADAEIAEACIAGACQAEAAADgCIAFgEIAFgGQABgDAAgFIAAgFIgNgBIgHABg");
	this.shape_49.setTransform(39.3,55.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAmAgIAAgnIgBgHIgCgEIgGgEIgGgBIgHACIgGAEIgDAGQgCADAAAFIAAAjIgKAAIAAgnIgBgHIgDgEQgBgDgEgBIgGgBQgEAAgDACIgGAEQgCACgBAEQgCADAAAFIAAAjIgKAAIAAg+IAIAAIACALIADgFIAGgEIAFgDIAHAAIAHAAIAGADIAEAFIADAFIAEgFIAFgFIAHgDIAHAAQAFAAAEABQAFACADADIAEAHIACAJIAAApg");
	this.shape_50.setTransform(29.8,55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgLAsQgGgDgDgEQgFgEgCgGQgCgGAAgIQAAgGACgHQACgFAFgEQADgFAGgCQAEgCAHAAIAGAAIAFACIAFAEIADAFIAAgmIALAAIAABaIgIAAIgCgKIgEAEIgFAFIgFACIgGAAQgHABgEgDgAgGgIIgGAEIgFAHQgBAFAAAFQAAAGABAFQACAEADADIAGAFQAEACADAAQAEAAAEgCQADAAADgDIADgGQACgEAAgFIAAgJQAAgFgCgEIgDgFIgGgEQgEgBgEAAQgDAAgEACg");
	this.shape_51.setTransform(277.8,36);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIADgFIAFgFIAEgCIAGgBIAIABIAAAJIgJgBQgEgBgDACQgCACgCACQgDADgBAEQgBAEAAAFIAAAhg");
	this.shape_52.setTransform(272.2,37.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAQAeQgDgCgBgGQgDAGgGACQgFADgGAAQgFAAgEgCIgHgEQgDgCgCgEQgCgDAAgEQAAgFACgEQACgDAEgCQAEgDAGgCQAFgBAGAAQAHAAAHACIAAgGQAAgEgBgCIgEgEIgEgEIgGgBQgFABgFABIgKAEIgDgIIANgEIALgBQAFAAAEABQAEACAEADIAFAHQABAEAAAFIAAAdQAAABABAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAABAAIADAAIAAAIIgGAAQgGAAgDgDgAgIAAQgEABgDACIgEAFIgBAFIABAFIADAEIAEADIAGABQAEgBADgBIAFgEIAFgGQABgDAAgEIAAgGIgNgBIgHAAg");
	this.shape_53.setTransform(266.1,37.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAQAfIgQgxIgPAxIgKAAIgUg+IAKAAIAQAyIAPgyIAIAAIAQAyIAQgyIAKAAIgUA+g");
	this.shape_54.setTransform(257.4,37.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAJAAIABAMIADgFIAFgFIAEgCIAGgBIAIABIAAAJIgJgBQgDgBgEACQgCACgCACQgDADgBAEQgBAEgBAFIAAAhg");
	this.shape_55.setTransform(250.3,37.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgGAEgEQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAEACAGQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDABgDAEQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgEgEgBQgEgCgFAAQgDAAgFACg");
	this.shape_56.setTransform(243.6,37.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgIAuIAAg2IgNAAIAAgIIANAAIAAgLQAAgEABgEQABgDADgCQADgDACgBIAIgCIAMACIgBAIIgJgBQgFAAgDADQgDADAAAFIAAAKIASAAIAAAIIgSAAIAAA2g");
	this.shape_57.setTransform(237.6,35.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_58.setTransform(233,37.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgKAgIgNgEIADgIIALAEIAJABQAGAAAEgDQADgDAAgEQAAgDgBgCIgEgDIgMgFIgGgCIgGgCQgDgCgBgDQgCgDAAgFQAAgDACgEQACgDACgCQADgDAFgBIAJgBIAKABIAKADIgCAIIgJgDIgJgCQgFAAgEADQgEADAAAEQAAABABABQAAAAAAABQAAAAAAABQABAAAAABIAEADIALAFIAHACIAGACIAEAGQABADAAAEQAAAEgBADQgCADgDADQgDACgEABQgFACgEAAIgLgBg");
	this.shape_59.setTransform(228,37.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_60.setTransform(221.7,37.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_61.setTransform(214.8,38.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_62.setTransform(208,37.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQgBgDgCgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAFgGIAEgEIAHgDIAGAAQAGAAAEABQAEACAEADIAEAHQACAFAAAFIAAAog");
	this.shape_63.setTransform(197.7,37.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAQAeQgCgCgBgGQgEAGgGACQgFADgHAAQgEAAgEgCIgHgEQgDgCgCgEQgBgDAAgEQAAgFABgEQACgDAFgCQADgDAGgCQAFgBAGAAQAHAAAHACIAAgGQAAgEgCgCIgDgEIgEgEIgFgBQgGABgFABIgKAEIgEgIIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQACAEAAAFIAAAdQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAEAAIABAIIgHAAQgGAAgDgDgAgJAAQgEABgCACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAHgEIADgGQACgDAAgEIAAgGIgNgBIgIAAg");
	this.shape_64.setTransform(190.6,37.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgCgGQgBgDgCgCIgFgDIgHgBQgDAAgDABIgHAEIgDAGQgCAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAFAAAFACQAEABADAEIAGAHQABAEAAAFIAAApg");
	this.shape_65.setTransform(180.1,35.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_66.setTransform(173.6,36.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_67.setTransform(169.6,36);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAPAfIgPgxIgOAxIgLAAIgVg+IALAAIAPAyIAQgyIAIAAIARAyIAPgyIALAAIgWA+g");
	this.shape_68.setTransform(163,37.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMAtQgGgBgHgDIADgIIALAEIAKABIAIgBQAEgCACgCQADgCACgEQABgEABgEIAAgLIgEAFIgFAEIgGACIgFAAQgGABgGgDQgFgDgEgEQgDgEgCgGQgDgFAAgIQAAgGADgHQACgGADgEQAEgFAFgCQAGgCAGAAIAFAAIAHACIAEAEIAFAFIABgKIAIAAIAAA/QAAAGgCAFQgDAFgDAEQgFAEgFACQgHABgFAAIgMgBgAgGgjIgHAEIgDAIQgCAFAAAFQAAAGACAFQABADACADIAHAFQAEACAEAAQAEAAADgCQADAAACgDIAFgGQABgDAAgFIAAgJQAAgFgBgDIgFgHIgFgEQgDgBgEAAQgEAAgEACg");
	this.shape_69.setTransform(150.9,38.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgCgDgCgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAEgGIAFgEIAHgDIAGAAQAFAAAFABQAEACADADIAFAHQACAFAAAFIAAAog");
	this.shape_70.setTransform(143.6,37.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_71.setTransform(138.3,36);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgGAEgEQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAEACAGQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDABgDAEQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgEgEgBQgEgCgFAAQgDAAgFACg");
	this.shape_72.setTransform(132.9,37.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgMAtQgGgBgHgDIADgIIAMAEIAJABIAIgBQAEgCADgCQACgCACgEQACgEgBgEIAAgLIgDAFIgFAEIgFACIgGAAQgGABgFgDQgGgDgDgEQgFgEgBgGQgDgFAAgIQAAgGADgHQABgGAFgEQADgFAGgCQAFgCAGAAIAGAAIAFACIAGAEIADAFIACgKIAIAAIAAA/QAAAGgCAFQgDAFgEAEQgEAEgGACQgFABgGAAIgMgBgAgGgjIgGAEIgFAIQgBAFAAAFQAAAGABAFQACADADADIAGAFQAEACADAAQAFAAADgCQADAAADgDIADgGQACgDAAgFIAAgJQAAgFgCgDIgDgHIgGgEQgDgBgFAAQgDAAgEACg");
	this.shape_73.setTransform(125.2,38.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_74.setTransform(115.1,37.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAIAAIACAMIADgFIAEgFIAFgCIAGgBIAIABIgBAJIgIgBQgDgBgEACQgCACgCACQgDADgBAEQgBAEgBAFIAAAhg");
	this.shape_75.setTransform(109.5,37.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgDAOIgBgcIAJAAIgBAcg");
	this.shape_76.setTransform(105.3,33.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_77.setTransform(100,37.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgGAEgEQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAEACAGQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDABgDAEQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgEgEgBQgEgCgFAAQgDAAgFACg");
	this.shape_78.setTransform(92.5,37.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_79.setTransform(85.4,38.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_80.setTransform(75.5,37.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIADgFIAFgFIAEgCIAHgBIAIABIgBAJIgIgBQgFgBgDACQgCACgDACQgCADgBAEQgCAEABAFIAAAhg");
	this.shape_81.setTransform(70,37.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_82.setTransform(63.6,37.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgCgGQgBgDgCgCIgFgDIgHgBQgDAAgEABIgFAEIgFAGQgBAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAGAAAEACQAEABAEAEIAEAHQACAEAAAFIAAApg");
	this.shape_83.setTransform(56.4,35.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAQAfIgQgxIgPAxIgKAAIgUg+IAKAAIAQAyIAPgyIAIAAIAQAyIAQgyIALAAIgVA+g");
	this.shape_84.setTransform(47.6,37.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_85.setTransform(36.8,36.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_86.setTransform(30.8,37.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgCAsQgEAAgEgCIgIgEIgGgFIgGgHIgEgIIgDgIIAAgKIAAgJIADgIIAEgIIAFgGIAGgGIAIgEIAIgCIAJgBQAHAAAIACQAIACAIAFIgFAHIgMgGQgHgCgGAAIgHABIgGACQgGADgFAFQgEAEgDAHQgCAKAAAEIACAPQADAHAFAFQAEAEAHADIAGACIAGABIALgBIAKgEIAAgaIgWAAIAAgHIAgAAIAAAnQgHAEgJABQgHACgIAAIgJgBg");
	this.shape_87.setTransform(22.6,36.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAbAyIAAg8QAAgGgCgEQgBgFgEgDQgDgEgFgCQgFgBgFAAQgFAAgGACQgFACgEAEQgEAFgCAFQgDAGAAAHIAAA2IgPAAIAAhgIAMAAIACARIAGgIIAJgHQAEgCAFgBIAKgCQAIAAAHADQAHACAFAFQAFAFADAHQACAGAAAIIAAA/g");
	this.shape_88.setTransform(224,15.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAFgIQADgEAEgCQACgCAFgCQAFgBAGAAQAFAAAHABIgCAOIgMgCQgGAAgGADQgDACgEAEQgEAEgCAHQgCAFAAAIIAAAzg");
	this.shape_89.setTransform(214.9,15.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgVAvQgGgDgFgEQgFgFgDgHQgCgHAAgIIAAg+IAQAAIAAA8QAAAGACAEIAEAIQAEAEAFABQAFACAFAAQAFAAAGgCQAFgCAEgEQAEgFADgFQACgGAAgHIAAg2IAQAAIAABgIgOAAIgBgSQgDAFgEAEQgDAEgFACIgKAEIgKACQgIAAgHgDg");
	this.shape_90.setTransform(204.5,16);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AADA+QgEgCgEgEQgEgEgCgFQgCgFAAgGIAAg6IgUAAIAAgMIAUAAIAAgdIAOAAIAAAdIAfAAIAAAMIgfAAIAAA4QAAAIAGAFQAEAEAIAAQAFAAAIgCIADANQgKACgKAAQgGAAgGgCg");
	this.shape_91.setTransform(194.7,14.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAZAvQgFgFgBgIQgGAIgJAFQgIAEgKAAQgHAAgGgDQgGgBgFgFQgEgDgDgGQgCgFAAgGQAAgIADgGQADgGAFgDQAGgEAIgCQAJgCAKgBQAKABALADIAAgKQAAgGgCgDQgCgEgDgDQgDgDgEgCQgEgBgFAAQgIAAgIACQgIACgIADIgFgLIAUgGQAKgCAJAAQAHAAAHACQAHADAFAEQAFAFACAGQADAGAAAIIAAAuQAAAEACACQADACAEABIAFgBIABAMIgKABQgIAAgFgEgAgOABQgGABgEADQgEADgCAEQgCAEAAAFQAAADACAEQABADADADIAHAEIAJABQAGAAAFgCQAFgCAEgEQAEgEACgFQACgFAAgHIAAgIQgKgCgJAAQgHAAgGABg");
	this.shape_92.setTransform(181,15.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgRAxIgSgGIADgMIARAGIAPACQAIAAAHgFQAFgEAAgHQABgEgDgEQgCgDgFgBQgDgCgPgFIgKgDIgJgFQgEgDgCgFQgCgEgBgHQABgFACgGQADgFAEgDQAFgEAGgCQAIgCAGAAIAQABIARAGIgEALIgOgEQgIgCgGAAQgIAAgGAEQgGAFABAGQgBAFADADIAGAEIASAHIAKADIAKAEQAEADACAFQACAGAAAGQAAAGgCAFQgDAGgFADQgFAEgGACQgHACgIAAQgHAAgKgCg");
	this.shape_93.setTransform(166,15.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgQAxIgTgGIAEgMIAQAGIAPACQAJAAAFgFQAHgEAAgHQgBgEgCgEQgCgDgEgBQgEgCgOgFIgLgDIgIgFQgFgDgCgFQgCgEAAgHQAAgFACgGQADgFAFgDQAEgEAHgCQAGgCAHAAIAQABIARAGIgEALIgPgEQgGgCgHAAQgIAAgGAEQgGAFAAAGQAAAFADADIAGAEIASAHIALADIAJAEQAEADABAFQADAGAAAGQAAAGgDAFQgCAGgFADQgFAEgHACQgGACgIAAQgIAAgIgCg");
	this.shape_94.setTransform(157.1,15.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgHBFIAAhgIAPAAIAABggAgHgxQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_95.setTransform(150.2,13.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AA7AyIAAg+QAAgFgCgEQgBgFgDgDIgHgFQgFgBgFAAQgHAAgEACQgGACgDAEQgEAEgCAFQgCAGAAAGIAAA4IgPAAIAAg+QAAgFgCgEQgCgFgDgDIgIgFQgEgBgFAAQgGAAgFACQgFACgEAEQgEAEgCAFQgCAGAAAGIAAA4IgQAAIAAhgIANAAIACARQADgFADgEIAIgGIAJgEIALgBIALACIAIAEIAHAHIAEAIIAHgJIAIgGIAKgEIALgCQAIAAAHADQAGACAEAFQAFAEADAHQADAGgBAIIAABAg");
	this.shape_96.setTransform(138.9,15.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgcAxIAAhgIANAAIACASIAFgIQADgEAEgCQADgCAFgCQAEgBAFAAQAGAAAGABIgCAOIgLgCQgGAAgFADQgFACgDAEQgEAEgCAHQgCAFAAAIIAAAzg");
	this.shape_97.setTransform(121.8,15.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgOAvQgJgEgHgGQgHgHgEgJQgEgKAAgLQAAgKAEgKQADgJAHgHQAGgGAJgFQAIgDAKAAQAJAAAJADQAHAEAGAGQAHAHACAJQADAJABALIAAAFIhLAAQABAIADAGQADAHAEAEQAFAFAHACQAGACAGABQAIAAAHgCQAHgCAIgFIAFALQgJAGgKABQgJADgIAAQgKAAgJgEgAAfgFQgBgIgCgGQgCgGgEgEQgEgEgFgCQgFgDgGAAQgGAAgGADQgFABgEAFQgEAEgCAGQgDAGgBAIIA8AAIAAAAg");
	this.shape_98.setTransform(112.1,15.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgGAwIgphgIARAAIAeBOIAehOIARAAIgnBgg");
	this.shape_99.setTransform(101.5,15.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgOAvQgJgEgIgGQgGgHgEgJQgDgKAAgLQAAgKADgKQADgJAGgHQAHgGAJgFQAIgDAKAAQAKAAAIADQAHAEAGAGQAHAHACAJQAEAJAAALIAAAFIhLAAQABAIADAGQADAHAEAEQAFAFAHACQAGACAGABQAHAAAIgCQAHgCAIgFIAFALQgKAGgJABQgJADgIAAQgKAAgJgEgAAegFQAAgIgCgGQgCgGgEgEQgEgEgFgCQgFgDgGAAQgGAAgGADQgFABgEAFQgEAEgCAGQgDAGgBAIIA7AAIAAAAg");
	this.shape_100.setTransform(91,15.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAoBDIhQhuIAABuIgQAAIAAiFIAQAAIBRBuIAAhuIAQAAIAACFg");
	this.shape_101.setTransform(77.9,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_caption1, new cjs.Rectangle(0,0,300,81.7), null);


(lib.m_caption0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(262.1,75.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_1.setTransform(257.2,74.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAeQgCgDgBgEQgEAEgGAEQgFACgHAAQgEAAgEgCIgHgDQgDgDgCgDQgBgEAAgEQAAgFABgEQACgDAFgDQADgCAGgBQAFgCAGAAQAHAAAHACIAAgHQAAgDgBgCIgEgFIgEgCIgGgBQgFAAgFABIgKADIgEgHIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQABAEABAEIAAAeQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIAEgBIABAIIgHABQgGAAgDgDgAgJABQgEABgCACIgEADIgBAGIABAFIADAEIAFACIAFABQAEAAACgBIAGgEIAFgGQABgDAAgFIAAgFIgNgBIgIABg");
	this.shape_2.setTransform(250.6,72.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAuIgEgEIgEgEIgBgHIAAhNIAKAAIAABNQABADABACQACACADAAIAGgBIABAJIgJABIgGgBg");
	this.shape_3.setTransform(245.5,71.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_4.setTransform(239.6,74.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAgIgNgDIADgIIALADIAJABQAGAAADgCQAEgDABgFQAAgDgCgCIgEgEIgLgDIgHgCIgGgDQgDgDgBgCQgCgDAAgEQAAgFACgCQABgEADgCQADgCAFgCIAIgBIAKABIALADIgCAIIgKgDIgIgBQgFAAgEADQgEACABAFQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIAMADIAGACIAGADIAEAFQACAEAAAEQAAAEgCADQgBAEgEACQgDACgEABQgFACgFAAIgKgBg");
	this.shape_5.setTransform(232.7,72.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_6.setTransform(228.3,71.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkAsIAAhXIAdAAIAJABQAEABAEACIAIADIAHAFIAFAHIAEAHQACAEAAAFIABAIIgBAJQAAAFgCAEIgEAHIgFAHIgHAFIgIAEIgIACIgJABgAgaAjIASAAQAGAAAIgCQAGgDAEgFQAFgEADgHQACgGAAgIQAAgHgCgGQgDgHgFgEQgEgFgGgDQgIgCgGAAIgSAAg");
	this.shape_7.setTransform(222.5,71.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_8.setTransform(211,74.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAsQgGgCgDgEQgEgFgDgGQgCgGAAgHQAAgIACgGQADgFAEgFQADgEAGgCQAEgDAHAAIAGABIAFACIAFAEIADAFIAAgnIALAAIAABbIgIAAIgBgLIgFAGIgEADIgGADIgGABQgHAAgEgDgAgGgJIgGAFIgFAIQgBAEAAAGQAAAFABAEQACAFADADIAGAGQAEABADAAQAFAAADgBQADgCADgDIADgGQACgDAAgEIAAgLQAAgEgCgDIgDgGIgGgEQgDgBgFgBQgDAAgEACg");
	this.shape_9.setTransform(203.7,71.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAfIgag+IALAAIATAzIAUgzIALAAIgaA+g");
	this.shape_10.setTransform(196.8,72.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQAeQgCgDgBgEQgEAEgGAEQgFACgHAAQgEAAgEgCIgHgDQgDgDgCgDQgBgEAAgEQAAgFABgEQACgDAFgDQADgCAGgBQAFgCAGAAQAHAAAHACIAAgHQAAgDgCgCIgDgFIgEgCIgFgBQgGAAgFABIgKADIgEgHIAOgEIALgBQAEAAAFABQAEACAEADIAFAHQACAEAAAEIAAAeQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIAEgBIABAIIgHABQgGAAgDgDgAgJABQgEABgCACIgEADIgBAGIABAFIADAEIAFACIAFABQAEAAACgBIAHgEIADgGQACgDAAgFIAAgFIgNgBIgIABg");
	this.shape_11.setTransform(190.2,72.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaAsIg0hIIAABIIgKAAIAAhXIALAAIA0BIIAAhIIAKAAIAABXg");
	this.shape_12.setTransform(181.5,71.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAIAAIACAMIADgGIAEgDIAFgEIAHAAIAHABIgBAIIgIgBQgDAAgDACQgDACgCACQgDADgBAEQgCAEAAAFIAAAhg");
	this.shape_13.setTransform(171.4,72.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_14.setTransform(164.6,73);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_15.setTransform(157.1,72.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_16.setTransform(150,74.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAuIgFgEIgDgEIgBgHIAAhNIAKAAIAABNQAAADABACQACACADAAIAGgBIABAJIgJABIgFgBg");
	this.shape_17.setTransform(142.2,71.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_18.setTransform(136.1,72.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIADgGIAFgDIAEgEIAHAAIAIABIgBAIIgIgBQgFAAgCACQgDACgDACQgCADgBAEQgCAEABAFIAAAhg");
	this.shape_19.setTransform(130.3,72.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_20.setTransform(124.7,72);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQgBgDgCgCIgFgEIgHgBQgDAAgDACIgHAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAFAAAFABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_21.setTransform(118.5,72.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAHAAAGACQAGADAEAEQAFAFACAFQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAFgGACQgGACgHAAQgGAAgGgCgAgIgWQgDACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_22.setTransform(110.8,72.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHAfQgGgCgEgFQgEgFgDgGQgCgGAAgHQAAgHACgGQADgFAEgFQAEgEAGgDQAGgCAGAAQAGAAAFABIALAGIgEAHQgEgDgEgBIgJgBQgFgBgDACQgEACgDADQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADADQADAEAEACQADACAFgBIAJgBIAIgEIAEAHIgLAFQgFACgGAAQgGAAgGgCg");
	this.shape_23.setTransform(104,72.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMAsQgFgCgEgEQgDgFgDgGQgCgGAAgHQAAgIACgGQADgFADgFQAEgEAFgCQAFgDAHAAIAFABIAGACIAFAEIAEAFIAAgnIAKAAIAABbIgIAAIgBgLIgFAGIgEADIgHADIgFABQgHAAgFgDgAgGgJIgGAFIgEAIQgCAEAAAGQAAAFACAEQABAFADADIAGAGQAEABAEAAQAEAAADgBQADgCACgDIAFgGQABgDAAgEIAAgLQAAgEgBgDIgFgGIgFgEQgDgBgEgBQgEAAgEACg");
	this.shape_24.setTransform(93.6,71.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgBgDgDgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAGAAAEABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_25.setTransform(86.4,72.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AARAeQgDgDgCgEQgDAEgGAEQgFACgHAAQgEAAgEgCIgHgDQgDgDgBgDQgCgEAAgEQAAgFACgEQABgDAEgDQAEgCAFgBQAGgCAHAAQAGAAAHACIAAgHQAAgDgCgCIgCgFIgGgCIgEgBQgGAAgFABIgLADIgDgHIANgEIANgBQADAAAFABQAFACADADIAFAHQABAEAAAEIAAAeQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIADgBIACAIIgHABQgFAAgDgDgAgJABQgDABgDACIgEADIgBAGIABAFIADAEIAFACIAFABQAEAAACgBIAHgEIADgGQACgDAAgFIAAgFIgMgBIgJABg");
	this.shape_26.setTransform(79.3,72.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_27.setTransform(68.9,74.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_28.setTransform(61.1,73);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_29.setTransform(51.6,72);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAfQgGgCgEgFQgFgFgCgGQgDgGAAgHQAAgHADgGQACgFAEgFQAEgEAGgDQAGgCAFAAQAHAAAFACQAFACAEAFQAEAEACAGQACAGAAAGIAAAEIgwAAQAAAEACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgCgAAUgDQAAgFgCgEIgEgHQgCgCgDgBQgEgCgEAAIgHABQgDABgDADIgEAHIgCAJIAmAAIAAAAg");
	this.shape_30.setTransform(45.6,72.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKAgIgNgDIADgIIALADIAJABQAGAAADgCQAEgDABgFQAAgDgCgCIgEgEIgLgDIgHgCIgGgDQgDgDgBgCQgCgDAAgEQAAgFACgCQABgEADgCQADgCAFgCIAIgBIAKABIALADIgCAIIgKgDIgIgBQgFAAgEADQgEACABAFQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIAMADIAGACIAGADIAEAFQACAEAAAEQAAAEgCADQgBAEgEACQgDACgEABQgFACgFAAIgKgBg");
	this.shape_31.setTransform(39.2,72.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_32.setTransform(274,55.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgFAEgFQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAFACAFQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDACgDADQgDADgCAFQgBAEAAAFQAAAGABAEQACAFADADIAGAFQAFACADAAQAFAAAEgCIAHgFQADgDABgFQACgEAAgGQAAgFgCgEQgBgFgDgDQgDgDgEgCQgEgCgFAAQgDAAgFACg");
	this.shape_33.setTransform(266.5,55.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_34.setTransform(259.4,56.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKAgIgNgDIADgJIALAEIAJABQAGAAAEgDQADgDAAgEQAAgDgBgCIgEgEIgMgEIgGgBIgGgDQgDgCgBgDQgCgEAAgEQAAgEACgDQACgDACgCQADgCAFgCIAJgBIAKABIAKADIgCAIIgJgDIgJgBQgFAAgEACQgEADAAAEQAAABABABQAAAAAAABQAAAAAAABQABABAAAAIAEAEIALADIAHADIAGACIAEAGQABADAAAEQAAAEgBADQgCADgDADQgDADgEAAQgFACgEAAIgLgBg");
	this.shape_35.setTransform(250.1,55.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_36.setTransform(243.6,56.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAuIgGgEIgCgEIgBgHIAAhMIAKAAIAABLQAAAEABACQABACAEAAIAGgBIACAJIgKABIgFgBg");
	this.shape_37.setTransform(238.2,53.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_38.setTransform(232.5,55.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgCgGQgBgDgCgCIgFgDIgHgBQgDAAgDABIgGAEIgFAGQgBAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAGAAAEACQAEABAEAEIAEAHQACAEAAAFIAAApg");
	this.shape_39.setTransform(225.3,53.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_40.setTransform(214.8,56.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_41.setTransform(207.2,56.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAQAeQgCgDgBgFQgEAGgGACQgFADgHAAQgEAAgEgCIgHgDQgDgDgBgEQgCgDAAgEQAAgFACgEQABgDAFgCQADgDAGgCQAFgBAHAAQAGAAAHACIAAgHQAAgCgCgDIgDgFIgFgDIgEAAQgGgBgFACIgLADIgDgHIAOgEIAMgBQADAAAFABQAFACADADIAFAHQACAEAAAEIAAAeQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAIAEgBIABAIIgHABQgGAAgDgDgAgJABQgDABgDABIgEAFIgBAFIABAFIADAEIAFACIAFACQAEAAACgCIAHgEIADgGQACgDAAgFIAAgFIgMgBIgJABg");
	this.shape_42.setTransform(200,55.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_43.setTransform(189.8,56.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMAsQgFgDgEgDQgDgFgCgGQgDgGAAgIQAAgGADgHQACgFADgEQAEgFAFgCQAGgCAGAAIAFAAIAGACIAFAEIAEAFIAAgmIAKAAIAABaIgIAAIgBgKIgEAEIgGAFIgGACIgFABQgGgBgGgCgAgGgIIgHAEIgDAHQgCAFAAAFQAAAGACAEQABAFACADIAHAGQAEABAEAAQADAAAEgBQADgBACgEIAFgFQABgEAAgEIAAgKQAAgFgBgDIgFgGIgFgEQgEgCgDAAQgEABgEACg");
	this.shape_44.setTransform(182.5,53.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEAfIgag+IALAAIATAzIAUgzIALAAIgaA+g");
	this.shape_45.setTransform(175.6,55.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AARAeQgEgDgBgFQgDAGgGACQgFADgGAAQgFAAgEgCIgHgDQgDgDgCgEQgCgDAAgEQAAgFACgEQADgDADgCQAEgDAFgCQAGgBAGAAQAHAAAHACIAAgHQAAgCgBgDIgDgFIgGgDIgFAAQgFgBgFACIgKADIgDgHIAMgEIAMgBQAFAAAEABQAEACAEADIAFAHQACAEgBAEIAAAeQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIACgBIABAIIgGABQgFAAgDgDgAgIABQgEABgDABIgEAFIgBAFIABAFIADAEIAEACIAGACQAEAAADgCIAFgEIAFgGQABgDAAgFIAAgFIgMgBIgIABg");
	this.shape_46.setTransform(169,55.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAaAsIg0hIIAABIIgKAAIAAhXIALAAIA0BIIAAhIIAKAAIAABXg");
	this.shape_47.setTransform(160.3,53.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_48.setTransform(148.8,55.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_49.setTransform(141.8,55.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAIAAIACAMIADgGIAEgDIAFgDIAHgBIAHABIgBAJIgIgBQgEAAgCABQgDABgDADQgCADgBAEQgCAEAAAFIAAAhg");
	this.shape_50.setTransform(136.3,55.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgIAuIAAg2IgNAAIAAgIIANAAIAAgLQAAgEABgEQABgDADgDQADgCACgBIAIgBIAMABIgBAIIgJgBQgFAAgDADQgDADAAAFIAAAKIASAAIAAAIIgSAAIAAA2g");
	this.shape_51.setTransform(131.2,53.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_52.setTransform(122.1,55.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgCgGQgBgDgCgCIgFgDIgHgBQgDAAgDABIgHAEIgDAGQgCAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAFAAAFACQAEABAEAEIAFAHQABAEAAAFIAAApg");
	this.shape_53.setTransform(114.9,53.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgFAsIAAhOIgeAAIAAgJIBGAAIAAAJIgeAAIAABOg");
	this.shape_54.setTransform(107.2,53.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_55.setTransform(98.6,57.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMAtQgHgBgGgDIADgIIALAEIAKABIAIgBQAEgCADgCQADgDABgDQABgEAAgDIAAgMIgDAFIgFAEIgFACIgGABQgHgBgEgCQgGgDgDgDQgEgFgDgGQgCgFAAgIQAAgGACgHQADgGAEgEQADgFAGgCQAEgCAHAAIAGAAIAGADIAEADIAFAGIABgLIAIAAIAAA/QAAAGgCAFQgCAFgEAEQgFAEgFACQgHACgFAAIgMgCgAgGgjIgGAEIgFAIQgBAFAAAFQAAAGABAEQACAEADADIAGAGQAEABADAAQAFAAADgBQADgBADgEIADgFQACgDAAgEIAAgKQAAgFgCgDIgDgHIgGgEQgDgCgFAAQgDABgEACg");
	this.shape_56.setTransform(93,56.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgBgHQgCgDgCgCIgFgEIgHgBQgDAAgEACIgGAEIgDAGQgCAEAAAFIAAAiIgKAAIAAg+IAIAAIACAMIADgGIAGgEIAGgDIAGAAQAFAAAFABQAEACADADIAGAHQABAFAAAFIAAAog");
	this.shape_57.setTransform(85.7,55);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_58.setTransform(80.4,53.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgEAfIgag+IALAAIATAzIAUgzIALAAIgaA+g");
	this.shape_59.setTransform(75.5,55.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_60.setTransform(70.6,53.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAIAAIABAMIADgGIAFgDIAEgDIAGgBIAIABIAAAJIgJgBQgEAAgDABQgCABgCADQgDADgBAEQgBAEAAAFIAAAhg");
	this.shape_61.setTransform(67,55.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgLAsQgGgDgDgDQgEgFgDgGQgCgGAAgIQAAgGACgHQADgFAEgEQADgFAGgCQAEgCAHAAIAGAAIAFACIAFAEIADAFIAAgmIALAAIAABaIgIAAIgBgKIgFAEIgEAFIgGACIgGABQgHgBgEgCgAgGgIIgGAEIgFAHQgBAFAAAFQAAAGABAEQACAFADADIAGAGQAEABADAAQAFAAADgBQADgBADgEIADgFQACgEAAgEIAAgKQAAgFgCgDIgDgGIgGgEQgDgCgFAAQgDABgEACg");
	this.shape_62.setTransform(60.1,53.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgFAEgFQAEgFAGgCQAGgCAFAAQAHAAAFACQAFADAEADQAEAFACAGQACAGAAAHIAAACIgwAAQAAAFACAFQACAEADADQADADAEABQAEACAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgFgCgEIgEgGQgCgEgDgBQgEgBgEAAIgHABQgDABgDAEIgEAGIgCAJIAmAAIAAAAg");
	this.shape_63.setTransform(50,55.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgDAuIgEgEIgEgEIgBgHIAAhMIAKAAIAABLQAAAEACACQABACAEAAIAHgBIAAAJIgJABIgGgBg");
	this.shape_64.setTransform(45.1,53.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_65.setTransform(41.3,53.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgBgGQgCgDgCgCIgFgDIgHgBQgDAAgEABIgFAEIgFAGQgBAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAFAAAFACQAEABADAEIAGAHQABAEAAAFIAAApg");
	this.shape_66.setTransform(36.1,53.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAPAfIgPgxIgPAxIgKAAIgUg+IAKAAIAPAyIAQgyIAIAAIAQAyIAQgyIALAAIgVA+g");
	this.shape_67.setTransform(27.2,55.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_68.setTransform(265.2,37.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AASAgIAAgmIgCgHQgBgDgCgCIgFgEIgHgBQgDAAgEACIgFAEIgFAGQgBAEAAAFIAAAiIgKAAIAAg+IAIAAIABAMIAFgGIAEgEIAHgDIAGAAQAGAAAEABQAEACAEADIAEAHQACAFAAAFIAAAog");
	this.shape_69.setTransform(258,37.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgGAEgEQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAEACAGQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDABgDAEQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgEgEgBQgEgCgFAAQgDAAgFACg");
	this.shape_70.setTransform(250.4,37.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgCgGQAAgDgDgCIgFgDIgHgBQgDAAgDABIgHAEIgDAGQgCAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAGAAAEACQAEABAEAEIAEAHQACAEAAAFIAAApg");
	this.shape_71.setTransform(242.9,35.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgdAuIAAhZIAIAAIACAKIAEgFIAFgEIAGgCIAFgBQAGAAAGACQAFADAEAEQAEAFACAGQACAGAAAHQAAAHgCAGQgCAFgEAFQgEAEgFADQgGACgGAAIgFAAIgGgDQgFgDgEgFIAAAlgAgIgjIgGAEQgCADgBADQgCAEAAAEIAAAKQAAAFACACQABAEACACQADADADABQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgEAAgGQAAgFgBgFIgEgIIgHgFQgEgCgDAAQgEAAgEACg");
	this.shape_72.setTransform(235.5,38.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IAIAAIACAMIADgFIAEgFIAFgCIAHgBIAIABIgCAJIgHgBQgFgBgCACQgDACgDACQgCADgBAEQgBAEAAAFIAAAhg");
	this.shape_73.setTransform(226.4,37.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_74.setTransform(219.6,37.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgGAEgEQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAEACAGQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDABgDAEQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgEgEgBQgEgCgFAAQgDAAgFACg");
	this.shape_75.setTransform(212.1,37.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_76.setTransform(205,38.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_77.setTransform(195.1,37.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgKAgIgMgEIACgIIALAEIAJABQAGAAADgDQAFgDAAgEQAAgDgCgCIgEgDIgLgFIgHgCIgGgCQgDgCgBgDQgCgDAAgFQAAgDACgEQABgDADgCQAEgDAEgBIAIgBIAKABIAMADIgDAIIgKgDIgIgCQgFAAgEADQgEADABAEQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABIAEADIAMAFIAGACIAGACIAEAGQABADABAEQgBAEgBADQgBADgEADQgDACgEABQgFACgFAAIgKgBg");
	this.shape_78.setTransform(188.7,37.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgNAfQgEgCgDgDQgEgDgBgFQgCgEAAgFIAAgoIAKAAIAAAmQAAAEACADIADAFIAFADQADACAEAAQADAAADgCQAEgBADgDQACgDACgEIABgIIAAgiIAKAAIAAA+IgIAAIgBgMIgEAGIgGAEIgGACIgGABQgFAAgFgBg");
	this.shape_79.setTransform(182,37.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgMAeQgGgCgEgEQgEgEgDgHQgCgGAAgHQAAgGACgHQADgGAEgEQAEgFAGgCQAGgCAGAAQAHAAAGACQAGACAEAFQAFAEACAGQACAHAAAGQAAAHgCAGQgCAHgFAEQgEAEgGACQgGADgHAAQgGAAgGgDgAgIgWQgDABgDAEQgDAEgCAEQgBAFAAAEQAAAFABAFQACAEADAEIAGAFQAFACADAAQAFAAAEgCIAHgFQADgEABgEQACgFAAgFQAAgEgCgFQgBgEgDgEQgDgEgEgBQgEgCgFAAQgDAAgFACg");
	this.shape_80.setTransform(171.4,37.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_81.setTransform(165,36.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_82.setTransform(156,38.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AARAeQgDgCgCgGQgDAGgGACQgFADgGAAQgFAAgEgCIgHgEQgDgCgBgEQgCgDgBgEQABgFACgEQACgDADgCQAEgDAFgCQAGgBAHAAQAGAAAHACIAAgGQAAgEgCgCIgCgEIgGgEIgEgBQgGABgFABIgLAEIgCgIIAMgEIANgBQAEAAAEABQAFACADADIAFAHQABAEAAAFIAAAdQAAABABAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIADAAIABAIIgGAAQgFAAgDgDgAgIAAQgEABgDACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAHgEIADgGQACgDAAgEIAAgGIgMgBIgIAAg");
	this.shape_83.setTransform(149.4,37.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAPAfIgPgxIgOAxIgLAAIgVg+IALAAIAPAyIAQgyIAJAAIAQAyIAPgyIAKAAIgVA+g");
	this.shape_84.setTransform(140.7,37.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_85.setTransform(129.9,36.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgKAgIgNgEIADgIIALAEIAJABQAGAAAEgDQADgDAAgEQABgDgCgCIgEgDIgMgFIgHgCIgFgCQgDgCgBgDQgCgDAAgFQAAgDACgEQACgDADgCQADgDAEgBIAJgBIAKABIAKADIgCAIIgJgDIgJgCQgFAAgEADQgEADAAAEQAAABABABQAAAAAAABQAAAAAAABQABAAAAABIAEADIALAFIAHACIAGACIAEAGQABADAAAEQAAAEgBADQgCADgDADQgDACgEABQgFACgEAAIgLgBg");
	this.shape_86.setTransform(124.4,37.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_87.setTransform(118.1,37.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgEAuIgGgCIgFgFIgEgEIgCAKIgIAAIAAhaIAKAAIAAAmIAEgFIAFgEIAGgCIAFAAQAGAAAGACQAFACAEAFQAEAEACAFQACAHAAAGQAAAIgCAGQgCAGgEAEQgEAEgFADQgGADgGgBIgFAAgAgIgJIgGAEQgCADgBACQgCAEAAAFIAAAJQAAAFACAEQABADACADQADADADAAQAEACAEAAQADAAAEgCIAHgFQACgDACgEQABgFAAgGQAAgFgBgFIgEgHIgHgEQgEgCgDAAQgEAAgEABg");
	this.shape_88.setTransform(111,36);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgJAeQgGgCgEgEQgFgEgCgHQgDgGAAgHQAAgGADgHQACgGAEgEQAEgFAGgCQAGgCAFAAQAHAAAFACQAFACAEAEQAEAFACAGQACAGAAAHIAAACIgwAAQAAAGACADQACAFADADQADADAEACQAEABAEAAIAKgBIAKgEIADAHIgMAEIgMACQgGAAgGgDgAAUgDQAAgEgCgEIgEgHQgCgDgDgCQgEgCgEAAIgHACQgDACgDADIgEAGIgCAJIAmAAIAAAAg");
	this.shape_89.setTransform(100.5,37.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AASAuIAAgoIgCgGQgBgDgCgCIgFgDIgHgBQgDAAgDABIgHAEIgDAGQgCAEAAAEIAAAkIgKAAIAAhbIAKAAIAAAoIAEgGIAFgEIAGgCIAGgBQAFAAAFACQAEABAEAEIAFAHQABAEAAAFIAAApg");
	this.shape_90.setTransform(93.3,35.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AACAoQgCgBgDgCQgDgDgBgDQgBgEAAgEIAAglIgNAAIAAgIIANAAIAAgTIAJAAIAAATIAUAAIAAAIIgUAAIAAAkQAAAFADADQADADAFAAIAJgBIABAIIgMACIgIgCg");
	this.shape_91.setTransform(86.8,36.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgKAgIgMgEIACgIIALAEIAJABQAGAAADgDQAFgDAAgEQgBgDgBgCIgEgDIgLgFIgIgCIgFgCQgDgCgBgDQgCgDAAgFQAAgDACgEQABgDAEgCQADgDAEgBIAIgBIALABIALADIgDAIIgKgDIgIgCQgFAAgEADQgDADgBAEQABABAAABQAAAAAAABQAAAAAAABQABAAAAABIAEADIAMAFIAGACIAGACIAEAGQABADAAAEQAAAEgBADQgCADgDADQgDACgEABQgEACgGAAIgKgBg");
	this.shape_92.setTransform(78.2,37.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgEAtIAAg+IAJAAIAAA+gAgEggQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_93.setTransform(73.8,36);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgcAtIABgJIAHABQAEAAADgDQAEgCACgHIADgIIgag+IALAAIATAyIAUgyIALAAIgeBIQgBAFgCADIgFAGQgCADgDABIgHABIgJgBg");
	this.shape_94.setTransform(65.8,38.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgLAsQgGgDgDgEQgFgEgBgGQgDgGAAgIQAAgGADgHQABgFAFgEQADgFAGgCQAFgCAGAAIAGAAIAFACIAFAEIADAFIAAgmIALAAIAABaIgIAAIgCgKIgDAEIgGAFIgFACIgGAAQgGABgFgDgAgGgIIgHAEIgDAHQgCAFAAAFQAAAGACAFQABAEACADIAHAFQAEACADAAQAEAAAEgCQADAAADgDIADgGQACgEAAgFIAAgJQAAgFgCgEIgDgFIgGgEQgEgBgEAAQgDAAgEACg");
	this.shape_95.setTransform(58.5,36);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgEAfIgag+IALAAIATAyIAUgyIALAAIgaA+g");
	this.shape_96.setTransform(51.6,37.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AARAeQgDgCgCgGQgDAGgGACQgFADgGAAQgFAAgEgCIgHgEQgDgCgBgEQgCgDgBgEQABgFACgEQACgDADgCQAEgDAFgCQAGgBAHAAQAGAAAHACIAAgGQAAgEgCgCIgCgEIgGgEIgEgBQgGABgFABIgLAEIgCgIIAMgEIANgBQAEAAAEABQAFACADADIAFAHQABAEAAAFIAAAdQAAABABAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQABAAABAAIACAAIABAIIgGAAQgFAAgDgDgAgIAAQgEABgDACIgEAFIgBAFIABAFIADAEIAFADIAFABQAEgBACgBIAHgEIADgGQACgDAAgEIAAgGIgMgBIgIAAg");
	this.shape_97.setTransform(45,37.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAaAsIg0hIIAABIIgKAAIAAhXIALAAIA0BIIAAhIIAKAAIAABXg");
	this.shape_98.setTransform(36.3,36.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgsBFIACgNIAKABQAHABAFgFQAFgEAEgLIAFgMIgohgIAQAAIAfBOIAdhOIARAAIgtBvIgFANQgEAGgEADQgEAEgEACQgGABgGABQgGAAgHgCg");
	this.shape_99.setTransform(199.7,18.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgTBEQgIgEgGgHQgGgGgDgKQgDgJAAgLQAAgLADgKQADgIAGgHQAGgHAIgEQAJgDAJAAIAJABQAEABAFACIAHAGIAGAHIAAg7IAQAAIAACMIgNAAIgCgQIgGAIIgHAGQgFACgFABIgJACQgJAAgJgEgAgKgOQgGADgEAFQgEAFgCAGQgDAHAAAJQAAAIADAHQACAHAEAFQAEAFAGADQAGADAGAAQAGAAAFgDQAFgCAEgEQAEgEACgFQACgGAAgHIAAgPQAAgHgCgFQgCgFgEgEQgEgEgFgCQgFgCgGAAQgGAAgGACg");
	this.shape_100.setTransform(188.3,13.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgGAwIgphgIARAAIAeBOIAfhOIARAAIgpBgg");
	this.shape_101.setTransform(177.7,15.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAZAvQgFgFgBgIQgGAIgJAFQgIAEgKAAQgHAAgGgDQgGgBgFgFQgEgDgDgGQgCgFAAgGQAAgIADgGQADgGAFgDQAGgEAIgCQAJgCAKgBQAKABALADIAAgKQAAgGgCgDQgCgEgDgDQgDgDgEgCQgEgBgFAAQgIAAgIACQgIACgIADIgFgLIAUgGQAKgCAJAAQAHAAAHACQAHADAFAEQAFAFACAGQADAGAAAIIAAAuQAAAEACACQADACAEABIAFgBIABAMIgKABQgIAAgFgEgAgOABQgGABgEADQgEADgCAEQgCAEAAAFQAAADACAEQABADADADIAHAEIAJABQAGAAAFgCQAFgCAEgEQAEgEACgFQACgFAAgHIAAgIQgKgCgJAAQgHAAgGABg");
	this.shape_102.setTransform(167.5,15.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAoBDIhQhuIAABuIgQAAIAAiFIAQAAIBRBuIAAhuIAQAAIAACFg");
	this.shape_103.setTransform(154.1,14);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AADA+QgEgCgEgEQgEgEgCgFQgCgFAAgGIAAg6IgUAAIAAgMIAUAAIAAgdIAPAAIAAAdIAeAAIAAAMIgeAAIAAA4QAAAIAEAFQAFAEAHAAQAGAAAIgCIACANQgKACgJAAQgGAAgGgCg");
	this.shape_104.setTransform(137.6,14.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgPAvQgIgEgHgGQgIgHgDgJQgDgKgBgLQABgKADgKQADgJAHgHQAGgGAIgFQAKgDAIAAQALAAAHADQAIAEAHAGQAFAHAEAJQACAJAAALIAAAFIhJAAQAAAIACAGQADAHAFAEQAFAFAGACQAHACAHABQAGAAAHgCQAIgCAIgFIAFALQgJAGgKABQgJADgIAAQgKAAgKgEgAAfgFQgBgIgCgGQgCgGgEgEQgEgEgFgCQgFgDgHAAQgFAAgGADQgEABgFAFQgEAEgDAGQgCAGAAAIIA7AAIAAAAg");
	this.shape_105.setTransform(128.4,15.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgOAvQgKgEgGgGQgIgHgDgJQgDgKgBgLQABgKADgKQADgJAHgHQAGgGAIgFQAKgDAIAAQALAAAHADQAJAEAFAGQAGAHADAJQADAJAAALIAAAFIhKAAQABAIACAGQAEAHAEAEQAFAFAGACQAHACAGABQAIAAAHgCQAHgCAIgFIAFALQgJAGgKABQgJADgIAAQgKAAgJgEgAAfgFQgBgIgCgGQgCgGgEgEQgEgEgFgCQgFgDgHAAQgFAAgGADQgEABgFAFQgEAEgDAGQgCAGgBAIIA8AAIAAAAg");
	this.shape_106.setTransform(117.7,15.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAyBDIAAhuIguA8IgIAAIgtg8IAABuIgQAAIAAiFIAQAAIAxBCIAxhCIAQAAIAACFg");
	this.shape_107.setTransform(103.7,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_caption0, new cjs.Rectangle(0,0,300,81.7), null);


(lib.b_hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().dr(-300,-600,600,1200);
	this.shape.setTransform(300,600);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.m_screens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.m_screen0();
	this.instance.parent = this;
	this.instance.setTransform(2129,45,1,1,0,0,0,105,45);

	this.instance_1 = new lib.m_screen3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1771,107.5,1,1,0,0,0,253,107.5);

	this.instance_2 = new lib.m_screen3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-253,107.5,1,1,0,0,0,253,107.5);

	this.instance_3 = new lib.m_screen2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1117,45,1,1,0,0,0,105,45);

	this.instance_4 = new lib.m_screen1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(611,45,1,1,0,0,0,105,45);

	this.instance_5 = new lib.m_screen0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(105,45,1,1,0,0,0,105,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_screens, new cjs.Rectangle(-506,0,3036,215), null);


(lib.m_screencontainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen mcs
	this.screens_mc = new lib.m_screens();
	this.screens_mc.parent = this;
	this.screens_mc.setTransform(-253,0,0.5,0.5,0,0,0,-506,0);

	this.timeline.addTween(cjs.Tween.get(this.screens_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_screencontainer, new cjs.Rectangle(-253,0,1518,107.5), null);


(lib.m_imagescontainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image0
	this.image0_mc = new lib.m_image0();
	this.image0_mc.parent = this;
	this.image0_mc.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.image0_mc).wait(1));

	// image1
	this.image1_mc = new lib.m_image1();
	this.image1_mc.parent = this;
	this.image1_mc.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.image1_mc).wait(1));

	// image2
	this.image2_mc = new lib.m_image2();
	this.image2_mc.parent = this;
	this.image2_mc.setTransform(120,240,0.8,0.8,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.image2_mc).wait(1));

	// image3
	this.image3_mc = new lib.m_image3();
	this.image3_mc.parent = this;
	this.image3_mc.setTransform(120,94.4,0.8,0.8,0,0,0,150,118);

	this.timeline.addTween(cjs.Tween.get(this.image3_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_imagescontainer, new cjs.Rectangle(0,0,600,472), null);


(lib.m_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text_mc = new lib.m_ctatext();
	this.text_mc.parent = this;
	this.text_mc.setTransform(67,17.3,1,1,0,0,0,67,12.3);

	this.timeline.addTween(cjs.Tween.get(this.text_mc).wait(1));

	// overlay
	this.overlay_mc = new lib.m_ctabg();
	this.overlay_mc.parent = this;
	this.overlay_mc.setTransform(67,18.5,1,1,0,0,0,67,18.5);
	this.overlay_mc.filters = [new cjs.ColorFilter(0, 0, 0, 1, 112, 112, 112, 0)];
	this.overlay_mc.cache(-2,-2,138,41);

	this.timeline.addTween(cjs.Tween.get(this.overlay_mc).wait(1));

	// bg
	this.instance = new lib.m_ctabg();
	this.instance.parent = this;
	this.instance.setTransform(67,18.5,1,1,0,0,0,67,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_cta, new cjs.Rectangle(0,0,134,37), null);


(lib.m_captions = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// caption0
	this.caption0_mc = new lib.m_caption0();
	this.caption0_mc.parent = this;
	this.caption0_mc.setTransform(150,42.6,1,1,0,0,0,150,42.6);

	this.timeline.addTween(cjs.Tween.get(this.caption0_mc).wait(1));

	// caption1
	this.caption1_mc = new lib.m_caption1();
	this.caption1_mc.parent = this;
	this.caption1_mc.setTransform(150,42.6,1,1,0,0,0,150,42.6);

	this.timeline.addTween(cjs.Tween.get(this.caption1_mc).wait(1));

	// caption2
	this.caption2_mc = new lib.m_caption2();
	this.caption2_mc.parent = this;
	this.caption2_mc.setTransform(150,42.6,1,1,0,0,0,150,42.6);

	this.timeline.addTween(cjs.Tween.get(this.caption2_mc).wait(1));

	// caption3
	this.caption3_mc = new lib.m_caption3();
	this.caption3_mc.parent = this;
	this.caption3_mc.setTransform(150,42.6,1,1,0,0,0,150,42.6);

	this.caption3_mc_1 = new lib.m_caption3();
	this.caption3_mc_1.parent = this;
	this.caption3_mc_1.setTransform(151,43.6,1,1,0,0,0,150,42.6);
	this.caption3_mc_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.caption3_mc_1.cache(-2,-2,304,86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.caption3_mc_1},{t:this.caption3_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_captions, new cjs.Rectangle(0,0,301,82.7), null);


// stage content:
(lib.navdy_carousel_300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this,
			hit = root.hit_btn, 
			cta = root.cta_mc,
			prev = root.prev_mc,
			next = root.next_mc,
			images = root.images_mc,
			captions = root.captions_mc,
			screens = root.screenContainer_mc.screens_mc,
			buttons = [root.button0_mc, root.button1_mc, root.button2_mc, root.button3_mc],
			hand = root.hand_mc,
			screenCounter = 0,
			imageCounter = 0,
			autoCounter = 0,
			numItems = buttons.length,
			time = .35,
			screenWidth = 253,
			interacted = false,
			autoPlay = setInterval(handleAutoPlay, 5000);
		
		
		function init() {
			
			hand.alpha = 0;
			
			prev.on("click", prevClick);
			next.on("click", nextClick);
			
			with(cta) {
				on("mouseover", onCtaOver);
				on("mouseout", onCtaOut);
				on("click", doClickthrough);
				overlay_mc.alpha = 0;
			}
			
			with (hit) {
				on("click", doClickthrough);
				on("mouseover", killAutoPlay);
			}
			
			for (var i = 0; i < numItems; i++) {
				var button = buttons[i],
					caption = captions["caption" + i + "_mc"];
				button.name = "button" + String(i);
				button.on("mouseover", handleButtonOver);
				if (i > 0) {
					button.alpha = .25;
					caption.alpha = 0;
				} else {
					caption.alpha = 1;
				}
			}
		}
		
		function handleAutoPlay() {
			autoCounter++;
			
			if (autoCounter > numItems-1) {
				autoCounter = 0;
			}
			
			swap(autoCounter);
		}
		
		function handleButtonOver(e) {
			var index = Number(e.currentTarget.name.slice(-1));
			swap(index);
		}
		
		function killAutoPlay() {
			interacted = true;
			clearInterval(autoPlay);
		}
		
		function prevClick(e) {
			prev.mouseEnabled = false;
			screenCounter--;
			
			if(screenCounter >= 0){
				TweenMax.to(screens, time, {x:"+=" + screenWidth, ease:Power2.easeOut});
			}
			
			if(screenCounter < 0){
				TweenMax.to(screens, time, {x:"+=" + screenWidth, ease:Power2.easeOut, onComplete:resetPrev});
			}
			
			swapImages(-1);
			
			setTimeout(function(){ prev.mouseEnabled = true; }, 500);
		}
		
		function nextClick(){	
			next.mouseEnabled = false;
			screenCounter++;
			
			if(screenCounter <= numItems-1){ 
				TweenMax.to(screens, time, {x:"-=" + screenWidth, ease:Power2.easeOut});
			}
			
			if(screenCounter > numItems-1){
				TweenMax.to(screens, time, {x:"-=" + screenWidth, ease:Power2.easeOut, onComplete:resetNext});
			}
			
			swapImages(1);
			
			setTimeout(function(){ next.mouseEnabled = true; }, 500);
		}
		
		function resetPrev(){
			screens.x = -numItems * screenWidth;
			screenCounter = numItems-1;
		}
		
		function resetNext(){
			screens.x = -screenWidth;
			screenCounter = 0;
		}
		
		function swap(index) {
			
			TweenMax.to(screens, time, {x: -screenWidth * (index + 1), ease:Power2.easeOut});
			
			if (index == numItems-1) {
				TweenMax.to(hand, time, {alpha:1});
			} else {
				TweenMax.to(hand, time, {alpha:0});
			}
			
			for (var i = 0; i < numItems; i++) {
				var image = images["image" + i + "_mc"];
				var caption = captions["caption" + i + "_mc"];
				if (index == i) {
					TweenMax.to(buttons[i], time, {alpha:1});
					TweenMax.to([image, caption], time, {alpha:1});
				} else {
					TweenMax.to([image, caption], time, {alpha:0});
					TweenMax.to(buttons[i], time, {alpha:.25});
				}
			}
		}
		
		
		/*function swapImages(increment) {
			
			imageCounter += increment;
			
			if (imageCounter == numItems) {
				imageCounter = 0;
			}
			
			if (imageCounter < 0) {
				imageCounter = numItems-1;
			}
			
			for (var i = 0; i < numItems; i++) {
				var image = images["image" + i + "_mc"];
				if (imageCounter == i) {
					TweenMax.to(image, time, {alpha:1});
				} else {
					TweenMax.to(image, time, {alpha:0});
				}
			}
		}*/
		
		function onCtaOver() {
			TweenMax.to(cta.overlay_mc, .25, {alpha:1});
		}
		
		function onCtaOut() {
			TweenMax.to(cta.overlay_mc, .25, {alpha:0});
		}
		
		setTimeout(function(){ 
			if(!interacted){
				clearInterval(autoPlay);
			}
		}, 20000);
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta
	this.cta_mc = new lib.m_cta();
	this.cta_mc.parent = this;
	this.cta_mc.setTransform(150,551.5,1,1,0,0,0,67,18.5);

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(1));

	// captions
	this.captions_mc = new lib.m_captions();
	this.captions_mc.parent = this;
	this.captions_mc.setTransform(150,402.6,1,1,0,0,0,150,42.6);

	this.timeline.addTween(cjs.Tween.get(this.captions_mc).wait(1));

	// nav butons
	this.button3_mc = new lib.m_navbutton();
	this.button3_mc.parent = this;
	this.button3_mc.setTransform(181,475);

	this.button2_mc = new lib.m_navbutton();
	this.button2_mc.parent = this;
	this.button2_mc.setTransform(155,475);

	this.button1_mc = new lib.m_navbutton();
	this.button1_mc.parent = this;
	this.button1_mc.setTransform(129,475);

	this.button0_mc = new lib.m_navbutton();
	this.button0_mc.parent = this;
	this.button0_mc.setTransform(103,475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button0_mc},{t:this.button1_mc},{t:this.button2_mc},{t:this.button3_mc}]}).wait(1));

	// hand
	this.hand_mc = new lib.m_hand();
	this.hand_mc.parent = this;
	this.hand_mc.setTransform(66.5,446.6,0.5,0.5,0,0,0,152.2,335.2);

	this.timeline.addTween(cjs.Tween.get(this.hand_mc).wait(1));

	// arrows
	this.prev_mc = new lib.m_arrowbutton();
	this.prev_mc.parent = this;
	this.prev_mc.setTransform(-35,304,1,1,180,0,0,20,36);

	this.next_mc = new lib.m_arrowbutton();
	this.next_mc.parent = this;
	this.next_mc.setTransform(315,304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// hit
	this.hit_btn = new lib.b_hit();
	this.hit_btn.parent = this;
	this.hit_btn.setTransform(150,300,1,1,0,0,0,150,300);
	new cjs.ButtonHelper(this.hit_btn, 0, 1, 2, false, new lib.b_hit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit_btn).wait(1));

	// logo
	this.instance = new lib.m_logo();
	this.instance.parent = this;
	this.instance.setTransform(149.8,43.6,0.5,0.5,0,0,0,109.6,43.2);
	this.instance.cache(-2,-2,223,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax9QwIAAwxMAnhAAAIAAQxg");
	mask.setTransform(138,107.3);

	// screens
	this.screenContainer_mc = new lib.m_screencontainer();
	this.screenContainer_mc.parent = this;
	this.screenContainer_mc.setTransform(-230,107,1,1,0,0,0,-253,0);

	var maskedShapeInstanceList = [this.screenContainer_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.screenContainer_mc).wait(1));

	// background
	this.instance_1 = new lib.m_dash();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.3,232,0.5,0.5,0,0,0,187.5,254);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// images
	this.images_mc = new lib.m_imagescontainer();
	this.images_mc.parent = this;
	this.images_mc.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.images_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.5,246.4,637.5,1253.6);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"navdy_carousel_300x600_atlas_P_.png?1484257424419", id:"navdy_carousel_300x600_atlas_P_"},
		{src:"navdy_carousel_300x600_atlas_NP_.jpg?1484257424420", id:"navdy_carousel_300x600_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;