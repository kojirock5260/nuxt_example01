<template>
  <div class="flex-1 bg-gray-100 m-2 cursor-pointer">
    <p class="text-xl">{{ title }}</p>
    <Card
      v-for="(card, k) in cardList"
      :key="k"
      :card-title.sync="card.title"
    />
    <AddCard @onAddCard="onAddCard" />
  </div>
</template>

<script>
import Card from './Card'
import AddCard from './AddCard'
export default {
  name: 'CardList',
  components: { AddCard, Card },
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
  },
  methods: {
    onAddCard(title) {
      const type = this.title
      this.$emit('doAddCard', type, title)
    }
  }
}
</script>

<style scoped></style>
