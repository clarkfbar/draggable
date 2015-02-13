(function(){
  jQuery.fn.extend({
    draggable: function(){
      var $this = $(this);

      $this.css({position: "relative"});

      $(this).on("mousedown", function(){
        $(document).on("mousemove", function(e){
          e.preventDefault();
          var mouseX = e.pageX || e.offsetX ;
          var mouseY = e.pageY || e.offsetY;

          var $target = null;
          var $temp = $this.parent();
          while(!$temp.is("html")) {
            var position = $temp.css("position");
            if(position == "relative" || position == "absolute") {
              $target = $temp;
              break;
            } else {
              $temp = $temp.parent();
            }
          }

          if(!$target) {
            $target = $("body");
          }

          var top = mouseY - $target.offset().top - $this.height()/2,
          left = mouseX - $target.offset().left - $this.width()/2;

          $this.css("top", top);
          $this.css("left", left);
        });


        $(document).on("mouseup", function(){
          $(document).off("mousemove");
        });
      });
    }
  });  
})(jQuery);