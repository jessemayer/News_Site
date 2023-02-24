import React from 'react'
import Card from 'react-bootstrap/Card';


function BusinessArticle({ data }) {
  return (
    <div>
     
        <Card className='mb-3' style={{ width: '100%' }}>
      <Card.Img variant="top" src={data.urlToImage} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle>{data.author}, {data.source.name}, {data.publishedAt}</Card.Subtitle>
       
        <Card.Text>{data.description}</Card.Text>
        
      </Card.Body>
    </Card>
       
    </div>
  )
}

export default BusinessArticle
