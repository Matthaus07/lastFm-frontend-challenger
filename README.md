## Etapas para rodar o projeto

Você pode está instalando suas dependências através do comando :

### `npm install`


E para rodar no modo desenvolvedor:
### `npm run start`

Você pode visualizar o projeto em seu navegador através do link: [http://localhost:3000](http://localhost:3000).

### Projeto: Listagem Para artístas e Álbuns da api Last.fm

O projeto consiste em um desafio para testar as habilidades com Javascript -React/ HTML e CSS.

Foram utilizados também algumas métodologias para design de software como o **clean Architeture**, encapsulando toda a regra de negócio 
da interface do usuário ou de qualquer outra camada. Além de conter também a implementação de alguns **patterns** como Adapter e Factory.

Assim criada todas as duas partes do teste como a **Listagem** dos álbuns e artistas e também os **Histórico** de pesquisa de ambos.
 
 O react foi totalmente configurado via webpack, não sendo utilizado o CRA(Create React App), pois a intenção é realmente não depender de outras bibliotecas em que o 
 CRA baixa por trás. Então resolvi configura-lo totalmente via webpack. A outra vantagem nisso é que tenho o total controle do que estou baixando e também de customiza-lo.
 
 O projeto utiliza das seguintes tecnologias:
 
 * SASS - Foi utilizado sem uso de Styled-components, somente o scss
 * Typescript - para tipagem estática e criação de interfaces para a regra de negócio
 * Axios - Para Requisição AJAX.
 * As demais bibliotecas contidas, são dependências do react(Como o router-dom) e da webpack(Para configurar imagens, minificar arquivos e etc)


Algumas ressalvas a se fazer: 
 - [X] O projeto está inteiramente focado na estrutura em si do código. Algumas partes do layout não foram pensadas corretamente devido à entrega do projeto. Portanto,
  foquei o máximo em pensar numa arquitetura limpa e reutilizavel.
 - [X] Poderia ter melhorado diversos aspectos que inclusive podem ser discutidos, caso seja solicitado o que realmente eu melhoraria no código(EX: Layout, abstrair ainda mais
 a page principal em mais componentes reutilizáveis).
 

