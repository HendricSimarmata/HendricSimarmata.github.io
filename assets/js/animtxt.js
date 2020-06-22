$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
            Counter: $(this).data('value')
        }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {                      
            $(this).text(this.Counter.toFixed(0));
        }
    });
});