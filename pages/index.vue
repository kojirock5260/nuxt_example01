<template>
  <div class="bg-blue-100">
    <h1 class="text-2xl">Todo List</h1>

    <div class="flex">
      <CardList title="todo" :card-list="cardList.todo" />
      <CardList title="doing" :card-list="cardList.doing" />
      <CardList title="done" :card-list="cardList.done" />
    </div>
  </div>
</template>

<script>
import CardList from '../components/CardList'
export default {
  components: { CardList },
  data() {
    return {
      cardList: {
        todo: [
          { id: 1, title: 'aaa', body: 'AAA' },
          { id: 2, title: 'bbb', body: 'BBB' },
          { id: 3, title: 'ccc', body: 'CCC' },
          { id: 4, title: 'ddd', body: 'DDD' },
          { id: 5, title: 'eee', body: 'EEE' },
          { id: 6, title: 'fff', body: 'FFF' }
        ],
        doing: [{ id: 10, title: '○○○○○', body: '◎◎◎◎◎◎◎' }],
        done: [
          { id: 100, title: '000', body: '0000000000' },
          { id: 200, title: '111', body: '1111111111' },
          { id: 300, title: '222', body: '2222222222' }
        ]
      }
    }
  }
}
</script>

<style></style>
