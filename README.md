FullStack Project: Task Management API
Este projeto é uma aplicação FullStack para gerenciamento de tarefas, desenvolvida utilizando Node.js, Express, MySQL e Handlebars. A API fornece funcionalidades de CRUD 
(Create, Read, Update, Delete) para gerenciamento de tarefas.

Instalação
Clone o repositório:

git clone https://github.com/ElieldsonKervem/fullStackProject

cd seu-repositorio
npm install

Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

DB_HOST=localhost
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=nome-do-banco

Configure o banco de dados MySQL com a estrutura necessária. Um exemplo de tabela:

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL
);

Execução
Inicie o servidor:

npm start
Endpoints da API
GET /tasks
Retorna todas as tarefas.
POST /tasks
Cria uma nova tarefa.
PUT /tasks/
Atualiza uma tarefa existente.
DELETE /tasks/
Deleta uma tarefa.
Validação de Dados
Middleware de validação de dados está incluído para garantir que todos os campos obrigatórios sejam fornecidos e corretos.
|-- Backend
  ├── src
  │   ├── controllers
  │   │   └── taskController.js
  │   ├── models
  │   │   └── taskModels.js
  │   ├── middleware
  │   │   └── validateBody.js
  │   └── server.js
  ├── package.json
  ├── .env
  └── README.md
|-FrontEnd

Licença
Este projeto está licenciado sob a MIT License.

