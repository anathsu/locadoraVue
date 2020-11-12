<template>
  <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item>Carrinho: {{quantidadeNoCarrinho}} filmes</b-nav-item>
        <b-nav-item><router-link to="/form">Formulário</router-link></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  props: [ 'quantidadeNoCarrinho' ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>