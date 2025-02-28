var newButton;

function loadiframe(i){
  document.getElementById('gameviewer').width = 1000;
  document.getElementById('gameviewer').height = 600;
  document.getElementById('gameviewer').src = gamelist[i].embed;
  document.getElementById('gameviewer').src = document.getElementById('gameviewer').src;
}

function makebuttons(){
  for (let i = 0; i < gamelist.length; i++) {
    newButton = document.createElement('button');
    newButton.textContent = "loadiframe("+i+")";//gamelist[i].title;
    newButton.onclick = "loadiframe("+i+")";
    document.body.appendChild(newButton);
  }
}
