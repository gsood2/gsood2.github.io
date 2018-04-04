var animateHTML = function () {
  var elems,
    windowHeight;
  var init = function () {
    elems = document.getElementsByClassName('hidden')
    windowHeight = window.innerHeight;
    _addEventHandlers();
  };
  var _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition)
    window.addEventListener('resize', init)
  };
  var _checkPosition = function () {
    
      for (var i = 0; i < elems.length; i++) {
        console.log('eleme',elems[i].className);
        console.log('i:-',i,'lenght:-',elems.length);
        var posFromTop = elems[i].getBoundingClientRect().top;
        if (posFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace('hidden', 'fade-in-element');
        }
      }
  }
  return {
    init: init
  }
}
animateHTML().init()


// Loader js
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.body.style.backgroundColor = "white";
}

// end Loader js

function VisibilityMonitor(element, showfn, hidefn) {
  var isshown= false;
  function check() {
      if (rectsIntersect(getPageRect(), getElementRect(element)) !== isshown) {
          isshown= !isshown;
          isshown? showfn() : hidefn();
      }
  };
  window.onscroll=window.onresize= check;
  check();
}

function getPageRect() {
  var isquirks= document.compatMode!=='BackCompat';
  var page= isquirks? document.documentElement : document.body;
  var x= page.scrollLeft;
  var y= page.scrollTop;
  var w= 'innerWidth' in window? window.innerWidth : page.clientWidth;
  var h= 'innerHeight' in window? window.innerHeight : page.clientHeight;
  return [x, y, x+w, y+h];
}

function getElementRect(element) {
  var x= 0, y= 0;
  var w= element.offsetWidth, h= element.offsetHeight;
  while (element.offsetParent!==null) {
      x+= element.offsetLeft;
      y+= element.offsetTop;
      element= element.offsetParent;
  }
  return [x, y, x+w, y+h];
}

function rectsIntersect(a, b) {
  return a[0]<b[2] && a[2]>b[0] && a[1]<b[3] && a[3]>b[1];
}

VisibilityMonitor(
  document.getElementById('importantdiv'),
  function() {
      alert('div in view!');
  },
  function() {
      alert('div gone away!');
  }
);