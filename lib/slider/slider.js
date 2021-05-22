(function ($) {
  $.fn.slider = function (options) {
    return this.each(function () {
      const defs = {};
      const opts = $.extend({}, defs, options);

      const slider = $(this);
      const sliderWidth = parseFloat(slider.css('width'))
      // console.log(sliderWidth)

      const sliderItems = slider.children('.item');
      sliderItems.css('width', sliderWidth)

      const sliderRoller = $('<div/>')
                            .addClass('slider-roller')
                            .html(sliderItems)
                            .css('width',sliderWidth * sliderItems.length);
      const prevButton = $('<button/>').html('Prev').addClass()
      const nextButton = $('<button/>').html('Next').addClass()

      slider.append(sliderRoller, nextButton, prevButton);

      nextButton.click(function(){
        sliderRoller.css('left', '-=' + sliderWidth)
      })
      prevButton.click(function(){
        sliderRoller.css('left', '+=' + sliderWidth)
      })
    });
  };
})(jQuery);
