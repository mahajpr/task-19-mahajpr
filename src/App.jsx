import React from 'react'
import './App.css';


function App() {

  const courses =[
    {id: 1 , name :"ReactJs" , trainer:"trainer 1" , duration :"6 weeks"},
    {id: 2 , name :"Python" , trainer:"trainer 2" , duration :"8 weeks"},
    {id: 3 , name :"Java" , trainer:"trainer 3" , duration :"10 weeks"},
    {id: 4 , name :"NodeJs" , trainer:"trainer 4" , duration :"5 weeks"},
    {id: 5 , name :"MongoDB" , trainer:"trainer 5" , duration :"4 weeks"},
    {id: 6 , name :"UI/UX" , trainer:"trainer 6" , duration :"7 weeks"},
  ]
  return (
  <div className='container'>
    <h1>Course Dashboard</h1>
    <div className='grid'>
      {courses.map((course)=>(
        <div key ={course.id} className='card'>
          <h2>{course.name}</h2>
          <p>Trainer:{course.trainer}</p>
          <p>Duration:{course.duration}</p>
        </div>
      ))}
    </div>
  </div>  
  );
}

export default App;