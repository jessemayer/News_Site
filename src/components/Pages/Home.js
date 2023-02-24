import React, { useEffect, useState } from 'react'
import News from '../News'
import getNews, { HomeHeadLines } from '../../utils/getNews'

function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getNews(HomeHeadLines)
            setData(response)
        })();
    }, [])
  return (

    <div className='home' >
    <h1>Top News Articles</h1>
    <p> Welcome to my final project. For this assignment, we were required to create a React site that meets specific criteria, including using React Router and incorporating at least three pages using React Bootstrap or another styling library, including at least ten components, and allowing for all CRUD operations.
Overall, I have thoroughly enjoyed this course, and while it is bittersweet to see it come to an end, it has prepared me to pursue a career as a junior software developer. I would like to extend my appreciation to our instructor, Edwin Otero, and the mentors who provided valuable guidance and support throughout the course, including Kristina Macias, Matthew Cox, and Jolene Melanson.</p>
     {data && <News data={data}/>} 
    </div>
  )
}

export default Home
