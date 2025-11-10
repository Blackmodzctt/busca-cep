// FUNÇÃO PRINCIPAL DO SISTEMA

function buscaCep(event) {
    event.preventDefault(); // Impede que a página recarregue

    let cep = document.getElementById("input-cep").value // Acessando o valor que tá vindo do input

    //Colocando uma mensagem de carregamento
    document.getElementById("resultado").innerText = "Carregando..."

    //Fetch busca um link e fazemos um junção trocando o cep predefinido e colocamos a variavel cep para ser o que o usuario mudar

    fetch("https://viacep.com.br/ws/"+cep+"/json/")

    // Promessa que tranforma como queremos
    .then(resposta >= resposta.json())
    // Tranforma a resposta em resposta.json

    // Vai transformar a div na resposta
    //"dados" contém todas as informações do endereço
    
    .then(dados => {
        // Se der erro vai aparecer a mensagem de erro
        if(dados.erro) {
            document.getElementById("resultado").innerHTML = "<strong> Cep não encontrado </strong>"
        }
        // Colocando o que vai mostrar na parte "rua", digitando "dados.logradouro" como está na api
        document.getElementById("resultado").innerHTML = 
        `
        <h3>Endereço Encontrado:</h3>
        <p><strong>Cep:</strong> ${dados.cep}</p>
        <p><strong>Rua:</strong> ${dados.logradouro}</p>
        <p><strong>Bairro:</strong> ${dados.bairro}</p>
        <p><strong>Estado:</strong> ${dados.localidade}</p>`

    })

    // Caso perca a conexão com a internet ou falha na API
    .catch(() => {
        document.getElementById("resultado").innerHTML= "Erro ao buscar cep"
    })
    
}