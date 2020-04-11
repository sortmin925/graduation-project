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
    <battleground @updateList="updateList" />
    <div class="self-container">
      <profile :profile-state="playerList[0]" />
      <card-list :is-player="true" :card-list="list" />
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
    this.list = cards.slice(0, 4)
    this.list.forEach((item, index) => {
      item.idx = index
    })
  },
  methods: {
    add() {
      this.list.push(3)
    },
    updateList(idx) {
      console.log(idx)
      this.list = this.list.filter(item => item.idx !== idx)
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
