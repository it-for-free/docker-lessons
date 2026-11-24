const express = require('express')
const { Client } = require('pg')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const pgConfig = {
  host: process.env.PGHOST || 'db',
  user: process.env.PGUSER || 'lesson13',
  password: process.env.PGPASSWORD || 'secret',
  database: process.env.PGDATABASE || 'lesson13',
}

let db = null

async function waitDb() {
  for (let i = 1; ; i++) {
    const client = new Client(pgConfig)
    try {
      await client.connect()
      db = client
      console.log('База на связи (попытка ' + i + ')')
      return
    } catch (e) {
      console.log('Ещё не готово: ' + e.message)
      await client.end().catch(() => {})
      await sleep(1000)
    }
  }
}

const app = express()

app.get('/', async (req, res) => {
  try {
    await db.query('INSERT INTO visits DEFAULT VALUES')
    const r = await db.query('SELECT count(*) AS n FROM visits')
    res.send('Просмотр № ' + r.rows[0].n)
  } catch (e) {
    res.status(500).send('БД недоступна: ' + e.message)
  }
})

waitDb().then(() => {
  app.listen(3000, () => console.log('Счётчик запущен'))
})
