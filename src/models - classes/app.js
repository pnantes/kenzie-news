import Requisicoes from "../controllers - api/pegar-dados.js";

class Noticias {
    constructor(titulo, imagem, resumo, noticia_completa, categoria, fonte) {
      this.titulo = titulo;
      this.imagem = imagem;
      this.resumo = resumo;
      this.noticia_completa = noticia_completa;
      this.categoria = categoria;
      this.fonte = fonte;
    }
  
    cardNoticia() {     
  
      const li = document.createElement("li");
  
      const imagem = document.createElement("img");
      const categoria = document.createElement("p");
      const titulo = document.createElement("h3");
      const resumo = document.createElement("p");
      const fonte = document.createElement("p");
  
      imagem.src = this.imagem;
      categoria.innerText = this.categoria;
      titulo.innerText = this.titulo;
      resumo.innerText = this.resumo;
      fonte.innerText = this.fonte;
  
      li.append(imagem, categoria, titulo, resumo, fonte);

      return li;
    }
  }


  class TelaInicial {
    static async listarNoticias() {
    
      const ulNoticias = document.createElement("ul");
      const pageNews = document.getElementById("pageNews");

      ulNoticias.classList.add("listaNoticias");
      pageNews.append(ulNoticias);

      const arrNoticias = await Requisicoes.pegarDados();

      arrNoticias.forEach(noticia => {
        const novaNoticia = new Noticias(noticia.titulo, noticia.imagem, noticia.resumo, noticia.noticia_completa, noticia.categoria, noticia.fonte);

        const novoCard = novaNoticia.cardNoticia();

        ulNoticias.append(novoCard);
      });
    }
  }

  TelaInicial.listarNoticias();
