<template>
  <div class="m-8">
    <h2 class="text-3xl">{{ cardData.title }}の修正</h2>
    <div class="mt-5">
      <ValidationObserver ref="obs" v-slot="{ reset, valid }">
        <ValidationProvider v-slot="{ errors }" rules="required|max:10">
          <div>
            <p class="my-1 text-lg">タイトル</p>
            <input
              v-model="title"
              class="w-full p-3 border-2"
              @focus="$event.target.select()"
            />
            <span v-for="(error, k) in errors" :key="k" class="text-red-500">
              {{ error }}
            </span>
          </div>

          <div class="mt-10">
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
              class="bg-blue-400 text-white font-bold py-2 px-4 rounded"
              :class="{
                'hover:bg-blue-700': valid,
                'bg-blue-500': valid,
                'cursor-not-allowed': !valid
              }"
              :disabled="!valid"
              @click="
                $emit('onModifyCard', cardKey, title, body, cardData.status)
              "
            >
              更新する
            </button>
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              @click="$emit('onDeleteCard', cardKey, cardData.status)"
            >
              削除する
            </button>
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              @click="$emit('close')"
            >
              閉じる
            </button>
          </div>
        </ValidationProvider>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'CardDetailModal',
  components: {
    ValidationObserver,
    ValidationProvider
  },
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
