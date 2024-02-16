import React from 'react'

function Card({username = " Totoro ", post = "Spirit Of The Forest", imageSrc = 'https://cdn.britannica.com/86/212186-050-EC39872A/My-Neighbor-Totoro-Hayao-Miyazaki-Studio-Ghibli-movie-still-1988.jpg' }) {
  //console.log(props);
return (
  <div className="mb-4">
     <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="rounded-md  mx-auto" src={imageSrc} alt="" width="250" style={{ height: 'auto' }}/>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
          <div className="text-blue-400 dark:text-sky-400">
              {username }
          </div>
          <div className="text-slate-500 dark:text-slate-500">
              {post}
          </div>
          </figcaption>          
          <blockquote>
          <p className="text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quaerat.
          </p>
          </blockquote>
      </div>
      </figure> 
  </div>
)
}

export default Card