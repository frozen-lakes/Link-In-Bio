document.querySelector("body").innerHTML = `
<main>
    <nav>
      <div>
        <img draggable="false" src="./assets/logo.png" alt="Logo">
      </div>
      <div>
        <h2>Frozen Lakes</h2>
      </div>
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
        <a href="">
          <div>
            <img src="${link.icon}" draggable="false" alt="Logo">
          </div>
          <div>
            <h3>${link.name}</h3>
          </div>
        </a>
        `;
    }
    placeholder.innerHTML = out;
  });
