window.onload = ()  => {
    document.getElementById("fetchBtn").addEventListener("click", () => {
        let url = "https://pokeapi.co/api/v2/";
        fetch(url)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => {
            throw new Error(`Fetch failed: ${error}`);
        });
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
        .then(registraton => console.log(`Registration succesful: ${registraton.scope}`))
        .catch(
            error => {
                throw new Error(`Something went wrong: ${error}`)
            }
        );
    }
}