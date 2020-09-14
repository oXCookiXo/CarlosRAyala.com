// function / variable declaration
var TxtType = function(elements, textListToRotate, period) {
    this.elements = elements;
    this.textListToRotate = textListToRotate;
    this.period = parseInt(period, 10) || 2000;
    this.loopNum = 0;    
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum;
    var fullTxt = this.textListToRotate[i];

    if (this.isDeleting) 
    {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } 
    else 
    {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.elements.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 180 - Math.random() * 100;

    //Delete twice as fast as type
    if (this.isDeleting) 
    { 
        delta /= 2; 
    }

    // When text has been fully typed, send to start deleting
    if (!this.isDeleting && this.txt === fullTxt) 
    {
        delta = this.period;
        this.isDeleting = true;
    }
    // When text is fully deleted, send to start typing
    else if (this.isDeleting && this.txt === '') 
    {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    // Check so list is only iterated once
    if(this.loopNum >= this.textListToRotate.length)
    {        
        this.txt = '👋, Im Carlos Ayala';
        this.elements.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    }
    else
    {
        setTimeout(function() {
            that.tick();
            }, delta);
    }    
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var textListToRotate = elements[i].getAttribute('data-to-type');
        var period = elements[i].getAttribute('data-period');
        if (textListToRotate) {
          new TxtType(elements[i], JSON.parse(textListToRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};