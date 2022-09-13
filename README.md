# flinix_challenge_api

Projeto desenvolvido com Node.js, com express e typeorm (para criação do banco de dados), o banco de dados escolhido foi o postgresql. Todo o projeto foi feito usando typescript.

Foi usado Yarn para o gerenciamento de pacotes

## Requerido

  * node.js 
  * postgresql
## Definir variáveis de ambiente (.env)
```
  DB_HOST
  DB_PORT
  DB_USER
  DB_PASS
  DB_NAME
```
## Inicializar o projeto

  * yarn install
  * yarn migration:generate (Criar as migrations)
  * yarn migration:run (Criar as tabelas)
  * yarn dev (Inicializar o projeto)
## Endpoints
```
  GET /doctors
  
  POST /doctors
    BODY : {
      "name": "Doctor name",
      "crm": "CRM code",
      "user_id": {{user id}} 
    }

  POST /doctors/{{doctor_id}}/productivities
    BODY: {
    "service_at": "",
    "value": {{productivity value}},
    "description" : "productivity description"
  }
```
  
