const theme = {
  state: {
    theme: 'theme1',
    mineIconColor: 'red'
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    }
  },
  acitons: {

  },
  getters: {
    theme: state => state.theme,
    mineIconColor: state => state.theme === 'theme1' ? 'red' : 'blue'
  }
}
export default theme
