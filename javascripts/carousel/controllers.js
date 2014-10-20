/******************************************************************************
*** CAROUSELCONTROLLER 
*** Author:    Anton Agana
***
*** Moves the carousel automatically and Responds to user input on carousels. 
*** Valid input are as follows:
***  - Left Navigation
***  - Right Navigation
***  - Download Button
***  - Pause/unpause Button
*** 
******************************************************************************/
var CAROUSELCONTROLLER=function(e,t){"use strict";function i(e){clearInterval(e.dataset.intervId),e.dataset.intervId=""}function s(e){var t=Number(e.dataset.autoStep),n=Number(e.dataset.time),r=setInterval(function(){o(e,t)},n);e.dataset.intervId=r}function o(e,t){var r=n.getChildWithClassName(n.getChildWithClassName(e,"viewport"),"filmstrip"),i=Number(r.style.marginLeft.replace("px","")),s=Number(r.dataset.totalWidth);i+=t,Math.abs(i)===s?i=0:i>0&&(i=-(s-t)),r.style.marginLeft=i+"px",e.dataset.autoStep=t}function u(e,t){var r=n.getChildWithClassName(n.getChildWithClassName(e,"viewport"),"filmstrip"),i=Number(r.style.marginLeft.replace("px","")),s=Number(e.dataset.viewingWidth),o=Math.abs(i/s),u=r.children[o].firstChild;t.download=u.alt.trim().split(" ").join("_").split('"').join("").split("'").join(""),t.href=u.src}function a(e){e.dataset.intervId?i(e):s(e)}var n=e.HELPERFUNCTIONS||{},r=t||{};return r.stopCarousel=i,r.autoMove=s,r.moveCarouselByStep=o,r.downloadVisiblePhotoHandler=u,r.pauseButtonHandler=a,r}(this,CAROUSELCONTROLLER);