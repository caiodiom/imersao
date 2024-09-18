function pesquisar(termo) {
    const section = document.getElementById("resultados-pesquisa");
    
  
    // Verifica se o termo de pesquisa está vazio
    if (!termo.trim()) {
      section.innerHTML = "<p>Por favor, digite o fabricante do deu celular.</p>";
      return;
    }
  
    // Filtra os dados com base no termo de pesquisa
    const resultados = dados.filter(dado =>
      dado.titulo.toLowerCase().includes(termo.toLowerCase()) ||
      dado.descricao.toLowerCase().includes(termo.toLowerCase()) ||
      dado.tags.toLowerCase().includes(termo.toLowerCase())
    );
  
    // Renderiza os resultados
    section.innerHTML = resultados.length > 0 ?
      resultados.map(dado => `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `).join('') :
      "<p>Nenhum resultado encontrado para \"" + termo + "\". Tente outra palavra-chave.</p>";
  }
  
  // Obtém os elementos HTML
  const campoPesquisa = document.getElementById("campo-pesquisa");
  const botaoPesquisar = document.getElementById("botao-pesquisar");
  
  // Adiciona um event listener para o campo de pesquisa, ouvindo o evento "keypress"
  campoPesquisa.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      pesquisar(campoPesquisa.value);
    }
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  });
  
  // Adiciona um event listener para o botão, chamando a mesma função pesquisar
  botaoPesquisar.addEventListener("click", () => {
    pesquisar(campoPesquisa.value);
  });
  
  botaoPesquisar.addEventListener("click", () => {
    pesquisar(campoPesquisa.value);
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
});

