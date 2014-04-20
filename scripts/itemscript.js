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
function resetThis(site){
	$( "#mainContent" ).html("");
	$(".active").removeClass("active");
	$(site).addClass("active");
}

function getInfoFromJSON() {
	resetThis(".info");
	//Get item from URL
	var item = getUrlVars().item;
	//Makes subcats first letter Uppercase
	var itemName = item[0].toUpperCase() + item.slice(1);
	var jsonName = "json/" + getUrlVars().subcat + ".json";
	$.getJSON(jsonName).done( function( data ){
		var infoString = "";
		$.each( data.garbage, function( i, item ){
			if(item.URLfriendlyName === itemName.toLowerCase()){
				$.each(this.info,function(){
					if(this.value){
						infoString += "<p class='do infoline'>";
					} else{
						infoString += "<p class='dont infoline'>";
					}
					infoString += this.text + "<span class='dropDownButton'></span></p>";
					infoString += "<p class='additionalInfo'>" + this.additionalInfo + "</p>";
				});
			}
		});
		$( "#mainContent" ).append(infoString + "<p class='normalText info1'></p>");
	});
}

function getTips(){
	resetThis(".tips");
	var item = getUrlVars().item;
	//Makes subcats first letter Uppercase
	var itemName = item[0].toUpperCase() + item.slice(1);
	var jsonName = "json/" + getUrlVars().subcat + ".json";
	console.log(jsonName);
	$.getJSON(jsonName).done( function( data ){
		$.each( data.garbage, function( i, item ){
			if(item.URLfriendlyName === itemName.toLowerCase()){
			console.log(item.name);
			$( "#mainContent" ).html("<p class='tipstext'>" + this.tips + "</p>");
		}
		});
	});
}

function getMap(){
	resetThis(".map");
	$( "#mainContent" ).html("<img src='img/map.png' alt='map' class='map' /><img src='icons/locate.png' alt='map' class='locate' />");
}

$(document).ready(function () {
	var siteTitle = getUrlVars().item;
	siteTitle = siteTitle[0].toUpperCase() + siteTitle.slice(1);
	$( "#mainContent" ).before("<h1>" + siteTitle + "</h1>");
	$("#mainContent").on('click','.infoline',function(){
		$(this).next(".additionalInfo").slideToggle("fast");
	});
	$("a[href='#']").attr("href", "category.html?category=" + getUrlVars().subcat);
	$(document).on('click','.tips',function(){
		getTips();
	});
	$(document).on('click','.map',function(){
		getMap();
	});
	$(document).on('click','.info',function(){
		getInfoFromJSON();
	});
});

function init() {
	getInfoFromJSON();
}

(function() {
	init();
})();