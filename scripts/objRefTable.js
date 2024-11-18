const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{direcao: 0},
	{"8Direções": 0},
	{CentrarEm: 0},
	{player: 0},
	{Teclado: 0},
	{Mosaico: 0},
	{Sólido: 0},
	{Mosaico2: 0},
	{Mosaico3: 0},
	{bauPremiado: 0},
	{Texto: 0},
	{Texto2: 0},
	{Sprite: 0},
	{Sprite2: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Mosaico: class extends self.ITilemapInstance {},
	Mosaico2: class extends self.ITilemapInstance {},
	Mosaico3: class extends self.ITilemapInstance {},
	bauPremiado: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {}
}