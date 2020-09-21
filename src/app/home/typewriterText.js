// Class Delcaration
class typeWriterText {
    constructor(elements, textListToRotate, period) {

        this.elements = elements;
        this.textListToRotate = textListToRotate;
        this.period = parseInt(period, 10) || 2000;
        this.loopNumber = 0;
        this.text = '';
        this.isDeleting = false;
        this.addOrRemoveText();
    }

    addOrRemoveText() {

        var i = this.loopNumber;
        var fullTxt = this.textListToRotate[i];

        if (this.isDeleting) {
            this.text = fullTxt.substring(0, this.text.length - 1);
        }

        else {
            this.text = fullTxt.substring(0, this.text.length + 1);
        }

        this.elements.innerHTML = '<span class="wrap">' + this.text + '</span>';

        var that = this;
        var delta = 180 - Math.random() * 100;

        // Delete twice as fast as typing
        if (this.isDeleting) {
            delta /= 2;
        }

        // When text has been fully typed, send to start deleting
        if (!this.isDeleting && this.text === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        }

        // When text is fully deleted, send to start typing
        else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            this.loopNumber++;
            delta = 500;
        }

        // Check so list is only iterated once
        if (this.loopNumber >= this.textListToRotate.length) {
            this.text = '👋, Im Carlos Ayala';
            this.elements.innerHTML = '<span class="wrap">' + this.text + '</span>';
        }

        else {
            setTimeout(function () {
                that.addOrRemoveText();
            }, delta);
        }
    }
}

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var textListToRotate = elements[i].getAttribute('data-to-type');
        var period = elements[i].getAttribute('data-period');
        if (textListToRotate) {
          new typeWriterText(elements[i], JSON.parse(textListToRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};