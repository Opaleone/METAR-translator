import { useState } from 'react';
import axios from 'axios';
import config from '../../../../../config.json' assert { type: 'json' };

export default function Home() {
  const [metar, setMetar] = useState('');

  const getMetar = async (e) => {
    e.preventDefault();
    const code = e.target[0].value;
    console.log(code);
    const metarInfo = await axios.get(`https://api.checkwx.com/metar/${code}?x-api-key=${config.apiKey}`);
    setMetar(metarInfo.data.data[0]);
  }
  return (
    <div>
      <h1 id="home-header">METAR Request</h1>
      <form onSubmit={getMetar}>
        <input name="icao" type="text" />
        <button type='submit'>Search</button>
      </form>
      <p>{metar}</p>
    </div>
  )
}