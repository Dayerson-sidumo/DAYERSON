
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'yellow';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});

// Adicionando um efeito de clique nos projetos
document.querySelectorAll('.projeto').forEach(projeto => {
    projeto.addEventListener('click', () => {
        alert('Você clicou em um projeto!');
    });
});
