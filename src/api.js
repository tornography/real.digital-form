import axios from 'axios'

export default (method, url, data) => {
  switch (method) {
    case 'POST':
      axios.post(url, data)
        .then(response => {
          console.log(response)
        })
      break
    case 'GET':
    default:
      axios.get(url, data)
        .then(response => {
          console.log(response)
        })
  }
}
