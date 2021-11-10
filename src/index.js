console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  //CHALLENGE 1
  fetch(imgUrl)
  .then(res => res.json())
  .then(images => {
    // img.message holds arr of img urls
    images.message.forEach(imageURL => {
      //create node
      let imgNode = document.createElement("img");
      imgNode.src = imageURL;
      document.getElementById("dog-image-container").appendChild(imgNode);
    });
  });

  //CHALLENGE 2




});