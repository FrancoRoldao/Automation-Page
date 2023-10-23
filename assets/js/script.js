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

//alert personalizado ao enviar formulário:

