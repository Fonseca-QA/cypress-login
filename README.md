# Projeto de Testes Automatizados com Cypress – OrangeHRM Demo

Este projeto foi desenvolvido para praticar testes automatizados usando Cypress, testando o sistema OrangeHRM (versão de demonstração).

Foram criados testes para:

- Login com credenciais válidas e inválidas
- Navegação para a seção "My Info"
- Atualização de informações pessoais como nome, sobrenome, data de nascimento e nacionalidade

## Sobre o projeto

Durante uma mentoria de qualidade de software que participei, decidi aplicar os conhecimentos adquiridos construindo testes em uma aplicação real. Como tenho experiência anterior no Exército com desempenho e processos, a área de QA fez muito sentido para mim. Este projeto é uma forma prática de continuar evoluindo na área.

## Tecnologias utilizadas

- Cypress (framework de testes automatizados)
- JavaScript (ES6)
- Estrutura de dados com objeto de seletores para facilitar manutenção

## Estrutura do projeto


## Casos de teste incluídos

### Login com sucesso

- Visita a tela de login
- Preenche usuário e senha válidos
- Confirma redirecionamento para o dashboard

### Login com falha

- Usa usuário/senha inválidos
- Verifica a exibição de alerta de erro

### Atualização de informações pessoais

- Navega até "My Info"
- Atualiza nome, sobrenome, ID e data de nascimento
- Seleciona nacionalidade e estado civil
- Verifica mensagem de sucesso
