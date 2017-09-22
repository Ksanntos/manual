app.service('sobre', function(){
    var sobreJson =
    [
        {
            "id": 1,
            "txt": "Você talvez esteja lendo essas primeiras linhas e pensando: por que tornar um site acessível? E por que me preocupar com isso quando meu prazo de entrega é tão curto? Eu explico: acessibilidade na web é uma questão de boa prática. Além de você colaborar para que mais pessoas sejam impactadas pelo conteúdo disseminado em seu site, você ainda estará fazendo parte dos profissionais que conhecem e querem implementar cuidados básicos que geram imensos resultados à navegação diferenciada à que estamos habituados. Afinal, se você estudou e desgastou seu tempo resolvendo e entendendo todos os problemas que o crossbrowser causa na hora de escrever seu html, porque não ir um pouco além e construir algo que tenha significado também para outras pessoas?! Em 5 anos de um artigo para outro, pouco mudou, mas muito se atualizou. As recomendações da W3C em termos de tags foram ampliadas com chegada do HTML5 que colabora dizendo o que cada conteúdo representa em seu código e a web semântica atingiu outro nível após as recomendações de uso da WAI-ARIA que estende o significado das interações (como é colocado pelo Diego aqui no Tableless).As ferramentas se ampliaram em quantidade e utilidade. Agora, ficou ainda mais fácil testar se seu site corresponde às boas práticas com apenas um clique.E não menos importante, as cores, contrastes e os elementos visuais também ganharam notoriedade com as novas ferramentas e dicas de boas aplicações quando buscamos assertividade na web acessível. Tags, HTML5, CSS e WAI-ARIA Com a chegada do HTML5 e suas novas tags, muito da informação já ganhou um “nome e sobrenome” auxiliando aos leitores de tela, demais navegadores e motores de busca, uma compreensão da informação ali contida, mas em termos de acessibilidade a W3C vai um pouco além ressaltando a utilização da WAI-ARIA que pode dar significado à tags como div’s e listas não ordenadas, que não são parte da atualização HTML5. Aqui no Tableless você consegue ter uma ideia bem legal com alguns artigos já publicados. Além disso, as indicações de preenchimentos mais completos dos “alts” [”Texto] das imagens e dos “titles” [] dos hyperlinks continuam sendo relembradas como práticas indispensáveis para acessibilidade. Hoje, completando as indicações, o que vale ressaltar é o cuidado com textos alternativos em imagens decorativas como links com imagens de fundo ou sprites e com os labels em formulários. Um bom código estruturado, com cuidados para melhores respostas em SEO e um css organizado e dividido por mídia (em caso de uma busca por páginas que possam ser impressas em braille ou para leitores de tela) já fazem do seu site uma aplicação com boas respostas para acessibilidade. Afinal é como eu mencionei, tudo resume-se à boas práticas que com o tempo, você desenvolve sem grandes impactos de tempo para entrega final."
        }
    ]

    this.getSobre = function() {
        return sobreJson;
    }
})
