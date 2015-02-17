module.exports = {
	init: function() {
		localStorage.setItem('foodtypes', JSON.stringify([
		{
			foodtype: [
				'fruit',
				'vegetable',
				'meat/egg',
				'diary',
				'legume',
				'other'
			]
		}
		]));
	}
};