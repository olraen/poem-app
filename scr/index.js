function displayPoem(response) {
  const typewriter = new Typewriter("#poem", {
    autoStart: true,
    delay: 30,
  });

  typewriter.typeString(response.data.answer).start();
}

function generatePoem(event) {
  event.preventDefault();
  console.log("Generating poem...");

  let poemTopic = document.querySelector("#input-text");
  let prompt = `Write a short poem about ${poemTopic.value}`;
  let context =
    "The poem should be in imabic tetrameter and have a rhyming scheme of AABB, with two stanzas. Separate each line with a <br> tag and separate stanzas with an extra <br> tag. Sign the peom at the bottom with '- ChatGPT'. Make sure to follow the instructions";

  let apiKey = "1o02ad6aa40e7b19fa37f8t5928ba37d";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
