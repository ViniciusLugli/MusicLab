function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado: digite o nome de uma banda ou gênero</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let banda = "";
    let descricao = "";
    let genero = "";
    let tags = "";

    // Itera sobre cada elemento (dado) da lista de dados.
    for (let dado of dados) {
        banda = dado.banda.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        genero = dado.genero.toLowerCase();
        tags = dado.tags.toLowerCase();

        if(banda.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Constrói o HTML para cada resultado, formatando os dados da banda.
        resultados +=
        `<div class="item-resultado">
        <h2>
            <a href = ${dado.link} target = "_blank">${dado.banda}</a>
        </h2>
        <p class = "descricao-meta">${dado.descricao}</p>
        <p>Membros: ${dado.membros}</p>
        <p>Genêro : ${dado.genero}</p>
        </div>`;
        }
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui o HTML construído à seção de resultados, atualizando a página.
    section.innerHTML = resultados;
}
