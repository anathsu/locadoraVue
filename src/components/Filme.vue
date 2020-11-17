<template>
    <b-container>
        <b-row>
            <h2>Detalhe</h2>
        </b-row>
        
        <b-row class="col">
            <b-col>
                <b-img class="teste" :src="filme.imagem" fluid :alt="filme.titulo"></b-img>
            </b-col>
            <b-col>
                <h4>{{filme.titulo}}</h4>
                <p> <span>Enredo: {{filme.descricao}}</span> </p>
                <p>Valor: R${{filme.valor}},00</p>

                <p><span>Avaliação geral</span></p>
                <b-icon icon="star-fill" variant="warning" v-for="estrelas in filme.avaliacao" :key="estrelas"></b-icon>
                <b-icon icon="star" variant="warning" v-for="estrelas_vazadas in 5 - filme.avaliacao" :key="'star' + estrelas_vazadas"></b-icon>
            </b-col>
        </b-row>
        
    </b-container>
</template>

<script>
export default {
  name: 'Filme',
  data(){
      return { 
          filme : this.$route.params.filme,
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.teste{
    height: 700px;
}

</style>
