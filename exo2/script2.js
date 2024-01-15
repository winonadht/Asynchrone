let fetchapi = () =>{
    let nom = document.getElementById('Name').value;
    fetch('https://api.disneyapi.dev/character?name=' + nom)
    .then((response) => response.json())
    .then((data) =>{
       console.log(data)
       console.log(data.data) 
        data.data.forEach((element) => {
            let div = document.createElement("div");
            div.textContent = element.name;
            document.body.appendChild(div);
        });
    }) 
}


let btn = document.getElementById('Btn');
btn.addEventListener('click', fetchapi);