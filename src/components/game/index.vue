<template>
  <div class="game">
    <gameBody :player-list="playerList" />
    <el-dialog
      title="选择职业"
      :visible.sync="dialogVisible"
      width="50%"
      class="game-dialog"
    >
      <div class="game-choose">
        <div
          v-for="(item, index) in careers"
          :key="index"
          :class="['choose-career']"
          :style="clickCareer.index === index ? 'background: #BEBEBE' : ''"
          @click="clickCareer = item"
        >
          <img :src="item.imagePath">
          <div>{{ item.name }}</div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="chooseCareer">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { soldier, hunter, master } from '@/png'
import { mapGetters } from 'vuex'
import gameBody from './gameBody'

export default {
  name: 'Game',
  components: {
    gameBody
  },
  props: {
    player: {
      type: String,
      default: 'computer'
    }
  },
  data() {
    return {
      playerList: [],
      careers: [
        {
          name: '战士',
          imagePath: soldier,
          index: 0
        },
        {
          name: '法师',
          imagePath: master,
          index: 1
        },
        {
          name: '猎人',
          imagePath: hunter,
          index: 2
        }
      ],
      clickCareer: {
        index: -1
      }
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    dialogVisible() {
      return this.playerList.length === 0
    }
  },
  methods: {
    chooseCareer() {
      this.playerList.push({
        username: name,
        career: this.clickCareer.name,
        imagePath: this.clickCareer.imagePath
      })
      if (this.player === 'computer') {
        const random = Math.floor(Math.random() * (2 + 1))
        this.playerList.push({
          username: 'computer',
          career: this.careers[random].name,
          imagePath: this.careers[random].imagePath
        })
      }
    }
  }
}
</script>

<style lang="scss">
.game {
  height: 100%;
  width: 100%;
  padding: 20px;
  background-image: url("../../assets/png/background.jpg");
  background-size:100% 100%;
  .el-dialog {
    background: #D3D3D3;
  }
  .game-choose {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    .choose-career {
      padding: 8px;
      &:hover {
        background-color: #BEBEBE;
        cursor: pointer;
      }
      img {
        height: 200px;
        width: 100px;
      }
    }
  }
}
</style>
