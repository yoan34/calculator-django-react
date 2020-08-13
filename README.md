Pour lancer l'app:
1 - télécharger/cloner le dossier
2 - Créer un environnement virtuel dans le dossier venv et activer le
  > cd backend && virtualenv env && source env/scripts/activate
3 - télécharger les dépendances au niveau du fichier requirements (root)
  > pip install -r requirements.txt
4 - télécharger les modules frontend
  > cd frontend/gui && npm install
5 - lancer le serveur django sur une console
  > python manage.py runserver
6 - lancer l'application côté front sur une autre console
  > npm start
  
