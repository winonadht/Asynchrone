fetch("./files.json");

function chargerJson() {
  let element = document.getElementById("list");
  fetch("files.json")
    .then((res) => res.json())
    .then((data) => {
      data.members.forEach((member) => {
        let listElement = document.createElement("li");
        listElement.textContent = member.name;
        element.appendChild(listElement);
      });
    });
}

document.getElementById("buttonJson").addEventListener("click", chargerJson);
