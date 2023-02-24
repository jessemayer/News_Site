import NewsArticle from './NewsArticle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function News({ data }) { // destructing props, same as (props) and then accessing data like props.data
  console.log(data);
  return (
    <Container>
      <Row>
        {/* <h1 className='head_text'>TechCrunch Articles</h1> */}
        <div className='all_news d-grid gap-5'
        
        style={{ gridTemplateColumns: "repeat(auto-fit, 20rem)" }}>
            {data ? data.articles.map((news) => (
                 <NewsArticle data={news} key={news.url} />
            ))
            
            :"Loading"}
        </div>
        </Row>
    </Container>
  )
}

export default News
