
;(function() { 


  $("#scrollToPortfolio").on('click', function(event){     
    event.preventDefault();
    var viewableOffset = $("#webPortfolio").offset().top - $(window).scrollTop();
    $('html,body').animate({scrollTop:viewableOffset}, 1000);
 });


    var link = $('link')[15];  // Main CSS is 15 according to layout file.

    $('#viewmode').on('click', function(e) {
      e.preventDefault;
      var $this = $(this), 
          stylesheet = 'stylesheets/',
          target = e.target || e.srcElement;

      if($this.data('type')==='light') { // Then make it dark
        stylesheet += 'dark';
        $this.data('type', 'dark');
        target.className = target.className.replace('moon', 'sun');
      } else {
        stylesheet += 'light';
        $this.data('type', 'light');
        target.className = target.className.replace('sun', 'moon');
      }

      link.setAttribute('href', stylesheet + '.css');

    });




  function nextChar(c) {
      return String.fromCharCode(c.charCodeAt(0) + 1);
  }
  var x = "mail" + "to" + ":";
  var y = "anto" + nextChar('m') + (24-1) + "\u0040g" + "mai" +"l\u002Eco" + nextChar('l');
  document.getElementById('emailako').href = x + y; 
  // document.getElementById('emailako').innerHTML = y;
  // console.log('mmk');
})();
