const joke = document.querySelector("#joke");
const button = document.querySelector("button");
const url = "https://icanhazdadjoke.com";
const options = {
  headers: {
    Accept: "application/json",
  },
};

async function updateJoke() {
  let data = "Failed to get a joke";
  try {
    data = await window.http.get(url, options);
  } catch {}
  
  joke.innerText = data.joke;
}

updateJoke();

button.addEventListener("click", updateJoke);

