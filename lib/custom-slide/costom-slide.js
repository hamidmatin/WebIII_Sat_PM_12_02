(function ($) {
  $.fn.customSlide = function (options) {
    return this.each(function () {
      const defs = {
        duration: 600,
        direction: 'width',
      };

      const opts = $.extend({}, defs, options);

      switch (opts.direction) {
        case 'width':
          $(this).animate(
            {
              width: 'toggle',
            },
            opts.duration
          );
          break;

        case 'height':
          $(this).animate(
            {
              height: 'toggle',
            },
            opts.duration
          );
          break;
      }
    });
  };
})(jQuery);
