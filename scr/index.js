console.log("Hello, World!");

function generatePoem(event) {
  event.preventDefault();
  console.log("Generating poem...");

  //   let poemElement = document.querySelector("#poem");
  //   poemElement.innerHTML =
  // "Roses are red,\nViolets are blue,\nThis is a poem,\nJust for you.";

  const typewriter = new Typewriter("#poem", {
    autoStart: true,
  });

  typewriter
    .typeString("Roses are red,")
    .typeString("<br>Violets are blue,")
    .typeString("<br>This is a poem,")
    .typeString("<br>Just for you.")
    .start();
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
