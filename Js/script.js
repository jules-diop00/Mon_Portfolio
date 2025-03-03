<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Écouteur d'événement pour le formulaire
        document.querySelector('.contact form').addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche le rechargement de la page

            const name = document.getElementById('name').value;
            const prenom = document.getElementById('prenom').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validation simple
            if (name === '' || prenom === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs.');
                return; // Sort de la fonction si un champ est vide
            }

            // Vérification de l'email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Veuillez entrer un email valide.');
                return; // Sort de la fonction si l'email est invalide
            }

            // Création d'un objet FormData
            const formData = new FormData(this);

            // Envoi des données via fetch
            fetch('send_email.php', { // Remplacez par l'URL de votre script PHP
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert('Message envoyé avec succès !');
                    this.reset(); // Réinitialise le formulaire
                } else {
                    alert('Une erreur s\'est produite. Veuillez réessayer.');
                }
            })
            .catch(error => {
                alert('Une erreur s\'est produite. Veuillez réessayer.');
                console.error('Erreur:', error);
            });
        });
    });
</script>