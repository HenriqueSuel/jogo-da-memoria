<template>
  <div class="cards">
    <section class="card" v-for="item of shuffle " :key="item.id" >
      <Card :item="item" @clickCard="clickCard" />
    </section>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  data() {
    return {
      itens: [
        {
          id: 1,
          pairId: 2,
          // eslint-disable-next-line global-require
          img: require('../assets/Cartas/angular.png'),
          appear: false,
          concluded: false,
          order: null,
        },
        {
          id: 2,
          pairId: 1,
          // eslint-disable-next-line global-require
          img: require('../assets/Cartas/angular.png'),
          appear: false,
          concluded: false,
          order: null,
        },
        {
          id: 3,
          pairId: 4,
          // eslint-disable-next-line global-require
          img: require('../assets/Cartas/vue.png'),
          appear: false,
          concluded: false,
          order: null,
        },
        {
          id: 4,
          pairId: 3,
          // eslint-disable-next-line global-require
          img: require('../assets/Cartas/vue.png'),
          appear: false,
          concluded: false,
          order: null,
        },
        {
          id: 5,
          pairId: 6,
          // eslint-disable-next-line global-require
          img: require('../assets/Cartas/react.png'),
          appear: false,
          concluded: false,
          order: null,
        },
        {
          id: 6,
          pairId: 5,
          // eslint-disable-next-line global-require
          img: require('../assets/Cartas/react.png'),
          appear: false,
          concluded: false,
          order: null,
        },
      ],
      flippedLetter: null,
    };
  },
  components: {
    Card,
  },
  computed: {
    shuffle() {
      const array = this.itens;
      let currentIndex = this.itens.length;
      let temporaryValue;
      let randomIndex;
      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this.itens[currentIndex];
        array[currentIndex] = this.itens[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return this.itens;
    },
  },
  methods: {
    clickCard(item) {
      const itemClick = item;
      if (this.flippedLetter !== null) {
        if (this.flippedLetter.id === item.pairId) {
          this.flippedLetter.concluded = true;
          this.flippedLetter = null;
          itemClick.concluded = true;
        } else {
          setTimeout(() => {
            this.flippedLetter.appear = false;
            this.flippedLetter = null;
            itemClick.appear = false;
          }, 500);
        }
      } else {
        this.flippedLetter = item;
      }
      itemClick.appear = !item.appear;
      console.log(item, this.itens);
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
}
.cards .card {
    height: auto;
    align-self: center;
    margin: 10px 10px;
}
</style>
