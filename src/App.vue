<template>
  <!-- <div id="app">
    <h2>{{ msg }}</h2>
    <HelloWorld msg="Bem vindo a locadora de Filmes!"/>

    <div class="horas">
      <p>{{dia()}}</p>
    </div>

  </div> -->

  <div>

  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#" @click="mostrarFilmes = true">Home</b-nav-item>
      <b-nav-item href="#" @click="mostrarFilmes = false">Carrinho: {{quantidadeNoCarrinho}} filmes</b-nav-item>
    
    </b-navbar-nav>
  </b-navbar>
  
  <b-container>

  
    <!-- <div class="usuarioLogado">
      Olá {{nomeCompleto}} | Carrinho: {{quantidadeNoCarrinho}} filmes
    </div> -->

    <b-row v-show="mostrarFilmes">
      <HelloWorld msg="Filmes encontrados"/>
    </b-row>

    <!-- <b-row>
      <p>{{dia()}}</p>
    </b-row> -->

    <b-row>
      <h3 v-if="horas >= 9 && horas < 17" id="aberta">ABERTO</h3>
      <h3 v-else-if="horas >= 17 && horas < 18" id="proxima-fechar">PRÓXIMA DE FECHAR</h3>
      <h3 v-else id="fechada">FECHADA</h3>
    </b-row>

    <b-row>
      <div class="cards" v-show="mostrarFilmes">
        <b-card v-bind:key="filme.id" v-for="filme in filmesOrdenados"
          :title="filme.titulo | maiuscula()"
          :img-src="filme.imagem"
          :img-alt="filme.descricao"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 unitCard"
        >
          <b-card-text>
            {{filme.descricao | maiuscula()}}
          </b-card-text>

          <b-card-text>
              <b-icon icon="star-fill" variant="warning" v-for="estrelas in filme.avaliacao" :key="estrelas"></b-icon>
              <b-icon icon="star" variant="warning" v-for="estrelas_vazadas in 5 - filme.avaliacao" :key="'star'+estrelas_vazadas"></b-icon>
          </b-card-text>


          <b-button v-if="filme.estoqueDisponivel > 1" class="btn" @click="adicionarAoCarrinho(filme)" href="#" block variant="dark">Alugar por {{filme.valor | formatarPreco("R$")}}</b-button>
          <b-button v-else-if="filme.estoqueDisponivel == 1" class="btn" @click="adicionarAoCarrinho(filme)" href="#" block variant="warning">Última unidade por {{filme.valor | formatarPreco("R$")}}</b-button>
          <b-button v-else class="btn" @click="adicionarAoCarrinho(filme)" href="#" block variant="danger" disabled>ESGOTADO</b-button>
          
        </b-card>
      </div>
    </b-row>

    <b-row v-show="!mostrarFilmes">
      <h2>Carrinho</h2>
      <ResumoPedido :carrinho="carrinho" />
      <DadosForm/>
    </b-row>


  </b-container>
  </div>


</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import HelloWorld from './components/HelloWorld.vue'
import DadosForm from './components/DadosForm.vue'
import ResumoPedido from './components/ResumoPedido.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    DadosForm,
    ResumoPedido
  }, data(){
    return {
      title: "Locado de Filmes",
      horas: new Date().getHours(),
      primeiroNome: "Willian",
      segundoNome: "Nascimento",
      mostrarFilmes: true,
      carrinho: [],
      filmes: [
        { id: 1, estoqueDisponivel: 2, titulo: "Homem de Ferro", descricao: "Onde nasce o herói", valor: 25, avaliacao: 5, imagem: "https://i.imgur.com/OA8pDFM.jpeg" },
        { id: 2, estoqueDisponivel: 4, titulo: "Pantera Negra", descricao: "Um filme de panteras", valor: 35, avaliacao: 5, imagem: "https://i.imgur.com/JOSEGKf.jpeg" },
        { id: 3, estoqueDisponivel: 3, titulo: "Homem-Formiga", descricao: "Um filme de formigas", valor: 20, avaliacao: 2, imagem: "https://i.imgur.com/zdi4zcy.jpeg" },
        { id: 4, estoqueDisponivel: 9, titulo: "Capitã Marvel", descricao: "Um filme de capitãs", valor: 40, avaliacao: 3, imagem: "https://i.imgur.com/39aIfzI.jpeg" },
        { id: 5, estoqueDisponivel: 5, titulo: "Hulk", descricao: "Um filme de força", valor: 10, avaliacao: 1, imagem: "https://i.imgur.com/0uthCmp.jpeg" },
        { id: 6, estoqueDisponivel: 4, titulo: "Homem Aranha - Longe de Casa", descricao: "Um filme de aranhas voadoras", valor: 11, avaliacao: 4, imagem: "https://i.imgur.com/H1cRygg.jpeg" }
      ],
    }
  },
  methods:{
    dia(){
      if(this.horas < 12){
        return "Está de dia";
      }else if(this.horas >=12 && this.horas < 18){
        return "Está de tarde";
      }else if(this.horas > 18){
        return "Está de noite";
      }
    },
    adicionarAoCarrinho: function(filme){
      if(filme.estoqueDisponivel > 0){
        let indexFilme = this.carrinho.findIndex((obj) => obj.id == filme.id);
        filme.quantidade = (filme.quantidade || 0) + 1

        if(indexFilme == -1){
          filme.preço = `R$ ${filme.valor},00`;
          this.carrinho.push(filme)
        }else{
          this.carrinho.splice(indexFilme, 1, filme);
        }
        filme.estoqueDisponivel -= 1;
      }

    },
    checarAvaliacao(){

    }
  },
  filters: {
    formatarPreco: function(preco, simbolo) {
      if(!parseInt(preco)) {
        return "";
      }
      var precoFormatado = (preco.toFixed(2)).replace('.', ',');
      return simbolo + " " + precoFormatado;
    },
    maiuscula: function(string){
      return string.toUpperCase();
    }
  },
  computed: {
    nomeCompleto: function() {
      return this.primeiroNome + ' ' + this.segundoNome;
    },
    quantidadeNoCarrinho: function(){
      return this.carrinho.length;
    },
    filmesOrdenados() {
      return [...this.filmes].sort((a,b) => {
        return (b.id < a.id) ? -1 : (b.id > a.id) ? 1 :0;
      });
    }
  }
}
</script>

<style>

.row{
  justify-content: center;
}

.cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}

.unitCard:hover{
  border: rgb(11, 212, 135) 2px solid;
}
.btn:hover{
  background-color: rgb(16, 90, 226);

}

.usuarioLogado{
  text-align: right;
}

#aberta {
  color: rgb(11, 212, 135);
}
 
#proxima-fechar {
  color: orange;
}
 
#fechada {
  color: red;
}



/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
