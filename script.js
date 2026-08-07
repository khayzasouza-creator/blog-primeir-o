// Selecionando os elementos do HTML
const likeBtn = document.getElementById('likeBtn');
const likeCountElement = document.getElementById('likeCount');
const btnText = document.getElementById('btnText');

// Variáveis de controle de estado
let count = 0;
let isLiked = false;

// Função executada ao clicar no botão
likeBtn.addEventListener('click', () => {
  if (!isLiked) {
    // Ação: Curtir
    count++;
    isLiked = true;
    likeBtn.classList.add('liked');
    btnText.textContent = 'Curtido';
  } else {
    // Ação: Descurtir
    count--;
    isLiked = false;
    likeBtn.classList.remove('liked');
    btnText.textContent = 'Curtir';
  }

  // Atualiza o valor na tela
  likeCountElement.textContent = count;
});