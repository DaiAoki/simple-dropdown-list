$("#js-selected").on({
  "mouseenter": function(e) {
    $("#js-select-list").animate({height: 'show'}, 300);
  },
  "mouseleave": function(e) {
    var bottom = $(this).offset().top + $(this).height();
    var outY   = e.pageY;
    if(outY < bottom ){
      $("#js-select-list").animate({height: 'hide'}, 300);
    }
  }
});

$("#js-select-list").on({
  "mouseleave": function(e) {
    var top  = $(this).offset().top;
    var outY = e.pageY;
    if( outY > top ){
      $("#js-select-list").animate({height: 'hide'}, 300);
    }
  }
});

$(".header__select-list-item").on({
  "click": function() {
    var text = $(this).text().trim();
    $("#js-selected").text(text);
  },
  "mouseover": function() {
    toggleColor($(this));
  },
  "mouseleave": function() {
    toggleColor($(this));
  }
});

function toggleColor(target) {
  var color = target.css("color");
  var bg_color = target.css("background-color");
  target.css("color", bg_color);
  target.css("background-color", color);
}

