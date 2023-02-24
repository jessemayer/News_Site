import React, {useState, useEffect,} from 'react'
import News from '../News';
import getNews, { techUrl } from '../../utils/getNews';



function TechCrunch() {
  const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await getNews(techUrl)
        setData(response)
      })();
}, []);

    return (
      <>
      <h1>TechCrunch</h1>
      {data && <News data={data} />}
      </>
    )

}


export default TechCrunch