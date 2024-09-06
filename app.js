function pesquisar() {
    
    
    
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o fabricante do seu aparelho</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado seu aparelho infelizmente não está na lista</p>"
    }


    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

    
    

   }

   function pesquisar(event) {
    if (event.key === "Enter") {
        let section = document.getElementById("resultados-pesquisa");
        let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

        if (!campoPesquisa) {
            section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o fabricante do seu aparelho</p>";
            return;
        }

        let resultados = "";

        for (let dado of dados) {
            if (
                dado.titulo.toLowerCase().includes(campoPesquisa) ||
                dado.descricao.toLowerCase().includes(campoPesquisa) ||
                dado.tags.toLowerCase().includes(campoPesquisa)
            ) {
                resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href=${dado.link} target="_blank">Mais informações</a>
                    </div>
                `;
            }
        }

        section.innerHTML = resultados || "<p>Nada foi encontrado seu aparelho infelizmente não está na lista</p>";
    }
}

// Obtém o elemento de entrada
let campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona o evento keypress ao elemento de entrada
campoPesquisa.addEventListener("keypress", pesquisar);

  