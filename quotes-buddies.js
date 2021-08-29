// post
                             
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postLoad(data)) 
    }
    loadPost() 
     
    function postLoad(post){
       const postContainer = document.getElementById('posts'); 
        for(const posts of post){
         const div = document.createElement('div');
         div.classList.add('post') ;h
         div.innerHTML = `
         <h2>${posts.title}</h2>
         <p>${posts.body}</p> `;
         postContainer.appendChild(div) 
    
        console.log(posts)
        }
    }
    

// Qoutes
const loadQuote = () => { 
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}                                         

const displayQuote = quotes => { 
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quotes.quote;
}
//loadQuote()

// describe yourself
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}   

const displayBuddies = data => {
  const buddies = (data.results)
  const buddiesDiv = document.getElementById('buddies'); 
  for(const buddy of buddies){
      const p = document.createElement('p')
      //p.innerText = buddy.email;
      p.innerText =`First Name: ${buddy.name.first}, Last Name: ${buddy.name.last} Email: ${buddy.email}`;//dynamic vabe nibo
      buddiesDiv.appendChild(p)
     console.log(buddy.name.first , buddy.name.last); 
  }
}
loadBuddies()



     
