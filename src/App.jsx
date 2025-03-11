import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import SearchIcon from './Search.svg'
import './App.css'


      const Api_Key="http://www.omdbapi.com?apikey=d8be6891"

      function App() {
        const [searchmovie, setsearchmovie]=useState("")
        const [movie, setmovie]=useState([])

        const SearchMovie=async(title)=>{
        const response= await fetch(`${Api_Key}&s=${title}`)
        const data= await response.json()
        setmovie(data.Search)
      }

      useEffect(()=>{

        SearchMovie(searchmovie)
      },[])



        return (
          <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
             <input 
             type="text"
             value={searchmovie}
             onChange={(e)=>setsearchmovie(e.target.value)}
             />
             <img src={SearchIcon} alt="search"
             onClick={()=>{SearchMovie(searchmovie)}} />

            </div>
        {
          movie?.length>0 ?
          (
            
              <div className='container'>
                {movie.map((item)=>(
                <MovieCard movie1={item}/>
                ))} 
      
              </div>
        ) : 
      
        (
          <div>
            <h1>Movie Not Found</h1>
          </div>
        )
        }   
        
          </div>
        )
      }

      export default App