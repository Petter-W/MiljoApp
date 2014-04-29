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
	if(subcat === "restavfall"){
		$( "#mainContent" ).append("<h1>Restavfall</h1>");
		$( "#mainContent" ).append("<h3 class='tipstext'>Hva er restavfall?</h3>");
		$( "#mainContent" ).append("<p class='tipstext'>Restavfall er det som blir igjen etter at du har sortert ut papir, plastemballasje, matavfall, glass- og metallemballasje, klær, farlig avfall, EE-avfall og grovavfall. Restavfallet kan ikke ombrukes eller gjenvinnes til nye materialer.</p>");
		$( "#mainContent" ).append("<h3 class='tipstext'>Hvor skal dette leveres?</h3>");
		$( "#mainContent" ).append("<p class='tipstext'>Restavfall legges i vanlig handlepose. Posen med restavfall knyttes med dobbel knute før den legges i samme avfallsbeholder som de blå og grønne posene.</p>");
		$( "#mainContent" ).append("<h3 class='tipstext'>Hva blir det til?</h3>");
		$( "#mainContent" ).append("<p class='tipstext'>Restavfall sendes til forbrenning med energiutnyttelse, og blir til strøm og fjernvarme.</p>");
	}else{
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

}




function init() {
	getCategoriesFromJSON();
}

(function() {
	init();
})();