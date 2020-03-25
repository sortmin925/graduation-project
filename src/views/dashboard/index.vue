<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-lobby">
      <div class="dashboard-title">当前在线玩家</div>
      <div
        v-for="(item, index) in playerList"
        :key="index"
        class="dashboard-player"
      >
        {{ item.username }}
        <i class="el-icon-circle-plus-outline" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IO from '@/socket'

export default {
  name: 'Dashboard',
  data() {
    return {
      playerList: []
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    IO.on('allUsers', (msg) => {
      this.playerList = msg.users.filter(item => item.username !== this.name)
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    display: flex;
    justify-content: space-between;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  &-lobby {
    padding-top: 16px;
    width: 20%;
    border-left: 1px solid rgba(0,21,41,0.08);
    min-height: calc(100vh - 50px);
    text-align: center;
  }
  &-title {
    border-bottom: 1px solid rgba(0,21,41,0.08);
    padding-bottom: 16px;
  }
  &-player {
    border-bottom: 1px solid rgba(0,21,41,0.08);
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    &:hover {
      background-color: rgba(0,21,41,0.08);
    }
    i {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
