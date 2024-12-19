const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Physics,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Behaviors.Rotate,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Physics.Acts.ApplyForceAtAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Behaviors.Physics.Acts.SetEnabled,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Text.Acts.AddInstanceVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping
	];
};
self.C3_JsPropNameTable = [
	{Physics: 0},
	{ScrollTo: 0},
	{Solid: 0},
	{BoundToLayout: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Keyboard: 0},
	{TiledBackground: 0},
	{Rotate: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Audio: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Off: 0},
	{On: 0},
	{Sprite9: 0},
	{Timer: 0},
	{Text: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{FinalTime: 0},
	{Finish: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Off: class extends self.ISpriteInstance {},
	On: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {}
}