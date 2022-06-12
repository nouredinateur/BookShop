# BookShop


## Backend setup

create the DB
```bash
php ./bin/console doctrine:database:create
```
migrate the schemas 
```bash
php bin/console doctrine:migrations:migrat
```
seed mock data
```bash
bin/console hautelook:fixtures:load
```
