<template>
  <div
    v-loading="playerList.length === 0"
    class="game-body"
  >
    <div class="opposite-container">
      <profile :profile-state="playerList[1]" />
      <card-list :card-list="oppositeList" />
    </div>
    <battleground />
    <battleground />
    <div class="self-container">
      <profile :profile-state="playerList[0]" />
      <card-list :is-player="true" :card-list="oppositeList" />
    </div>
  </div>
</template>
<script>
import profile from './profile'
import cardList from './cardList'
import cards from '@/utils/card'
import battleground from './battleground'

export default {
  name: 'game-body',
  components: {
    profile,
    cardList,
    battleground
  },
  props: {
    playerList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: [],
      oppositeList: []
    }
  },
  mounted() {
    this.oppositeList = cards.slice(0, 4)
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
  .self-container {
    display: flex;
    flex-direction: row;
  }
}
</style>
