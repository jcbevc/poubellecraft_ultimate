onEvent('recipes', event => {
	event.shaped(
		Item.of('minecraft:stone', 3), // arg 1: output
		[ 
		  'A B', 
		  ' C ', // arg 2: the shape (array of strings)
		  'B A'  
		],
		{
		  A: 'minecraft:andesite', 
		  B: 'minecraft:diorite',  //arg 3: the mapping object
		  C: 'minecraft:granite'   
		}
	  )

	  event.shaped(
		Item.of('minecraft:jukebox', 3), // arg 1: output
		[ 
		  'A B', 
		  ' C ', // arg 2: the shape (array of strings)
		  'B A'  
		],
		{
		  A: Item.of('ftblibrary:fluid_container', '{Fluid:{FluidName:"candylands:molten_chocolate",Amount:1000}}'), 
		  B: 'minecraft:diorite',  //arg 3: the mapping object
		  C: 'minecraft:granite'   
		}
	  )

	  event.remove({id: 'xreliquary:uncrafting/stick'})

	  event.shapeless(
		Item.of('minecraft:dandelion', 3), // arg 1: output
		[ 
		  'minecraft:bone_meal',
		  'minecraft:yellow_dye', 	//arg 2: the array of inputs
		  '3x minecraft:ender_pearl'
		]
	  )

	  event.smelting('minecraft:lava_bucket', 'minecraft:obsidian').xp(15)

	  event.custom(
		{"type":"mekanism:mek_data",
		"result":{
		"item":"mekanism:digital_miner"},
		"pattern":["ACA",
				   "SRS",
				   "TXT"],

		"key":{
		"C":{"item":"minecraft:torch"},
		"A":{"item":"minecraft:dirt"},
		"X":{"item":"minecraft:wet_sponge"},
		"S":{"item":"minecraft:sea_pickle"},
		"T":{"item":"upgrade_aquatic:pink_searocket"},
		"R":{"item":"minecraft:bedrock"}}}
		)

	})
