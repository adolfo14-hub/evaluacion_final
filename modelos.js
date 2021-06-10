
document.getElementById("bot1").addEventListener("click", (e)=>{


    var unidad = document.getElementById('file').files[0].name;
    console.log(unidad);
    var input = unidad; 
    var output = input.substr(0, input.lastIndexOf('.')) || input; 
    console.log(output);

   
    var ubi = "/Codigosqr/"+output+".patt";
    console.log(ubi);
    var a= document.cookie = "r" + "=" + ubi + "Codigosqr" + "="+"vista.htm";
    var b=document.getElementById('area').contentWindow.location.reload(true); 

});

document.getElementById("bot2").addEventListener("click", (e)=>{


    var lectura = document.getElementById('file1').files[0].name;
    console.log(lectura);
    var input = lectura; 
    var output = input.substr(0, input.lastIndexOf('.')) || input; 
    console.log(output);

    var variante ="'url(Modelos/"+output+"/"+output+".gltf)'";
    console.log(variante);

  
    var top= document.cookie = "n" + "=" + variante + "Codigosqr" + "="+"vista.htm";
    console.log(top);

    
    var molde = top.substr(0, top.lastIndexOf('Codigosqr')) || top; 
    var ent=molde.split('=').pop();
    console.log(ent);
    var b=document.getElementById('area').contentWindow.location.reload(true);
});