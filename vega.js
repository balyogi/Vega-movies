var cross=document.querySelector('.text i')
var text=document.querySelector('.text');
var coll=document.querySelector('.movies-collection');
var input=document.querySelector('input');
var not=document.querySelector('h1.Not');
let a="";
const spinner = document.getElementById("spinner");

window.addEventListener('load',function()
{
    spinner.removeAttribute('hidden');
}) 


cross.addEventListener('click',function()
{
        text.style.display="none";
})



var open=document.getElementById('open');
var close=document.getElementById('close');
var navlist=document.querySelector('.nav-list');
open.addEventListener('click',function()
{
   navlist.style. top="0";
   close.style.opacity="1";
})

close.addEventListener('click',function()
{
    navlist.style.top="-249%";
    close.style.opacity="0";
})


var hoverd=document.querySelectorAll('.filled');
var hoverdchild=document.querySelectorAll('#hoverd-child');
hoverd.forEach(items =>
    {
        items.addEventListener('click',function()
        {
            hoverdchild.forEach(dat=>
                {
                    
                   
                    dat.classList.toggle('height');
                    
                })
           
        })

    })


    var serach=document.querySelector('.search i')
    var inpt=document.querySelector('.search input')
    serach.addEventListener('click',function()
    {
inpt.classList.toggle('toogle');
    })

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1')
   
.then(response => response.json())
.then(data => {
   spinner.setAttribute('hidden', '');
   console.log(data);
   
        const baseURL = 'https://image.tmdb.org/t/p/w500';
        
        data.results.forEach(movie => {
         
            console.log(movie.original_title)
  
    const posterURL = baseURL + movie.poster_path;
            a+=`    <div class="movies">
            <div class="image-movie">
                <img src="${posterURL}">
    
            </div>
            <p class="movie-title">${movie.original_title}</p>
        </div>`
            // var texted=document.createElement('p');
            // var imged=document.createElement('img');
            // texted.textContent=`${movie.original_title}`
          
            inpt.addEventListener('keypress',function()
            {
                var val=inpt.value;
                console.log(val);
               console.log(movie.id);
                if(val==`${movie.id}`)
                {
                 console.log("hello");
  


                }
                else 
                {
                    coll.style.display="none";
                    not.style.display="block";
               
                }
             
        });
        
  
      
  
    coll.insertAdjacentHTML('afterbegin',a);
  
    })
  
});





