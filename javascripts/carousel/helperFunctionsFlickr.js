/******************************************************************************
*** HELPERFUNCTIONSFLICKR 
*** Author:    Anton Agana
***
*** Handles Flickr calls.
*** 
******************************************************************************/
var HELPERFUNCTIONSFLICKR=function(e){"use strict";function r(e){var t=n.pop();if(e.items.length===0){var r="Your keyword '"+t[0]+"' did not match any pic tags on Flickr. "+"Carousel won't be created.";alert(r);return}var i=e.items.map(function(e){return{path:e.media.m.replace("_m.jpg","_z.jpg"),title:e.title}}),s=t[1];s(i)}function i(e,t){n.push([e,t]);var r=document.createElement("script");r.type="text/javascript",r.src="http://api.flickr.com/services/feeds/photos_public.gne?tags="+e+"+pic+%22&tagmode=any&format=json&jsoncallback="+"HELPERFUNCTIONSFLICKR.jsonFlickrFeedHandler",document.body.appendChild(r)}var t=e||{};t.handleFlickrRequest=i,t.jsonFlickrFeedHandler=r;var n=[];return t}(HELPERFUNCTIONSFLICKR);