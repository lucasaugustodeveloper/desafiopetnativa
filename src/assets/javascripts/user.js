'user strict'

import axios from 'axios'

const user = (user) => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}

const repos = (user) => {
  axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      return response
    })
    .catch(error => {
      return response
    })
}

module.export = { user, repos }
