//	var pathArray = window.location.pathname.split( '/' );
//	var category = pathArray[pathArray.length - 1];
//	category = category.replace("html","json");

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getCategoriesFromJSON() {
	//Get subcat from URL
	var subcat = getUrlVars().category;
	//Makes subcats first letter Uppercase
	var subcatName = subcat[0].toUpperCase() + subcat.slice(1);
	subcatName = subcatName.replace("-"," ");
	var jsonName = "json/" + subcat + ".json";
	$( "#mainContent" ).append("<h1>" + subcatName + "</h1>");
	$.getJSON(jsonName).done( function( data ){
		$.each( data.garbage, function( i, item ){
			$( "#mainContent" ).append("<a href='item.html?subcat=" + subcat +  "&item=" + item.URLfriendlyName + "' class='linkList'>" + item.title + '</a>');
		});
	});
}




function init() {
	getCategoriesFromJSON();
}

(function() {
	init();
})();