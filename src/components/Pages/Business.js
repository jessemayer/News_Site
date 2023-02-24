import React, { useState, useEffect } from "react";
import News from "../News";
import getNews, { businessUrl } from "../../utils/getNews";




function Business() {
  const [data, setData] = useState(null);

  // get needed data on component load
  useEffect(() => {
    (async () => {
      const response = await getNews(businessUrl)
      setData(response)
    })();

    // getNews(businessUrl)
    //   .then(res => setData(res))
    //   .catch(e => console.log(e))
  }, []);
    
      return (
        <>
        <h1>Business Articles</h1>
          {/* called short circuiting, we only render the News component if we have data! */}
          {data && <News data={data} />}
        </>
        
      )
}

export default Business;