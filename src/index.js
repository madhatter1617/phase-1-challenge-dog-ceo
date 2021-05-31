console.log('%c HI', 'color: firebrick')

function addImage(dogPic){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

fetch('https://dog.ceo/api/breeds/image/random/4')
.then(res => res.json())
.then(dogPic.message.forEach) 

}