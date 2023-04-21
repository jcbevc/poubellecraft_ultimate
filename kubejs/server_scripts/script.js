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

	  event.remove({id: 'xreliquary:uncrafting/stick'})

	  event.shapeless(
		Item.of('minecraft:dandelion', 3), // arg 1: output
		[ 
		  'minecraft:bone_meal',
		  'minecraft:yellow_dye', 	//arg 2: the array of inputs
		  '3x minecraft:ender_pearl'
		]
	  )

	  event.smelting('minecraft:lava_bucket', 'minecraft:obsidian')
})
