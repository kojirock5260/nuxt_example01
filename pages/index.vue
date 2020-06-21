<template>
  <div class="bg-blue-100">
    <h1 class="text-2xl">Todo List</h1>

    <div class="flex">
      <CardList
        type="todo"
        :card-list="cardList.todo"
        @doAddCard="doAddCard"
        @doDeleteCard="doDeleteCard"
        @doModifyCard="doModifyCard"
      />
      <CardList
        type="doing"
        :card-list="cardList.doing"
        @doAddCard="doAddCard"
        @doDeleteCard="doDeleteCard"
        @doModifyCard="doModifyCard"
      />
      <CardList
        type="done"
        :card-list="cardList.done"
        @doAddCard="doAddCard"
        @doDeleteCard="doDeleteCard"
        @doModifyCard="doModifyCard"
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
          { title: 'aaa', body: 'AAA', status: 'todo' },
          { title: 'bbb', body: 'BBB', status: 'todo' },
          { title: 'ccc', body: 'CCC', status: 'todo' },
          { title: 'ddd', body: 'DDD', status: 'todo' },
          { title: 'eee', body: 'EEE', status: 'todo' },
          { title: 'fff', body: 'FFF', status: 'todo' }
        ],
        doing: [{ title: '○○○○○', body: '◎◎◎◎◎◎◎', status: 'doing' }],
        done: [
          { title: '000', body: '0000000000', status: 'done' },
          { title: '111', body: '1111111111', status: 'done' },
          { title: '222', body: '2222222222', status: 'done' }
        ]
      }
    }
  },
  methods: {
    doAddCard(type, title) {
      this.cardList[type].push({
        title,
        body: '',
        status: type
      })
    },
    doModifyCard(type, key, title, body) {
      this.cardList[type][key].title = title
      this.cardList[type][key].body = body
    },
    doDeleteCard(type, key) {
      this.cardList[type].splice(key, 1)
    }
  }
}
</script>

<style></style>
