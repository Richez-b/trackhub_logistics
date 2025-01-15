function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
// Appliquer automatiquement les couleurs une fois le DOM chargé
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

function addRow() {
  const icons = document.querySelectorAll(".bi-caret-right-fill");
  icons.forEach(icon => {
      icon.addEventListener("click", function () {
          const row = this.closest("tr"); // Trouver l'ancêtre le plus proche correspondant à un sélecteur.
          let detailsRow = row.nextElementSibling; // Trouver l'élément suivant au même niveau.
          
          // verifie s'il y'a ligne qui existe deja
          if (detailsRow && detailsRow.classList.contains("details-row")) {
              // Condition ternaire pour afficher ou non la nouvelle ligne
              detailsRow.style.display = detailsRow.style.display === "none" ? "table-row" : "none";
          } else {
              // Sinon, création d'une nouvelle ligne
              detailsRow = document.createElement("tr");
              detailsRow.classList.add("details-row");

              const cell = document.createElement("td");
              cell.colSpan = 3; // Définir l'attribut colspan
              cell.innerText = "Informations complémentaires :\nVous pouvez ajouter ici toutes les informations nécessaires.";
              
              detailsRow.appendChild(cell);

              // Insérer la nouvelle ligne avant la prochaine ligne déjà existante
              row.parentNode.insertBefore(detailsRow, row.nextElementSibling);
          }

          // Changer l'icône (+ ou -)
          this.classList.toggle("bi-caret-right-fill");
          this.classList.toggle("bi-caret-up-fill");
      });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const currentQuery = window.location.search;
  if(currentPath == '/trackhub/index.php' && currentQuery == '?page=all-positions'){
    applyRowColors();
  }
  if(currentPath == '/trackhub/index.php' && currentQuery == '?page=position'){
    addRow();
  } 
});

