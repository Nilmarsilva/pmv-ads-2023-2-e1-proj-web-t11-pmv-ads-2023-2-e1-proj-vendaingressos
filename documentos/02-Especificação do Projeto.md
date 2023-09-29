# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Usuário  Visitante </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduos que acessam a plataforma sem se registrarem</td>
</tr>
<tr>
  <td><b>Necessidades</b></td>
  <td>1. Explorar uma lista de eventos disponíveis.</td>
</tr>
  
<tr>
  <td><b></b></td>
  <td>2. Visualizar informações básicas de eventos.</td>
</tr>

<tr>
  <td><b></b></td>
  <td>3.Acessar detalhes como data, local e categoria</td>
</tr>

<tr>
  <td><b></b></td>
  <td>4. Compartilhar o link do evento com amigos.</td>
</tr>

<tr>
  <td><b></b></td>
  <td>5. Se cadastrar na plataforma</td>
</tr>

</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Usuário Registrado </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduos que possuem uma conta na plataforma</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Fazer login para acessar recursos exclusivos.</td>
</tr>

<tr>
<td><b></b></td>
<td>2. Salvar eventos favoritos para referência.</td>
</tr>

<tr>
<td><b></b></td>
<td>3. Adicionar ingressos ao carrinho.</td>
</tr>

<tr>
<td><b></b></td>
<td>4. Acompanhar histórico de compras.</td>
</tr>

<tr>
<td><b></b></td>
<td>5. Compartilhar o link do evento com amigos.</td>
</tr>

</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Empresa Organizadora </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Entidades que organizam eventos para o público</td>
</tr>
  
<tr>
<td><b>Necessidades</b></td>
<td>1. Registrar-se como organizador na plataforma.</td>
</tr>

<tr>
<td><b></b></td>
<td>2. Cadastrar detalhes do evento a ser promovido</td>
</tr>

<tr>
<td><b></b></td>
<td>3. Definir preços, limites de ingressos, etc.</td>
</tr>

<tr>
<td><b></b></td>
<td>4. Acompanhar vendas e gerenciar informações (rastreamento e análise de dados)</td>
</tr>

</tbody>
</table>


## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

Tomando-se como exemplo o quadro de Backlog do Produto presente no GitHub (Wiki - Engenharia de Requisitos do Trello) e adaptando alguns desses para a realidade da aplicação deste projeto foi possível obter as seguintes histórias de usuário:

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Usuário                |Explorar eventos disponíveis                       | Comprar ingressos do evento                              |
| Usuário                | Explorar eventos disponíveis                       | Compartilhar os eventos com amigos                              |
| Usuário                | Favoritar eventos                       | Acompanhar com mais facilidade as notícias e atualizações sobre os eventos favoritos.|
| Usuário                | Haja opção de receber e-mail sobre eventos ainda que não favoritados                       | Acompanhar com mais facilidade as notícias e atualizações sobre os eventos diversos.                              |
| Usuário                | Interagir com ferramentas externas.                       | Efetuar login com dados cadastrados em outras contas (Gmail; Facebook …)                              |
| Usuário                | Receber e-mails de compras e cancelamentos                       | Acompanhar se a compra foi efetuada ou se foi adequadamente cancelada.                              |
| Empresa de Eventos                | Receber e-mails sobre compras e cancelamentos                       | Acompanhar vendas e gerenciar informações                              |
| Empresa de Eventos                | Receber informações acerca de taxa de conversão                       | Acompanhar qual/quais eventos estão atraindo maior atenção/interação dos usuários                              |
| Empresa de Eventos                | Cadastrar eventos                       | Seja disponibilizado ao usuário                              |
| Empresa de Eventos                | Cadastrar a empresa de eventos                       | A empresa possa publicar seus eventos                          |


## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

<img width="961" alt="Screen Shot 2023-09-28 at 11 45 22 AM" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t11-pmv-ads-2023-2-e1-proj-vendaingressos/assets/145787867/f599e2cb-febb-4397-be1d-a8f63bf5f788">

Figura 3: Requisitos de Sistema. Fonte: ALFF, Francilvio Roberto, 2018.


A figura acima (Figura 3) demonstra a importância da definição correta dos requisitos do sistema, pois eles devem atender aos requisitos do usuário para, posteriormente, atingirem a solução proposta na regra de negócio.


De acordo com o artigo "O que são requisitos funcionais e não funcionais?" (Autor Francilvio Roberto Alff, 7 de março de 2018), os requisitos funcionais (RF) são todas as necessidades, características ou funcionalidades esperadas em um processo que podem ser atendidos pelo software. Isto é, um RF responde à pergunta: “o que sistema DEVE fazer?”. Dessa forma, os RFs foram definidos seguindo a diretriz proposta pelo autor acima.

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação permitirá: cadastrar novo usuário; alterar usuário; excluir usuário; consultar usuário                    | ALTA   | 
|  RF- 02  |  A aplicação permitirá login por meio dos dados cadastrados                    | ALTA   |
|  RF- 03  |  A aplicação deve fornecer a funcionalidade de filtro/busca de ingressos para permitir ao usuário localizar seus ingressos  |ALTA   |
|  RF- 04  |  A aplicação permitirá o cadastro de ingressos                    | ALTA   |
|  RF-05  |  A aplicação permitirá ao usuário adicionar ingressos ao carrinho                    | ALTA   |
|  RF-06  |  O sistema deve exibir o valor de venda de cada produto                    | ALTA   |
|  RF - 07  |  Aplicação permitirá o cadastro de um meio de pagamento                    | ALTA   |
|  RF-08  |  A aplicação deve permitir ao usuário excluir ingressos do carrinho (O sistema deve prover o gerenciamento dos produtos presentes no carrinho de compras).                    | MÉDIA   |
|  RF-09  |  A aplicação deve permitir ao usuário ter informações sobre o ingresso e evento                    | MÉDIA   |
|  RF-10  |  O sistema deve organizar seus eventos em categorias (Inteligência artificial; banco de dados; linguagens de programação; mostra de profissões; mostra de softwares, etc)  para melhorar a experiência do usuário ao procurar seus produtos desejados.                    | MÉDIA   |
|  RF-11  |  A aplicação deve emitir o ingresso em formato digital (PDF) e enviar para o email que o usuário cadastrou                    | ALTA   |
|  RF-12  |  A aplicação deve permitir a emissão de nota fiscal                    | MÉDIA   |
|  RF-13  |  A aplicação permite ao usuário verificar as informações de seu perfil e personalizá-las                    | MÉDIA   |
|  RF-14  |  O sistema deve enviar um e-mail de notificação ao usuário confirmando: o cadastro do usuário; a compra do ingresso; o cancelamento da compra   | ALTA   |
|  RF-15  |  A aplicação deve emitir um relatório de compras para o organizador do evento (o sistema deve gerar relatórios sobre todas as vendas realizadas).                    | ALTA   |
|  RF-16  |  O sistema deve gerar relatórios sobre o histórico de compras de um determinado usuário                    | MÉDIA   |
|  RF-17  |  A aplicação deve informar ao organizador sempre que uma compra for efetuada ou cancelada                    | BAIXA   |
|  RF-18  |  A aplicação deve fornecer ao usuário a opção de redefinir sua senha, informando o email cadastrado                    | ALTA   |
|  RF-19  |  O sistema deve possibilitar ao usuário o compartilhamento da realização de uma compra                    |  MÉDIA  |




**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

Conforme explica o artigo "O que são requisitos funcionais e não funcionais?" (Autor Francilvio Roberto Alff, 7 de março de 2018), os requisitos não funcionais (RNF) devem sempre ser mensuráveis, ou seja, deve ser possível verificar se ele está ou não sendo atendido pelo software de acordo com alguma métrica apropriada. Portanto, os RNFs foram definidos seguindo a diretriz proposta pelo autor supramencionado.

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RÑF-01 |  Aplicação deve ser responsiva sendo possível seu uso em diferentes dispositivos (em todos os sistemas operacionais mobile)                    | ALTA   | 
| RÑF-02    |  O desenvolvimento deve ser em linguagem C#, HTML, CSS E JAVASCRIPT                    | ALTA   | 
| RÑF-03    |  A aplicação deve ser compatível com os principais navegadores do mercado                    | ALTA   | 
| RÑF-04    |  O sistema deve permitir o cadastro do usuário em 10 minutos                    | MÉDIA   | 
| RÑF-05    |  O sistema deve permitir exclusão do usuário em 5 minutos                    | MÉDIA   | 
| RÑF-06    |  O sistema deve permitir alteração dos dados cadastrais do usuário em 5 minutos                    | MÉDIA   | 
| RÑF-07    |  O sistema deve permitir que o usuário escolha não receber mais notificações por email em um processo simples e rápido que demore no máximo 2 minutos                    | MÉDIA   | 
| RÑF-08    |  O cadastro do usuário e armazenamento de suas informações devem seguir as diretrizes da Lei Geral de Proteção de Dados (LGPD).                    | ALTA   | 
| RÑF-09    |  O sistema deve ser passível de manutenção para migração para outra plataforma em até 2 semanas                    | ALTA   | 
| RÑF-10    |  O sistema deve estar disponível 99% do tempo, considerando o período de venda dos ingressos.                    | ALTA   | 
| RÑF-11    |  O sistema deve cancelar a compra em até 10 minutos caso o usuário não finalize a compra                    | ALTA   | 
| RÑF-12    |  O sistema deve funcionar normalmente mesmo tendo 1000 acessos simultaneamente                    | ALTA   | 
| RÑF-13    |  O sistema deve possuir um Design para mobile responsivo                    | ALTA   | 
| RÑF-14    |  Deve existir uma documentação em formato de HELP online                    | MÉDIA   | 
| RÑF-15    |  O sistema deve possuir níveis de acesso para diferenciar usuários comuns de usuários administrativos, que acessarão áreas restritas do sistema                    | ALTA   | 

**Prioridade: Alta / Média / Baixa. 

