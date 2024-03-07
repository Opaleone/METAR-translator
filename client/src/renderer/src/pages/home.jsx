import { useState } from 'react';
import axios from 'axios';
import config from '../../../../../config.json' assert { type: 'json' };

export default function Home() {
  // const [metar, setMetar] = useState('');
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

  const icaoBool = (e) => {
    e.preventDefault();
  }

  const filterCodeArr = [];

  const icaoCodeFile = fs.readFileSync('../assets/icaoCodes.txt', e => {
    console.log(e.message);
  }).toString();

  const icaoCodeArr = icaoCodeFile.split('\n');

  for (let i = 1; i < icaoCodeArr.length; i++) {
    const curIcaoCode = icaoCodeArr[i].split(',')[3];
    filterCodeArr.push(curIcaoCode);
  }

  return (
    <div>
      <h1 id="home-header">METAR Request</h1>
      <form onSubmit={icaoBool}>
        <input name="icao" type="text" />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}