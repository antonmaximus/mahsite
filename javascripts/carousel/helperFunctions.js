/******************************************************************************
*** HELPERFUNCTIONS 
*** Author:    Anton Agana
***
*** Helper functions.
*** 
******************************************************************************/
var HELPERFUNCTIONS=function(e){"use strict";function n(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){n.readyState===4&&(n.status===200?t(JSON.parse(n.responseText)):console.error(n))},n.open("GET",e,!0),n.send()}function r(e,t){for(var n=e.children.length-1;n>=0;n--)if(e.children[n].className.indexOf(t)>-1)return e.children[n];console.log("ERROR: child not found")}var t=e||{};return t.loadJsonViaAjax=n,t.getChildWithClassName=r,t}(HELPERFUNCTIONS);