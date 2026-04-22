const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello from monad-contention-analyzer' }));

app.listen(3000, () => console.log('monad-contention-analyzer running on :3000'));
