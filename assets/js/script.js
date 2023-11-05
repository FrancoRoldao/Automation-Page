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
        var mensagem = "Você marcou: " + opcoesSelecionadas;
        alert(mensagem);
    } else {
        alert("Nenhuma opção marcada!");
    }
}

// função para informar data selecionada no input date - inputs treinamento.

function informarDataSelecionada(){

    let dataSelecionada = document.getElementById("inputData").value;


    if(dataSelecionada === ""){

        alert("Nenhuma data selecionada!");
    }else{
        alert("Data selecionada -> " + dataSelecionada);
    }
}










