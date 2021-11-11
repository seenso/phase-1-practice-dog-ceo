// console.log('%c HI', 'color: firebrick')
/* ------------------MY OWN CODE BELOW------------------
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedNode = document.createElement("li");

const renderImg = () => {
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
};

// if(breedNode.innerText[0] === breedFilter) {

const renderList = () => {
  fetch(breedUrl)
  .then(res => res.json())
  .then(dogBreeds => {
    // console.log("BREEDURL DATA", dogBreeds.message); 
    //dogBreeds.message is an obj where key is breed and value is [];
    for (let breed in dogBreeds.message) {
      let breedNode = document.createElement("li");
      breedNode.innerText = breed;
      console.log("RENDERLIST BREEDNODE", breedNode);
      document.getElementById("dog-breeds").appendChild(breedNode);

      //CHALLENGE 3
      breedNode.addEventListener("click", () => {
        console.log("I clicked a breed!", breedNode);
        breedNode.setAttribute("style", "color: red");
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  //CHALLENGE 1 -- load images
  renderImg();
  
  //CHALLENGE 2 -- load dog breed list
  renderList();

  /* COPY OF fetch()s from Challenge 1 - 3
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
      let breedNode = document.createElement("li");
      breedNode.innerText = breed;
      document.getElementById("dog-breeds").appendChild(breedNode);

      //CHALLENGE 3
      breedNode.addEventListener("click", () => {
        console.log("I clicked a breed!", breedNode);
        breedNode.setAttribute("style", "color: red");
      });
    }
  });
  
});
*/

// ------------- CODE BY FOLLOWING YOUTUBE TUTORIAL -------------

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const container = document.querySelector("#dog-image-container");
const ulContainer = document.querySelector("#dog-breeds");
const dropDown = document.querySelector("#breed-dropdown");
let breedsArray; //making it a global variable to avoid scoping issues.

ulContainer.addEventListener("click", handleClick);
//CHALLENGE 4 BELOW
dropDown.addEventListener("change", handleChange);
//CHALLENGE 4 ABOVE

function getImages() {
  fetch(imgUrl)
  .then(res => res.json())
  .then(images => {
    const imgs = images.message
    let imgsArray = createImgElement(imgs);
    renderElement(imgsArray)
  });
}

function createImgElement(imgs) {
  return imgs.map(img => {
    let i = `<img src=${img}>`;
    return i
  })
}

function renderImgs(imgsArray) {
  imgsArray.forEach(element => {
    renderElement(element);
  })
}

function renderElement(element) {
  ulContainer.innerHTML += element;
}

function getBreeds() {
  fetch(breedUrl)
  .then(res => res.json())
  .then(breeds => {
    breedsArray = Object.keys(breeds.message);
    const breedsLis = createLiElement(breedsArray);
    renderLis(breedsLis);
  })
}

function createLiElement(breedsArray) {
  return breedsArray.map(breed => {
    let li = `<li>${breed}</li>`;
    return li
  })
}

function renderLis(breedsLis) {
  breedsLis.forEach(element => {
    renderElement(element);
  })
}

function handleClick(event) {
  if (event.target.style.color === 'red') {
    event.target.style.color = 'black'
  } else {
    event.target.style.color = 'red'
  }
}

function handleChange(event) {
  //added empty option in index.html so a change can be detected for the event listener
  const letter = event.target.value;
  //filter out breeds that starts with letter using .filter & .startsWith() methods
  const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter));
  const filteredBreedsLis = createLiElement(filteredBreeds);
  ulContainer.innerHTML = ''; //we want to clear the list before rendering it below.
  renderLis(filteredBreedsLis)

  
}










//invoke functions
// getImages();
getBreeds();