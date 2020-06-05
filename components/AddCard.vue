<template>
  <div class="px-2">
    <p @click="isPushedAddCardButton = true">＋ カードを追加</p>
    <div v-show="isPushedAddCardButton">
      <input v-model="addCardTitle" class="w-full p-3" />

      <div class="mt-2">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="onClickAddButton"
        >
          追加
        </button>
        <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          @click="onClickCloseButton"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCard',
  data() {
    return {
      addCardTitle: '',
      isPushedAddCardButton: false
    }
  },
  methods: {
    onClickAddButton() {
      this.$emit('onAddCard', this.addCardTitle)
      this.addCardTitle = ''
      this.isPushedAddCardButton = false
    },
    onClickCloseButton() {
      this.addCardTitle = ''
      this.isPushedAddCardButton = false
    }
  }
}
</script>

<style scoped></style>
