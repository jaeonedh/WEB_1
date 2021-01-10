var links = {
  setColor: function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i+1;
    }
  }
}
var body = {
  setColor: function(color){
    document.querySelector('#Darkmode').style.color = color;
  },
  setBackgroundColor: function(color){
    document.querySelector('#Darkmode').style.backgroundColor = color;
  }
}
var button = {
  setColor: function(color){
    document.querySelector('#DarkmodeButton').style.color = color;
  },
  setBackgroundColor: function(color){
    document.querySelector('#DarkmodeButton').style.backgroundColor = color;
  }
}

function DarkModeHandler(self){
var target = document.querySelector('#Darkmode');
var target2 = document.querySelector('#DarkmodeButton');

if(self.value === 'Dark Mode'){
body.setBackgroundColor('Black');
body.setColor('white');
button.setBackgroundColor('white');
button.setColor('black');
self.value = 'Nomal Mode';
links.setColor('white');

} else {
body.setBackgroundColor('white');
body.setColor('black');
button.setBackgroundColor('black');
button.setColor('white');
self.value = 'Dark Mode';
links.setColor('black');
}
}
