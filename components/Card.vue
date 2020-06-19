<template>
  <div class="z-10 flex-auto bg-white m-2 shadow">
    <p class="w-full p-3" @click="$emit('showModal', cardKey)">
      {{ cardTitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    cardKey: {
      type: Number,
      require: true,
      default: 0
    },
    cardTitle: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>

<style scoped></style>
