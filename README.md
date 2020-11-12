Pour lancer l'app:
1 - télécharger/cloner le dossier
  > git clone https://github.com/yoan34/calculator-django-react.git
  
2 - Aller dans le dossier
  > cd calculator-django-react/
  
3 - Créer un environnement virtuel dans le dossier backend et activer le
  > cd backend/ && python -m venv env && source env/scripts/activate
  
4 - télécharger les dépendances au niveau du fichier requirements (root)
  > cd .. && pip install -r requirements.txt
  
5 - télécharger les modules frontend
  > cd frontend/gui && npm install
  
5 - lancer le serveur django sur une console
  > cd .. && cd .. && cd backend/drc/ && python manage.py runserver
  
6 - lancer l'application côté front sur une autre console
  > npm start
  
Aller sur http://localhost:3000/ et l'application se lance.
