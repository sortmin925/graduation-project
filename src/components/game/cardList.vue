<template>
  <div class="card-list">
    <card
      v-for="(item, index) in cardList"
      :key="index"
      v-drag
      :card="item"
      :is-player="isPlayer"
      draggable="true"
      @dragstart="dragStart($event, index)"
      @dragover="allowDrop"
      @drop="drop($event, index)"
    />
  </div>
</template>

<script>
import card from './card'

export default {
  name: 'card-list',
  components: {
    card
  },
  props: {
    cardList: {
      type: Array,
      default: () => []
    },
    isPlayer: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    dragStart(e, index) {
      console.log(index)
    },
    drop(e, index) {
      console.log(321 + index)
    },
    allowDrop(e) {
      e.preventDefault()
    }
  }
}
</script>
<style lang="scss">
.card-list {
  display: flex;
  flex-direction: row;
}
</style>
