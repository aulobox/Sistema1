
const form = document.getElementById('cadastro-form');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nome = form.nome.value;
  const email = form.email.value;
  const senha = form.senha.value;

  // Aqui você pode enviar os dados para um servidor ou armazená-los localmente.
  // Neste exemplo, apenas exibimos uma mensagem de sucesso.
  mensagem.textContent = `Usuário ${nome} cadastrado com sucesso!`;
});
