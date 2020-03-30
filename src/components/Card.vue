<template>
  <div class="card" @click="check(item)">
    <img v-if="item.appear || item.concluded" :src="item.img" alt="card">
    <img v-else src="./../assets/Cartas/js.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    item: Object,
  },
  methods: {
    check(item) {
      if (!item.concluded && !item.appear) {
        this.$emit('clickCard', item);
      }
    },
  },
};

</script>
<style scoped>
  .card {
    width: 200px;
    height: 200px;
    transform: rotateY(180deg);
  }
  .card img {
    width: 100%;
  }
</style>
