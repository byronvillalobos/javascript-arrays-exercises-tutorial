let color = [
	{label: 'Red', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Orange', sexy: false},
	{label: 'Brown', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Violet', sexy: false},
	{label: 'Purple', sexy: true},
];

function generateLI(color){

return "<li>"+color.label+"</li>";

};

function filterColors(color){
return color.sexy;
  };


function generateHTMLFromArray(array){
	
	let filteredOptions = array.filter(filterColors);
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(elm){
		htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(color));

