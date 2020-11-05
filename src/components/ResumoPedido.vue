<template>
    <b-row>
        <b-row>
            <h2>Resumo do Carrinho</h2>
            <b-table block fixed striped hover small head-variant="dark" :items="carrinho" :fields="campos"></b-table>
        </b-row>
        <b-row><p>Soma total do pedido: R$ {{somaPedido}},00</p></b-row>
    </b-row>
</template>

<script>
export default {
  name: 'ResumoPedido',
  props: {
    carrinho: Array,
  },
  data(){
      return{
          campos: ['titulo', 'preço', 'quantidade'],
      };
  },
  computed:{
      somaPedido: function(){
      return this.carrinho.reduce(function (accumulator, filme){
        return accumulator + (filme.valor * filme.quantidade);
      }, 0)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
