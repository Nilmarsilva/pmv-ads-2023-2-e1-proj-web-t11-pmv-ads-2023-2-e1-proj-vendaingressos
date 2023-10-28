# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

[Utilize a estrutura abaixo para cada funcionalidade entregue na etapa]

### Tela Principal (Home Page)

Responsável: Bernardo Alves Sirqueira.

As estruturas de dados foram baseadas em HTML, CSS e JS.

Essa tela é a porta de entrada para o conteúdo e a interface do site. Pode-se perceber que optou por uma homepage clara e simples, com informações necessárias e suficientes para que o usuário possa navegar por todo o site. Além disso, a navegação é intuitiva, pois os pontos de interação (por exemplo, "Eventos", "Eventos Passados" e "Cadastro de Clientes" são facilmente identificáveis.



Exemplo da Home Page:
![Screenshot_3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/83097575/ac29d8da-29bc-4a30-b107-f5e9b3e710e7)





#### Requisito atendido

RF-20: A aplicação deve fornecer uma página principal que permita acesso a outras páginas (paginas de eventos, eventos passados e cadastro de usuário).


#### Artefatos da funcionalidade

- home.html
- home.css

#### Estrutura de Dados

Não há


#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/blob/main/codigo-fonte/Home_Page/home.html

<hr>





### Tela de Cadastro (RF-001)

Responsável: Nilmar Antônio da Silva

O acesso a tela de cadastro poderá ser feito através da opção de menu “Cadastro”. As estruturas de dados foram baseadas em HTML, CSS e JS.

Exemplo da tela de cadastro: 


![tela-cadastro](https://github.com/Nilmarsilva/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/107079516/a577850a-eaae-461a-9782-78ec3c9a1710)

#### Requisito atendido

RF-001: O site deve permitir ao usuário cadastrar uma conta.


#### Artefatos da funcionalidade

●cadastro.html

●cadastro.css

●script.js


#### Estrutura de Dados

● Nome: (String) - O campo onde o usuário insere seu nome.

● Email: (String) - O campo onde o usuário insere seu endereço de email.

● Senha: (String) - O campo onde o usuário insere a senha de sua escolha.

● Botão "Criar Conta": (Boolean) - Um botão que o usuário clica para criar uma nova conta.

● Link "Sign In": (String) - Um link que permite ao usuário voltar para a tela de login.

● Botão "Continuar com o Google": (Boolean) - Um botão que permite ao usuário criar uma conta usando sua conta do Google.

● Botão "Continuar com o Facebook": (Boolean) - Um botão que permite ao usuário criar uma conta usando sua conta do Facebook.

#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/blob/main/codigo-fonte/Tela%20Login%20e%20Cadastro/cadastro.html

<hr>

### Tela de Login (RF-002)

Responsável: Nilmar Antônio da Silva

O acesso a tela de login poderá ser feito através do menu “Entrar”. As estruturas de dados foram baseadas em HTML e CSS.

Exemplo da tela de login: 


![tela-login](https://github.com/Nilmarsilva/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/107079516/ee030985-bc21-4bfc-9997-dc57920eefb4)



#### Requisito atendido

RF-002: O site deve permitir ao usuário fazer o login da sua conta.

#### Artefatos da funcionalidade

●	login.html 

●	login.css



#### Estrutura de Dados

●	Nome de Usuário/Email: (String) - O campo onde o usuário insere seu nome de usuário ou endereço de e-mail.

●	Senha: (String) - O campo onde o usuário insere sua senha.

●	Botão de "Lembrar Senha": (Boolean) - Um botão de seleção que permite ao usuário escolher se deseja lembrar suas credenciais.

●	Link "Esqueci a Senha": (String) - Um link que o usuário pode clicar para redefinir a senha em caso de esquecimento.

● Link "Sign Up": (String) - Um link que permite ao usuário ir para a tela de login.

●	Botão "Login": (Boolean) - Um botão que o usuário clica para efetuar o login com as credenciais fornecidas.

●	Botão "Logar com o Google": (Boolean) - Um botão que permite ao usuário fazer login usando sua conta do Google.

●	Botão "Logar com o Facebook": (Boolean) - Um botão que permite ao usuário fazer login usando sua conta do Facebook.


#### Instruções de acesso

1.	Abra um navegador de Internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/blob/main/codigo-fonte/Tela%20Login%20e%20Cadastro/login.html
2.	Ao clicar em “Entrar” no canto superior direito da tela, terá acesso a página de login.

<hr>


### Filtro de pesquisa (Pesquisar Eventos)  (RF- 10)
Responsável: Rodrigo Vieira

Um filtro de pesquisa que conta com uma barra de pesquisa e alguns botões para selecionar os eventos pela categoria desejada. A estrutua de dados foram baseados em HTML, CSS e JS

Exemplo do filtro de pesquisa de eventos:

![img1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/83097575/5010456a-5b39-4786-81a4-6d629fcac05c)

#### Requisito atendido

RF-03: A aplicação deve fornecer a funcionalidade de filtro/busca de ingressos para permitir ao usuário localizar seus ingressos


#### Artefatos da funcionalidade

- eventos.html
- eventos.css
- filtro.js
- pesquisar.js

#### Estrutura de Dados

● Nome da Categoria (String): O nome da categoria que o usuário pode selecionar.

● ID da Categoria (Inteiro): Um identificador único para cada categoria.

● Barra de Pesquisa (String): Uma string que armazena o texto inserido pelo usuário na barra de pesquisa.

● Título do Evento (String): O título do evento.

● Descrição do Evento (String): Uma breve descrição do evento.

● Categoria do Evento (ID da Categoria): Uma referência à categoria à qual o evento pertence (o ID da categoria correspondente).

● Comprar Entrada (Boolean): Permite ao usuário poder comprar ingressos para o evento.

● Favoritar Evento (Boolean): Permite ao usuário favoritar o evento.

● Botões para selecionar a categoria (String) - Botão de filtro, como "All", "Ciências de Dados", etc.

● Ação do Botão (Função/Evento): A ação associada ao botão quando o usuário clica nele. Por exemplo, filtrar os eventos pela categoria correspondente


#### Instruções de acesso

1.	Abra um navegador de Internet e informe a seguinte URL:  https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/blob/main/codigo-fonte/Eventos_Page/eventos.html
2.	Quando o botão for pressionado, o usuário será redirecionado para o evento desejado, conforme a categoria escolhida.
<hr>


### Tela Informação Expandida do Evento (RF - 09)

Responsável: Daniel Müller Armond.

As estruturas de dados foram baseadas em HTML, CSS.

A tela Informação Expandida do Evento traz a descrição detalhada do evento que irá ocorrer.

A imagem a seguir demonstra como seria a descrição expandida do evento.

<img width="1229" alt="Screen Shot 2023-10-25 at 10 19 09 PM" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/145787867/a29880f9-899d-4435-9086-6334accf5039">

#### Requisito atendido

RF-09: A aplicação deve permitir ao usuário ter informações sobre o ingresso e evento.

#### Artefatos da funcionalidade

- InfoExp.html
- InfoExp.css

#### Estrutura de Dados

Não há

#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/blob/main/codigo-fonte/InfoExpand_Page/infoExp.html

<hr>


### Tela de Eventos Abertos (RF - 09)

Responsável: Rodrigo Vieira.

As estruturas de dados foram baseadas em HTML, CSS.

A tela de eventos abertos traz a descrição detalhada dos evento que estão atualmente abertos.

A imagem a seguir demonstra como seria a tela de eventos abertos.

![Screenshot_1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/83097575/3304240f-e7e9-472e-8a5d-ecf935fdc42f)

#### Requisito atendido

RF-09: A aplicação deve permitir ao usuário ter informações sobre o ingresso e evento.

#### Artefatos da funcionalidade

- eventos_abertos.html
- eventos_abertos.css

#### Estrutura de Dados

Não há

#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/blob/main/codigo-fonte/EventosAbertos_Page/eventos_abertos.html

<hr>

### Tela de Eventos Passados (RF - 09)

Responsável: Rodrigo Vieira.

As estruturas de dados foram baseadas em HTML, CSS.

A tela de eventos passados traz a descrição detalhada dos evento que aconteceram.

A imagem a seguir demonstra como seria a tela de eventos passados.
![Screenshot_2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/83097575/9df7c41b-9ed7-4218-8353-be658b3dffd7)


#### Requisito atendido

RF-09: A aplicação deve permitir ao usuário ter informações sobre o ingresso e evento

#### Artefatos da funcionalidade

- eventos_passados.html
- eventos_passados.css

#### Estrutura de Dados

Não há

#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/blob/main/codigo-fonte/EventosPassados_Page/eventos_passados.html

<hr>


### Cadastro e Busca de Empresas de Tecnologia (RF - 01)

Responsável: Daniel Müller Armond.

As estruturas de dados foram baseadas em HTML, CSS e JS.

A tela Cadastro e Busca de Empresas permite: inserir informaçōes sobre a empresa; alterar e excluir informaçōes, bem como limpar o formulário. Ainda, é possível acessar os dados cadastrados por meio da tela "Listagem de Empresas Cadastradas".

As imagens abaixo sintetizam o que foi explicado acima.

<img width="1110" alt="Screen Shot 2023-10-26 at 10 02 31 PM" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/145787867/8e8fa2fe-5f48-4b91-845c-a214da818bec">
Imagem 1 - Cadastro de duas empresas fictícias


<img width="1177" alt="Screen Shot 2023-10-26 at 10 03 10 PM" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/145787867/db7ced4c-8532-4265-a0f9-ab733e763586">
Imagem 2 - Lista as duas empresas cadastradas


<img width="1160" alt="Screen Shot 2023-10-26 at 10 03 42 PM" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/145787867/0d5c1f5a-c2ca-40fb-ad6e-d02460c60419">
Imagem 3 - Seleciona quais das empresas cadastradas têm sede em Belo Horizonte


<img width="1146" alt="Screen Shot 2023-10-26 at 10 04 16 PM" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/145787867/a91ccbe3-5cfe-4e17-b629-efa04fa5c225">
Imagem 4 - Seleciona quais das empresas cadastradas farão palestras sobre Inteligência Artificial



#### Requisito atendido

RF-01: a aplicação permitirá: cadastrar novo usuário; alterar usuário; excluir usuário; consultar usuário.

#### Artefatos da funcionalidade

- index.html
- lista_contatos.html
- style.css
- app.js
- eventos_abertos.css









> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
