import { useState } from 'react';
import axios from 'axios';
import config from '../../../../../config.json' assert { type: 'json' };

export default function Home() {
  const [metar, setMetar] = useState('');
  let curMetar;
  let curMetarRaw;
  let metarRmkSplit;

  const getMetar = async (e) => {
    e.preventDefault();
    const code = e.target[0].value;
    console.log(code);
    const metarInfo = await axios.get(`https://api.checkwx.com/metar/${code}/decoded?x-api-key=${config.apiKey}`);
    setMetar(metarInfo);
  }

  if (metar) {
    curMetar = metar.data.data[0];
    curMetarRaw = curMetar.raw_text;
    metarRmkSplit = curMetarRaw.split(' RMK ')[1];
  }

  return (
    <div>
      <h1 id="home-header">METAR Request</h1>
      <form onSubmit={getMetar}>
        <input name="icao" type="text" />
        <button type='submit'>Search</button>
      </form>
    {curMetar ? 
      <div>
        <h1 id="metar-title">METAR Results for {curMetar.icao}</h1>
        <ul id="metar-info-list">
          <li>Wind: Heading: {curMetar.wind.degrees}, Speed (KTS): {curMetar.wind.speed_kts}</li>
          <li>Clouds: {curMetar.clouds.map((cloud) => {
            <>
              <p>{cloud.code} clouds at {cloud.feet} feet</p>
            </>
          })}</li>
          <li>Temp: {curMetar.temperature.celsius}° C</li>
          <li>Dewpoint: {curMetar.dewpoint.celsius}° C</li>
          <li>Barometer (hg): {curMetar.barometer.hg}</li>
          <ul>Remarks</ul>
            <li>{metarRmkSplit}</li>
        </ul>
      </div> : <div></div>}
    </div>
  )
}