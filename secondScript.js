
//  https://api.themoviedb.org/3/624860/reviews?api_key=04c35731a5ee918f014970082a0088b1&language=en-US   - REVIEW
//  key     04c35731a5ee918f014970082a0088b1
//   https://api.themoviedb.org/3/movie/${}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US         -   MOVIE DETAILS

//   https://api.themoviedb.org/3/movie/${}/recommendations?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1 RECOMMENDATIONS
//https://api.themoviedb.org/3/movie/${}/translations?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1  translations
let  url  =   window.location.href
let  movie_id   =     new URL(url).search.substring(1)
let  poster   =    document.getElementById('poster')
let img_api_search  = 'https://image.tmdb.org/t/p/w1280/'
const recommendations_section =  document.querySelector('.recommendations')

let   movie_details_url   =   ` https://api.themoviedb.org/3/movie/${movie_id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`
let movie_description =   document.querySelector('.movie_details') 
let review_url=`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=4d9c9de3bdf0d3b6837c49c086e3b190`
let  movie_reviews = document.querySelector('.reviews')
async  function load_movie_details(){
  const data  =   await  fetch(movie_details_url)
  const resp =   await   data.json()

  poster.src =  `${img_api_search}${resp.poster_path}`
  movie_description.innerHTML=`
       
         <h1>${resp.title}</h1>
        <h2>slogan  : ${resp.tagline}</h2>
        <h2>release date :  ${resp.release_date}</h2>
        <h2>budget :  ${resp.budget} </h2>
        <h2>vote_average   : ${resp.vote_average}</h2>
        <p>overview   :   ${resp.overview}</p>

  `

}

load_movie_details()  
const  comments   = document.querySelector('.comments')

 async function load_reviews(){
      const data =  await fetch(review_url)
      const resp  = await data.json()
      let list_of_reviews  = resp.results
      //console.log(list_of_reviews[0].content);
      for(let  i  = 0  ;  i < list_of_reviews.length  ;   i++){
          const {author , content , created_at} = list_of_reviews[i]
          comments.innerHTML+=`
         <div  class   ='individual_review'>
         <h5>author  : ${author}</h5>
         <p>${content}</p>
         <p>  written at :${created_at}</p>
         </div>


     `
      }
    
      

}

    load_reviews()


//comments.style.display 'none'
let review_section  = document.getElementById('reviews')
document.getElementById('show_comments').addEventListener('click' ,  ()=>{

 console.log(review_section);
 review_section.style.display='block'
})


async  function load_recommendations(){
  const data   =  await  fetch(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1`)
  const resp   =   await  data.json()
  const  list  = resp.results
  console.log(list );
  if(list.length < 10){
    for(let   i   = 0 ;  i < list.length ;  i ++){
         recommendations_section.innerHTML+=`
          <div class="img_and_text">
          <img src="${ img_api_search }${list[i].poster_path}" alt="" >
          <h2>${list[i].title}</h2>
          </div>
         `
    }
  }
else   for(let i   = 0 ;  i < 10 ;  i  ++){
  recommendations_section.innerHTML+=`
  <div class="img_and_text">
  <img class='img' src='${ img_api_search }${list[i].poster_path}' alt="" >
  <h2 class='recommendation_title'>  
  <a   href="http://127.0.0.1:5500/singleMovie.html?${list[i].id}">  ${list[i].title}</a>     </h2>
  </div>
 `
}
  
}

load_recommendations()

document.getElementById('hide_comments').addEventListener('click' ,  ()=>{
  review_section.style.display='none'
})












 
