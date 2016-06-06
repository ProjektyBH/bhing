function init(){window.addEventListener("scroll",function(e){var n=window.pageYOffset||document.documentElement.scrollTop,t=150,o=document.querySelector("header");n>t?classie.add(o,"smaller"):classie.has(o,"smaller")&&classie.remove(o,"smaller")})}var height=document.getElementById("getHeight").offsetHeight;document.getElementById("height").innerHTML=height+"px",window.onload=init();var cbpAnimatedHeader=function(){function e(){window.addEventListener("scroll",function(e){s||(s=!0,setTimeout(n,250))},!1)}function n(){var e=t();e>=i?classie.add(a,"header.smaller"):classie.remove(a,"header.smaller"),s=!1}function t(){return window.pageYOffset||o.scrollTop}var o=document.documentElement,a=document.querySelector("header"),s=!1,i=300;e()}();$(function(){function e(e,n){var t=new Image,o=e.getAttribute("data-src");t.onload=function(){e.parent?e.parent.replaceChild(t,e):e.src=o,n?n():null},t.src=o}function n(e){var n=e.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.top<=(window.innerHeight||document.documentElement.clientHeight)}for(var t=function(e,n){if(document.querySelectorAll)n=document.querySelectorAll(e);else{var t=document,o=t.styleSheets[0]||t.createStyleSheet();o.addRule(e,"f:b");for(var a=t.all,s=0,i=[],c=a.length;c>s;s++)a[s].currentStyle.f&&i.push(a[s]);o.removeRule(0),n=i}return n},o=function(e,n){window.addEventListener?this.addEventListener(e,n,!1):window.attachEvent?this.attachEvent("on"+e,n):this["on"+e]=n},a=new Array,s=t("img.lazy"),i=function(){for(var t=0;t<a.length;t++)n(a[t])&&e(a[t],function(){a.splice(t,t)})},c=0;c<s.length;c++)a.push(s[c]);i(),o("scroll",i)}),function(e){"use strict";function n(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function t(e,n){var t=o(e,n)?s:a;t(e,n)}var o,a,s;"classList"in document.documentElement?(o=function(e,n){return e.classList.contains(n)},a=function(e,n){e.classList.add(n)},s=function(e,n){e.classList.remove(n)}):(o=function(e,t){return n(t).test(e.className)},a=function(e,n){o(e,n)||(e.className=e.className+" "+n)},s=function(e,t){e.className=e.className.replace(n(t)," ")});var i={hasClass:o,addClass:a,removeClass:s,toggleClass:t,has:o,add:a,remove:s,toggle:t};"function"==typeof define&&define.amd?define(i):e.classie=i}(window);
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
