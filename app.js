var backGround = document.getElementById("background");
var button = document.getElementById("button");

button.addEventListener('click', function() {
    var randomNum = Math.round(Math.random() * 255);
    var randomNum2 = Math.round(Math.random() * 252);
    var randomNum3 = Math.round(Math.random() * 250);
  
    backGround.style.backgroundColor = 'rgb(' + [randomNum3,randomNum2,randomNum].join(',') + ')';;
})
