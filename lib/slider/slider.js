(function ($) {
  $.fn.slider = function (options) {
    return this.each(function () {
      const defs = {};
      const opts = $.extend({}, defs, options);

      const slider = $(this);
      let sliderWidth = 0;
      let sliderHeight = 0;
      let sliderItems = 0;
      const sliderRoller = $('<div/>').addClass('slider-roller');
      
      const prevButton = $('<button/>').html('Prev').addClass('btn-prev');
      const nextButton = $('<button/>').html('Next').addClass('btn-next');


      const initialSlider = function () {
        sliderWidth = parseFloat(slider.css('width'));
        sliderHeight = parseFloat(slider.css('height'));
        sliderItems = slider.find('.item');
        sliderItems.css('width', sliderWidth);
        sliderRoller.html(sliderItems).css({
          width: sliderWidth * sliderItems.length,
          height: sliderHeight,
        });
        
        slider.append(sliderRoller, nextButton, prevButton);
      };
      // console.log(sliderWidth)


      initialSlider()
      

      nextButton.click(function () {
        if (!isFinishedSlide()) return;
        console.log(isAtEnd())
        if(isAtEnd()){
          console.log(this)
          this.disabled = true
        }
        else{
          // prevButton.disabled = false
          sliderRoller.css('left', '-=' + sliderWidth);
        }
        
          
      });
      prevButton.click(function () {
        if (!isFinishedSlide() ) return;
        if(isAtFirst()){
          this.disabled = true
        }
        else{
          nextButton.removeAttr('disabled')
          sliderRoller.css('left', '+=' + sliderWidth);
        }
      });

      const isFinishedSlide = function () {
        const left = parseFloat(sliderRoller.css('left'));
        // console.log(left % sliderWidth);

        return left % sliderWidth === 0;
      };
      const isAtEnd = function () {
        const left = parseFloat(sliderRoller.css('left'));

        const endPoint = -sliderWidth * (sliderItems.length - 1);

        return left === endPoint;
      };

      const isAtFirst = function () {
        const left = parseFloat(sliderRoller.css('left'));
        return left === 0;
      };

      window.onresize = function () {
        console.log('sdsd');
        initialSlider()
      };
    });
  };
})(jQuery);
