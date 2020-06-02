<template>
  <div class="z-10 flex-auto bg-white m-2 shadow">
    <input v-model="computedCardTitle" class="w-full p-3" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardTitle: {
      type: String,
      require: true,
      default: ''
    }
  },
  computed: {
    computedCardTitle: {
      get() {
        return this.cardTitle
      },
      set(value) {
        this.$emit('update:cardTitle', value)
      }
    }
  }
}
</script>

<style scoped></style>
