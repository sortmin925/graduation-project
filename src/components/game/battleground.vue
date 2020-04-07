<template>
  <div class="battleground">
    <div
      v-for="(item, index) in area"
      :key="index"
      class="battle-card"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'battleground',
  data() {
    return {
      area: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>
<style lang="scss">
.battleground {
  margin: 20px 0 0 200px;
  border: black solid 4px;
  height: 220px;
  width: 1280px;
  display: flex;
  flex-direction: row;
  .battle-card {
    margin: 4px 0 0 20px;
    border: black solid 3px;
    height: 200px;
    width: 160px;
  }
}
</style>
