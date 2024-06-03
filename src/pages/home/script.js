document.addEventListener('DOMContentLoaded', (event) => {
  const sliders = document.querySelectorAll('.slider');
  const btnPrev = document.getElementById('prev-button');
  const btnNext = document.getElementById('next-button');

  let currentSlide = 0;

  // Função para esconder todos os slides
  function hideSlider() {
      sliders.forEach(slide => slide.style.opacity = '0');
  }

  // Função para mostrar o slide atual
  function showSlider() {
      sliders[currentSlide].style.opacity = '1';
  }

  // Inicializa o carrossel mostrando o primeiro slide
  showSlider();

  function nextSlider() {
      hideSlider();
      if (currentSlide === sliders.length - 1) {
          currentSlide = 0;
      } else {
          currentSlide++;
      }
      showSlider();
  }

  function prevSlider() {
      hideSlider();
      if (currentSlide === 0) {
          currentSlide = sliders.length - 1;
      } else {
          currentSlide--;
      }
      showSlider();
  }

  if (btnNext && btnPrev) {
      btnNext.addEventListener('click', nextSlider);
      btnPrev.addEventListener('click', prevSlider);
  }

  document.getElementById('btnFiltro').addEventListener('click', function() {
      window.location.href = 'https://ciclovivo.com.br/inovacao/tecnologia/tela-perfurada-a-laser-filtra-microplasticos-de-aguas-residuais/';
  });

  document.getElementById('btnSaibaMais').addEventListener('click', function() {
      window.location.href = 'https://www.marinha.mil.br/combate-ao-lixo-no-mar';
  });

  // Manipulando arrays (DOM)
  const inputUsuario = document.querySelector('#inputUsuario');
  const btnComentar = document.querySelector('#btnComentar');
  const listaComentario = document.querySelector('#listaComentarios');

  const comentarios = [
      {
          comentário: "Muito legal o projeto!"
      },
      {
          comentário: "Bacana!"
      }
  ];

  btnComentar.addEventListener('click', function(info) {
      info.preventDefault();
      criarComentario();
  });

  function criarComentario() {
      const novoComentario = {
          comentário: inputUsuario.value
      };

      comentarios.unshift(novoComentario);
      renderizarNaTela();
  }

  function renderizarNaTela() {
      listaComentario.innerHTML = "";

      comentarios.forEach(
          coment => {
              let comentarioNovo = document.createElement('li');
              comentarioNovo.innerHTML = `<p>${coment.comentário}</p><br>`;
              listaComentario.append(comentarioNovo);
          }
      );
  }

  window.onload = renderizarNaTela();

  document.getElementById('BtnUser').addEventListener('click', function() {
      document.getElementById('LoginContainer').style.display = 'block';
  });

  document.getElementById('Btncancelar').addEventListener('click', function() {
      document.getElementById('LoginContainer').style.display = 'none';
  });

  document.getElementById('FormLogin').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Cadastro realizado!');
      document.getElementById('LoginContainer').style.display = 'none';
  });

  
  document.getElementById('Contato').addEventListener('click', function(){
    document.getElementById('Rodape').scrollIntoView({behavior: 'smooth'});
  });

});