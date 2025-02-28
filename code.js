var newButton;

function loadiframe(){
  document.getElementById('gameviewer').src = gamelist[0].embed;
}

function makebuttons(){
  for (let i = 0; i < gamelist.length; i++) {
    newButton = document.createElement('button');
    newButton.textContent = gamelist[i].title;
    document.body.appendChild(newButton);
  }
}

function update(){
  document.getElementById('gameviewer').src = gamelist[1].embed;
  document.getElementById('iframeid').src = document.getElementById('iframeid').src;
  document.getElementById('tester').innerHTML = "success";
}
