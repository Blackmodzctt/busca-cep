// Função principal do sistema
function buscarCep(event) {
    event.preventDefault(); // função que remove o comportamento padrão do formulário ao enviar 
    
    // acessando o valor do input para a variável cep
    const cep = document.getElementById("input-cep").value
    
    document.getElementById("resultado").innerText = "Carregando..."
    
    // função para requisitar um recurso de uma API, no nosso caso as informações do Cep que o usuário digitou
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resposta) => resposta.json()) // formatação da resposta para JSON
    .then((dados) => { // recebimento dos dados do CEP
        if(dados.erro) {
            document.getElementById("resultado").innerHTML = "<strong>CEP não encontrado.</strong>"
            return;
        } 
        
        // Inserindo no HTML os dados do CEP
        document.getElementById("resultado").innerHTML = `
        <p><strong>Rua:</strong> ${dados.logradouro}</p>
        <p><strong>Cidade:</strong> ${dados.localidade}</p>
        <p><strong>Estado:</strong> ${dados.estado}</p>
        <p><strong>Bairro:</strong> ${dados.bairro}</p>
        `
    })
    .catch((e) => { // Caso a chamada http não dê certo, o servidor retornará um erro, e vai cair nesse bloco catch
        console.log(e)
        document.getElementById("resultado").innerHTML = "<strong>Erro ao buscar CEP. Tente novamente.</strong>"
    })
}