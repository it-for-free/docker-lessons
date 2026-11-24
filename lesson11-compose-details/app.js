const express = require('express')
const fs = require('fs')

const DATA_DIR = '/app/data'
const FILE = DATA_DIR + '/visits.txt'
const GREETING = process.env.GREETING || 'Просмотр'

const app = express()

app.get('/', (req, res) => {
  let n = 0
  try {
    n = parseInt(fs.readFileSync(FILE, 'utf8')) || 0
  } catch (e) {
    // при первом запросе файла ещё нет
  }
  n = n + 1
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(FILE, String(n))
  res.send(GREETING + ' № ' + n)
})

app.listen(3000, () => {
  console.log('Счётчик запущен на порту 3000')
})
