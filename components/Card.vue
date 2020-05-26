<template>
  <div class="z-10 flex-auto bg-white m-2 p-3 shadow">
    <span>ID:{{ card.id }}&nbsp;{{ card.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      require: true,
      default: null
    }
  }
}
</script>

<style scoped></style>
