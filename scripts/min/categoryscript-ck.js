function getUrlVars(){for(var e=[],t,a=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),n=0;n<a.length;n++)t=a[n].split("="),e.push(t[0]),e[t[0]]=t[1];return e}function getCategoriesFromJSON(){var e=getUrlVars().category;if("restavfall"===e)$("#mainContent").prepend("<h1>Restavfall</h1>"),$("#mainContent").append("<h3 class='tipstext'>Hva er restavfall?</h3>"),$("#mainContent").append("<p class='tipstext'>Restavfall er det som blir igjen etter at du har sortert ut papir, plastemballasje, matavfall, glass- og metallemballasje, klær, farlig avfall, EE-avfall og grovavfall. Restavfallet kan ikke ombrukes eller gjenvinnes til nye materialer.</p>"),$("#mainContent").append("<h3 class='tipstext'>Hvor skal dette leveres?</h3>"),$("#mainContent").append("<p class='tipstext'>Restavfall legges i vanlig handlepose. Posen med restavfall knyttes med dobbel knute før den legges i samme avfallsbeholder som de blå og grønne posene.</p>"),$("#mainContent").append("<h3 class='tipstext'>Hva blir det til?</h3>"),$("#mainContent").append("<p class='tipstext'>Restavfall sendes til forbrenning med energiutnyttelse, og blir til strøm og fjernvarme.</p>");else{var t=e[0].toUpperCase()+e.slice(1);t=t.replace("-"," ");var a="json/"+e+".json";$("#mainContent").append("<h1>"+t+"</h1>"),$.getJSON(a).done(function(t){$.each(t.garbage,function(t,a){$("#mainContent").append("<a href='item.html?subcat="+e+"&item="+a.URLfriendlyName+"' class='linkList'>"+a.title+"</a>")})})}}function init(){getCategoriesFromJSON()}!function(){init()}();