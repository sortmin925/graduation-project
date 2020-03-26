<template>
  <div>
    <div class="game-card">
      <img :src="back">
    </div>
  </div>
</template>
<script>
import back from '@/assets/card/back.png'

export default {
  name: 'card',
  data() {
    return {
      hp: 123,
      back,
      show: false
    }
  }
}
</script>
<style lang="scss">
.game-card {
  animation-name: card2;
  animation-duration: 2s;
  img {
    width: 100px;
    height: 160px;
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
