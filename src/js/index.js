const chaveDaApi = "b938e96f23e347bba5745513232612";

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    const dados = await buscarDadosDaCidade(cidade);

    preencherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;
    
    const resposta = await fetch(apiUrl);

    const dados = resposta.jason();

    return dados;
}

function preencherDadosNaTela(dados, cidade) {
    document.getElementById("cidade").textContent = cidade;
}