function update(value) {
    var stretch = ['ultra-condensed','extra-condensed','condensed','semi-condensed','normal','semi-expanded','expanded','extra-expanded  ','ultra-expanded'];
    document.getElementById("work").style.fontWeight=value*100;
    document.getElementById("work").style.fontStretch=stretch[value-1];
    document.getElementById("life").style.fontWeight=(1000-value*100);
    document.getElementById("life").style.fontStretch=stretch[9-value];
  }
  function colorChange(value){
    var slider1 = document.getElementById("colorSlider-red");
    var slider2 = document.getElementById("colorSlider-green");
    var slider3 = document.getElementById("colorSlider-blue");
    var color = "rgb(" + slider1.value +", "+ slider2.value +", "+ slider3.value + ")";
    document.getElementById("work").style.color = color;
    document.getElementById("life").style.color = color;
    document.getElementById("balance").style.color = color;
  }
   
  update();
  colorChange();
  