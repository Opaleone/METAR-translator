import { useState } from 'react';
import axios from 'axios';
import config from '../../../../../config.json' assert { type: 'json' };
import filterCodeArr from '../../../../../utils/icaoGet.js';

export default function Home() {
  const [metar, setMetar] = useState(false);
  // let curMetar;
  // let curMetarRaw;
  // let metarRmkSplit;

  // const getMetar = async (e) => {
  //   e.preventDefault();
  //   const code = e.target[0].value;
  //   console.log(code);
  //   const metarInfo = await axios.get(`https://api.checkwx.com/metar/${code}/decoded?x-api-key=${config.apiKey}`);
  //   setMetar(metarInfo);
  // }

  // if (metar) {
  //   curMetar = metar.data.data[0];
  //   curMetarRaw = curMetar.raw_text;
  //   metarRmkSplit = curMetarRaw.split(' RMK ')[1];
  // }

  console.log(filterCodeArr);

  return (
    <div>
      <h1 id="home-header">METAR Request</h1>
      <form onSubmit={icaoBool}>
        <input name="icao" type="text" />
        <button type='submit'>Search</button>
      </form>
      <p>{metar}</p>
    </div>
  )
}