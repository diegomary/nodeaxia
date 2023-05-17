import express from 'express'; 
const app = express()
const port = 80
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/', express.static(path.join(__dirname, 'static')));

app.get('/api/hello', (req, res) => {
  res.send('This is an api used to register users......................................')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
