const getJSON = async () => {
    try {
        let response = await fetch("api/").json();
        return await response.json();
    } catch(error) {
        console.log("error retrieving json");
        return "";
    }
};