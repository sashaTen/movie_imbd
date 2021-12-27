const descover = 'https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&'
let APIURL =
"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/lyvszvJJqqI8aqBJ70XzdCNoK0y.jpg";
const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movie_container  =  document.getElementById('movieS')
async  function load(url){
  
  const data    =   await   fetch(url)
  const  resp    =  await  data.json()
  console.log(resp.results);
  show_most_popular(resp.results)
}



const  show_most_popular  =(movie_list)=>{
          movie_container.innerHTML = ''
          
      for(let i  = 0  ;   i  < movie_list.length ;  i ++){
         
          movie_container.innerHTML +=display_movies(movie_list[i] , i )
       }
     

}  


const display_movies  = (movie , i)=>{
  let index =   i;
  let  movie_title =  movie.title
  if(movie.poster_path){
    return    `<div class="movie">
    <p> ${movie.title}</p>
    <img class='img' src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="">
    <button     onclick   = ' add_to_wishlist(${index})' class="btn">add to wishlist</button>
    <button   onclick   = ' showDescription(${index})'  class='btn '>read about</button>
    <div  class='description'>
      <button   onclick   = 'hide(${index})'  class='btn_hide'>X</button>
      <p  class='description_text'>${movie.overview}</p>
      <button onclick='movieDetails( ${index})' class= 'btn'>more info </button>
   
    </div>
  
  </div>
  
    `}
  else return ''

}


function   hide(index){
  document.querySelectorAll('.movie>.description')[index].style.height = '0px'

 

}
function  showDescription(index){
 document.querySelectorAll('.movie>.description')[index].style.height = '530px'
 }

load(APIURL)



const  R   = document.getElementById('r').addEventListener('click'  , ()=>{
  
 load(descover+`discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc `)

  
})



const best_dramas =  document.getElementById('best').addEventListener('click' ,  ()=>{
  load(descover+`discover/movie?primary_release_year=1998&sort_by=vote_average.desc `)
})



const comedy  = document.getElementById('comedy').addEventListener('click' , ()=>{
  to_load_category()
 
})

function to_load_category(){
  load(descover+`discover/movie?with_genres=18&sort_by=vote_average.desc `)
}

const header =   document.getElementById('header')
const  menu  =  document.querySelector('.menu')
menu.addEventListener('click' ,   ()=>{
   header.classList.add('grid')
   
})
const close_categories  =  document.getElementById('close_categories')
close_categories.addEventListener('click' ,  ()=>{
  header.classList.remove('grid')
})


const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
      load(SEARCHAPI + searchTerm);

      search.value = "";
  }
});

