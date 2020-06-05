<template>
  <div class="bg-blue-100">
    <h1 class="text-2xl">Todo List</h1>

    <div class="flex">
      <CardList
        title="todo"
        :card-list="cardList.todo"
        @doAddCard="doAddCard"
      />
      <CardList
        title="doing"
        :card-list="cardList.doing"
        @doAddCard="doAddCard"
      />
      <CardList
        title="done"
        :card-list="cardList.done"
        @doAddCard="doAddCard"
      />
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
          { title: 'aaa', body: 'AAA' },
          { title: 'bbb', body: 'BBB' },
          { title: 'ccc', body: 'CCC' },
          { title: 'ddd', body: 'DDD' },
          { title: 'eee', body: 'EEE' },
          { title: 'fff', body: 'FFF' }
        ],
        doing: [{ title: '○○○○○', body: '◎◎◎◎◎◎◎' }],
        done: [
          { title: '000', body: '0000000000' },
          { title: '111', body: '1111111111' },
          { title: '222', body: '2222222222' }
        ]
      }
    }
  },
  methods: {
    doAddCard(type, title) {
      this.cardList[type].push({
        title,
        body: ''
      })
    }
  }
}
</script>

<style></style>
