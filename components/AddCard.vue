<template>
  <div class="px-2 mb-2">
    <p
      v-show="!isPushedAddCardButton"
      class="cursor-pointer inline-block"
      @click="isPushedAddCardButton = true"
    >
      ＋ カードを追加
    </p>
    <div v-show="isPushedAddCardButton" class="mt-6">
      <ValidationObserver ref="obs" v-slot="{ reset, valid }">
        <ValidationProvider v-slot="{ errors }" rules="required|max:10">
          <input v-model="addCardTitle" class="w-full p-3 border-2" />
          <ul>
            <li v-for="(error, k) in errors" :key="k" class="text-red-500">
              {{ error }}
            </li>
          </ul>

          <div class="mt-2">
            <button
              class="bg-blue-400 text-white font-bold py-2 px-4 rounded"
              :class="{
                'hover:bg-blue-700': valid,
                'bg-blue-500': valid,
                'cursor-not-allowed': !valid
              }"
              :disabled="!valid"
              @click="onClickAddButton(reset)"
            >
              追加
            </button>
            <button
              class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              @click="onClickCloseButton(reset)"
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
  name: 'AddCard',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      addCardTitle: '',
      isPushedAddCardButton: false
    }
  },
  methods: {
    onClickAddButton(validateReset) {
      validateReset()
      this.$emit('onAddCard', this.addCardTitle)
      this.addCardTitle = ''
      this.isPushedAddCardButton = false
    },
    onClickCloseButton(validateReset) {
      validateReset()
      this.addCardTitle = ''
      this.isPushedAddCardButton = false
    }
  }
}
</script>

<style scoped></style>
