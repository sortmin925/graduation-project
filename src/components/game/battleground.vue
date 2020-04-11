<template>
  <div class="battleground">
    <div
      v-for="(item, index) in area"
      :key="index"
      class="battle-card"
      @dragenter="dragenter"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop($event, index)"
    >
      <card v-if="typeof item === 'object'" :card="item" :is-player="true" />
    </div>
  </div>
</template>
<script>
import card from './card'

export default {
  name: 'battleground',
  components: {
    card
  },
  data() {
    return {
      area: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  methods: {
    dragenter(e, index) {
      e.preventDefault()
    },
    dragover(e, index) {
      e.preventDefault()
    },
    dragleave(e, index) {
    },
    drop(e, index) {
      if (typeof this.area[index] === 'object') return
      e.preventDefault()
      const t = JSON.parse(e.dataTransfer.getData('text'))
      this.$set(this.area, index, t)
      this.$emit('updateList', t.idx)
    }
  }
}
</script>
<style lang="scss">
.battleground {
  margin: 20px 0 0 200px;
  border: black solid 4px;
  height: 230px;
  width: 1280px;
  display: flex;
  flex-direction: row;
  .battle-card {
    margin: 4px 0 0 20px;
    border: black solid 3px;
    height: 210px;
    width: 150px;
  }
}
</style>
