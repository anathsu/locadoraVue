<template>
  <div class="cards">
    <b-card
      v-bind:key="filme.id"
      v-for="filme in filmesOrdenados"
      :title="filme.titulo | maiuscula()"
      :img-src="filme.imagem"
      :img-alt="filme.descricao"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 unitCard"
    >
      <b-card-text>
        {{ filme.descricao | maiuscula() }}
      </b-card-text>

      <b-card-text>
        <b-icon
          icon="star-fill"
          variant="warning"
          v-for="estrelas in filme.avaliacao"
          :key="estrelas"
        ></b-icon>
        <b-icon
          icon="star"
          variant="warning"
          v-for="estrelas_vazadas in 5 - filme.avaliacao"
          :key="'star' + estrelas_vazadas"
        ></b-icon>
      </b-card-text>

      <b-button
        v-if="filme.estoqueDisponivel > 1"
        class="btn"
        @click="adicionarAoCarrinho(filme)"
        href="#"
        block
        variant="dark"
        >Alugar por {{ filme.valor | formatarPreco("R$") }}</b-button
      >
      <b-button
        v-else-if="filme.estoqueDisponivel == 1"
        class="btn"
        @click="adicionarAoCarrinho(filme)"
        href="#"
        block
        variant="warning"
        >Última unidade por {{ filme.valor | formatarPreco("R$") }}</b-button
      >
      <b-button
        v-else
        class="btn"
        @click="adicionarAoCarrinho(filme)"
        href="#"
        block
        variant="danger"
        disabled
        >ESGOTADO</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ListarFilmes",
  data() {
    return {
      filmes: [
        { id: 1, estoqueDisponivel: 2, titulo: "Homem de Ferro", descricao: "Onde nasce o herói", valor: 25, avaliacao: 5, imagem: "https://i.imgur.com/OA8pDFM.jpeg" },
        { id: 2, estoqueDisponivel: 4, titulo: "Pantera Negra", descricao: "Um filme de panteras", valor: 35, avaliacao: 5, imagem: "https://i.imgur.com/JOSEGKf.jpeg" },
        { id: 3, estoqueDisponivel: 3, titulo: "Homem-Formiga", descricao: "Um filme de formigas", valor: 20, avaliacao: 2, imagem: "https://i.imgur.com/zdi4zcy.jpeg" },
        { id: 4, estoqueDisponivel: 9, titulo: "Capitã Marvel", descricao: "Um filme de capitãs", valor: 40, avaliacao: 3, imagem: "https://i.imgur.com/39aIfzI.jpeg" },
        { id: 5, estoqueDisponivel: 5, titulo: "Hulk", descricao: "Um filme de força", valor: 10, avaliacao: 1, imagem: "https://i.imgur.com/0uthCmp.jpeg" },
        { id: 6, estoqueDisponivel: 4, titulo: "Homem Aranha - Longe de Casa", descricao: "Um filme de aranhas voadoras", valor: 11, avaliacao: 4, imagem: "https://i.imgur.com/H1cRygg.jpeg" }
        ],
    };
  },
  props: {
    carrinho: Array,
  },
  methods: {
    adicionarAoCarrinho: function (filme) {
      let carrinho_local = this.carrinho;
      if (filme.estoqueDisponivel > 0) {
        let indexFilme = carrinho_local.findIndex((obj) => obj.id == filme.id);
        filme.quantidade = (filme.quantidade || 0) + 1;

        if (indexFilme == -1) {
          filme.preço = `R$ ${filme.valor},00`;
          carrinho_local.push(filme);
          this.$emit("update:carrinho", carrinho_local);
        } else {
          carrinho_local.splice(indexFilme, 1, filme);
          this.$emit("update:carrinho", carrinho_local);
        }
        filme.estoqueDisponivel -= 1;
      }
    },
  },
  filters: {
    maiuscula: function (string) {
      return string.toUpperCase();
    },
    formatarPreco: function (preco, simbolo) {
      if (!parseInt(preco)) {
        return "";
      }
      var precoFormatado = preco.toFixed(2).replace(".", ",");
      return simbolo + " " + precoFormatado;
    },
  },
  computed: {
    filmesOrdenados() {
      return [...this.filmes].sort((a, b) => {
        return b.id < a.id ? -1 : b.id > a.id ? 1 : 0;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
