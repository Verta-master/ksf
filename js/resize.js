var $el=$("#very-specific-design"),elHeight=$el.outerHeight(),elWidth=$el.outerWidth(),$wrapper=$("#scaleable-wrapper");function doResize(e,i){var r;r=Math.min(i.size.width/elWidth,i.size.height/elHeight),$el.css({transform:"translate(-50%, -50%) scale("+r+")"})}$wrapper.resizable({resize:doResize});var starterData={size:{width:$wrapper.width(),height:$wrapper.height()}};doResize(null,starterData);