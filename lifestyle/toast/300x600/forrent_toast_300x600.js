(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"forrent_toast_300x600_atlas_P_", frames: [[195,173,154,162],[0,0,193,268],[195,0,147,171]]}
];


// symbols:



(lib.dude_bicep = function() {
	this.spriteSheet = ss["forrent_toast_300x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dude_hand = function() {
	this.spriteSheet = ss["forrent_toast_300x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ruth_hand = function() {
	this.spriteSheet = ss["forrent_toast_300x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.toast_background = function() {
	this.initialize(img.toast_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1382,1500);// helper functions:

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


(lib.m_ruthhand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ruth_hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_ruthhand, new cjs.Rectangle(0,0,147,171), null);


(lib.m_name = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYDBIAAg0IAfgEIAAhuIhtAAIAABuIAgAEIAAA0IipAAIAAg0IAfgEIAAkRIgfgEIAAg0ICpAAIAAA0IggADIAABsIBtAAIAAhrIgfgEIAAg0ICoAAIAAA0IgfADIAAESIAfAEIAAA0g");
	this.shape.setTransform(165,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhnDBIAAg0IAzgEIAAkSQgTAAgLAFQgMAEgIAJQgIAJgFARIgKArIgwAAIAGiOIFQAAIAFCOIgxAAIgKgtQgFgRgIgJQgHgJgMgDQgLgEgTAAIAAESIAzAEIAAA0g");
	this.shape_1.setTransform(125.8,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2C+QgegGgUgPQgLgIgIgJQgIgLgGgNQgGgOgDgQQgDgSAAgUIAAjIIgdgDIAAg0ICoAAIAAA0IghADIAAC8QABAtAJAPQAHALANAGQANAFAUAAQATAAANgEQAMgGAIgKQAHgJAEgPQADgNAAgTIAAjBIgegEIAAg0IB7AAIAAA0IgbAEIAADLQAAAegJAZQgJAYgSASQgSAQgaAKQgcAIgkABQgjAAgbgGg");
	this.shape_2.setTransform(88.2,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABAC/QgQgFgMgKQgMgKgHgPQgHgSAAgXIAAgoQAAgbgKgOQgJgMgVAAIgRAAIAAB1IAcADIAAA1IioAAIAAg1IAigDIAAkRIgigEIAAg0ICPAAQAiAAAZADQAgAFAWAJQAaAKANASQAIAKAEALQADANAAAPQABAXgIARQgFAQgOALQgNAKgSAHQgSAEgYADIAAACQAaACARAGQASAGAKALQALAKAGASQAEAQAAAYIAAAfQAAAPADAGQAEAIALAAQAMAAAEgOQADgIAEgeIAfAEQAAAZgGARQgFAUgKAMQgLAMgSAGQgSAHgYAAQgSAAgOgFgAgvgcIAGAAQAPAAALgEQALgDAFgHQAHgHAEgLQADgLgBgPQAAgPgDgKQgDgLgHgFQgLgMgdAAIgIAAg");
	this.shape_3.setTransform(52.1,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// block
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4089D").s().p("AvnFAIAAp/IfPAAIAAJ/g");
	this.shape_4.setTransform(100,32);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_name, new cjs.Rectangle(0,0,216,68.6), null);


(lib.m_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBoQgWgIgQgOQgPgPgKgUQgJgWAAgZQAAgZAJgUQAKgVAPgOQAQgQAWgHQATgIAXAAQAXAAAUAIQAWAHAPAQQAQAOAJAVQAKAUAAAZQAAAagKAVQgJAUgQAPQgPAOgWAIQgUAIgXAAQgXAAgTgIgAgghQQgQAGgLAMQgLALgHARQgGAQgBASQABAUAGAPQAHAQALANQAMAMAPAGQAQAGAQABQAQgBARgGQAOgGANgMQALgMAHgRQAGgPABgUQgBgSgGgQQgHgRgLgLQgLgMgQgGQgPgHgSAAQgSAAgOAHgAAaA/Igdg2IgQAAIAAA2IgZAAIAAh9IAvAAQAXAAANAIQANAJAAAUQAAAJgCAGQgEAHgEADQgEADgGACIgNADIAhA3gAgTgJIAWAAQAKgBAHgDQAHgCAAgMQAAgFgDgDIgGgFIgIgCIgJAAIgUAAg");
	this.shape.setTransform(225.7,5.6,0.374,0.373);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiyDIQg8hPAAh9QAAh5BChQQBHhUB1AAQBVAAA6AlQA+AnASBKIgpAAQgQg3gygfQgwgdhEAAQhiAAg8BOQg2BGAABmQAAB0A1BFQA4BJBnAAQA6AAAugcQAsgcAYgwIAsAAQgbBDg6AlQg5AkhKAAQh+AAhEhag");
	this.shape_1.setTransform(160.6,18.8,0.374,0.373);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsAtQgTgSAAgbQAAgaATgSQASgTAaAAQAaAAAUATQASASAAAaQAAAbgSASQgUATgaAAQgaAAgSgTg");
	this.shape_2.setTransform(147.8,26.6,0.374,0.373);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFHEcIAAl7QAAhbg3gmQghgXgtAAQhOAAguA0QgyA3AABhIAAFHIgoAAIAAl7QAAhag0gmQgggYguAAQhEAAgxAwQg7A5AABjIAAFHIgpAAIAAoqIApAAIAAByIACAAQANg2AxgkQAyglA+AAQBJAAAuAmQAlAfAKAxIACAAQAZg7AqgcQArgfBCAAQBPAAAtAuQAyAxAABeIAAF6g");
	this.shape_3.setTransform(207.2,18.5,0.374,0.373);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai7DMQhDhRAAh7QAAh6BDhRQBGhWB1AAQB2AABGBWQBDBRAAB6QAAB7hDBRQhGBWh2AAQh1AAhGhWgAieiwQg3BHAABpQAABqA3BHQA7BNBjAAQBkAAA7hNQA3hHAAhqQAAhpg3hHQg7hOhkAAQhjAAg7BOg");
	this.shape_4.setTransform(181,18.8,0.374,0.373);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghFaQg1gggBhOIAAlMIhdAAIAAhoIBdAAIAAiqICaAAIAACqIByAAIAABoIhyAAIAAEXQAAAnAOANQANANAnAAQAcAAAUgEIAAB5QggAGg7AAQhSAAgpgZg");
	this.shape_5.setTransform(135.6,15.5,0.374,0.373);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABuEiIAAk+QAAhHgXghQgYgjg1AAQg+AAgcAmQgdAmAABWIAAEnIibAAIAAo0ICTAAIAABPIAEAAQAcguAwgZQAsgXAzAAQB1AAAxBAQApA2AAByIAAFbg");
	this.shape_6.setTransform(118.3,18.3,0.374,0.373);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjLDXQhOhSAAiEQAAiABQhUQBRhWB/AAQCJAABMBnQBGBegJCKImXAAQAHCPCDAAQAtAAAkgYQAigVAIgcICIAAQg+C+jKAAQiEAAhOhTgAhhiIQgbAhgCArID8AAQgLg9gcgcQgegfg3AAQhAAAgjAsg");
	this.shape_7.setTransform(96.3,18.6,0.374,0.373);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AClGGQgNgegFg6QgFhDgFggQgJg/gcgaQgdgdhAAAIiqAAIAAExIisAAIAAsLIGkAAQBmAABBA/QA9A9AABbQAACSh7AxIAAACQBnAbAKCbIAHBfQAHA+ATAcgAijgkIC7AAQA6AAAdgbQAfgbAAg6QAAhsh2AAIi7AAg");
	this.shape_8.setTransform(72.2,14.6,0.374,0.373);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ai1EiIAAo0ICTAAIAABpIADAAQAUg1AzgiQAzghA5AAQASAAAQAFIAACQQgagFgeAAQhQAAgnA1QghAvAABQIAAD/g");
	this.shape_9.setTransform(51,18.3,0.374,0.373);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjUDYQhQhRAAiGQAAiHBQhRQBQhSCEAAQCFAABQBSQBPBRAACHQAACGhPBRQhQBSiFAAQiEAAhQhSgAhrh7QgdAvAABNQAABNAdAuQAjA5BIAAQBJAAAjg5QAdguAAhNQAAhNgdgvQgjg5hJAAQhIAAgjA5g");
	this.shape_10.setTransform(31.4,18.6,0.374,0.373);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkRGGIAAsLIIjAAIAACQIl3AAIAAC0IFFAAIAACFIlFAAIAAFCg");
	this.shape_11.setTransform(10.2,14.6,0.374,0.373);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_logo, new cjs.Rectangle(0,0,230,29.7), null);


(lib.m_findyourapt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEA9IgHgEQgDgDgBgEQgBgEAAgGIAAhAIgOAAIAAgJIAOAAIAAgZIANgDIADAAIAAAcIAVAAIAAAJIgVAAIAAA9QAAAIACADQADAEAFAAQAFAAAEgEQADgDACgIIAHABIgDALQgCAEgEADQgDADgEACQgFABgGAAIgIgBg");
	this.shape.setTransform(86.8,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAwIAAgHIALgCIAAg2QAAgKgDgEIgFgEQgDgCgFAAQgEAAgEACQgFACgDADQgEADgBAEQgCAFAAAGIAAAxIAMACIAAAHIgqAAIAAgHIAMgCIAAhLIgMgCIAAgHIAbAAIABAQQAEgIAIgFIAJgEQAEgBAGAAQAIAAAFACQAFACAEAEQADADACAHQABAGAAAIIAAA2IAMACIAAAHg");
	this.shape_1.setTransform(78.1,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAuQgIgDgFgHQgFgGgDgJQgCgJAAgLQAAgLADgJQADgJAGgHQAGgHAIgDQAHgDAJAAQAIAAAGACQAHADAFAFQAEAFACAIQADAHAAALIAAAHIg6AAQABAJABAHQABAHADAFQADAFAFACQAFADAGAAQAJAAAGgEQAFgEAEgIIAIACQgCAGgDAFQgDAEgFADQgEAEgGACQgFABgHAAQgKAAgIgDgAgFglIgHAGQgDAFgCAFIgCAMIAoAAIAAgEIgBgMQgBgFgDgDQgCgDgDgCQgEgCgEAAQgEAAgEADg");
	this.shape_2.setTransform(67.8,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjAwIAAgHIAMgCIAAg2IgBgKIgDgGQgDgEgJAAQgFAAgFADQgEABgCAEQgEADgBAFQgBAEgBAFIAAAxIANACIAAAHIgpAAIAAgHIAMgCIAAg3QAAgKgEgEQgDgFgJAAQgFAAgEACQgEACgDADQgDADgCAFQgBAEAAAGIAAAxIAMACIAAAHIgqAAIAAgHIAMgCIAAhLIgMgCIAAgHIAaAAIACAQQAEgIAIgFIAIgEQAGgBAFAAIAKABQAEABADACIAFAGIADAIQAEgIAGgFIAJgEQAFgBAGAAQAHAAAFACQAFACAEAEQACADACAHQACAGgBAIIAAA2IANACIAAAHg");
	this.shape_3.setTransform(55,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEA9IgHgEQgDgDgBgEQgBgEAAgGIAAhAIgOAAIAAgJIAOAAIAAgZIANgDIADAAIAAAcIAVAAIAAAJIgVAAIAAA9QAAAIACADQADAEAFAAQAFAAAEgEQADgDACgIIAHABIgDALQgCAEgEADQgDADgEACQgFABgGAAIgIgBg");
	this.shape_4.setTransform(43.2,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAwIAAgHIAMgCIAAhLIgMgCIAAgHIAbAAIACAPQAEgIAFgEIAHgEIAKgBQAHAAAFAEIAFAGQABADAAAEQAAAIgEAEQgDADgGAAQgGAAgDgDQgDgDAAgGIAGgDIABgCQAAgFgHAAQgDAAgEADIgFAFQgDAEgCAEIgBAJIAAAzIASACIAAAHg");
	this.shape_5.setTransform(35.8,31.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAuQgFgDgBgHQgEAGgHAEQgGADgJAAIgKgBQgFgBgDgDQgEgDgCgFQgCgFAAgGQAAgIADgFQADgFAFgEQAFgDAIAAQAHgCAJAAIALAAIAAgMIgBgMIgCgIIgGgFQgDgBgFAAQgPAAAAAIIAAACIAGAAIABAHQAAAFgDACQgDADgEAAQgFAAgDgDQgDgDAAgGQAAgFACgEIAHgIQAEgDAGgCQAGgBAHAAQAIAAAGACQAGACAEAEQAEAEACAHQACAHAAAKIAAAqQAAAGABACQACADADAAIAGgCIACAHQgGADgIAAQgIAAgDgDgAgJAHIgHADQgDADgBADIgBAIQAAAHADAEQADAEAHAAQAIAAAEgFIAFgFQABgEAAgEIAAgQIgKAAQgFAAgEACg");
	this.shape_6.setTransform(27,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBDIAAgHIAMgCIAAhxIgMgCIAAgHIAbAAIABAQQAEgIAIgFIAIgEQAFgBAFAAQAJAAAGADQAHADAEAGQAFAGACAJQACAJAAAMQAAAMgDAJQgDAJgFAHQgFAGgHADQgHADgJAAQgIAAgGgCQgGgCgEgEIAAAjIAVACIAAAHgAgCg1QgEACgDADQgEADgBAFQgCAFAAAGIAAAcQAAAFABAEQACAEADADQADADAEACQADACAFAAQAGAAAFgDQAEgCACgFQADgFABgHIABgQIgBgRIgDgMQgCgFgEgCQgFgCgGAAQgFAAgDABg");
	this.shape_7.setTransform(16.5,33.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAuQgFgDgBgHQgEAGgHAEQgGADgJAAIgKgBQgFgBgDgDQgEgDgCgFQgCgFAAgGQAAgIADgFQADgFAFgEQAFgDAIAAQAHgCAJAAIALAAIAAgMIgBgMIgCgIIgGgFQgDgBgFAAQgPAAAAAIIAAACIAGAAIABAHQAAAFgDACQgDADgEAAQgFAAgDgDQgDgDAAgGQAAgFACgEIAHgIQAEgDAGgCQAGgBAHAAQAIAAAGACQAGACAEAEQAEAEACAHQACAHAAAKIAAAqQAAAGABACQACADADAAIAGgCIACAHQgGADgIAAQgIAAgDgDgAgJAHIgHADQgDADgBADIgBAIQAAAHADAEQADAEAHAAQAIAAAEgFIAFgFQABgEAAgEIAAgQIgKAAQgFAAgEACg");
	this.shape_8.setTransform(6.9,31.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrAxIAAgOIAMgBIAAhBIgMgCIAAgMIAmAAIABAPQAEgIAFgEQADgDAEgBQAFgCAGAAQAEAAAEACQAEABADADIAFAHQABAFAAAFQAAAFgBAEQgBADgDADQgEAFgJAAQgIAAgEgFQgDgEAAgIIAIgDIAAgCQAAgFgGAAQgDAAgEADQgDACgCAEIgCAIQgBAFAAAGIAAAmIAUABIAAAOg");
	this.shape_9.setTransform(76.4,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAvQgFgCgEgDQgEgEgCgGQgCgGAAgIIAAg0IgKgBIAAgMIAoAAIAAA+QAAAIABAEQADAFAHAAQAGAAAEgFQADgDABgEQABgFAAgFIAAgsIgKgBIAAgNIAnABIAABPIAMABIAAAOIgkAAIgCgRQgFAJgFAEIgIAEQgFACgGAAQgIAAgFgCg");
	this.shape_10.setTransform(65.7,13.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAuQgIgDgGgHQgGgGgDgKQgCgIAAgLQAAgLADgJQADgJAGgHQAGgGAJgEQAGgCAOgCQAIAAANAEQAJAEAGAGQAFAHADAJQACAJAAAKQAAALgCAJQgDAJgGAHQgHAHgIADQgNAEgIAAQgPgBgGgDgAgHgiQgEACgBAFQgCAEgBAIIgBAPIABAQQABAIACAEQACAFADADQADACAEAAQAFAAADgCQAEgDABgFQADgGABgVIgBgQIgCgMQgCgFgDgCQgEgDgFAAQgEAAgDADg");
	this.shape_11.setTransform(54.7,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfBDQgEgBgEgDQgDgDgCgDQgCgEAAgFQAAgHAEgFQAEgEAHAAQAHAAADAEQAEAEAAAIIgJADQAAAGAGAAQAGAAADgGQADgFAHgWIgMAAIgbhNIgIgBIAAgMIAyAAIAAAMIgKABIAPA1IASg1IgLgBIAAgMIAjAAIAAAMIgJABIggBaIgFANQgDAGgCADQgEAFgEACQgFACgHAAIgJgBg");
	this.shape_12.setTransform(44.5,15.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbBEQgGgDgFgGQgEgGgDgJQgCgJAAgLQAAgMADgJQADgJAFgGQAFgHAHgDQAIgEAJAAQAHAAAFADQAHACAFAFIAAguIgOgBIAAgIIAgAAIAACEIANABIAAAIIgdAAIgCgOQgEAHgGAEQgEACgDABQgFACgGAAQgJAAgHgEgAgPgNQgEACgDAGQgDAFgBAGQgBAHAAAJQABATADAHQACAGAFADQAEADAHAAQAEAAAEgCQAEgBADgEIAFgHQACgFAAgFIAAgfQAAgFgCgEQgBgEgDgDIgHgEQgEgBgEAAQgGAAgFADg");
	this.shape_13.setTransform(30.7,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAJAwIAAgHIALgCIAAg2QAAgKgDgEIgFgEQgDgCgFAAQgEAAgEACQgFACgDADQgEADgBAEQgCAFAAAGIAAAxIAMACIAAAHIgqAAIAAgHIAMgCIAAhLIgMgCIAAgHIAbAAIABAQQAEgIAIgFIAJgEQAEgBAGAAQAIAAAFACQAFACAEAEQADADACAHQABAGAAAIIAAA2IAMACIAAAHg");
	this.shape_14.setTransform(19.6,13.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBFIAAgHIAOgCIAAhLIgOgCIAAgHIAfAAIAABUIAOACIAAAHgAgKgwQgDgDAAgFQAAgGADgDQADgDAGAAQAEAAADACQAEADAAAGQAAAGgDADQgDADgFAAQgGAAgDgDg");
	this.shape_15.setTransform(11.2,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjBJIAAgHIAOgCIAAhLIgPAAIAAgJIAPAAIAAgJQAAgJACgJQADgIAEgGQAFgFAGgDQAGgDAJgBQAFABAEABQAEABAEADQADACABADQABAEAAAEQAAAGgDADQgDAEgFAAQgDAAgDgCQgCgBgBgDIgBgGIAFgCIABgDQgBgEgCgCQgCgBgDAAQgGAAgDACQgEADgBAEQgCAFAAAMIAAATIAYAAIAAAJIgYAAIAABLIAVACIAAAHg");
	this.shape_16.setTransform(6.1,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_findyourapt, new cjs.Rectangle(0,0,105.4,43.5), null);


(lib.m_dudehand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dude_hand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_dudehand, new cjs.Rectangle(0,0,193,268), null);


(lib.m_dudebicep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dude_bicep();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_dudebicep, new cjs.Rectangle(0,0,154,162), null);


(lib.m_ctatext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAJQgDgDgBgGQAAgFAEgEQAEgEAFAAQAGAAADAEQAEADAAAGQAAAGgDAEQgEAEgGAAQgGAAgDgFg");
	this.shape.setTransform(115.2,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAuQgHgDgGgHQgFgGgCgJQgDgJAAgLQAAgLADgJQADgJAGgHQAGgHAIgDQAIgDAHAAQAJAAAGACQAHADAEAFQAGAFABAIQADAHAAALIAAAHIg5AAQgBAJACAHQABAHADAFQADAFAFACQAFADAGAAQAJAAAGgEQAFgEADgIIAJACQgCAGgDAFQgDAEgEADQgFAEgFACQgHABgHAAQgJAAgIgDgAgGglIgGAGQgDAFgCAFIgBAMIAnAAIAAgEIgBgMQgBgFgCgDQgCgDgEgCQgDgCgFAAQgEAAgFADg");
	this.shape_1.setTransform(108.1,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBJIAAgHIAOgCIAAhKIgOAAIAAgKIAOAAIAAgJQAAgJACgIQACgIAFgHQAFgFAGgDQAGgDAIAAQAGgBAEACQAEABADACQAEADABADQABADAAAFQAAAGgCADQgEAEgEAAQgFAAgCgCQgDgBAAgDIgBgGIAFgCIAAgEQAAgDgCgBQgCgCgEAAQgFAAgEACQgDACAAAFQgDAFAAAMIAAATIAXAAIAAAKIgXAAIAABKIAVACIAAAHg");
	this.shape_2.setTransform(101.2,28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBFIAAgHIAOgCIAAhLIgOgCIAAgHIAfAAIAABUIAOACIAAAHgAgKgwQgDgDAAgFQAAgGADgDQADgDAGAAQAEAAADACQAEADAAAGQAAAGgDADQgDADgFAAQgGAAgDgDg");
	this.shape_3.setTransform(94.4,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBHIAAgIIAOgBIAAh7IgOgBIAAgIIAfAAIAACEIANABIAAAIg");
	this.shape_4.setTransform(88.9,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAwIAAgHIAMgCIAAhLIgMgCIAAgHIAbAAIACAPQAEgIAFgEIAHgEIAKgBQAHAAAFAEIAFAGQABADAAAEQAAAIgEAEQgDADgGAAQgGAAgDgDQgDgDAAgGIAGgDIABgCQAAgFgHAAQgDAAgEADIgFAFQgDAEgCAEIgBAJIAAAzIASACIAAAHg");
	this.shape_5.setTransform(78.5,31.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAuQgGgCgDgEQgDgDgCgHQgCgGAAgIIAAg2IgMgCIAAgHIAeAAIAAA/QAAAKADAFQACACAEABQACACAGAAQADAAAFgCQAEgCADgDQADgEACgEQACgFAAgHIAAgvIgNgCIAAgHIAfAAIAABUIAMACIAAAHIgbAAIgBgPQgFAHgHAFQgEADgFABIgKABQgHAAgFgCg");
	this.shape_6.setTransform(68.6,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAuQgHgEgGgGQgGgHgCgJQgDgIAAgMQABgKADgJQADgJAFgHQAGgGAHgEQAIgDAJAAQALAAAIADQAIAEAFAGQAFAHADAJQACAJABAKQAAALgDAJQgDAJgGAHQgFAGgJAEQgHADgKAAQgKAAgIgDgAgLgkQgEADgDAGQgCAFgBAHIgBAPQABAUADAIQADAGAFADQAEADAGAAQAHAAAEgDQAFgDACgGIAEgMIABgQIgBgOQgBgHgDgGQgCgGgFgDQgEgDgHAAQgGAAgFADg");
	this.shape_7.setTransform(58.2,31.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmA/QgDgCgCgEQgCgDAAgEQAAgGADgEQAEgEAFAAQAFAAADADQADAEAAAGIgHAEQgBADACACQACABAEAAQAGAAADgFQADgGAGgTIghhXIgIgBIAAgHIApAAIAAAHIgNABIAVBAIAWhAIgNgBIAAgHIAhAAIAAAHIgJABIghBcIgEAOIgFALQgEAEgEACQgEACgHAAQgJAAgFgEg");
	this.shape_8.setTransform(48.6,33.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAFAxIAAgQIAGgCIAAgsQAAgIgBgDQgCgFgFAAQgGAAgDAFQgCACgBAEIgBAJIAAAoIAIACIAAAQIg2AAIAAgQIALgCIAAg8IgLgCIAAgPIApAAIACARIAEgHIAGgGQADgDAFgBQAFgCAHAAQAHAAAFACQAFABAEAEQAEAEACAFQACAGAAAIIAAAxIALACIAAAQg");
	this.shape_9.setTransform(34.3,31.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARAwIgPgtIgBAAIgPAtIgZAAIgdhOIgIgBIAAgQIAyAAIAAAQIgGABIAPAtIALgiIgCgLIgIgBIAAgQIAvAAIAAAQIgJABIAQAtIAMgtIgKgBIAAgQIAkAAIAAAQIgJABIgXBOg");
	this.shape_10.setTransform(20.5,31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAxIgLgDQgJgDgGgHQgGgGgDgKQgDgIAAgMQAAgKAEgJQADgJAFgHQAHgHAKgDQAGgDAOgBQAKAAAOAEIAIAEIAHAGQAFAGADAKQADAJAAAKQAAALgDAJQgDAJgGAHQgHAHgJADQgNAEgJAAgAgGgiQgCACgCAFQgCAEAAAHIAAAQIAAARQAAAHACAEQACAFACACQADACADAAQAFAAACgCQADgCABgFQACgGABgWIgBgQQgBgHgBgEQgBgFgDgCQgDgCgEAAQgDAAgDACg");
	this.shape_11.setTransform(7.4,31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAJQgCgDAAgGQAAgFADgEQADgEAGAAQAGAAADAEQAFADAAAGQgBAGgDAEQgEAEgGAAQgGAAgEgFg");
	this.shape_12.setTransform(137.2,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAuQgHgDgGgHQgFgGgDgJQgCgJAAgLQAAgLADgJQADgJAGgHQAGgHAHgDQAJgDAIAAQAIAAAHACQAGADAFAFQAEAFADAIQACAHAAALIAAAHIg6AAQAAAJACAHQABAHADAFQADAFAFACQAFADAGAAQAJAAAGgEQAFgEAEgIIAIACQgCAGgDAFQgDAEgFADQgEAEgGACQgGABgGAAQgKAAgIgDgAgFglIgHAGQgDAFgBAFIgDAMIAoAAIAAgEIgBgMQgBgFgDgDQgCgDgDgCQgDgCgFAAQgEAAgEADg");
	this.shape_13.setTransform(130.1,13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAjAwIAAgHIAMgCIAAg2IgBgKIgDgGQgEgEgIAAQgFAAgEADQgFABgCAEQgDADgCAFQgBAEgBAFIAAAxIANACIAAAHIgpAAIAAgHIAMgCIAAg3QAAgKgEgEQgEgFgHAAQgGAAgEACQgEACgDADQgDADgCAFQgBAEAAAGIAAAxIAMACIAAAHIgqAAIAAgHIAMgCIAAhLIgMgCIAAgHIAbAAIABAQQAFgIAGgFIAJgEQAGgBAFAAIAKABQAEABADACIAFAGIACAIQAEgIAHgFIAJgEQAFgBAGAAQAHAAAFACQAFACAEAEQADADABAHQABAGAAAIIAAA2IANACIAAAHg");
	this.shape_14.setTransform(117.3,13.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAuQgIgEgFgGQgFgHgDgJQgDgIABgMQAAgKACgJQADgJAGgHQAFgGAJgEQAHgDAKAAQAKAAAIADQAIAEAFAGQAFAHADAJQADAJgBAKQAAALgCAJQgDAJgGAHQgFAGgJAEQgHADgKAAQgKAAgIgDgAgLgkQgEADgDAGQgCAFgBAHIgBAPQABAUADAIQADAGAEADQAGADAFAAQAHAAAFgDQADgDAEgGIADgMIAAgQIAAgOQgBgHgCgGQgEgGgDgDQgGgDgGAAQgGAAgFADg");
	this.shape_15.setTransform(104,13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJBHIAAgIIAMgBIAAg3QAAgJgDgFQgCgCgDgCQgEgBgFAAQgEAAgEACQgEABgDAEQgEADgCAEQgCAFAAAHIAAAwIAMABIAAAIIgrAAIAAgIIANgBIAAh7IgNgBIAAgIIAfAAIAAA/QAEgIAHgFQAEgCAEgBQAFgCAGAAQAHAAAGACQAEACAEAEQAEAEABAGQACAGAAAIIAAA3IAMABIAAAIg");
	this.shape_16.setTransform(93.4,10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkAwIAAgHIAMgCIAAhLIgMgCIAAgHIAbAAIACAPQAEgIAFgEIAHgEIAKgBQAHAAAFAEIAFAGQABADAAAEQAAAIgEAEQgDADgGAAQgGAAgDgDQgDgDAAgGIAGgDIABgCQgBgFgGAAQgDAAgEADIgFAFQgDAEgBAEIgCAJIAAAzIASACIAAAHg");
	this.shape_17.setTransform(80.2,13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAuQgGgCgDgEQgDgDgCgHQgCgGAAgIIAAg2IgMgCIAAgHIAeAAIAAA/QAAAKADAFQACACAEABQACACAGAAQADAAAFgCQAEgCADgDQADgEACgEQACgFAAgHIAAgvIgMgCIAAgHIAeAAIAABUIAMACIAAAHIgbAAIgCgPQgEAHgHAFQgEADgFABIgKABQgHAAgFgCg");
	this.shape_18.setTransform(70.3,13.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAuQgIgEgFgGQgFgHgDgJQgDgIAAgMQAAgKAEgJQADgJAFgHQAGgGAHgEQAJgDAIAAQALAAAIADQAIAEAFAGQAFAHADAJQACAJABAKQAAALgEAJQgDAJgFAHQgFAGgJAEQgIADgJAAQgKAAgIgDgAgLgkQgEADgDAGQgCAFgBAHIgBAPQABAUADAIQADAGAFADQAEADAGAAQAHAAAEgDQAFgDACgGIAEgMIABgQIgBgOQgBgHgDgGQgCgGgFgDQgEgDgHAAQgGAAgFADg");
	this.shape_19.setTransform(59.9,13.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmA/QgDgCgCgEQgCgDAAgEQAAgGADgEQAEgEAFAAQAFAAADADQADAEAAAGIgHAEQgBADACACQACABAEAAQAGAAADgFQADgGAGgTIghhXIgIgBIAAgHIApAAIAAAHIgNABIAVBAIAWhAIgNgBIAAgHIAhAAIAAAHIgJABIghBcIgEAOIgFALQgEAEgEACQgEACgHAAQgJAAgFgEg");
	this.shape_20.setTransform(50.3,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHA9QgGgCgEgEQgFgEgCgGQgCgGAAgJIAAgvIgOAAIAAgRIAOAAIAAgXIAVgEIANAAIAAAbIAbAAIAAARIgbAAIAAAyQAAAGACACQACADAEAAQAFAAACgEQACgDADgKIANADIgEAOQgDAGgEAEQgEAEgGACQgFACgJAAQgHAAgGgBg");
	this.shape_21.setTransform(37.6,11.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAFAxIAAgQIAGgCIAAgsQAAgIgBgDQgCgFgFAAQgGAAgDAFQgCACgBAEIgBAJIAAAoIAIACIAAAQIg2AAIAAgQIALgCIAAg8IgLgCIAAgPIApAAIACARIAEgHIAGgGQADgDAFgBQAFgCAHAAQAHAAAFACQAFABAEAEQAEAEACAFQACAGAAAIIAAAxIALACIAAAQg");
	this.shape_22.setTransform(27.9,13.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQAuQgJgDgHgGQgFgHgEgJQgDgIAAgLQAAgIADgNQAEgKAGgGQAHgHAJgEQAIgDAKAAQAJAAAIADQAHACAGAFQAFAGADAIQAEAIAAAKIAAALIg1AAQABAOACAFQACAFADACQAEACAFAAQAHAAAFgFQAEgEAEgJIAQAGQgDAHgEAGQgEAFgFAEQgFAEgGACQgHACgIAAQgKAAgJgEgAgDgiQgCACgBAEQgCAGAAAOIASAAIAAgEQAAgOgBgFQgCgFgGAAQgCAAgCACg");
	this.shape_23.setTransform(16.9,13.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgvAxIAAgQIAMgCIAAg8IgMgBIAAgQIAsAAIABAQQADgIAFgEIAIgEQAFgCAGAAQAFAAAEACQAEABADAEQADADACAFQACAEAAAHQAAAFgCAEQgBAEgDACQgCADgEACQgEABgEAAQgFAAgEgBIgFgEQgEgFABgJIAIgCIAAgDQAAgEgFAAQgEAAgDACQgDACgBAEQgCAEgBAFIAAALIAAAgIAVACIAAAQg");
	this.shape_24.setTransform(7.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_ctatext, new cjs.Rectangle(0,0,145,43.5), null);


(lib.m_ctadarkbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAA00").s().dr(-14.5,-26.5,29,53);
	this.shape.setTransform(14.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_ctadarkbox, new cjs.Rectangle(0,0,29,53), null);


(lib.m_ctabase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBE32").s().dr(-98.5,-26.5,197,53);
	this.shape.setTransform(98.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_ctabase, new cjs.Rectangle(0,0,197,53), null);


(lib.m_ctaarrow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxiVIBjCVIhjCWg");
	this.shape.setTransform(5,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_ctaarrow, new cjs.Rectangle(0,0,10,30), null);


(lib.m_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape.setTransform(139.4,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUA+QgGgBgEgEQgFgDgCgFQgCgEAAgHIAOAAIABAHQABACACACQADACAFAAIAKABIALgBQAFAAADgCIAEgEQABgDABgDQgBgGgEgDQgFgDgHAAIgNAAQgGAAgEgBQgDgBgDgDIgFgFIgBgGQAAgEACgEQADgDAEgDQgGgEgEgFQgEgGAAgIQAAgGADgGQACgFAEgEQAFgEAGgCQAGgCAHAAQAJAAAOgCIAOgGIAFANIgLACIgOABQAIADADAFQAEAGAAAHQAAAGgCAGQgCAFgEAEQgFAEgFABQgHACgGAAQgGAAgFgCQgEADAAAFQAAADACACQADACAGAAIAMAAQAHAAAFACQAFABAFAEQADADACAEQACAEAAAFQAAAGgDAFQgCAFgFADQgFADgHACQgHACgKAAQgJAAgIgCgAgKgsQgDACgCACQgDADgBADIgBAIIABAIQABADADADIAFAEQAEABAEAAQADAAAEgBIAGgEIADgGIABgIIgBgIIgDgGQgDgDgDgBIgHgBIgIABg");
	this.shape_1.setTransform(133.6,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARArIAAg6IAAgHQgBgDgCgCQgDgDgHAAQgGAAgFAEQgFADgEAHIAAA7IgPAAIAAhUIANAAIABANQAEgGAHgEIAGgDIAIgBQAFAAAFABQAFADADACQADAEABAFQACAFAAAFIAAA8g");
	this.shape_2.setTransform(124.6,33.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA+IAAhTIAOAAIAABTgAgHgsQgDgDAAgEQAAgEADgDQAEgDADgBQAFABACADQADADAAAEQAAAEgDADQgCADgFAAQgDAAgEgDg");
	this.shape_3.setTransform(117.6,31.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA6QgFgDgEgFIgCAJIgNAAIAAh1IAPgCIAAAvQAFgHAFgDQAHgDAGAAQAHAAAGADQAFADAEAFQAEAGADAIQACAHAAAKQAAALgCAIQgDAIgEAGQgEAGgGADQgHADgHAAQgGAAgGgDgAgLgKQgEADgEAFIAAAoQAEAFAEADQAFADAFAAQAEAAAEgBQAEgDADgDQADgEAAgGQACgHAAgJQAAgIgBgHQgCgEgCgFQgDgDgEgCQgDgBgEAAQgGAAgFAEg");
	this.shape_4.setTransform(110.9,31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnArIAAg6IgBgHIgCgFQgDgDgGAAQgGAAgFAEQgDACgFAIIAAA7IgOAAIAAg6IgBgHQgBgDgCgCQgDgDgFAAQgGAAgFAEQgEACgFAIIAAA7IgPAAIAAhUIANAAIABANQAFgGAFgEIAHgDIAIgBIAHABIAGADIAEAEIADAHQAFgIAGgDIAGgDIAIgBQAFAAAEABQAFADADACQADAEABAFQACAFAAAFIAAA8g");
	this.shape_5.setTransform(99,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRApQgFgBgDgEQgDgDgBgFQgCgEAAgHIAAg7IAPAAIAAA6QAAAIADAEQADAEAHAAQAFAAAGgEQAFgEAEgHIAAg7IAPAAIAABTIgNAAIgBgNIgFAHQgDADgDABIgHADIgHABQgGAAgEgCg");
	this.shape_6.setTransform(87.5,33.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEA8QgDgCgCgCQgCgCgCgDIAAgIIAAhlIANgCIAABmQAAAEACABQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAIAGgBIADAKQgFADgHAAQgDAAgDgBg");
	this.shape_7.setTransform(81.1,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Agig6IANAAIABAMQAEgGAHgEQAGgDAHAAQAIAAAGADQAGADAEAGQADAGACAHQACAIAAAKQAAALgCAGQgCAJgFAGQgDAFgHAEQgGADgIAAQgGAAgGgCQgFgDgEgFIAAAoIgPACgAgLgrQgEADgEAGIAAAoQADAEAFADQAFADAFAAQAFAAADgCQAFgCACgEQADgEABgFQACgGAAgJQAAgHgCgGQgBgGgCgFQgDgEgEgBQgDgCgFAAQgFAAgGAEg");
	this.shape_8.setTransform(73.7,35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMApQgHgDgFgFQgFgHgCgIQgDgIAAgJQAAgJADgJQACgHAEgGQAFgHAHgDQAGgDAHAAQAIAAAHADQAGADAFAFQAFAFACAIQACAHAAALIgBAGIg0AAQABAHABAFQACAFADAEQADADAEACQAEABAEAAQAFAAAGgCQAFgCAFgDIAHAJQgGAEgIADQgHADgIAAQgJAAgGgDgAgGgeQgDABgDADQgDAEgBAFQgCAFAAAHIAnAAIAAgBQAAgGgCgFQgBgFgDgDQgCgDgEgCQgDgBgGAAQgDAAgDABg");
	this.shape_9.setTransform(60.1,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARA8IAAg7IgBgGIgCgGQgEgDgGAAQgGAAgFAEQgFAEgEAGIAAA8IgPAAIAAh1IAPgCIAAAvQAEgGAGgEQAGgDAIAAQAFAAAFABIAIAFQADAEABAFQACAEAAAGIAAA8g");
	this.shape_10.setTransform(51.1,31.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAA0QgDgBgDgDQgEgEgBgEQgCgFABgFIAAgzIgPAAIAAgLIAPAAIAAgTIAOgBIAAAUIAUAAIgCALIgSAAIAAAyQAAAHACACQACAEAGgBQAEAAAHgDIAFAKQgEADgEABIgLACQgFAAgEgCg");
	this.shape_11.setTransform(43.6,32.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA0QgEgBgDgDQgCgEgCgEQgCgFAAgFIAAgzIgOAAIAAgLIAOAAIAAgTIAOgBIAAAUIAUAAIgBALIgTAAIAAAyQABAHABACQADAEAFgBQAFAAAGgDIAGAKQgEADgFABIgJACQgGAAgEgCg");
	this.shape_12.setTransform(33.6,32.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPApQgHgDgFgGQgFgGgCgIQgDgIAAgKQAAgJADgIQACgIAFgGQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAFAGQAFAGACAHQADAIAAAKQAAAKgDAHQgCAJgFAGQgFAFgHAEQgHADgJAAQgIAAgHgDgAgIgdQgEABgDAEQgDAFgBAGQgCAFAAAIQAAAIACAGQABAGADAEQADAEAEACQAEACAEAAQAFAAAEgCQAEgCADgEQADgEABgGQACgGAAgIQAAgHgCgGQgBgGgDgFQgDgEgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_13.setTransform(26,33.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARArIAAg6IAAgHQgBgDgCgCQgDgDgHAAQgGAAgFAEQgFADgEAHIAAA7IgPAAIAAhUIANAAIABANQAEgGAHgEIAGgDIAIgBQAFAAAFABQAFADADACQADAEABAFQACAFAAAFIAAA8g");
	this.shape_14.setTransform(16.7,33.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAYIAHgaQgFgDAAgGQAAgFADgDQAEgEADAAQAFAAADAEQADADAAAFQAAAFgDAGIgKAYg");
	this.shape_15.setTransform(156.9,19.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWArIAAhUIAOAAIABASQABgFADgEIAEgFIAGgEIAHgBIAIAAIgCAPIgIgBQgEAAgDACIgFAEIgEAHIgCALIAAAvg");
	this.shape_16.setTransform(152.7,14.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMApQgHgDgFgFQgFgGgDgJQgCgIAAgJQAAgJACgIQADgJAEgGQAFgGAGgDQAHgDAHAAQAIAAAHACQAHAEAEAFQAFAGACAHQACAIAAAKIAAAGIg1AAQAAAHACAGQACAEADAEQADADAEABQAEACADAAQAHAAAFgCQAFgBAGgEIAGAJQgGAFgIACQgHADgJAAQgHAAgHgDgAgGgeQgDACgDACQgCAEgCAFQgCAFAAAHIAmAAIAAgBQAAgGgBgFQgBgEgCgEQgDgDgEgCQgEgCgFAAQgDAAgDACg");
	this.shape_17.setTransform(144.5,14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARArIAAg6IAAgHQgBgDgCgCQgDgEgHAAQgGAAgFAFQgFADgEAHIAAA7IgPAAIAAhUIANAAIABANQAEgGAHgFIAGgCIAIgBQAFAAAFABQAFADADADQADADABAFQACAFAAAGIAAA7g");
	this.shape_18.setTransform(135.5,14.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AARArIAAg6IAAgHQgBgDgCgCQgDgEgHAAQgGAAgFAFQgFADgEAHIAAA7IgPAAIAAhUIANAAIABANQAEgGAHgFIAGgCIAIgBQAFAAAFABQAFADADADQADADABAFQACAFAAAGIAAA7g");
	this.shape_19.setTransform(126.1,14.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGA+IAAhTIANAAIAABTgAgGgsQgEgDAAgEQAAgEAEgDQADgEADAAQAEAAADAEQADADABAEQgBAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_20.setTransform(119.2,12.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQA6QgGgEgEgFQgEgGgCgIQgCgIAAgKQAAgJACgIQACgIAFgGQAEgGAGgDQAGgDAIAAQAGAAAGACIAKAIIAAgsIAOACIAAB1IgNAAIgBgMQgEAHgGADQgHAEgGAAQgIAAgGgDgAgHgMQgDACgDADQgDAFgBAEIgBAPIABAPQABAFADAFQACADAEACQADACAEAAQAGAAAGgDQAEgDAFgHIAAgnQgFgGgEgCQgFgEgGAAQgEAAgEADg");
	this.shape_21.setTransform(111.9,13.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUA+QgGgBgFgEQgEgDgBgFQgDgEAAgHIAOAAIABAHQABACACACQADACAEAAIALABIALgBQAFAAADgCIAEgEQACgDgBgDQAAgGgEgDQgEgDgJAAIgMAAQgFAAgEgBQgFgBgCgDIgFgFIgBgGQAAgEADgEQACgDAEgDQgGgEgEgFQgEgGABgIQgBgGADgGQACgFAFgEQAEgEAGgCQAGgCAHAAQAKAAAMgCIAQgGIADANIgKACIgOABQAHADAEAFQAEAGAAAHQAAAGgCAGQgDAFgEAEQgEAEgGABQgGACgGAAQgGAAgFgCQgEADAAAFQAAADACACQADACAGAAIANAAQAGAAAFACQAGABAEAEQADADACAEQACAEAAAFQAAAGgDAFQgCAFgFADQgFADgHACQgIACgJAAQgJAAgIgCgAgJgsQgEACgCACQgCADgBADIgCAIIACAIQABADACADIAGAEQADABAEAAQAEAAADgBIAGgEIADgGIABgIIgBgIIgDgGQgDgDgEgBIgGgBIgHABg");
	this.shape_22.setTransform(99.2,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARArIAAg6IAAgHQgBgDgCgCQgDgEgHAAQgGAAgFAFQgFADgEAHIAAA7IgPAAIAAhUIANAAIABANQAEgGAHgFIAGgCIAIgBQAFAAAFABQAFADADADQADADABAFQACAFAAAGIAAA7g");
	this.shape_23.setTransform(90.2,14.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGA+IAAhTIANAAIAABTgAgGgsQgEgDAAgEQAAgEAEgDQADgEADAAQAEAAADAEQAEADAAAEQAAAEgEADQgDACgEAAQgDAAgDgCg");
	this.shape_24.setTransform(83.3,12.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAUAqIgUgjIgVAjIgQAAIAdgrIgagoIASAAIAQAfIASgfIARAAIgaAnIAdAsg");
	this.shape_25.setTransform(77.2,14.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGA+IAAhTIANAAIAABTgAgGgsQgEgDAAgEQAAgEAEgDQADgEADAAQAEAAADAEQADADABAEQgBAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_26.setTransform(71,12.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPA8IAAhIIgPAAIAAgMIAPAAIAAgLQAAgFACgEQACgFADgDQAEgEAEgBQAEgCAHAAIAKABIAKAEIgFAKQgHgDgHAAQgHAAgDADQgCADAAAGIAAALIAUAAIgCAMIgSAAIAABIg");
	this.shape_27.setTransform(66.6,13);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJArIgJgCQgHgDgHgFIAIgJQAGAEAGACQAGACAGAAQAIAAAEgEQAFgCAAgHIgBgFIgDgEQgEgDgLgEIgMgDQgFgCgDgDQgDgDgCgEQgBgEAAgEQAAgFACgEQACgFAFgCQAEgEAGgCQAFgBAFAAQAJAAAHACQAHACAGAFIgGAKQgGgEgFgBQgFgDgGAAQgGAAgEAEQgEACAAAGQAAAEAEADQADADAKADIAMAEIAJAEQADAEACAEQACAEAAAFQAAAGgDAFQgCAGgFACQgFAEgGACQgGABgGAAg");
	this.shape_28.setTransform(55.4,14.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAwIALgDQAEgCADgDQAEgDAFgMIgFAAIgdhTIAQAAIAWBJIAWhJIAPAAIgcBUIgGAMQgDAGgDAEQgFAFgGACQgHADgIABg");
	this.shape_29.setTransform(47.8,16.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPApQgHgDgFgGQgFgGgCgIQgDgIAAgKQAAgJADgIQACgIAFgGQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAFAFQAFAHACAIQADAHAAAKQAAAJgDAJQgCAIgFAFQgFAHgHACQgHAEgJAAQgIAAgHgDgAgIgdQgEACgDADQgDAFgBAFQgCAHAAAHQAAAIACAGQABAGADAEQADAEAEACQAEACAEAAQAFAAAEgCQAEgCADgEQADgEABgGQACgGAAgIQAAgHgCgHQgBgFgDgFQgDgDgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_30.setTransform(39.3,14.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQBFQAKgFACgEIAEgHIAAgLIAAhQIAOAAIAABPQAAAIgCAGQgBAHgDAEQgDAEgFADIgMAHgAAAg9QgDgDAAgEQAAgEADgDQACgEAFAAQAEAAADAEQADADAAAEQAAAEgDADQgDACgEAAQgFAAgCgCg");
	this.shape_31.setTransform(31.7,14.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARArIAAg6IAAgHQgBgDgCgCQgDgEgHAAQgGAAgFAFQgFADgEAHIAAA7IgPAAIAAhUIANAAIABANQAEgGAHgFIAGgCIAIgBQAFAAAFABQAFADADADQADADABAFQACAFAAAGIAAA7g");
	this.shape_32.setTransform(25.5,14.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNApQgGgDgFgFQgFgGgDgJQgCgIAAgJQAAgJACgIQADgJAFgGQAEgGAGgDQAHgDAHAAQAIAAAHACQAGAEAFAFQAEAGACAHQADAIAAAKIAAAGIg1AAQABAHACAGQABAEADAEQADADAEABQAEACADAAQAGAAAGgCQAFgBAGgEIAGAJQgHAFgGACQgIADgJAAQgHAAgIgDgAgGgeQgEACgCACQgDAEgBAFQgCAFAAAHIAmAAIAAgBQAAgGgBgFQgBgEgDgEQgCgDgEgCQgEgCgEAAQgEAAgDACg");
	this.shape_33.setTransform(16.4,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9941A5").s().p("A7dCHIAAkNMA27AAAIAAENg");
	this.shape_34.setTransform(77.2,35.5,0.438,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9941A5").s().p("A7mCRIAAkhMA3NAAAIAAEhg");
	this.shape_35.setTransform(85.7,14.5,0.484,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_copy, new cjs.Rectangle(0.2,0,171,49), null);


(lib.m_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.toast_background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_base, new cjs.Rectangle(0,0,1382,1500), null);


(lib.m_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.find_mc = new lib.m_findyourapt();
	this.find_mc.parent = this;
	this.find_mc.setTransform(63.7,26.8,1,1,0,0,0,52.7,21.8);

	this.timeline.addTween(cjs.Tween.get(this.find_mc).wait(1));

	// tagline
	this.tagline_mc = new lib.m_ctatext();
	this.tagline_mc.parent = this;
	this.tagline_mc.setTransform(83.5,26.8,1,1,0,0,0,72.5,21.8);

	this.timeline.addTween(cjs.Tween.get(this.tagline_mc).wait(1));

	// arrow
	this.arrow_mc = new lib.m_ctaarrow();
	this.arrow_mc.parent = this;
	this.arrow_mc.setTransform(182.5,26.5,1,1,0,0,0,5,15);

	this.timeline.addTween(cjs.Tween.get(this.arrow_mc).wait(1));

	// dark
	this.dark_mc = new lib.m_ctadarkbox();
	this.dark_mc.parent = this;
	this.dark_mc.setTransform(197,26.5,1,1,0,0,0,29,26.5);

	this.timeline.addTween(cjs.Tween.get(this.dark_mc).wait(1));

	// base
	this.instance = new lib.m_ctabase();
	this.instance.parent = this;
	this.instance.setTransform(98.5,26.5,1,1,0,0,0,98.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_cta, new cjs.Rectangle(0,0,197,53), null);


(lib.m_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dude hand
	this.instance = new lib.m_dudehand();
	this.instance.parent = this;
	this.instance.setTransform(856.2,1318.7,1,1,15,0,0,173.7,250.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:853.6,y:1299.8},14,cjs.Ease.get(1)).to({rotation:15,x:856.2,y:1318.7},24,cjs.Ease.get(1)).wait(22));

	// dude bicep
	this.instance_1 = new lib.m_dudebicep();
	this.instance_1.parent = this;
	this.instance_1.setTransform(967.1,1144.1,1,1,-7.2,0,0,154.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:154,rotation:0,x:974.6},14,cjs.Ease.get(1)).to({regX:154.1,rotation:-7.2,x:967.1},24,cjs.Ease.get(1)).wait(22));

	// ruth hand
	this.instance_2 = new lib.m_ruthhand();
	this.instance_2.parent = this;
	this.instance_2.setTransform(581.3,1161.6,1,1,-15,0,0,25.1,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0},14,cjs.Ease.get(1)).to({rotation:-15},24,cjs.Ease.get(1)).wait(22));

	// base
	this.instance_3 = new lib.m_base();
	this.instance_3.parent = this;
	this.instance_3.setTransform(691,750,1,1,0,0,0,691,750);
	this.instance_3.cache(-2,-2,1386,1504);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1382,1500);


// stage content:
(lib.forrent_toast_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this,
			cta = root.cta_mc,
			find = cta.find_mc,
			tagline = cta.tagline_mc,
			dark = cta.dark_mc,
			arrow = cta.arrow_mc,
			arrowX = arrow.x,
			time = .35;
			
		function init() {
			TweenMax.set(find, {scaleX:0, scaleY:0});
			document.addEventListener("mouseover", handleCTAOver, true);
			document.addEventListener("mouseout", handleCTAOut, true);
		}
		
		function handleCTAOver() {
			TweenMax.to(tagline, time, {alpha:0, scaleX:0, scaleY:0, ease:Back.easeOut});
			TweenMax.to(find, time, {alpha:1, scaleX:1, scaleY:1, ease:Back.easeOut});
			TweenMax.to(dark, time, {scaleX:2.8, ease:Back.easeOut});
			TweenMax.to(arrow, time, {x:157, ease:Back.easeOut});
		}
		
		function handleCTAOut() {
			TweenMax.to(tagline, time, {alpha:1, scaleX:1, scaleY:1, ease:Back.easeOut});
			TweenMax.to(find, time, {alpha:0, scaleX:0, scaleY:0, ease:Back.easeOut});
			TweenMax.to(dark, time, {scaleX:1, ease:Back.easeOut});
			TweenMax.to(arrow, time, {x:arrowX, scaleX:1, ease:Back.easeOut});
		}
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.instance = new lib.m_logo();
	this.instance.parent = this;
	this.instance.setTransform(150,39.8,1,1,0,0,0,115,14.8);
	this.instance.cache(-2,-2,234,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.m_name();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,105);

	this.instance_2 = new lib.m_copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(169.5,191.7,1,1,0,0,0,95.5,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// cta
	this.cta_mc = new lib.m_cta();
	this.cta_mc.parent = this;
	this.cta_mc.setTransform(152.8,324,1.1,1.1,0,0,0,101,29.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(1));

	// animation
	this.instance_3 = new lib.m_animation();
	this.instance_3.parent = this;
	this.instance_3.setTransform(132.4,185.5,0.4,0.4,0,0,0,691,461.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,301,552.8,600);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"toast_background.jpg?1486646919149", id:"toast_background"},
		{src:"forrent_toast_300x600_atlas_P_.png?1486646919107", id:"forrent_toast_300x600_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;