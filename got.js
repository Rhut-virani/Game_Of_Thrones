var quotes = [
                [
                    "'When the snows fall and the white winds blow, the lone wolf dies but the pack survives.' - Ned Stark",
                    "'There is only one war that matters. The Great War. And it is here.' - Jon Snow",
                    "'Nothing's worth anything to dead men.' - Arya Stark",
                    "'You'Re Going To Die Tomorrow, Lord Bolton. Sleep Well.' - Sansa Stark",
                    "'The only time a man can be brave is when he is afraid.' - Ned Stark",
                    "'Who taught you to do that?', 'No one' - Arya Stark",
                    "‘Everything before the word ‘but’ is horse-shit.’ - Ned Stark",
                    "'Thank you for all your many lessons, lord Baelish. I will never forget them.' - Sansa Stark",
                    "'What Do We Say to the God of Death?' 'Not Today' - Arya Stark",
                    "'The man who passes the sentence should swing the sword.' — Ned Stark",
                    "'I grew up with soldiers. I learned how to die a long time ago.' — Ned Stark",
                    "'I'M A Slow Learner, It'S True. But I Learn.' - Sansa Stark",
                    "'When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey.' - Arya Stark",
                ],
                [
                    "'Lannisters aren't the only ones who pay their debts.' -Oberyn Martell",
                    "'It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters.' -Oberyn Martell",
                ],
                [" "],
                [" "],
                [" "],
                [" "],
                [" "],
                [" "],
                [
                    "'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.'</br> —Tyrion",
                    "'Any man who must say, ‘I am the king,’ is no true king. I’ll make sure you understand that when I’ve won your war for you.'- Tywin",
                    "'The things I do for love.'—Jaime",
                    "'That’s what I do: I drink and I know things.' —Tyrion"
                ],  
            ],
    firstTime = true,
    animate = 20,
    animateneg = "-=10"
    


$(document).ready( ()=>{

    // Countdown timer

    var eventTime = moment('05-05-2019 21:00:00', 'DD-MM-YYYY HH:mm:ss').unix(),
        currentTime = moment().unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, 'milliseconds'),
        interval = 1000;

    // if time to countdown
    if(diffTime > 0) {

        // Show clock


        var $d = $('.days .text'),
            $h = $('.hours .text'),
            $m = $('.minutes .text'),
            $s = $('.seconds .text'),
            s,
            zero = false;


        setInterval(function(){

            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            var d = moment.duration(duration).days(),
                h = moment.duration(duration).hours(),
                m = moment.duration(duration).minutes();
                s = moment.duration(duration).seconds();

            d = $.trim(d).length === 1 ? '0' + d : d;
            h = $.trim(h).length === 1 ? '0' + h : h;
            m = $.trim(m).length === 1 ? '0' + m : m;
            s = $.trim(s).length === 1 ? '0' + s : s;
            // show how many hours, minutes and seconds are left
            $d.text(d);
            $h.text(h);
            $m.text(m);
            $s.text(s);

        }, interval);

    }


    // Changing color and quotes animation.....

    var bgcolor = new TimelineMax({paused:true, repeat: -1})
        .to('.color', animate, {backgroundColor:"#e12812"})
        .set('.logo',{backgroundImage:'url(./static/photos/logo/martell-logo.png)'}, animateneg)
        .to('.color', animate, {backgroundColor:"#00173d"})
        .set('.logo',{backgroundImage:'url(./static/photos/logo/tully-logo.png)'}, animateneg)
        .to('.color', animate, {backgroundColor:"#ffe147"})
        .set('.logo',{backgroundImage:'url(./static/photos/logo/baratheon-logo.png)'}, animateneg)
        .to('.color', animate, {backgroundColor:"#000"})
        .set('.logo',{backgroundImage:'url(./static/photos/logo/targaryen-logo.png)'}, animateneg)
        .to('.color', animate, {backgroundColor:"#121745"})
        .set('.logo',{backgroundImage:'url(./static/photos/logo/arryn-logo.png)'}, animateneg)
        .to('.color', animate, {backgroundColor:"#000"})
        .set('.logo',{backgroundImage:'url(./static/photos/logo/greyjoy-logo.png)'}, animateneg)
        .to('.color', animate, {backgroundColor:"#050"})
        .set('.logo',{backgroundImage:'url(./static/photos/logo/tyrell-logo.png)'}, animateneg)
        .to('.color', animate, {backgroundColor:"#e12812"})
        .set('.logo',{backgroundImage:'url(./static/photos/logo/lannister-logo.png)'}, animateneg)
        .to('.color', animate, {backgroundColor:"#565656"})
        .set('.logo',{backgroundImage:'url(./static/photos/logo/stark-logo.png)'}, animateneg);


    setInterval(() => {
        (s % 20 === 0) ? zero=true: false;
        if(firstTime && zero){
            bgcolor.play();
            firstTime = false;
        }
    }, interval);   

})