//fonction asynchrone
async function sendRequest() {
    try {
        const response = await fetch('https://thatsthespir.it/api');
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }

        // Convertir la reponse en texte
        const data = await response.text();

        // Mettre la réponse dans la div avec l'id "autor"
        document.getElementById('autor').innerHTML = data;
    } catch (error) {
        console.error('Erreur', error.message);
    }
}
// fonction sendRequest lorsque la page est chargée
window.onload = function () {
    sendRequest();
};
function refresh() {
    location.reload();
}