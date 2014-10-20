/******************************************************************************
*** CAROUSEL 
*** Author:    Anton Agana
***
*** User can call `CAROUSEL.carousel` to create carousel-like framework.
*** Input parameter is a single object with values for the following properties:
***
*** divId:     Required. String. ID of the div on the HTML page where carousel 
***              will be created.
*** jsonPath:  Required if flickrTag property is undefined. String. Path to the JSON file.
*** flickrTag: Optional. String. This is the initial tag on querying photos from
***              the Flickr API.
*** tranTime:  Optional. Integer. This is the transition time between 
***              carousel slides. The default is 1800 ms. 
*** width:     Optional. Integer. User can configure carousel width. Default is 400px.
*** height:    Optional. Integer. User can configure carousel height. Default is 300px.
*** bg:        Optional. String. User can configure carousel's background-color. 
***              Default is white.
***
*** Example Usage:
*** var carousel = new CAROUSEL.Carousel({ divId: 'carouselA', jsonPath: './file.json'});
******************************************************************************/
var CAROUSEL=function(e,t){"use strict";function o(e){this.carousel=document.getElementById(e.divId),this.id=e.divId,this.images=[],this.options={w:e.width||400,h:e.height||300,bg:e.backgroundColor,time:Math.abs(e.tranTime)||1800,download:e.download==="false"?!1:!0},this.options.viewMode=this.options.w>=this.options.h?"landscape":"portrait";var t=this;e.flickrTag?r.handleFlickrRequest(e.flickrTag,function(e){i.renderImagesAndNavigation(e,t)}):n.loadJsonViaAjax(e.jsonPath,function(e){i.renderImagesAndNavigation(e.items,t)})}var n=e.HELPERFUNCTIONS||{},r=e.HELPERFUNCTIONSFLICKR||{},i=e.CAROUSELVIEW||{},s=t||{};return s.Carousel=o,s}(this,CAROUSEL);