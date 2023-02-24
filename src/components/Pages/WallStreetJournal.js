import React, {useState, useEffect,} from 'react';
import News from '../News';
import getNews, { wsjUrl } from '../../utils/getNews';

function WallStreetJournal() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getNews(wsjUrl)
      setData(response)
    })();
  }, [])
  return (
    <>
    <h1>Wall Street Journal</h1>
      {data && <News data={data}/>}
    </>
  )
}

export default WallStreetJournal

