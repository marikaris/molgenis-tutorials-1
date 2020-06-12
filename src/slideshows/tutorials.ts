const files = require.context('.', false, /\.vue$/)
const list: Array<any> = []

files.keys().forEach((key) => {
  if (key === './tutorials.js') return
  list.push(files(key).default)
})

export default {
  list: list
}
