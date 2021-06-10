// CARGA DE Patrón
function ver(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
          document.getElementById("img").src = reader.result;
          const imagen=document.getElementById("img"); }}}

// CARGA IMAGEN MODELO
function ver1(){
var archivo = document.getElementById("file1").files[0];
var reader = new FileReader();
if (file) {
  reader.readAsDataURL(archivo);
  reader.onloadend = function () {
        document.getElementById("img1").src = reader.result;
        const imagen=document.getElementById("img1"); }}}          
  


