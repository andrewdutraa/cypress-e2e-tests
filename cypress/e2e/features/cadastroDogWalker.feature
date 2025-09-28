Feature: Cadastro dog walker

#se quiser rodar apenas um cenário, coloque a tag @only encima do cenário desejado e descomente a linha 11 do cypress.config.js

  Scenario: Realizar cadastro para cuidar de cães com sucesso
     Given que estou na página de cadastro
       And quero ser dog walker
      When preencho os campos obrigatórios e seleciono a ativadade extra cuidar
       And envio o formulário
      Then devo ver a mensagem de sucesso

  Scenario: Realizar cadastro para adestrar cães com sucesso
     Given que estou na página de cadastro
       And quero ser dog walker
      When preencho os campos obrigatórios e seleciono a ativadade extra adestrar
       And envio o formulário
      Then devo ver a mensagem de sucesso

 Scenario: Realizar cadastro sem preencher os campos obrigatórios
    Given que estou na página de cadastro
      And quero ser dog walker
     When tento enviar o formulário sem preencher os campos obrigatórios
     Then apresenta os campos que são obrigatórios preencher


