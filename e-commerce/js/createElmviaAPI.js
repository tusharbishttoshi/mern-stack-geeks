const imageUrl = document.getElementById("imageId");

imageUrl.addEventListener("change", function (e) {
  console.log(e);
  const value = e.target.value;
});

const button = document.getElementsByClassName("btn");

const search = document.getElementById("search");

search.addEventListener("change", function (e) {
  console.log(e.target.value);
  filterProducts(e.target.value);
});

let products;

const section = document.getElementsByClassName("thumbnails")[0];

const children = section.children;

function filterProducts(searchText) {
  let filteredProducts = products.filter((product) =>
    product.title.includes(searchText)
  );

  for (var i = 0; i < children.length; i++) {
    children[i].style.display = "";
    let textContent = children[i].getElementsByTagName("p")[0].textContent;

    const filterItem = filteredProducts.find(
      (product) => product.title === textContent
    );

    if (filterItem) {
      children[i].style.display = "";
    } else {
      children[i].style.display = "none";
    }
  }
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data.products;
    showProducts(products);
  });

function showProducts(products) {
  products.forEach((element) => {
    const { thumbnail, title } = element;

    const product = createProduct(thumbnail, title);

    section.appendChild(product);
  });
}

function createProduct(imageUrl, description) {
  const productDiv = document.createElement("div");
  productDiv.className = "card";

  const image = document.createElement("img");
  image.className = "image";
  image.setAttribute("src", imageUrl);

  console.log("image", image);

  const paragraph = document.createElement("p");
  paragraph.innerHTML = description;

  console.log("paragraph", paragraph);

  productDiv.appendChild(image);
  productDiv.appendChild(paragraph);

  //console.log("album div", albumDiv);

  return productDiv;
}

// console.log("button", button);

// const imageCard = document.getElementById("imageId1");

const description = document.getElementById("descriptionId");

button[0].addEventListener("click", function () {
  console.log("button clicked");
  const album = createAlbum(imageUrl, description);

  console.log(section);
  section.appendChild(album);

  console.log("album in section", section);
});

function createAlbum(imageUrl, description) {
  const albumDiv = document.createElement("div");
  albumDiv.className = "card";

  const image = document.createElement("img");
  image.className = "image";
  image.setAttribute("src", imageUrl.value);

  console.log("image", image);

  const paragraph = document.createElement("p");
  paragraph.innerHTML = description.value;

  console.log("paragraph", paragraph);

  albumDiv.appendChild(image);
  albumDiv.appendChild(paragraph);

  console.log("album div", albumDiv);

  return albumDiv;
}