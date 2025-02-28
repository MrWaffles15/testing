var newButton;

function loadiframe(b){
  document.getElementById('gameviewer').src = gamelist[b].embed;
}

function makebuttons(){
  for (let i = 0; i < gamelist.length; i++) {
    newButton = document.createElement('button');
    newButton.textContent = gamelist[i].title;
    newButton.onClick = "loadiframe(i)";
    document.body.appendChild(newButton);
  }
}

function update(){
  document.getElementById('gameviewer').src = gamelist[1].embed;
  document.getElementById('iframeid').src = document.getElementById('iframeid').src;
  document.getElementById('tester').innerHTML = "success";
}
