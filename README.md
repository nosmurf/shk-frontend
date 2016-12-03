# Create project Firebase 

Access to console of: 
[![N|Solid](https://firebase.google.com/_static/898735793c/images/firebase/lockup.png)](https://console.firebase.google.com)

Create the project and access the console.


# Config Web
Inside the console, in the side menu is the option authentication, click and them 'configuración web'. appears Pop up with the application credentials that we will insert in our web application.


# shk-frontend

This is the web part for "shk" project

In this repo We are working with AngularJS and Bootstrap

# config

install apache2 with comand line

```sh
sudo apt-get update
sudo apt-get install apache2
```

# deploy

download code from github

```sh
git clone https://github.com/nosmurf/shk-frontend.git
```
copy source code in apache 
```sh
cd shk-frontend
cp * /var/www
sudo /etc/init.d/apache2 start
```

open browser and got to 
```sh
localhost/project/index.html
```
# License

![his work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License




