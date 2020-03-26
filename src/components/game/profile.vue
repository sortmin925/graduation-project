<template>
  <div class="profile">
    <img :src="profileState.imagePath">
    <span>{{ profileState.username }}</span>
  </div>
</template>
<script>
export default {
  name: 'profile',
  props: {
    profileState: {
      type: Object,
      default() {
        return {
          imagePath: '',
          username: ''
        }
      }
    }
  }
}
</script>
<style lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  img {
    width: 80px;
    height: 160px;
  }
}
</style>
