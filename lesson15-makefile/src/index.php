<?php
// Учебное упрощение: таблицу создаём при запуске.
// В реальных проектах схему меняют миграциями.
$db = new PDO(
    'pgsql:host=' . getenv('PGHOST') . ';dbname=' . getenv('PGDATABASE'),
    getenv('PGUSER'),
    getenv('PGPASSWORD')
);

$db->exec('CREATE TABLE IF NOT EXISTS visits (
    id serial PRIMARY KEY,
    at timestamp DEFAULT now()
)');

$db->exec('INSERT INTO visits DEFAULT VALUES');

$n = $db->query('SELECT count(*) FROM visits')->fetchColumn();

echo "Просмотр № $n";
