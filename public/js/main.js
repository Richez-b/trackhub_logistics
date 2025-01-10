function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function applyRowColors() {
    // Récupérer le tbody
    const tbody = document.getElementById('table-body');

    // Obtenir tous les <tr> dans le <tbody>
    const rows = tbody.querySelectorAll('tr');
    console.log('Nombre de lignes dans le tbody :', rows.length);

    // Parcourir chaque ligne et appliquer des couleurs alternées
    rows.forEach((row, index) => {
        if (index % 2 === 0) {
          console.log(index)  
          row.classList.add('table-primary'); // Gris clair pour les lignes paires
        } else {
          row.classList.add('table-danger'); // Gris clair pour les lignes impaires
        }
    });
}

// Appliquer automatiquement les couleurs une fois le DOM chargé
document.addEventListener('DOMContentLoaded', applyRowColors);
