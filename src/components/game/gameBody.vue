<template>
  <div
    v-loading="playerList.length === 0"
    class="game-body"
  >
    <div class="opposite-container">
      <profile :profile-state="playerList[1]" />
      <card
        v-for="(item, index) in list"
        :key="index"
      />
    </div>
    <el-button @click="add">add</el-button>
  </div>
</template>
<script>
import profile from './profile'
import card from './card'

export default {
  name: 'game-body',
  components: {
    profile,
    card
  },
  props: {
    playerList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    add() {
      this.list.push(3)
    }
  }
}
</script>
<style lang="scss">
.game-body {
  width: 100%;
  height: 100%;
  .opposite-container {
    display: flex;
    flex-direction: row;
  }
}
</style>
