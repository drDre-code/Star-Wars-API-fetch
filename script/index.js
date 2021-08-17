for (let id = 1; id < 11; id++) {
    // Get data from image file
    let image = ["image1.jpeg", "image2.png", "image3.jpeg", "image4.webp", "image5.jpeg", "image6.png", "image7.jpeg", "image8.jpeg", "image9.jpg", "image10.png",]
    let img = document.createElement("img")
    img.src = `/images/${image[id - 1]}`
    let pic = document.getElementById(`img${id}`)
    pic.appendChild(img)

    // fetch data from API
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(`name${id}`).innerHTML = data.name
            const { name, height, gender } = data;
            return {
                name,
                height,
                gender
            }
        }).then(x => document.getElementById(`char${id}`)
            .innerHTML = `Name: ${x.name} <br/>
            Height: ${x.height} <br/>
            Gender: ${x.gender}`)
        .catch(error => console.error(error))

    // Click function
    let item = document.querySelector(`#star${id}`);
    item.addEventListener("click", () => display(id));
    function display(id) {
        let text = document.getElementById(`char${id}`);
        if (text.style.display === "none") {
            
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
}


// module.exports = { main }
