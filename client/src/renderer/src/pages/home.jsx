import { useState } from 'react'
import axios from 'axios';
import config from '../../../../../config.json' assert { type: 'json' }

export default function Home() {
  const [metar, setMetar] = useState('');
  const getMetar = async () => {
    const metarInfo = await axios.get(`https://api.checkwx.com/metar/KAUS?x-api-key=${config.apiKey}`);
    setMetar(metarInfo.data.data[0]);
  }
  return (
    <div>
      <h1 id="home-header">METAR Request</h1>
      <button onClick={() => getMetar()}>Click Me</button>
      <p>{metar}</p>
    </div>
  )
}