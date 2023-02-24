import React from "react";
import { Card, Button } from 'react-bootstrap';



function NewsArticle({ data }) {
  return (
    <div>
      
        <Card  >
      <Card.Img variant="top" src={data.urlToImage} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle>{data.author}, {data.source.name}, {data.publishedAt}</Card.Subtitle>
       <br></br>
        <Card.Text style={{ color: "#000"}}>{data.description} </Card.Text> 
        
      <a href={data.url} target='_blank' rel='noopener noreferrer'>
      <Button variant="primary">Link To Article</Button>
      </a>
        
      </Card.Body>
    </Card>
        
  
  
    </div>
    
  );
}
export default NewsArticle;
