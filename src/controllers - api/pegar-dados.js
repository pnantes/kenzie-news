class Requisicoes {
    static base_url = "https://kenzie-news-api.herokuapp.com/api/news";
  
    static async pegarDados() {
      const dados = await fetch(this.base_url)
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => {
          console.log(err.message);
        });
  
      return dados;
    }
}

export default Requisicoes;
