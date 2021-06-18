export function getOpenId() {
  return new Promise((resolve, reject) => {
    uni.getStorage({
      key: 'openid',
      success: function(res) {
        resolve(res.data)
      },
      fail: function(res) {
        reject('')
      }
    });
  })
}
