/**
 * Created by Pradeep on 5/8/14.
 */
$(document).ready(function () {
    var i = 0;
    var togg = function () {
        var text = '';
        switch (i++ % 4) {

            case 1:
                text = 'I am a Director';
//                $('.intro').text('I am a Director');
                break;
            case 2:
                text = 'I am an actor';
//                $('.intro').text('I am an Actor');
                break;
            case 3:
                text = 'I am a singer';
//                $('.intro').text('I am a Singer');
                break;
            case 0:
                text = 'I am a Developer';
//                $('.intro').text('I am a Developer');
                break;
        }
        var intro=$('span.intro');
        intro.hide();
        intro.text(text);
        intro.fadeIn(1000);

    };


    setInterval(togg, 3000);
    togg();


});
