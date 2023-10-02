let szavak =JSON.parse(localStorage.getItem("lista")) || [];
document.getElementById("btn").onclick = () => {
    let ujSzo = document.getElementById("szo").value;
    console.log(ujSzo);

    szavak.push(ujSzo);
    localStorage.setItem("lista", JSON.stringify(szavak));
    kiir();
}

function kiir() {
    let listaHTML = "";
    let index = 0;

    for (const szo of szavak) {
        listaHTML += `
            <li>
                <span>${szo}</span>
                <button onclick="torles(${index})">x</button>
            </li>
        `;
        index++; 
    }

    document.getElementById("lista").innerHTML = listaHTML;
}

function torles(index) {
    szavak.splice(index, 1);
    localStorage.setItem('lista', JSON.stringify(szavak));
    kiir();
}

window.onload = function() {
    localStorage.removeItem('lista');
    kiir(); 
}