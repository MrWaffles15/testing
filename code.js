function loadiframe(){
  document.getElementById('gameviewer').src = gamelist[0].embed;
}

function makebuttons(){
  const newButton = document.createElement('button');
  newButton.textContent = 'Click me!';
  document.body.appendChild(newButton);
}

function update(){
  document.getElementById('gameviewer').src = gamelist[1].embed;
  document.getElementById('iframeid').src = document.getElementById('iframeid').src;
  document.getElementById('tester').innerHTML = "success";
}
