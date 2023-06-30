fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
              console.log(json);  
              showProducts(json);
            });

const section = document.getElementsByClassName("flash-sale-product-list")[0];
console.log(section);
  function createProduct(img, title, desc) {
   
    const productDiv = document.createElement("div");
    productDiv.className = "card";
  
    const images = document.createElement("img");
    images.className = "image";
    images.setAttribute("src", img);
  
    console.log("image", images);
    
  
    const description = document.createElement("p");
    description.innerHTML = desc;
  
    console.log("paragraph", description);
  
    const mytitle = document.createElement('h4');
    mytitle.innerHTML = title;
    console.log("title",mytitle);

    productDiv.appendChild(images);
    productDiv.appendChild(description);
  
    return productDiv;
  }

  function showProducts(products) {
    products.forEach((element) => {
      const { image, title, description } = element;
      const products1 = createProduct(image, title, description);
      console.log(section);
      section.appendChild(products1);
    });
  }