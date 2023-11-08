function esconderImagem(img) {
    img.style.display = 'none';
    const galleryText = img.nextElementSibling;
    galleryText.style.display = 'block';
  
}

function exibirImagem(text) {
    text.style.display = 'none';
    const galleryImg = text.previousElementSibling;
    galleryImg.style.display = 'block';
    galleryText.style.display = 'none';
}

//alert ao enviar form do 'inputsTreinamento' com radio button marcado ou nenhuma opção marcada:

function informarOpcoesSelecionadas(tipoInput) {
   
  let input = "";
  
  if(tipoInput === "checkbox"){
    input = document.getElementsByName("inputCheckbox");
  } else{
    input = document.getElementsByName("inputRadio1");
  }
    let opcoesSelecionadas = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            opcoesSelecionadas.push(input[i].value);
        }
    }

    if (opcoesSelecionadas.length > 0) {
        var mensagem = "Você marcou → " + opcoesSelecionadas;
        alert(mensagem);
    } else {
        alert("Nenhuma opção marcada!");
    }
}

// função para informar data ou hora selecionada no input date - inputs treinamento, ao acionar botão "enviar".

function informarDataOuHoraSelecionada(dataOuHora){

    let dataOuHoraSelecionada = "";
    if(dataOuHora === "data"){

        dataOuHoraSelecionada = document.getElementById("inputData").value;
    } else{
        dataOuHoraSelecionada = document.getElementById("inputTime").value;
    }


    if(dataOuHoraSelecionada === ""){

        alert(`Nenhuma ${dataOuHora} selecionada!`);
    }else{
        alert(`${dataOuHora} selecionada → ${dataOuHoraSelecionada}`);
    }
}
// informar número selecionado:

function informarNumeroSelecionado(){
     
    let numeroSelecionado = document.getElementsByName("inputNumber")[0];
    let numeroSelecionadoComoNumber = numeroSelecionado.valueAsNumber;

   if(isNaN(numeroSelecionadoComoNumber)){

    alert("Nenhum número selecionado!");

   } else{
    alert("Você selecionou o número → " + numeroSelecionadoComoNumber);
    
   }
}

function informarArquivoEscolhido(){

    let arquivoEscolhido  = document.getElementById("inputFile").value;
    let arquivoTratado   = arquivoEscolhido.split("\\");

    if(arquivoEscolhido === ""){

        alert("Nenhum arquivo inserido!")
    } else {
        alert("Arquivo inserido → " + arquivoTratado[2]);
    }
   }

   function validarCamposFormularioDeContato(){

    let campoNome = document.getElementById("nome").value;
    let campoSobrenome = document.getElementById("sobrenome").value;
    let campoEmail = document.getElementById("email").value;
    let campoMensagem = document.getElementById("mensagem").value;

    if(campoNome === "" || campoSobrenome === "" || campoEmail === "" || campoMensagem === ""){

        alert("Formulário NÃO enviado, todos os campos são obrigatórios.");
    } else {

        alert("Formulário enviado.");
    }
}










