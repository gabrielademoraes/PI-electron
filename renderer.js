// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var dropdownValue = dropdown.options[dropdown.selectedIndex].value; // cria a variavel do tipo do dropdown para pegar cada valor
var versao = document.getElementById("versaoElectron");
var opiniao = document.getElementById("opiniao");

// LOGICA
function getDropdownElement(){
  var opcao = document.getElementById("dropdown").value;
  switch(opcao){
    case "0":
      versao.style.display = 'none';
      opiniao.style.display = 'none';
       console.log(dropdownValue);
    break;
    case "1":
      versao.style.display = 'none';
      opiniao.style.display = 'block';
      console.log(dropdownValue);
    break;
    case "2":
      versao.style.display = 'block';
      opiniao.style.display = 'none';
      console.log(dropdownValue);
    break;
  }
}
