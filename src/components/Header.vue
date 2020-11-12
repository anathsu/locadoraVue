<template>
  <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#" @click="controla_aba(true)">Home</b-nav-item>
        <b-nav-item href="#" @click="controla_aba(false)">Carrinho: {{quantidadeNoCarrinho}} filmes</b-nav-item>
      
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  props: [ 'controla_aba', 'quantidadeNoCarrinho' ],
  methods:{
  },
  computed:{
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>