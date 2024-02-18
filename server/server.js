import { apiKey, PORT } from '../config.json' assert { type: 'json' }
import axios from 'axios'
import express from 'express'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const request = async () => {
  try {
    const metarInfo = await axios.get(`https://api.checkwx.com/metar/KAUS?x-api-key=${apiKey}`);

    console.log(metarInfo.data);
  } catch(e) {
    console.error(e);
  }
}

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})