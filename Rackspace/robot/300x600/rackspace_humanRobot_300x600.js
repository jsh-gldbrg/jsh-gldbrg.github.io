(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"rackspace_humanRobot_300x600_atlas_NP_", frames: [[0,0,2021,1220],[0,1222,2021,1220]]}
];


// symbols:



(lib.fs_mark = function() {
	this.initialize(img.fs_mark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,316);


(lib.human_bg = function() {
	this.spriteSheet = ss["rackspace_humanRobot_300x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.robot_bg = function() {
	this.spriteSheet = ss["rackspace_humanRobot_300x600_atlas_NP_"];
	this.gotoAndStop(1);
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


(lib.m_robot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.robot_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_robot, new cjs.Rectangle(0,0,2021,1220), null);


(lib.m_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7A9QgKgOAAgWQAAgVAIgUQAIgVAPgOQAYgZAjAAQAbAAAMAPQAPASgHAjIgPBSIgBAAIgpAAIAAAAIABgHQABgDAHgOIAAAAQAAgBABAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAABIAAAAQgEAMgFAFQgNAMgUAAQgVAAgLgQgAgEgiQgJAJgGAOQgGAOAAANQAAAaAQgBQALAAAJgLQAJgLAEgTIAEgbQAAgQgQAAQgJAAgHAJg");
	this.shape.setTransform(118.8,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA8QgRgQAAgcQAAgnAbgaQAcgbAoAAQASAAAMAFIAAAAIgHAjIAAABQgKgGgOAAQgWAAgOARQgNAPAAAVQAAAPAKAIQAHAHALAAQARAAATgKIABAAIgHAlQgQAIgZAAQgdAAgQgRg");
	this.shape_1.setTransform(132.7,24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOANQgFgFABgIQABgHAGgGQAGgFAHAAQAIAAAFAFQAFAGgBAHQAAAIgHAFQgGAGgHAAQgIAAgFgGgAgJgLQgGAFAAAGQgBAHAEAFQAEAEAHAAQAGAAAGgFQAFgEABgHQAAgGgEgFQgFgFgGAAQgGAAgFAFgAADALIgDgIIgDAAIgCAIIgCAAIAEgVIAGAAIADAAQADABAAAEIAAACQgBAEgFABIADAJgAgCAAIADAAIACAAQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgBgBIgEAAg");
	this.shape_2.setTransform(153.6,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzA8QgRgQAAgdQAAgjAXgbQAZgdAlAAQAXAAAPAMQAOAMAAAVQAAARgMAMQgUATg0AAQgIAAgEgHIgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAABABIAAAAQAGAGABAFIAEAIQAJALASgBQAbABAYgOIgHAkQgXAMgfAAQgeAAgRgRgAgbgJQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBIABAAIAEgEIALgBQAZgBAHgIQAEgDAAgFQAAgNgQAAQgUAAgKAUQgEAIgFADIAAAAQgBAAAAABQAAAAAAABQAAABAAAAQAAABABAAg");
	this.shape_3.setTransform(145,24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BMIAciUIAmAAIgCAKIAAABQgCALgFAGIAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABgBQAAAAAAgBIAAAAQAEgMAFgFQAPgRAUAAIAJABIgJAqIgHAAQgkAAgJA0IgKA4g");
	this.shape_4.setTransform(39.9,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMBkIgjhPIAAAAIgPBPIgrAAIAmjGIAAgBIArAAIAAABIgXB1IABAAIA5hCIAvAAIAAABIg8BCIAlBPIAAABg");
	this.shape_5.setTransform(78.6,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRBjIAljDIAnAAIgCAHQgCALgFAHIAAAAQAAAAgBABQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAAAAQAEgLAFgFQAPgNATAAQAWAAANAQQANAPAAAZQAAAcgMAXQgNAZgXAMQgRAKgRgBQgNAAgJgHQgDgDAAgHIgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIAAABQAEAGgBADIgJAygAgCgyQgJANgEAVQgIAmAVAAQAPAAAMgUQAMgSAAgXQAAgXgSAAQgMgBgJANg");
	this.shape_6.setTransform(103.2,26.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7A9QgKgOAAgWQAAgVAIgUQAIgVAPgOQAYgZAjAAQAbAAAMAPQAPASgHAjIgPBSIgBAAIgpAAIAAAAIABgHQACgIAGgJIAAAAQAAgBABAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAABIAAAAQgEAMgFAFQgNAMgUAAQgVAAgLgQgAgFgiQgIAJgGAOQgGAOAAANQAAAaAQgBQALAAAJgLQAJgLAEgTIAEgbQgBgQgPAAQgJAAgIAJg");
	this.shape_7.setTransform(51.2,24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA8QgQgQgBgcQABgnAbgaQAcgbAoAAQASAAAMAFIAAAAIgGAjIAAABQgLgGgNAAQgXAAgNARQgOAPAAAVQAAAPAKAIQAHAHAMAAQAQAAAUgKIAAAAIgHAlQgQAIgZAAQgcAAgSgRg");
	this.shape_8.setTransform(65.1,24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8BCIAAgBIAHghIAAAAQAJAFALAEQANAEAKAAQARAAAAgNQAAgKgRgJQgfgOgBgYQABgXARgOQATgOAbAAQAZAAAOAIIgHAgIAAAAQgQgIgSAAQgSAAAAANQAAAIARAJQAiAPAAAYQAAAVgOANQgSASgkAAQgdgBgQgKg");
	this.shape_9.setTransform(90.4,24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhxCVQgEg2AWgkQARgdAXACQAWACAPAgQALAWACAhIATgMIAAAAQgSgvAEgqQAIg6A0hJQglgdg9AIIAAAAIAAAAIAUgWQA2gDAlAgQAnAgADA2QAEA9gsA4QgrA3hAARQgVAFgUAAQgVAAgTgGg");
	this.shape_10.setTransform(20.1,18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhhBtQgTgbgCgiIAAAAQgEg9Arg4QArg3BAgRQAxgMAqARIABAAQgJAYgPAXQgPAVgRAMQgSAMgLgFQgLgFACgSQACgSAPgWQAFgIAIgJIAAgBIgSAEIAAAAQguA6gXBJQgVBGADBIIgBAAQgdgMgSgagAA5hqQgIAHgFAKQgEAKABAHQACAHAHAAQAGAAAJgHQAIgGAFgKQAEgKgBgHQgCgHgHAAIgBAAQgGAAgIAGg");
	this.shape_11.setTransform(12,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_logo, new cjs.Rectangle(0,0,267.8,41.9), null);


(lib.m_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-1.5,-100,3,200);
	this.shape.setTransform(1.5,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_line, new cjs.Rectangle(0,0,3,200), null);


(lib.m_human = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwMR8QgKgJgBgbQgBh5AEhPQADgxAFguIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIABgEIAAgEIAAgDIgBgEIABgEIAAgEIABgEIACgDIAEgEIADgEIAEgEIAEgEIAFgCIAEgBIAHgCIbggCIAGgDIAIAAIAAgBIAKACIAHAEIAEAEIABABQAFABAGAEQANAHAFAOQAEAKAAAQIABAcIAAAGIAMA2IAIApIACAOQAJAMACAaQAEAhAEBDIALCxIADAxIAAARIADAAQAIADAGAGQALANgDASQgBAGgEAIQADAdgRAmIgSAmQgJATgEAOIgBACIgBAEIgFAcQgDAQgGAKIgBABIgGAQIgEAQIANAJIAHAGIANgNQAOgPANABQAOAAAJARQAFAKABATIAAAMIADAAQANAFAIAKQAIALABAOQABAOgGAMQgKAXgaAOIACATQAHABAGAFQAIAHAGALQARAigPAwQgGAWgNATIgWAbQgZAcgNANIgvAtIgDADQAHgCAHACQAKACAGAHQAHAIACAPQABAPgFAJIgFAIQgEAGgBAEQARgGAMAEQAJADAGAJQAFAJAAAKQABARgKAWQgFAKAAAGIADALQADARgIAMIgCADQAGAAAJgFQATgJAGAAQAMgCAKAJQAKAJAAALQAHgEAFgMQAFgQADgEQAFgHAIgDQAJgDAIACQAKADAHAKQAGAIABALQABAOgFAJQgEAKgNASIgEAJIAIABQAUAEAJAHQARANACAdQABAggSAVIgIAIQgEAFgGAFIgQAMIgIAGIgSANIgHAGIgEACQgTAMgUAKIgqASIgVAKIgIAHQgJAGgbALIgKAIQgMAIgaAHQgNAEgQACIgJACIgOAHQhTAjhZAGQgfABggAAIgyAFQhlAKgeABIhUADQgWACgPAFIgZALIgaALIAAAAIgWAPIgvAgIgWANQggAYglASQgDAIgHAHQgJAKgRALIgdATIgkAYQgVAMgPAFQgHAIgJADQgKADgOABIgZAAQgJABgjAIQgQAFhBALIgaAFIgLAFQgSAIgTADIgYAFIgBAAIgBABIgDAAQgHADgKAHIgRALQgQAHgVAAQgKAAgdgEQglgEgwgDIgBAAIhAARQhAARgeAMIgjANIgOAEIggAKQgeAIhDAOQgLACgIAAQgOAAgHgGgANfGlIABgCIgCAAIABACgAMkEqIADgGIgHAAIAEAGgAMgBMQgOAMgJAKIAFgEIAhgeIgPAMg");
	mask.setTransform(1275,765);

	// Layer 1
	this.instance = new lib.human_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_human, new cjs.Rectangle(0,0,2021,1220), null);


(lib.m_handle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C40022").s().dr(-0.5,-10,1,20);
	this.shape.setTransform(6.5,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C40022").s().dr(-0.5,-10,1,20);
	this.shape_1.setTransform(3.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().dr(-5,-20,10,40);
	this.shape_2.setTransform(5,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_handle, new cjs.Rectangle(0,0,10,40), null);


(lib.m_fsmark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fs_mark();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_fsmark, new cjs.Rectangle(0,0,316,316), null);


(lib.m_ctatext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C40222").s().p("AgdA+IAAh7IA7AAIAAATIglAAIAAAhIAfAAIAAASIgfAAIAAAiIAlAAIAAATg");
	this.shape.setTransform(127.4,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C40222").s().p("AgKA+IAAhoIgXAAIAAgTIBDAAIAAATIgXAAIAABog");
	this.shape_1.setTransform(119.9,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C40222").s().p("AgOA9QgHgCgEgEQgJgJAAgNIAAhBQAAgOAJgIQAEgFAHgBQAGgDAIAAQARAAAJAJQAJAIAAAOIAABBQAAANgJAJQgJAJgRgBQgIAAgGgCgAgNgfIAAA/QABAFADAEQADACAGAAQAHAAADgCQADgEAAgFIAAg/QAAgGgDgDQgDgDgHAAQgNAAAAAMg");
	this.shape_2.setTransform(112.2,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C40222").s().p("AgZA2QgFgEgCgGQgCgFAAgHIAAheIAWAAIAABdQAAAGADADQADADAGAAQAGAAAEgDQADgDAAgGIAAhdIAWAAIAABeQAAAHgDAFQgCAGgEAEQgJAJgRAAQgQAAgJgJg");
	this.shape_3.setTransform(103.5,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C40222").s().p("AANBHIgNgPIgEAAQgIAAgHgCQgHgCgEgEQgJgJABgOIAAhAQgBgOAJgIQAEgFAHgCQAHgCAIAAQARAAAIAJQAJAIAAAOIAABAQAAAQgLAJIAUAVgAgRgmIAAA+QAAAGADADQAEADAGAAQAGAAAEgDQADgDAAgGIAAg+QAAgGgDgDQgEgDgGAAQgNAAAAAMg");
	this.shape_4.setTransform(95.4,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C40222").s().p("AgdA+IAAh7IA7AAIAAATIglAAIAAAhIAfAAIAAASIgfAAIAAAiIAlAAIAAATg");
	this.shape_5.setTransform(83.8,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C40222").s().p("AgdA+IAAh7IA7AAIAAATIglAAIAAAhIAfAAIAAASIgfAAIAAAiIAlAAIAAATg");
	this.shape_6.setTransform(76.4,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C40222").s().p("AALA+IgPgvIgJAAIAAAvIgWAAIAAh7IAjAAQAPAAAIAIQAEADACAFQACAFAAAHIAAAVQAAAKgEAGQgDAGgIADIATAxgAgNgBIANAAQAEAAADgDQADgCgBgGIAAgUQABgFgDgCQgDgDgEAAIgNAAg");
	this.shape_7.setTransform(68.6,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C40222").s().p("AgcA+IAAh7IA5AAIAAATIgjAAIAAAlIAgAAIAAASIggAAIAAAxg");
	this.shape_8.setTransform(60.9,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C40222").s().p("AATA+IgGgfIgaAAIgGAfIgVAAIAah7IAdAAIAZB7gAAKANIgKg2IgKA2IAUAAg");
	this.shape_9.setTransform(49.5,14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C40222").s().p("AgKA+IAAhoIgXAAIAAgTIBDAAIAAATIgXAAIAABog");
	this.shape_10.setTransform(38.3,14.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C40222").s().p("AgdA+IAAh7IA7AAIAAATIglAAIAAAhIAfAAIAAASIgfAAIAAAiIAlAAIAAATg");
	this.shape_11.setTransform(31.4,14.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C40222").s().p("AgYA3QgEgEgDgFQgCgFAAgHIAAhCQAAgHADgGQACgFAFgEQAKgIAQAAQAQABAKADIAAAUIgLgDIgNgBQgQAAAAAMIAAA+QAAAGAEACQADADAGAAQAHAAADgCIAAgrIAWAAIAAA5QgHADgIACQgIACgJAAQgQABgKgIg");
	this.shape_12.setTransform(23.4,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_ctatext, new cjs.Rectangle(0,0,150,31.5), null);


(lib.m_ctaredbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-75,-20,150,40);
	this.shape.setTransform(75,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_ctaredbox, new cjs.Rectangle(0,0,150,40), null);


(lib.bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(25,25,0.167,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_mc, new cjs.Rectangle(0,0,50,50), null);


(lib.b_hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().dr(-150,-300,300,600);
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.m_headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgFgEAAgIQAAgPAQAAQAIAAAFAEQAEAEAAAHQAAAIgEAEQgFAEgIAAQgHAAgEgEg");
	this.shape.setTransform(205.9,114.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbBFIAAgwQAAgVADgTIgTA1IgWAAIgTg1QAEAZAAAPIAAAwIgdAAIAAiJIAfAAIAYBFIAZhFIAfAAIAACJg");
	this.shape_1.setTransform(197.1,108.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATBFIgGggIgaAAIgFAgIgdAAIAbiJIApAAIAbCJgAAJAMIgJg1IgJA1IASAAg");
	this.shape_2.setTransform(185.7,108.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBFIAAiJIBFAAIAAAaIgnAAIAAAdIAiAAIAAAZIgiAAIAAAfIAnAAIAAAag");
	this.shape_3.setTransform(176.8,108.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBFIAAhvIgZAAIAAgaIBPAAIAAAaIgZAAIAABvg");
	this.shape_4.setTransform(168.3,108.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBFIAAhvIgZAAIAAgaIBPAAIAAAaIgZAAIAABvg");
	this.shape_5.setTransform(156.4,108.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKBFIgSgyIgEAAIAAAyIgeAAIAAiJIAsAAQARAAAJAHQAFAEACAGQACAGAAAHIAAAaQAAAMgEAGQgEAIgIADIAWA0gAgMgEIAMAAQAEAAABgCQACgCAAgFIAAgWQAAgFgCgBQgCgCgDAAIgMAAg");
	this.shape_6.setTransform(147.9,108.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSBFQgHgDgFgEQgGgFgCgHQgDgGAAgJIAAhGQAAgIADgGQACgHAGgFQAKgJAUAAQAUAAALAJQAGAFACAHQADAGAAAIIAABGQAAAJgDAGQgCAHgGAFQgFAEgIADQgIACgKAAQgJAAgJgCgAgLghIAABDQAAAFADACQADADAFAAQAGAAADgDQADgCAAgFIAAhDQAAgFgDgCQgDgDgGAAQgLAAAAAKg");
	this.shape_7.setTransform(137.9,108.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBFIAAiJIAsAAQAQAAAJAHQAFAEADAGQACAGAAAHIAAAlQAAAPgKAHQgJAIgQAAIgOAAIAAAogAgJADIALAAQADAAADgCQACgBAAgEIAAgeQAAgEgCgCQgDgCgDAAIgLAAg");
	this.shape_8.setTransform(128.5,108.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBFIAAiJIAsAAQARAAAJAHQAEAEACAGQADAGAAAHIAAAlQAAAPgJAHQgJAIgRAAIgOAAIAAAogAgJADIAKAAQAEAAADgCQACgBAAgEIAAgeQAAgEgCgCQgDgCgEAAIgKAAg");
	this.shape_9.setTransform(119.1,108.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBEQgIgDgFgEQgFgFgDgHQgCgGgBgJIAAhnIAfAAIAABmQAAAFADACQADADAEAAQAGAAADgDQACgCAAgFIAAhmIAeAAIAABnQABARgLAKQgFAEgIADQgHACgLAAQgJAAgIgCg");
	this.shape_10.setTransform(109.2,108.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXBFIgOgDIAAgdQAGADAJABIAQABQAQAAAAgJIAAgDQAAgFgCgCQgCgDgFgCIgVgMQgKgFgEgHQgFgIAAgJIAAgNQAAgQALgJQALgIATAAQAUAAAKAEIAAAdQgMgGgQAAQgHAAgCADQgDACAAAFIAAADQAAAGACACQACADAFADIAXANQAIAEAEAHQAEAGAAAJIAAANQAAAQgMAJQgMAIgUAAIgTgBg");
	this.shape_11.setTransform(99.9,108.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBFIAAiJIAfAAIAABwIAkAAIAAAZg");
	this.shape_12.setTransform(88.4,108.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATBFIgFggIgbAAIgFAgIgdAAIAbiJIApAAIAbCJgAAJAMIgJg1IgJA1IASAAg");
	this.shape_13.setTransform(79.3,108.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKBEQgIgCgFgFQgGgEgCgGQgDgGAAgIIAAhJQAAgQALgIQAFgFAJgCQAIgCAKAAQAPAAALACIAAAcQgMgDgLAAQgKAAgDACQgDADAAAEIAABDQAAAEAEADQADACAHAAQAPAAAKgDIAAAbQgLADgPAAQgKAAgJgCg");
	this.shape_14.setTransform(70.4,108.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBFIAAiJIAdAAIAACJg");
	this.shape_15.setTransform(63.8,108.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBFIAAhvIgZAAIAAgaIBPAAIAAAaIgZAAIAABvg");
	this.shape_16.setTransform(57.3,108.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATBFIgFggIgbAAIgGAgIgcAAIAbiJIApAAIAbCJgAAJAMIgJg1IgJA1IASAAg");
	this.shape_17.setTransform(48.3,108.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPBFQgchKgFgQQAEAQAAAlIAAAlIgdAAIAAiJIAdAAIASAuQALAcAEAPIAAABIAAAAIAAAAIAAgBQgCgJgBgNIgBghIAAgiIAdAAIAACJg");
	this.shape_18.setTransform(38.1,108.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATBFIgFggIgbAAIgFAgIgdAAIAbiJIApAAIAbCJgAAJAMIgJg1IgJA1IASAAg");
	this.shape_19.setTransform(28,108.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghBFIAAiJIBDAAIAAAaIglAAIAAAiIAiAAIAAAaIgiAAIAAAzg");
	this.shape_20.setTransform(19.3,108.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAKBFIgSgyIgEAAIAAAyIgeAAIAAiJIAsAAQARAAAJAHQAFAEACAGQACAGAAAHIAAAaQAAAMgEAGQgEAIgIADIAWA0gAgMgEIAMAAQAEAAABgCQACgCAAgFIAAgWQAAgFgCgBQgCgCgDAAIgMAAg");
	this.shape_21.setTransform(220.5,89.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBEQgIgDgFgEQgFgFgDgHQgCgGgBgJIAAhnIAeAAIAABmQABAFADACQADADAEAAQAGAAADgDQADgCAAgFIAAhmIAdAAIAABnQAAARgKAKQgFAEgIADQgHACgLAAQgJAAgIgCg");
	this.shape_22.setTransform(210.4,89.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRBFQgIgDgGgEQgEgFgEgHQgCgGAAgJIAAhGQAAgIACgGQAEgHAEgFQALgJAUAAQAVAAAKAJQAFAFADAHQADAGAAAIIAABGQAAAJgDAGQgDAHgFAFQgGAEgHADQgIACgKAAQgJAAgIgCgAgLghIAABDQAAAFADACQADADAFAAQAGAAADgDQADgCAAgFIAAhDQAAgFgDgCQgDgDgGAAQgLAAAAAKg");
	this.shape_23.setTransform(200.6,89.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOBFIAAg3IgbAAIAAA3IgeAAIAAiJIAeAAIAAA5IAbAAIAAg5IAeAAIAACJg");
	this.shape_24.setTransform(186.7,89.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOBFIAAhvIgZAAIAAgaIBPAAIAAAaIgZAAIAABvg");
	this.shape_25.setTransform(177.3,89.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOBFIAAiJIAdAAIAACJg");
	this.shape_26.setTransform(170.8,89.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AANBFIgIg3IgEglIgDAlIgJA3IgcAAIgSiJIAaAAIAIA/IACATIAKhSIAYAAIAKBRIADgkIAHgtIAZAAIgSCJg");
	this.shape_27.setTransform(162.4,89.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAPBFQgchKgFgQQAEAQAAAlIAAAlIgdAAIAAiJIAdAAIASAuQALAcAEAPIAAABIAAAAIAAAAIAAgBQgCgJgBgNIgBghIAAgiIAdAAIAACJg");
	this.shape_28.setTransform(147.5,89.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATBFIgGggIgaAAIgGAgIgcAAIAbiJIApAAIAbCJgAAJAMIgJg1IgJA1IASAAg");
	this.shape_29.setTransform(137.4,89.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAbBFIAAgwQAAgVAEgTIgTA1IgXAAIgTg1QAEAZAAAPIAAAwIgdAAIAAiJIAfAAIAYBFIAZhFIAfAAIAACJg");
	this.shape_30.setTransform(126,89.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRBEQgIgDgFgEQgFgFgDgHQgCgGAAgJIAAhnIAeAAIAABmQAAAFACACQAEADAEAAQAGAAACgDQADgCABgFIAAhmIAeAAIAABnQAAARgLAKQgFAEgIADQgHACgLAAQgJAAgIgCg");
	this.shape_31.setTransform(114.6,89.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAOBFIAAg3IgbAAIAAA3IgeAAIAAiJIAeAAIAAA5IAbAAIAAg5IAeAAIAACJg");
	this.shape_32.setTransform(104.3,89.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AATBFIgGggIgaAAIgGAgIgcAAIAbiJIApAAIAbCJgAAJAMIgJg1IgJA1IASAAg");
	this.shape_33.setTransform(90.5,89.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgiBFIAAiJIBFAAIAAAaIgnAAIAAAdIAiAAIAAAZIgiAAIAAAfIAnAAIAAAag");
	this.shape_34.setTransform(77.9,89.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAKBFIgWhCIAABCIgfAAIAAiJIAfAAIAAA+IAVg+IAhAAIgaBDIAbBGg");
	this.shape_35.setTransform(69,89.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgOBFIAAiJIAdAAIAACJg");
	this.shape_36.setTransform(61.4,89.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AghBFIAAiJIAfAAIAABwIAkAAIAAAZg");
	this.shape_37.setTransform(55.5,89.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AghBFIAAiJIAfAAIAABwIAkAAIAAAZg");
	this.shape_38.setTransform(44.1,89.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgiBFIAAiJIBFAAIAAAaIgnAAIAAAdIAiAAIAAAZIgiAAIAAAfIAnAAIAAAag");
	this.shape_39.setTransform(35.9,89.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgiBFIAAiJIBFAAIAAAaIgnAAIAAAdIAiAAIAAAZIgiAAIAAAfIAnAAIAAAag");
	this.shape_40.setTransform(27.5,89.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AghBFIAAiJIBDAAIAAAaIglAAIAAAiIAiAAIAAAaIgiAAIAAAzg");
	this.shape_41.setTransform(19.3,89.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTATQgHgGAAgNQAAgYAaAAQANAAAHAGQAHAGAAAMQAAANgHAGQgHAGgNAAQgMAAgHgGg");
	this.shape_42.setTransform(146.9,64.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgnBvQgMgCgJgEIAAguQALAEAMADQANACANAAQAaAAAAgQIAAgEQAAgIgDgDQgCgEgJgEIghgTQgQgIgIgMQgHgMAAgQIAAgUQAAgZASgOQAQgOAggBQAgAAAQAIIAAAtQgTgIgZAAQgMAAgEAEQgFAEAAAIIAAAEQAAAJADAFQADAEAKAGIAkAUQANAGAGALQAHAKAAAPIAAAUQAAAagTAOQgTAOgigBQgSAAgNgBg");
	this.shape_43.setTransform(136.1,55.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXBvIAAizIgpAAIAAgqICBAAIAAAqIgpAAIAACzg");
	this.shape_44.setTransform(122.5,55.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgcBvQgNgEgIgIQgJgIgEgKQgEgLAAgNIAAhxQAAgNAEgKQAEgLAJgHQARgQAgAAQAgAAASAQQAIAHAEALQAFAKAAANIAABxQAAANgFALQgEAKgIAIQgJAIgNAEQgMADgQAAQgQAAgMgDgAgTg1IAABsQAAAHAGAEQAEAEAJAAQAJAAAFgEQAFgEAAgHIAAhsQAAgIgFgEQgFgEgJAAQgTAAAAAQg");
	this.shape_45.setTransform(108.2,55.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhBBvIAAjdIBLAAQA2AAAAAzIAAAVQAAAfgWAHQAYAFAAAgIAAAXQAAAzg2AAgAgRBGIAVAAQAOAAAAgNIAAgXQAAgHgDgDQgEgEgHAAIgVAAgAgRgVIATAAQAPAAAAgOIAAgVQAAgHgEgDQgEgEgHAAIgTAAg");
	this.shape_46.setTransform(92.6,55.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcBvQgNgEgJgIQgIgIgEgKQgEgLAAgNIAAhxQAAgNAEgKQAEgLAIgHQARgQAhAAQAgAAARAQQAJAHAFALQAEAKAAANIAABxQAAANgEALQgFAKgJAIQgIAIgMAEQgNADgQAAQgQAAgMgDgAgSg1IAABsQAAAHAEAEQAGAEAIAAQAKAAAEgEQAFgEAAgHIAAhsQAAgIgFgEQgEgEgKAAQgSAAAAAQg");
	this.shape_47.setTransform(76.8,55.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAQBvIgdhQIgGAAIAABQIgwAAIAAjdIBHAAQAaAAAPANQAHAGAEAJQAEAJAAAMIAAApQAAATgHALQgHAMgNAFIAjBUgAgTgGIATAAQAGAAADgDQADgEAAgIIAAgkQAAgHgDgDQgEgCgFAAIgTAAg");
	this.shape_48.setTransform(61.8,55.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgdBvQgMgEgIgIQgJgIgEgKQgEgLAAgNIAAhxQAAgNAEgKQAEgLAJgHQARgQAgAAQAhAAARAQQAIAHAEALQAFAKAAANIAABxQAAANgFALQgEAKgIAIQgJAIgNAEQgMADgQAAQgQAAgNgDgAgTg1IAABsQAAAHAGAEQAEAEAJAAQAJAAAFgEQAFgEAAgHIAAhsQAAgIgFgEQgFgEgJAAQgTAAAAAQg");
	this.shape_49.setTransform(39.9,55.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAYBvQguh4gHgZQAGAZAAA9IAAA7IgvAAIAAjdIAvAAIAdBKQASAuAHAZIAAABIAAgBQgEgQgCgVQgCgWAAgeIAAg4IAwAAIAADdg");
	this.shape_50.setTransform(23.5,55.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgTATQgHgGAAgNQAAgYAaAAQANAAAHAGQAHAHAAALQAAANgHAGQgHAGgNAAQgMAAgHgGg");
	this.shape_51.setTransform(209.2,35.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgmBuQgNgBgKgEIAAguQALAFANACQAMACAOAAQAbAAAAgPIAAgGQAAgHgEgEQgDgDgIgFIghgSQgQgJgHgLQgIgMAAgPIAAgVQAAgaASgOQAQgOAgAAQAgABARAGIAAAuQgUgIgZAAQgMAAgEAEQgFAEAAAHIAAAGQAAAIAEAEQACAFAJAFIAlAVQANAGAGALQAHALAAAOIAAAUQAAAagTAOQgTANgiAAQgRAAgNgCg");
	this.shape_52.setTransform(198.4,26.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgYBvIAAizIgnAAIAAgqIB/AAIAAAqIgnAAIAACzg");
	this.shape_53.setTransform(184.8,26.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ag/BvIAAjdIBHAAQAaAAAPANQAHAGAFAJQADAJAAAMIAAA7QAAAYgPAMQgPANgaAAIgXAAIAABAgAgPAFIARAAQAHAAADgDQAEgDAAgGIAAgwQAAgHgEgDQgDgDgHAAIgRAAg");
	this.shape_54.setTransform(171.1,26.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgXBvIAAjdIAvAAIAADdg");
	this.shape_55.setTransform(159.4,26.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAQBvIgdhQIgGAAIAABQIgwAAIAAjdIBHAAQAaAAAPANQAHAGAEAJQAEAJAAAMIAAApQAAATgHALQgHAMgNAFIAjBUgAgTgGIATAAQAGAAADgDQADgEAAgIIAAgkQAAgHgDgDQgEgCgFAAIgTAAg");
	this.shape_56.setTransform(148.4,26.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgQBtQgNgEgJgGQgJgIgEgKQgEgKAAgMIAAh0QAAgaARgOQAJgHAOgEQANgEARAAQAYAAAQAFIAAAtQgSgGgRAAQgSAAgEAEQgFAEAAAHIAABrQAAAIAGADQAFAFAMAAQAYgBAQgFIAAAsQgRAFgZgBQgRAAgNgDg");
	this.shape_57.setTransform(133.7,26.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgnBuQgMgBgKgEIAAguQAMAFAMACQANACANAAQAbAAAAgPIAAgGQgBgHgDgEQgCgDgJgFIghgSQgPgJgIgLQgIgMAAgPIAAgVQAAgaASgOQAQgOAgAAQAgABARAGIAAAuQgUgIgZAAQgMAAgEAEQgFAEAAAHIAAAGQAAAIAEAEQACAFAKAFIAkAVQANAGAGALQAHALAAAOIAAAUQAAAagTAOQgTANgiAAQgSAAgNgCg");
	this.shape_58.setTransform(120,26.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag1BvIAAjdIAxAAIAAC0IA6AAIAAApg");
	this.shape_59.setTransform(101.5,26.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ag1BvIAAjdIAxAAIAAC0IA6AAIAAApg");
	this.shape_60.setTransform(89.1,26.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAfBvIgJgzIgrAAIgJAzIguAAIAsjdIBCAAIArDdgAAPATIgPhVIgPBVIAeAAg");
	this.shape_61.setTransform(74.5,26.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgQBtQgNgEgJgGQgJgIgEgKQgEgKAAgMIAAh0QAAgaARgOQAJgHAOgEQANgEARAAQAYAAAQAFIAAAtQgSgGgRAAQgSAAgEAEQgFAEAAAHIAABrQAAAIAGADQAFAFAMAAQAYgBAQgFIAAAsQgRAFgZgBQgRAAgNgDg");
	this.shape_62.setTransform(60.3,26.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgdBuQgMgEgIgHQgJgIgEgKQgEgLAAgNIAAhwQAAgOAEgKQAEgKAJgJQARgPAgAAQAhAAARAPQAIAJAEAKQAFAKAAAOIAABwQAAANgFALQgEAKgIAIQgJAHgNAEQgMAEgQAAQgQAAgNgEgAgTg1IAABsQAAAIAGADQAEAFAJAAQAJAAAFgFQAFgDAAgIIAAhsQAAgIgFgEQgFgEgJAAQgTAAAAAQg");
	this.shape_63.setTransform(39.9,26.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAYBvQguh4gHgZQAGAZAAA9IAAA7IgvAAIAAjdIAvAAIAdBKQASAuAHAZIAAABIAAgBQgEgQgCgVQgCgWAAgeIAAg4IAwAAIAADdg");
	this.shape_64.setTransform(23.5,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(3,2,0,3).p("Ay5qYMAlzAAAIAAUxMglzAAAg");
	this.shape_65.setTransform(121,66.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C40222").s().p("Ay5KZIAA0xMAlzAAAIAAUxg");
	this.shape_66.setTransform(121,66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65}]}).wait(1));

	// lines
	this.instance = new lib.m_line();
	this.instance.parent = this;
	this.instance.setTransform(-71.1,62.6,1,1,-45,0,0,1.6,100);

	this.instance_1 = new lib.m_line();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.1,-71.4,1,1,-45,0,0,1.6,100);

	this.instance_2 = new lib.m_line();
	this.instance_2.parent = this;
	this.instance_2.setTransform(171.9,-71.4,1,1,-45,0,0,1.6,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_headline, new cjs.Rectangle(-143,-143.1,386.5,277.6), null);


(lib.m_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.text_mc = new lib.m_ctatext();
	this.text_mc.parent = this;
	this.text_mc.setTransform(75,21.8,1,1,0,0,0,75,15.8);

	this.timeline.addTween(cjs.Tween.get(this.text_mc).wait(1));

	// base
	this.base_mc = new lib.m_ctaredbox();
	this.base_mc.parent = this;
	this.base_mc.setTransform(75,20,1,1,0,0,0,75,20);

	this.timeline.addTween(cjs.Tween.get(this.base_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_cta, new cjs.Rectangle(0,0,150,40), null);


// stage content:
(lib.rackspace_humanRobot_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this,
			screenPixelRatio = window.devicePixelRatio, //detects devicePixelRatio, use returned value for any code referencing mouse position
		    stageWidth = stage.canvas.width/screenPixelRatio, //returns expected value for width of stage
		    stageHeight = stage.canvas.height/screenPixelRatio, //returns expected value for height of stage
			bgScaleWidth = stageWidth/root.bg_mc.nominalBounds.width, //returns scale for resizing background width
			bgScaleHeight = stageHeight/root.bg_mc.nominalBounds.height; //returns scale for resizing background height
			headline = root.headline_mc,
			cta = root.cta_mc,
			logo = root.logo_mc,
			tile = new createjs.Shape(),
			human = root.human_mc,
			hit = root.hit_btn,
			cta = root.cta_mc,
			dragger = root.dragger_mc,
			intro = new TimelineMax({onComplete:function() {
				setTimeout(function(){ 
					TweenMax.to(dragger, .25, {scaleX:1, scaleY:1, ease:Back.easeOut})
					tweenForward();
				}, 500);
			}});
		
		function initBanner() {
			//scale bg cover movieclip to cover entire stage
			root.bg_mc.scaleX = bgScaleWidth;
			root.bg_mc.scaleY = bgScaleHeight;
			
			tile.graphics.drawRect(0, 0, stageWidth, stageHeight);
			tile.x = 0;
			human.mask = tile;
			stage.addChild(tile);
			
			dragger.mouseChildren = false;
			TweenMax.set(dragger, {scaleX:0, scaleY:0});
			
			hit.addEventListener("pressmove", followMouse);
			hit.addEventListener("pressup", stopFollow);
			
			intro.from(headline, .5, {x:-headline.nominalBounds.width, y:-headline.nominalBounds.height, ease:Back.easeOut})
				 .from(cta, .25, {scaleX:0, scaleY:0, ease:Back.easeOut})
				 .from(logo, .25, {scaleX:0, scaleY:0, ease:Back.easeOut} )
			
			cta.mouseChildren = false;
			
			cta.on("mouseover", function() {
				TweenMax.to(cta.base_mc, .25, {scaleX:.9, scaleY:.9, ease:Back.easeOut});
				TweenMax.to(cta.text_mc, .25, {scaleX:1.1, scaleY:1.1, ease:Back.easeOut});
			});
			
			cta.on("mouseout", function() {
				TweenMax.to(cta.base_mc, .25, {scaleX:1, scaleY:1, ease:Back.easeOut});
				TweenMax.to(cta.text_mc, .25, {scaleX:1, scaleY:1, ease:Back.easeOut});
			});
		}
		
		function tweenForward(){
			TweenMax.to(dragger, 1.5, {x:250, ease:Sine.easeOut});	
			TweenMax.to(tile, 1.5, {x:-50, ease:Sine.easeOut, onComplete:tweenBack});
		}
		
		function tweenBack(){
			TweenMax.to(dragger, 1.5, {x:295, ease:Sine.easeOut});
			TweenMax.to(tile, 1.5, {x:-5, ease:Sine.easeOut, onComplete:tweenForward});
		}
		
		function followMouse(evt){
			TweenMax.killAll();
			dragger.x = (evt.stageX / screenPixelRatio);
			tile.x = (evt.stageX / screenPixelRatio) - stageWidth;
			
		}
		
		function stopFollow(){
			TweenMax.to(dragger, 1.5, {x:295, ease:Sine.easeOut});
			TweenMax.to(tile, 1.5, {x:-5, ease:Sine.easeOut, onComplete:tweenForward});
		}
		 
		
		initBanner();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta
	this.cta_mc = new lib.m_cta();
	this.cta_mc.parent = this;
	this.cta_mc.setTransform(150,473,1,1,0,0,0,75,20);

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(1));

	// hit
	this.hit_btn = new lib.b_hit();
	this.hit_btn.parent = this;
	this.hit_btn.setTransform(150,300,1,1,0,0,0,150,300);
	new cjs.ButtonHelper(this.hit_btn, 0, 1, 2, false, new lib.b_hit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit_btn).wait(1));

	// Layer 3
	this.instance = new lib.m_fsmark();
	this.instance.parent = this;
	this.instance.setTransform(45.1,368.7,0.336,0.336,-15,0,0,158.2,158.3);
	this.instance.alpha = 0.352;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,320,320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.logo_mc = new lib.m_logo();
	this.logo_mc.parent = this;
	this.logo_mc.setTransform(196.2,570.1,0.822,0.819,0,0,0,133.9,20.9);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// headline
	this.headline_mc = new lib.m_headline();
	this.headline_mc.parent = this;
	this.headline_mc.setTransform(-110,-110.1,1,1,0,0,0,-143,-143.1);

	this.timeline.addTween(cjs.Tween.get(this.headline_mc).wait(1));

	// dragger
	this.dragger_mc = new lib.m_handle();
	this.dragger_mc.parent = this;
	this.dragger_mc.setTransform(300,300,1,1,0,0,0,5,20);

	this.timeline.addTween(cjs.Tween.get(this.dragger_mc).wait(1));

	// human
	this.human_mc = new lib.m_human();
	this.human_mc.parent = this;
	this.human_mc.setTransform(-585,0,0.492,0.492,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.human_mc).wait(1));

	// robot
	this.robot_mc = new lib.m_robot();
	this.robot_mc.parent = this;
	this.robot_mc.setTransform(-88,300,0.492,0.492,0,0,0,1010.5,610);

	this.timeline.addTween(cjs.Tween.get(this.robot_mc).wait(1));

	// bg_cover
	this.bg_mc = new lib.bg_mc();
	this.bg_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434.9,189.9,993.9,710.1);
// library properties:
lib.properties = {
	id: '26821785911F4BD59B7112D85822C144',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"fs_mark.png?1503947574922", id:"fs_mark"},
		{src:"rackspace_humanRobot_300x600_atlas_NP_.jpg?1503947574894", id:"rackspace_humanRobot_300x600_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['26821785911F4BD59B7112D85822C144'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;