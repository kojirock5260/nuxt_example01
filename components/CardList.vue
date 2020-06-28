<template>
  <div class="flex-1 bg-gray-100 m-2">
    <p class="text-xl ml-2">{{ type }}</p>
    <draggable
      v-model="computedCardList"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
    >
      <Card
        v-for="(card, k) in cardList"
        :key="k"
        :card-key="k"
        :card-title="card.title"
        @showModal="showModal"
      />
    </draggable>
    <modals-container
      @onModifyCard="onModifyCard"
      @onDeleteCard="onDeleteCard"
    />
    <AddCard @onAddCard="onAddCard" />
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Card from './Card'
import AddCard from './AddCard'
import CardDetailModal from './CardDetailModal'
export default {
  name: 'CardList',
  components: { AddCard, Card, draggable },
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
  computed: {
    computedCardList: {
      get() {
        return this.cardList
      },
      set(value) {
        this.$emit('doMoveCard', value, this.type)
      }
    },
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        ghostClass: 'ghost'
      }
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
          height: 550
        }
      )
    },
    onAddCard(title) {
      this.$emit('doAddCard', this.type, title)
    },
    onModifyCard(cardKey, cardTitle, cardBody, cardStatus) {
      this.$emit('doModifyCard', cardStatus, cardKey, cardTitle, cardBody)
      this.$modal.hideAll()
    },
    onDeleteCard(cardKey, cardStatus) {
      this.$emit('doDeleteCard', cardStatus, cardKey)
      this.$modal.hideAll()
    }
  }
}
</script>

<style scoped></style>
