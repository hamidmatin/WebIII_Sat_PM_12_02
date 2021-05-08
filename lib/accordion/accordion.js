(function ($) {
  $.fn.accordion = function (options) {
    return this.each(function () {
      const defs = { duration: 300, type: 'single' };
      const opts = $.extend({}, defs, options);

      const accordion = $(this);
      const titles = accordion.children('.title');
      const contents = accordion.children('.content');

      if (opts.type === 'single') {
        contents.not(':first').hide();
        titles.click(function () {
          const nextContent = $(this).next();

          if (nextContent.is(':visible')) {
            return;
          }

          contents.slideUp(opts.duration);
          nextContent.slideDown(opts.duration);
        });
      }else if(opts.type === 'multi'){
        titles.click(function(){
          $(this).next().slideToggle(opts.duration)
        })
      }
    });
  };
})(jQuery);
