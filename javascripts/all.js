$(".scrollToPortfolio").click(function(event){     
    event.preventDefault();
    var viewableOffset = $("#portfolio").offset().top - $(window).scrollTop();
    $('html,body').animate({scrollTop:viewableOffset}, 500);
 });


;(function() { 
  function nextChar(c) {
      return String.fromCharCode(c.charCodeAt(0) + 1);
  }
  var x = "mail" + "to" + ":";
  var y = "anto" + nextChar('m') + (24-1) + "\u0040g" + "mai" +"l\u002Eco" + nextChar('l');
  document.getElementById('emailako').href = x + y; 
  // document.getElementById('emailako').innerHTML = y;
})();
