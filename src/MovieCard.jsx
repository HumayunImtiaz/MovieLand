import React from 'react'

function MovieCard({movie1}) {
  return (
    <div>
          <div className='container'>
       <div className='movie'>
       <div>
        <p>{movie1.Year}</p>
       </div>

       <div>
       <img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"} alt="Movie Poster" />
my name is sundas</div>

       <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
       </div>

       <div>

       </div>

       </div>
      </div>
    
    </div>
  )
}

export default MovieCard