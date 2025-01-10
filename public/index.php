<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

// Configuration de Twig
$loader = new FilesystemLoader(__DIR__ . '/../src/templates');
$twig = new Environment($loader, [
    'cache' => false, // Désactive le cache pour le développement
]);

// Définition des routes
$page = isset($_GET['page']) ? $_GET['page'] : 'home'; // Par défaut, la page d'accueil

// Logique pour charger les pages
try {
    switch ($page) {
        case 'home':
            echo $twig->render('home.twig', ['title' => 'TrackHub Logicistics','trackhub'=>'trackhub/index.php']);
            break;

        case 'contact':
            echo $twig->render('contact.twig', ['title' => 'Contact']);
            break;
        case 'story':
            echo $twig->render('story.twig',['title'=> 'Notre histoire']);
            break;
        case 'services':
            echo $twig->render('services.twig',['title'=> 'Nos services']);
            break;
        default:
            echo $twig->render('home.twig', ['title' => 'Accueil']); // Page par défaut
    }
} catch (Exception $e) {
    echo "Erreur : " . $e->getMessage();
}






