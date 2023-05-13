document.querySelector("body").innerHTML = `
<main>
    <nav>
        <img draggable="false" src="./assets/logo.png" alt="Logo">
        <h2>Frozen Lakes</h2>
    </nav>
    <section>

    </section>
</main>
`;

fetch("./data/links.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (links) {
    let placeholder = document.querySelector("section");
    let out = "";
    for (let link of links) {
      out += `
        <div>
          <img src="${link.icon}" draggable="false" alt="Logo">
          <h3>${link.name}</h3>
        </div>
        `;
    }
    placeholder.innerHTML = out;
  });
