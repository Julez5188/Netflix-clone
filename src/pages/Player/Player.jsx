import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTUxMjFiNTgwOTFjYmJlYmQ4MjM0YzA4NmQzYTkwNSIsIm5iZiI6MTc5MzA2Mzk0OC4zNjcsInN1YiI6IjZhZGZmYzBjZTEzMWFkOWZiZmUwNTZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rtW8CKQ3p5LaMmQsaRFofcZbf5W6OYeQZ1H9kF56zLU'
    }
  };

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/1058424/videos?language=en-US', options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%'
      src='https://www.youtube.com/embed/4uq7dM9uBc0'
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
