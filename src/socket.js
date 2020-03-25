import io from 'socket.io-client'

const path = 'http://localhost:8888'
const IO = io.connect(path)
export default IO

/*   const data = {
      code: 1,
      username: this.username,
    };
    this.IO.on("allUsers", (msg) => {
      this.usercount = msg.usercount,
      this.users = msg.users
    });
    this.IO.send(JSON.stringify(data));
    this.IO.on("invite", (msg) => {
      if (msg.user !== this.username) return;
      this.inviteDialog = true;
      this.inviteuser = msg.invite;
    });
    this.IO.on("reply", (msg) => {
      if (msg.user !== this.username) return;
      if (msg.code === 6) {
        this.$message({
          message: "对方拒绝了邀请",
          type: "warning",
        })
      }
    })
  },
*/
