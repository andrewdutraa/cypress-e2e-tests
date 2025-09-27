Feature: Cadastro para cuidar de cães

  Scenario: Realizar cadastro para cuidar de cães com sucesso
     Given que estou na página de cadastro
       And quero ser dog walker
      When preencho os campos obrigatórios
       And envio o formulário
      Then devo ver a mensagem de sucesso