<template>
  <div class="card-list">
    <card
      v-for="(item, index) in cardList"
      :key="index"
      :card="item"
      :is-player="isPlayer"
      :draggable="isPlayer"
      @dragstart.native="dragstart($event, item, index)"
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
    dragstart(e, item, index) {
      item.index = index
      e.dataTransfer.setData('text/plain', JSON.stringify(item))
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
