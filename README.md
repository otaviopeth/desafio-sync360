#### Como executar:

Clone o projeto e adicione as dependências do back-end - criado com o Laravel:

```
php composer install
```
Adicione um arquivo .env na pasta raiz - basta renomear o .env.example para .env pois para simplificar não adicionei variaveis extras e utilizei o default _sqlite_. Em seguida gere uma key:
```
php artisan key:generate
```
Crie um arquivo vazio "database.sqlite" em /$raizdoprojeto/database/ e popule o banco.
```
php artisan migrate:fresh --seed
php artisan serve - por padrão será executado um servidor na porta 8000 - se for preciso alterar, modifique também no front (/src/libs/axios/)
```

O front-end foi desenvolvido com a biblioteca React.

```
npm i
npm run dev - por padrão será executado na porta 3000
```
Observações: 
O front-end não cria novos usuários, portanto o id do usuário está _hard coded_ como "1" já que no lado do servidor está sendo gerado apenas um usuário inicial. 
