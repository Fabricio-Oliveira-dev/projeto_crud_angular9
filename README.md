# Cadastro realizado com Angular 9 e o consumo da API "api_springboot_angular9" do meu mesmo repositório GitHub.
Este projeto é um cadastro de usuários utilizando as operações de banco de dados, criar, visualizar, editar e deletar. Conta também com o download de relatório em pdf utilizando JasperSoft Studio e gráfico de barras utilizando Google Charts

# Tecnologias utilizadas no Back-End
Spring Boot, Spring Data JPA, Spring Security & JWT

# Tecnologias utilizadas no Front-End
Angular 9, jQuery & Bootstrap

# Login
A tela de login conta com autenticação JWT e atualização do token, após o usuário ter entrado no sistema, dentro de 2 (dois) dias o token é expirado e é necessário que um novo log in seja feito. Ao ser carregado a tela, ambos botões ficam desabilitados e esperando que o usuário digite suas credenciais. Ao ser digitado o e-mail, o botão de recuperar acesso é ativado (pois é assumido que o usuário esqueceu a senha e portanto não será possível acessar o sistema). Ao ser digitado o e-mail e senha, o usuário está liberado, caso correto as credenciais, para logar no projeto web.

![tela_login](https://user-images.githubusercontent.com/105288563/232151043-fdb076c8-54b2-411f-8cf6-bc408e48ac26.jpg)

![recuperar_senha_habilitado](https://user-images.githubusercontent.com/105288563/232151057-8f226675-fa98-41e7-aa6e-9ad6a97a7486.jpg)

![acessar_habilitado](https://user-images.githubusercontent.com/105288563/232151070-3d124da7-f682-43cb-866e-9dd7cc1f0e59.jpg)

# Página Inicial
Após o login ter sido realizado com sucesso, o usuário é redirecionado para a página inicial do sistema. 

Através da barra de navegação no topo da página, por meio do botão ***Home***, é possível o usuário voltar a tela inicial;

Por meio do botão ***Menu***, realizar o cadastro e/ou ver a listagem de usuários já cadastrados, visualizar o relatório em pdf dos usuários ou visualizar o gráfico usuário x salário recebido;

Ao cliar no botão ***Sair*** o usuário é redirecionado para a tela de login.

![pagina_inicial](https://user-images.githubusercontent.com/105288563/232152927-f4a91dd0-1f1d-4b69-b556-ae5d4032e273.jpg)

![menu_pagina_inicial](https://user-images.githubusercontent.com/105288563/232152962-bd9fdf19-1003-4dab-b616-7a55eba4155f.jpg)

# Página de Usuário
Acessando a página de usuário, é possível fazer a busca por algum usuário já cadastrado (palavras minúsculas ou maiúsculas), realizar um novo cadastro, ou imprimir um relatório em pdf dos usuários que fica suspenso em tela. Esta página contém carregamento sob demanda dos usuários para performance na web, a cada 5 usuários listados uma nova guia é criada. Na 1º página o botão de ***voltar*** fica desabilitado (pois sendo a primeira página não há o que voltar) e indo para a próxima página ou adiante, o botão de voltar é funcional. Sendo assim, na última página o botão de ***avançar*** fica desabilitado pois não há o que ir adiante.

![lista_usuario](https://user-images.githubusercontent.com/105288563/232155196-2ba4fc3b-63e2-4306-88f7-d0b81ab34c34.jpg)

![lista_usuario2](https://user-images.githubusercontent.com/105288563/232155273-7aa2ca44-c467-492f-a593-1ac40eb0119b.jpg)

![pesquisa_nome](https://user-images.githubusercontent.com/105288563/232160745-0f69b58a-3efd-43ef-8c08-3a15de112726.jpg)

![pesquisa_nome2](https://user-images.githubusercontent.com/105288563/232160880-016f07c0-c817-496e-9178-4137cc115c84.jpg)

![relatorio_usuario](https://user-images.githubusercontent.com/105288563/232157506-98a18983-7c1b-4214-b4d4-e10efc49c48a.jpg)


# Cadastro de usuário
Mediante a tela de novo usuário, as informações com asterísticos vermelhos em frente ao campo de digitação são obrigatórias para preenchimento. Caso contrário, não será possível cadastrar um novo registro. O campo ID é desabilitado pois será gerado automaticamente.

O campo ***CPF*** conta com formatação no formato brasileiro 000.000.000-00 e validação que verifica a autenticidade do número informado;

O campo de ***Data. Nascimento*** é um calendário datepicker, o usuário pode escolher no calendário a data ou digitar manualmente;

o campo ***Profissão*** é um checkbox aonde é possível selecionar a profissão do usuário (definido como sendo Programador Java, Analista DBA, Gerente de Projeto ou Suporte TI);

o campo ***Salário*** possui formatação para o valor monetário real (R$);

o campo ***Telefone*** possui formatação para o formato brasileiro de número ( (00) 0 0000-0000 ).

Clicando no botão ***Voltar***, o usuário é redirecionado para a página de listagem de usuários.

![cadastro_usuario](https://user-images.githubusercontent.com/105288563/232157464-ca019e8a-1b75-47d9-a0e7-4e321194bfd4.jpg)

# Relatório
Mediante a tela de relatório, ao passar os parâmetros de data de nascimento inicial e data de nascimento final (o usuário pode escolher no calendário a data ou digitar manualmente), o mesmo relatório da seção da página de usuário é exibido. Caso as datas passadas sejam inválidas (ou seja, não tenha nenhum usuário dentro do período de data específicado) uma folha em branco é mostrada.

![relatorio_usuario](https://user-images.githubusercontent.com/105288563/232159716-0de9f774-ef19-44de-ade6-eabe5d73c8ab.jpg)

![relatorio_usuario2](https://user-images.githubusercontent.com/105288563/232161472-788ca147-049b-4944-a39a-124e98ff3871.jpg)


# Gráfico Salário
Por meio do gráfico de salário, uma nova página exibe um gráfico de barras com o nome dos funcionários (eixo x) e seus respectivos salários (eixo y). Caso o salário do funcionário termine com os decimais 00 o valor só vai até antes da vírgula.

![grafico_usuarios](https://user-images.githubusercontent.com/105288563/232160016-dea843e9-3838-4617-90f7-75694cbb6764.jpg)
