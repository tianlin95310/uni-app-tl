export function post(event, data) {
  uni.$emit(event, data)
}

export function register(event, callback) {
  uni.$on(event, callback)
}

export function unregister(event, data) {
  uni.$off(event, data)
}
