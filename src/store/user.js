const user = {
  state: {
    username: 'admin',
    openid: ''
  },
  mutations: {
    setOpenId(state, openid) {
      state.openid = openid;
      uni.setStorage({
        key: 'openid',
        data: openid,
        success: function() {
          console.log('setOpenId success');
        }
      });
    },
    setUserName(state, username) {
      state.username = username;
    }
  },
  acitons: {

  },
  getters: {
    username: state => state.username,
    openid: state => state.openid
  }
}
export default user
