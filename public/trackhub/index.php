<?php
require_once __DIR__ . '/../../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

// Configuration de Twig pour le dossier des templates
$loader = new FilesystemLoader(__DIR__ . '/../../src/templates');
$twig = new Environment($loader);

$trackhub = isset($_GET['page']) ? $_GET['page'] : 'trackhub/home';
// Chargement du template trackhub.twig depuis le sous-dossier 'trackhub'
$adress = 'index.php';
try {
  switch($trackhub){
    case 'home':
      echo $twig->render('trackhub/home.twig', [
        'title' => 'App TrackHub Logistics',
        'metaDescription'=> 'Application TrackHub logistics pour vos besoin logistique pour suivre et gérer vos palettes.'
    ]);
      break;
    case 'account':
      echo $twig->render('trackhub/account.twig', ['title' => 'Mon compte','adress'=>$adress]);
      break;
    case 'consumer':
      echo $twig->render('trackhub/add_entity.twig', ['title' => 'Ajouter expéditeur ou destinataire','adress'=>$adress]);
      break;
    case 'connect':
      echo $twig->render('trackhub/connect.twig', ['title' => 'App Trackhub connexion','adress'=>$adress]);
      break;
    case 'position':
      echo $twig->render('trackhub/all_position.twig',['title'=>'Positions','adress'=>$adress]);
      break;
  }
} catch (Exception $e){
  echo 'Erreur : ' . $e->getMessage();
}

?>
<!--<a href="../index.php">Retour à l'accueil</a>-->