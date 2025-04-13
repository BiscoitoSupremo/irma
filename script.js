function revelarImagem() {
    const cardInner = document.querySelector('.card-inner');
    const imagem = document.getElementById('imagemRevelada');

    imagem.src = '1.png';
    setTimeout(() => {
        imagem.style.opacity = 1;
    }, 300);

    cardInner.style.transform = 'rotateY(180deg)';
}
