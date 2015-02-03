module.exports = {
	init: function() {
		localStorage.clear();
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