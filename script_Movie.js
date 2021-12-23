//background   img     is    https://image.tmdb.org/t/p/w1280//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
//   img  path  +   backdrop path
/*   
adult: false: "/gespPE81A2RYvMxl9XaVNvIgevS.jpg"
genre_ids: (3) [28, 12, 878]
id: 634649
original_language: "en"
original_title: "Spider-Man: No Way Home"
overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
popularity: 15606.293
poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
release_date: "2021-12-15"
title: "Spider-Man: No Way Home"
video: false
vote_average: 8.8
vote_count: 1140
*/
const APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/lyvszvJJqqI8aqBJ70XzdCNoK0y.jpg";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
async  function load(url){
   const data    =   await   fetch(url)
   const  resp    =  await  data.json()
  console.log(resp.results);
  show_most_popular(resp.results)
}

load(APIURL);

const  show_most_popular  =(movie_list)=>{
  
      for(let i  = 0  ;   i  < movie_list.length ;  i ++){
          movie_container.innerHTML +=display_movies(movie_list[i] , i )
       }
  

  
}  //C:\Users\HP\javascript-comfy-store-course-project\movie_app


const single_movie_info=(id)=>{
  console.log(id);
  movie_container.innerHTML=`${id}`
}
const movie_container  =  document.querySelector('.movieS')


const display_movies  = (movie , i)=>{

  let index =   i;

  
  return    `<div class="movie">
  <p> ${movie.title}</p>

  <img class='img' src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="">
  <button     onclick   = ' add_to_wishlist(${index})' class="btn">add to wishlist</button>
  <button   onclick   = ' showDescription(${index})'  class='btn '>read about</button>
  <div  class='description'>
    <button   onclick   = 'hide(${index})'  class='btn_hide'>X</button>
    <p  class='description_text'>${movie.overview}</p>
    <button onclick= 'single_movie_info(${movie.id})' class= 'btn'>more info </button>
  </div>

</div>

  `

}

function   hide(index){
  document.querySelectorAll('.movie>.description')[index].style.height = '0px'

}
function  showDescription(index){
 document.querySelectorAll('.movie>.description')[index].style.height = '530px'
 }

let wishlist=[]
function  add_to_wishlist(index ){
  let title   =  document.querySelectorAll('.movie>p:first-child')[index].textContent
  wishlist.push(title)
}

