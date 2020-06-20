<template>
  <div class="flex-1 bg-gray-100 m-2">
    <p class="text-xl ml-2">{{ type }}</p>
    <Card
      v-for="(card, k) in cardList"
      :key="k"
      :card-key="k"
      :card-title="card.title"
      @showModal="showModal"
    />
    <modals-container @onModifyCard="onModifyCard" />
    <AddCard @onAddCard="onAddCard" />
  </div>
</template>

<script>
import Card from './Card'
import AddCard from './AddCard'
import CardDetailModal from './CardDetailModal'
export default {
  name: 'CardList',
  components: { AddCard, Card },
  props: {
    type: {
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
    showModal(cardKey) {
      this.$modal.show(
        CardDetailModal,
        {
          cardKey,
          cardData: this.cardList[cardKey]
        },
        {
          height: 500
        }
      )
    },
    onAddCard(title) {
      this.$emit('doAddCard', this.type, title)
    },
    onModifyCard(cardKey, cardTitle, cardBody, cardStatus) {
      this.$emit('doModifyCard', cardStatus, cardKey, cardTitle, cardBody)
      this.$modal.hideAll()
    }
  }
}
</script>

<style scoped></style>
