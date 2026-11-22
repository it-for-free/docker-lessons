const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Привет из Node.js в контейнере!')
})

app.listen(3000, () => {
  console.log('Сервер слушает порт 3000')
})
