<template>

  <div>
    <Header :controla_aba="controla_aba" :quantidadeNoCarrinho="quantidadeNoCarrinho"/>
  
    <b-container>

      <b-row v-show="mostrarFilmes">
        <HelloWorld msg="Filmes encontrados"/>
      </b-row>

      <b-row>
        <h3 v-if="horas >= 9 && horas < 17" id="aberta">ABERTO</h3>
        <h3 v-else-if="horas >= 17 && horas < 18" id="proxima-fechar">PRÓXIMA DE FECHAR</h3>
        <h3 v-else id="fechada">FECHADA</h3>
      </b-row>

      <b-row v-show="mostrarFilmes">
        <ListarFilmes :carrinho="carrinho"/>
      </b-row>

      <b-row v-show="!mostrarFilmes">
        <h2>Carrinho</h2>
        <b-row class="block">
          <ResumoPedido :carrinho="carrinho" />
          <DadosForm/>
        </b-row>
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
import ListarFilmes from './components/ListarFilmes.vue'
import Header from "./components/Header.vue";


export default {
  name: 'App',
  components: {
    HelloWorld,
    DadosForm,
    ResumoPedido,
    ListarFilmes,
    Header
  }, data(){
    return {
      title: "Locado de Filmes",
      horas: new Date().getHours(),
      primeiroNome: "Willian",
      segundoNome: "Nascimento",
      mostrarFilmes: true,
      carrinho: [],
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
    checarAvaliacao(){
    },
    controla_aba(valor){
      this.mostrarFilmes=valor
    },
  },
  filters: {
  },
  computed: {
    nomeCompleto: function() {
      return this.primeiroNome + ' ' + this.segundoNome;
    },
    quantidadeNoCarrinho: function(){
      return this.carrinho.length;
    },
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

.block{
  display: block;
}
</style>
