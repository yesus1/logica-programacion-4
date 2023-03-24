let enviar=document.getElementById("enviar")
enviar.addEventListener("click", function(e) {
  e.preventDefault();
  let numero = document.getElementById('numero').value;
  let numero1 = 0;
  let numero2 = 1;
  let resultado = 1;

  if (numero !== ''){
  if (!isNaN(numero)){
    for (let i = 0;i<numero;i++){
      resultado = numero1 + numero2;
      numero1 = numero2;
      numero2 = resultado;
      console.log(resultado);
    }
    
  }else{
    alert('Error el dato no es numero, por favor intentalo nuevamente');
  }
}else{
  alert('ingresa datos');
}
});