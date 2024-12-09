const COHORT = "2409-GHP-ET-WEB-PT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;

// === State ===

const state = {
  artists: [],
};

/** Updates state with artists from API */
async function getArtists() {
  // TODO
  //write function to GET those artists
  //use fetch function
  try {
    const promise = await fetch(API_URL);
    const response = await promise.json();
    if (!response.success) {
      throw response.error;
    }
    console.log(response.data);
    state.artists = response.data;
  } catch (error) {
    // alert("unable to load Artists")
  }
}

/** Asks the API to create a new artist based on the given `artist` */
async function addArtist(artist) {
  // TODO
  //POST = creating
  // not get
  const promise = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artist),
  });
  const response = await promise.json();
  console.log(response);
  render();
}

// === Render ===

/** Renders artists from state */
function renderArtists() {
  // TODO
  const ul = document.getElementById("artists");
  state.artists.forEach((artist) => {
    const li = document.createElement("li");
    li.textContent = artist.name;
    ul.appendChild(li);
  });
}

/** Syncs state with the API and rerender */
async function render() {
  await getArtists();
  renderArtists();
  const form = document.getElementById("addArtist");
  const button = document.getElementById("add-artist");
  button.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData= new FormData(form);
    const name = formData.get("artistName")
    const imageUrl = formData.get("imageUrl")
    const description = formData.get("description")
    const artist = {
      name: name,
      imageUrl: imageUrl,
      description: description,
    }
    addArtist(artist);
  });
}

// === Script ===

render();

// TODO: Add artist with form data when the form is submitted
