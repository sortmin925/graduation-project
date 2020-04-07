<template>
  <div
    v-if="isPlayer"
    class="game-card"
    :style="{ 'background-image': `url(${card.path})` }"
  >
    <div
      class="card-left-top"
      :style="{ 'background-image': `url(${costImage})` }"
    >
      {{ card.cost }}
    </div>
    <div class="card-bottom">
      <div
        class="card-bottom-left"
        :style="{ 'background-image': `url(${atkImage})` }"
      >{{ card.atk }}</div>
      <div
        class="card-bottom-right"
        :style="{ 'background-image': `url(${hpImage})` }"
      >{{ card.hp }}</div>
    </div>
  </div>
  <div
    v-else
    class="game-card"
    :style="{ 'background-image': `url(${back})` }"
  />
</template>
<script>
import back from '@/assets/card/back.png'
import hpImage from '@/assets/png/hp2.png'
import atkImage from '@/assets/png/atk2.png'
import costImage from '@/assets/png/cost2.png'

export default {
  name: 'card',
  props: {
    card: {
      type: Object,
      default: () => {}
    },
    isPlayer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hp: 123,
      back,
      atkImage,
      hpImage,
      costImage,
      show: false
    }
  }
}
</script>
<style lang="scss">
.game-card {
  animation-name: card2;
  animation-duration: 2s;
  width: 140px;
  height: 200px;
  background-size: 100% 100%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .card-left-top {
    width: 25px;
    height: 30px;
    margin: 8px 0 0 8px;
    font-size: 25px;
    color: white;
    text-align: center;
    background-size: 100% 100%;
    //background: linear-gradient(to bottom right, blue, white);
  }
  .card-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .card-bottom-left {
      width: 25px;
      height: 30px;
      margin: 0 0 0px 9px;
      font-size: 25px;
      color: white;
      text-align: center;
      background-size: 100% 100%;
    }
    .card-bottom-right {
      width: 15px;
      height: 22px;
      margin: 3px 6px 0px 0;
      font-size: 25px;
      color: white;
      text-align: center;
      background-size: 100% 100%;
    }
  }
}
@keyframes card2 {
  from {
    margin-top: -50%;
  }
  to {
    margin-top: 0%;
  }
}
</style>
