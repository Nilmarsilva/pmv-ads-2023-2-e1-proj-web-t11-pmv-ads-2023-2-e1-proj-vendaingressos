
# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:</li>
   <li>RF-002:</li>
   <li>RF-003:</li>
    <li>RF-009:</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>A DEFINIR</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do filtro de pesquisa</td>
  <td>
   <ul>
    <li>RF-009:	</li>
   </ul>
  </td>
  <td>Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Livros.</li>
    <li>Digitar no filtro de pesquisa algum dado presente na página Livros e verificar se o resultado é exibido na página.</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem mostrar o livro onde há o dado informado.</td>
  <td>A DEFINIR</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Verificar detalhes dos Eventos</td>
  <td>
   <ul>
    <li>RF-009:</li>
   </ul>
  </td>
  <td>Verifique se todas as informações referentes aos eventos estão disponíveis</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na “Eventos” ou “Eventos Passados”.</li>
    <li>Selecionar o evento.</li>
    <li>Visualizar as informações referentes aos eventos disponíveis na página.</li>
   </ol>
   </td>
  <td>Todas as informações, incluindo imagens dos evetos e responsabilidade da página, referentes ao evento estão disponíveis.</td>
  <td>A DEFINIR</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o cadastro de usuários</td>
  <td>
   <ul>
    <li>RF-001:</li>
   </ul>
  </td>
  <td>Verificar se o cadastro está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li> Clicar em "Cadastro de empresas e alunos", no Menu.</li>
    <li>Preencher o formulário e clicar em “CadastrO”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Usuário cadastrado com sucesso".</td>
  <td>A DEFINIR</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o login de usuários</td>
  <td>
   <ul>
   <li>RF-002: </li>
   </ul>
  </td>
  <td>Verifique se o cadastro de usuários está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Cadastro de empresas e alunos”.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário.</td>
  <td>A DEFINIR</td>
 </tr>

