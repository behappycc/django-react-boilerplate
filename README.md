# django-react-boilerplate

## Installation
### Python module
* pip install -r requirement.txt

### Node.js
windows: https://nodejs.org/en/

linux: 
* curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
* sudo apt-get install -y nodejs
* npm install webpack -g

###Usage
```
cd django_react_boilerplate
npm install
webpack
python3 manage.py check
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000
```