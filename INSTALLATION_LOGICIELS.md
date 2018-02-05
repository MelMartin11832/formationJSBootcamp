## Etape 1 : installer atom (IDE)

Télécharger atom.zip ici : [http://minio.web.innovation.insee.test/innovation-readonly/atom.zip](http://minio.web.innovation.insee.test/innovation-readonly/atom.zip)  
Dézipper quelque part sur le poste en gardant la même structure (.atom doit être au même niveau que Atom x64)  
Ouvrir Atom x64, atom.exe  
Enjoy :)

### installer des plugins atom

Ouvrer la vue des paramètres via Packages > Settings View
Installer :

* platformio-ide-terminal
* atom-runner

(Personnaliser le thème Atom si besoin)

## Etape 2 : installer nodeJS (+ npm)

Télécharger node ici : [http://minio.web.innovation.insee.test/innovation-readonly/node-v9.4.0-win-x64.zip](http://minio.web.innovation.insee.test/innovation-readonly/node-v9.4.0-win-x64.zip)  
Dézipper quelque part sur le poste

### Ajouter nodeJS au path (chemin des executables connus par windows)

Menu démarrer, Modifier les variables d'environnement POUR VOTRE COMPTE.  
Si Path existe déjà, le modifier pour rajouter le path vers le dossier nodeJS en séparant du path déjà existant par un ;.  
Si Path n'existe pas déjà, l'ajouter (clé Path, valeur lecheminversledossiernode).  
Vérifier que tout fonctionne bien en ouvrant une fenêtre cmd et en tapant :  
node -v  
npm -v

### Configurer le proxy pour npm

Ouvrir une fenêtre cmd et taper :  
npm config set proxy http://proxy-rie.http.insee.fr:8080  
npm config set https-proxy http://proxy-rie.http.insee.fr:8080

## Etape 3 : installer un vrai navigateur (chromium portable) pour les outils de développement

Télécharger Chromium à partir du site de ce site bien pratique : [https://chromium.woolyss.com/](https://chromium.woolyss.com/).  
Version conseillée : "1. Chromium for 64-bit Windows only" -> version avec sync -> Archive.

### A faire plus tard : plugins de débug react / redux
[React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).  
[Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
