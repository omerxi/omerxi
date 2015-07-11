# Navigation

La première fois:

    index.html
    signup-with-phone.html
    signup-with-phone-confirmation.html  
    signup-with-phone-verification-code.html
    profile.html       

La deuxième fois (déjà inscrit):

    index.html : on aimerait un login automatique via cookies,
      et "rejoignez le mouvement" est remplacé par ( <<<< suggestion >>>> )
      - les offres (idéalement les dernières pour les "habitués", et les meilleures pour les nouveaux)

Si l'utilisateur n'est pas déjà inscrit, il pourra voir à peu près tout, mais on lui proposera l'inscription sur toutes les pages.

Un parcours typique:

   about.html
   all-offers.html
   search-offer.html
   selected-offers.html (réponses à la recherche)
   show-offer.html ( détail d'une offre avec bouton pour souscrire à l'offre)
   contact.html

une page "news" concernant les VTC et leur écosystème
renverra vers medium, un réseau de blog, un peu comme twitter 

# Services Web sous-jacents

( pourront être appelés en JS par la page, ou par le serveur Play! lors de la création de la page HTML)
 
- envoyer un SMS ( numéro, texte ) ; éventuellement utiliser smsd
- renvoyer le profil utilisateur en JSON-LD
- obtenir liste des offres de numéro i à j
- rechercher une offre par une chaîne de caractères; algolia?
- besoin de gérer une session utilisateur

Pour accéder aux offres, on pourra emballer la base SQL de Dolibarr avec un relai SQL-SPARQL commme D2RQ .

# A FAIRE

- menu déroulant avec clic adapté aux téléphones

-  
