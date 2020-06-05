<template>
  <div class="z-10 flex-auto bg-white m-2 shadow">
    <p class="w-full p-3">{{ cardTitle }}</p>
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
  }
}
</script>

<style scoped></style>
