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
  fetch(breedUrl)
  .then(res => res.json())
  .then(dogBreeds => {
    // console.log("BREEDURL DATA", dogBreeds.message); //Obj, where key is breed and value is [];
    for (let breed in dogBreeds.message) {
      // console.log("BREED ", breed);
      let breedNode = document.createElement("li");
      breedNode.innerText = breed;
      document.getElementById("dog-breeds").appendChild(breedNode);
    }
  });



});