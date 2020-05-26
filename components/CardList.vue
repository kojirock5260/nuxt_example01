<template>
  <div class="flex-1 bg-gray-100 m-2 cursor-pointer">
    <p class="text-xl">{{ title }}</p>
    <Card v-for="(card, k) in cardList" :key="k" :card="card" />
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'CardList',
  components: { Card },
  props: {
    title: {
      type: String,
      require: true,
      default: ''
    },
    cardList: {
      type: Array,
      require: true,
      default: null
    }
  }
}
</script>

<style scoped></style>
