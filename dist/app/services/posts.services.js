app.service('posts', function($http){

    // lista =  angular.fromJson($http.get("src/app/jsons/posts.json"));
    var lista =
    [
        {
          "id": 1,
          "titulo": "1 - Acessibilidade na web: Como tornar seu site acessível.",
          "resumo": "Há 5 anos atrás eu escrevi aqui no Tableless um artigo falando um pouco sobre acessibilidade na web. Cinco anos se passaram e os motivos para se ter esse cuidado ao desenvolver sua aplicação não mudaram, mas novas ferramentas surgiram para que você atenda cada vez mais às demandas dessa parcela da nossa sociedade que tem tanto direito de usufruir de seu website quanto as pessoas sem deficiência alguma.",
          "autor": "Klinger Santos",
          "categoria": "javascript 1",
          "img": "http://materializecss.com/images/sample-1.jpg",
          "txt": "<h1>O que é acessibilidade à Web Acessibilidade à Web significa que pessoas portadoras de necessidades especiais sejam capazes de usar a Web.</h1> Mais concretamente, significa uma Web projetada de modo a que estas pessoas possam perceber, entender, navegar e interagir de uma maneira efetiva com a Web, bem como criar e contribuir com conteúdos para a Web. Existem milhões de pessoas portadoras de necessidades especiais que tem o seu acesso a Web restrito. Atualmente a maioria dos Web sites têm barreiras de acessibilidade que dificultam ou mesmo tornam impossível para estas pessoas, acessar o site. Contudo, se os Web sites e Web software foram projetados acessíveis, estas pessoas poderão usar os sites efetivamente. A acessibilidade à Web contempla todo tipo de necessidade especial, incluindo as visuais, auditivas, físicas, de fala, cognitivas e neurológicas. Para informações adicionais, ver \"Como pessoas portadoras de necessidades especiais usam a Web\", um documento que descreve como os diferentes tipos de necessidades especiais afetam o uso da Web e também cenários de pessoas portadoras de necessidades especiais usando a Web.A acessibilidade à Web pode trazer benefícios também organizações e pessoas sem qualquer tipo de restrição. Por exemplo, um dos princípios básicos de acessibilidade preconiza a flexibilidade para atender variados tipos de necessidades, situações e preferências. Esta flexibilidade acaba por beneficiar todas as pessoas que usam a Web, inclusive aquelas sem qualquer tipo de restrição em diferentes situações (tais como aqueles com uma conexão lenta), pessoas com restrições temporárias (com um braço quebrado) e pessoas idosas. Para mais informações, ver \"Developing a Web Accessibility Business Case for Your Organization.\" Porque a acessibilidade à Web é importante A Web exerce um papel crescentemente importante nas áreas de educação, negócios, comércio, governos e recreação. Uma Web acessível e que permita a participação de pessoas portadoras de necessidades especiais na sociedade é fundamental para proporcionar oportunidades iguais para todos nas diversas áreas. A Web oferece possibiliade de acesso à informação e a interação de pessoas portadoras de necessidades especiais de forma inédita. Para maiores informações, ver Web Accessibility is a Social Issue seção do f \"Developing a Web Accessibility Business Case for Your Organization: Social Factors\". A acessibilidade à Web em alguns casos, é regulamentada por lei. Para consultar uma listagem de leis e políticas pelo mundo, ver \"Policies Relating to Web Accessibility.\" Construindo uma Web acessível A acessibilidade à Web depende do trabalho conjunto dos baridos setores de desenvolvimento e de interação, incluindo-se ai as ferramentas para Web software e o pessoal envolvido com o desenvolvimento. O principal motivo da existência de tantos sites não acessíveis e o uso de softwares geradores de conteúdos sem programação para suporte aos critérios de acessibilidade e desenvolvedores sem o conhecimento dos itens básicos de acessibilidade ou mesmo sem maiores preocupações com ela. Com a finalidade de definir as soluções e esclarecer os itens de acessibilidade a Web Accessibility Initiative (WAI) desenvolveu diretrizes que se constituem em standards internacionais para a acessibilidade à Web. Para maiores informações, ver \"Interdependent Components of Web Accessibility,\" que explica como os variados componentes trabalham juntos e como são contemplados nas diferentes diretrizes da WAI. Construindo um Web Site Acessível O trabalho requerido para construir um Web site acessível depende de vários fatores, entre eles o tipo de conteúdo, o tamanho e a complexidade do site e das ferramantas de desenvolvimento e do ambiente de desenvolvimento Muitos dos aspectos da acessibilidade serão facilmente implementados se forem planejados antes do início do desenvolvimento ou redesign. Contudo, adaptar sites existentes pode demandar uma quantidade considerável de trabalho e esforço, especialmnete para aqueles sites com códigos não conformes com as standards de marcação para XHTML, e para sites com determinados tipos de conteúdos, tal como multimídia. \"Implementation Plan for Web Accessibility\" lista as etapas básicas para construir um site organizacional acessível. Avaliando a acessibilidade à Web Ao desenvolver ou redesenhar um site, a avaliação da acessibilidade logo no início e ao longo do trabalho detectará itens de acessibilidade que se tornarão mais fáceis de corrigir do que se deixarmos o trabalho de avaliação para o final do projeto. Técnicas simples, tais como alterar as 'setagem' do browser (resolução, tamanho da janela, tamanhos de fontes, etc...) podem determinar conformidades com alguns itens de acessibilidade. Uma avaliação acurada para determinar se um site está conforme as diretrizes de acessibilidade é uma tarefa mais complexa. \"Evaluating Web Sites for Accessibility\" inclui uma seção sobre preliminary review abordando técnicas para rapidamente checar alguns critérios de acessibilidade e uma seção sobre conformance evaluation relatando procedimentos gerais e dicas para avaliação de conformidades com as diretrizes de acessibiliadde. Existem ferramentas automatizadas que ajudam na avaliação, contudo nenhuma ferramenta sozinha, é capaz de determinar se um site cumpre todos os itens de acessibilidade. Uma avaliação feita por humanos é essencial para determinar se um Web site é acessível. Para mais informações  OWAI Web site disponibiliza um guidelines and support material para ajuda na implementação das diretrizes de acessibilidade, tais como \"Quick Tips to Make Accessible Web Sites.\" Outras organizações também oferecem material de ajuda para construir uma Web acessível. Notas sobre Terminologia Web \"conteúdo\" geralmente refere-se a informação contida em uma página Web ou uma aplicação Web, incluindo-se aí texto, imagens, formulários, sons e similares. Uma definição mais específica pode ser encontrada nos documentos do WCAG que encontram-se lincados em Web Content Accessibility Guidelines (WCAG) Overview. Web software inclue: Web browsers, mídia players, e outros \"agentes de usuário \"; para mais informações, ver User Agent Accessibility Guidelines (UAAG) Overview.  Ferramentas para criação de Web sites; para mais informações, ver Authoring Tool Accessibility Guidelines (ATAG) Overview. Ferramantas de avaliação de acessibilidade à Web site; para uma lista das ferramentas, ver Evaluation, Repair, and Transformation Tools for Web Content Accessibility."
        },
        {
          "id": 2,
          "titulo": "2 - Como criar seu primeiro Progressive Web App do Zero",
          "resumo": "Entenda e crie seu Progressive Web App",
          "autor": "Klinger Santos",
          "categoria": "javascript 2",
          "img": "http://materializecss.com/images/sample-1.jpg",
          txt: "teste"
        },
        {
          "id": 3,
          "titulo": "3 - Como criar seu primeiro Progressive Web App do Zero",
          "resumo": "Entenda e crie seu Progressive Web App",
          "autor": "Klinger Santos",
          "categoria": "javascript 3",
          "img": "http://materializecss.com/images/sample-1.jpg"
        },
        {
          "id": 4,
          "titulo": "4 - Como criar seu primeiro Progressive Web App do Zero",
          "resumo": "Entenda e crie seu Progressive Web App",
          "autor": "Klinger Santos",
          "categoria": "javascript",
          "img": "http://materializecss.com/images/sample-1.jpg"
        },
        {
          "id": 5,
          "titulo": "5 - Como criar seu primeiro Progressive Web App do Zero",
          "resumo": "Entenda e crie seu Progressive Web App",
          "autor": "Klinger Santos",
          "categoria": "javascript",
          "img": "http://materializecss.com/images/sample-1.jpg"
        },
        {
          "id": 6,
          "titulo": "6 - Como criar seu primeiro Progressive Web App do Zero",
          "resumo": "Entenda e crie seu Progressive Web App",
          "autor": "Klinger Santos",
          "categoria": "javascript",
          "img": "http://materializecss.com/images/sample-1.jpg"
        },
        {
          "id": 7,
          "titulo": "7 - Como criar seu primeiro Progressive Web App do Zero",
          "resumo": "Entenda e crie seu Progressive Web App",
          "autor": "Klinger Santos",
          "categoria": "javascript",
          "img": "http://materializecss.com/images/sample-1.jpg"
        },
        {
          "id": 8,
          "titulo": "8 - Como criar seu primeiro Progressive Web App do Zero",
          "resumo": "Entenda e crie seu Progressive Web App",
          "autor": "Klinger Santos",
          "categoria": "javascript",
          "img": "http://materializecss.com/images/sample-1.jpg"
        },
        {
          "id": 9,
          "titulo": "9 - Como criar seu primeiro Progressive Web App do Zero",
          "resumo": "Entenda e crie seu Progressive Web App",
          "autor": "Klinger Santos",
          "categoria": "javascript",
          "img": "http://materializecss.com/images/sample-1.jpg"
        },
        {
          "id": 10,
          "titulo": "10 - Como criar seu primeiro Progressive Web App do Zero",
          "resumo": "Entenda e crie seu Progressive Web App",
          "autor": "Klinger Santos",
          "categoria": "javascript",
          "img": "http://materializecss.com/images/sample-1.jpg"
        }
      ]

    this.getPosts = function(){
        return lista;
    }

    this.getPostsId = function(id){
        for( i in lista){
            if( lista[i].id == id ){
                return lista[i];
                console.log(lista[i]);
            }
        }
    }

});
