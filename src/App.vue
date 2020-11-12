<template>

  <div>
    <Header :quantidadeNoCarrinho='quantidadeNoCarrinho'/>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from "./components/Header.vue";


export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      // Preciso receber carrinho de ListarFilmes
      carrinho: ['a', 'b'],
    }
  },
  computed: {
    quantidadeNoCarrinho: function(){
      return this.carrinho.length;
    },
  }
}
</script>

<style>

</style>
