// Seleciona os elementos da página
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

let count = 0;

// Adiciona o evento de clique
likeBtn.addEventListener('click', () => {
    count++;
    likeCount.textContent = count;
    
    // Um efeito visual rápido no clique
    likeBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        likeBtn.style.transform = 'none';
    }, 100);
});