const imageUrl = document.getElementById("imageId");

imageUrl.addEventListener("change", function (e) {
  console.log(e);
  const value = e.target.value;
});

// function validateEmail(e) {
//   console.log(e.target.value);
// }

const button = document.getElementsByClassName("btn");

// console.log("button", button);

// const imageCard = document.getElementById("imageId1");

const description = document.getElementById("descriptionId");

const section = document.getElementsByClassName("thumbnails")[0];

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

{
  /* <div class="card">
            <img
              class="image"
              src="https://miro.medium.com/v2/resize:fit:1400/1*TzaiFDmkiEkOxNU7eG43pw.jpeg"
            />
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div> */
}
