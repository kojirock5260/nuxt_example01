<template>
  <div class="m-8">
    <h2 class="text-3xl">{{ cardData.title }}の修正</h2>
    <div class="mt-5">
      <div>
        <p class="my-1 text-lg">タイトル</p>
        <input
          v-model="title"
          class="w-full p-3 border-2"
          @focus="$event.target.select()"
        />
      </div>

      <div class=" mt-5">
        <p class="my-1 text-lg">本文</p>
        <textarea
          v-model="body"
          class="w-full p-3 border-2"
          rows="6"
          @focus="$event.target.select()"
        ></textarea>
      </div>

      <div class="mt-5 text-right">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="$emit('onModifyCard', cardKey, title, body, cardData.status)"
        >
          追加
        </button>
        <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          @click="$emit('close')"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDetailModal',
  props: {
    cardKey: {
      type: Number,
      require: true,
      default: 0
    },
    cardData: {
      type: Object,
      require: true,
      default: () => {}
    }
  },
  data() {
    return {
      body: this.cardData.body,
      title: this.cardData.title
    }
  }
}
</script>

<style scoped></style>
