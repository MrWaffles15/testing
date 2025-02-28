var newButton;

function loadiframe(){
  document.getElementById('gameviewer').width = 1000;
  document.getElementById('gameviewer').height = 600;
  document.getElementById('gameviewer').src = gamelist[0].embed;
  document.getElementById('gameviewer').src = document.getElementById('gameviewer').src;
}

function makebuttons(){
  for (let i = 0; i < gamelist.length; i++) {
    newButton = document.createElement('button');
    newButton.textContent = gamelist[i].title;
    newButton.onclick = loadiframe();
    document.body.appendChild(newButton);
  }
}
