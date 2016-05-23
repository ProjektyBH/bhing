var height = document.getElementById("getHeight").offsetHeight;
document.getElementById("height").innerHTML = height + "px";

if ( $(window).width() > 788) {
  function init() {
     window.addEventListener('scroll', function(e){
       var distanceY = window.pageYOffset || document.documentElement.scrollTop,
         shrinkOn = 150,
         header = document.querySelector("header");
           if (distanceY > shrinkOn) {
             classie.add(header,"smaller");
           } else {
             if (classie.has(header,"smaller")) {
                 classie.remove(header,"smaller");
                 }
             }
         });
     }
     window.onload = init();
     var cbpAnimatedHeader=(function(){var b=document.documentElement,g=document.querySelector("header"),e=false,a=300;function f(){window.addEventListener("scroll",function(h){if(!e){e=true;setTimeout(d,250)}},false)}function d(){var h=c();if(h>=a){classie.add(g,"header.smaller")}else{classie.remove(g,"header.smaller")}e=false}function c(){return window.pageYOffset||b.scrollTop}f()})();
   }
   else {
     window.onclick = function(event) {
       if (!event.target.matches('.dropbtn')) {

         var dropdowns = document.getElementsByClassName("dropdown-content");
         var i;
         for (i = 0; i < dropdowns.length; i++) {
           var openDropdown = dropdowns[i];
           if (openDropdown.classList.contains('show')) {
             openDropdown.classList.remove('show');
           }
         }
       }
     }
   }



     $(function() {
  	  var $q = function(q, res){
  	        if (document.querySelectorAll) {
  	          res = document.querySelectorAll(q);
  	        } else {
  	          var d=document
  	            , a=d.styleSheets[0] || d.createStyleSheet();
  	          a.addRule(q,'f:b');
  	          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
  	            l[b].currentStyle.f && c.push(l[b]);

  	          a.removeRule(0);
  	          res = c;
  	        }
  	        return res;
  	      }
  	    , addEventListener = function(evt, fn){
  	        window.addEventListener
  	          ? this.addEventListener(evt, fn, false)
  	          : (window.attachEvent)
  	            ? this.attachEvent('on' + evt, fn)
  	            : this['on' + evt] = fn;
  	      }
  	    , _has = function(obj, key) {
  	        return Object.prototype.hasOwnProperty.call(obj, key);
  	      }
  	    ;

  	  function loadImage (el, fn) {
  	    var img = new Image()
  	      , src = el.getAttribute('data-src');
  	    img.onload = function() {
  	      if (!! el.parent)
  	        el.parent.replaceChild(img, el)
  	      else
  	        el.src = src;

  	      fn? fn() : null;
  	    }
  	    img.src = src;
  	  }

  	  function elementInViewport(el) {
  	    var rect = el.getBoundingClientRect()

  	    return (
  	       rect.top    >= 0
  	    && rect.left   >= 0
  	    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  	    )
  	  }

  	    var images = new Array()
  	      , query = $q('img.lazy')
  	      , processScroll = function(){
  	          for (var i = 0; i < images.length; i++) {
  	            if (elementInViewport(images[i])) {
  	              loadImage(images[i], function () {
  	                images.splice(i, i);
  	              });
  	            }
  	          };
  	        }
  	      ;
  	    // Array.prototype.slice.call is not callable under our lovely IE8
  	    for (var i = 0; i < query.length; i++) {
  	      images.push(query[i]);
  	    };

  	    processScroll();
  	    addEventListener('scroll',processScroll);

  	  });

      /* When the user clicks on the button,
      toggle between hiding and showing the dropdown content */
      function myFunction() {
          document.getElementById("myDropdown").classList.toggle("show");
      }

      $(function(){
        $("#dropbtn").click(function(){
           $("iframe").css("z-index", "-1");
        });
      });
