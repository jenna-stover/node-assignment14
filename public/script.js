const getBreeds = async () => {
    try {
        return (await fetch("api/breeds/")).json();
    } catch(error) {
        console.log(error);
    };
}

const showBreeds = async () => {
    let breeds = await getBreeds();
    let breedsDiv = document.getElementById("breed-list");
   
    breeds.forEach((breed)=>{
        const section = document.createElement("section");
        breedsDiv.append(section);

        const a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = breed.name;
        a.append(h3);

        a.onclick = () => {
            const breedDetails = document.getElementById("breed-details");
            breedDetails.innerHTML = "";
            const p = document.createElement("p");
            breedDetails.append(p);
            p.innerHTML = breed.appearance;
        };
    });
};

window.onload = () => showBreeds();