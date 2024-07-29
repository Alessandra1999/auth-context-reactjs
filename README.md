<h1>Reforçando - UseContext e ContextAPI</h1>

### Exercício opcional proposto pelo professor Jaques durante o Módulo de ReactJS do curso de dev full stack da +PraTi

<hr/>

### Exercício 2: Contexto de Autenticação

Objetivo: Criar um contexto para gerenciar o estado de autenticação do usuário.

Instruções:

- Crie o Contexto: Crie um novo arquivo AuthContext.jsx e defina um contexto chamado AuthContext.- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor AuthContext.Provider e forneça um estado para o usuário (logado/deslogado).
- Consuma o Contexto: Crie dois componentes, LoginButton.jsx e LogoutButton.jsx, que consumam o contexto AuthContext e alterem o estado de autenticação do usuário.
- Exiba o Estado: Crie um componente UserStatus.jsx que consuma o contexto AuthContext e exiba uma mensagem informando se o usuário está logado ou deslogado.