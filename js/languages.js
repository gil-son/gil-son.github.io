function switchLanguage(){

    var value = document.getElementById("select-flags").value;

    if(value ==  "br"){

        // Menu

        document.getElementById("inicio").innerHTML = "Início";
        document.getElementById("sobre").innerText = "Sobre";
        document.getElementById("trabalhos").innerText = "Trabalhos";
        document.getElementById("projetos").innerText = "Projetos";
        document.getElementById("contatos").innerText = "Network";

        // Home
        
        document.getElementById("bem_vindo").innerHTML = "Bem vindo(a)!";
        document.getElementById("portfolio").innerHTML = "Neste portfólio, vou compartilhar um pouco sobre minha experiência de trabalho, projetos recentes, redes sociais e mais...";
        document.getElementById("more_info").innerHTML = "Se você quiser mais informações, você pode acessar o meu";
        document.getElementById("curriculo").setAttribute("href", "https://www.canva.com/design/DAF0RO5GYDw/IH9DKeoKR1IQiaqUFrWbFQ/view?utm_content=DAF0RO5GYDw&utm_campaign=designshare&utm_medium=link&utm_source=editor");
        document.getElementById("curriculo").innerHTML = "currículo online";

        document.getElementById("mentoring-link").innerHTML = "<em> conhecer meus trabalhos, projetos ou apenas fazer network</em>";
        document.getElementById("bencao").innerHTML = "<em>QUE DEUS ABENÇOE O SEU DIA :)</em>";
        document.getElementById("leia_mais_1").innerHTML = "Continuar lendo";

        // Sobre

        document.getElementById("ola_mundo").innerHTML = "Olá Mundo";
        document.getElementById("como_esta").innerHTML = "Como você está hoje?! As coisas vão melhorar! Meu nome é Gilson, sou formado em Ciência da Computação. Sou programador antes mesmo de saber o que é programação.";
        document.getElementById("explicando").innerHTML = "O que me levou a programar foi querer entender por que as coisas são como são. E quanto mais você aprende, mais você precisa aprender.";
        document.getElementById("proposito").innerHTML = "O objetivo deste site é trocar experiências. Então fique à vontade, mas mantenha tudo em ordem. Se você achar algum dos meus projetos interessantes, sinta-se à vontade para entrar em contato comigo.";
        document.getElementById("leia_mais_2").innerHTML = "Continuar lendo";


        // Trabalhos

        document.getElementById("desenvolvedor_backend").innerHTML = "Desenvolvedor Backend - Pleno";
        document.getElementById("selected-ibm").innerHTML = "Tenho aprimorado minhas habilidades de programação explorando conceitos como os princípios SOLID, padrões de design e a prática de manter um código limpo. Também tenho explorado técnicas avançadas, como programação orientada a eventos, gerenciamento de filas e autenticação. Gosto de trabalhar com os frameworks Spring e ASP .NET Core.";

            // list - IBM

            document.getElementById("list-a").innerHTML = "Habilidades de Programação";
            document.getElementById("list-b").innerHTML = "Habilidades de Computação em Nuvem";
            document.getElementById("list-c").innerHTML = "Habilidades de Arquitetura";
            document.getElementById("list-d").innerHTML = "Trabalho em equipe ou solo";
            document.getElementById("list-e").innerHTML = "Habilidades com Metodologias Ágeis e documentações";

        
        document.getElementById("analista_dados").innerHTML = "Analista de Dados - Júnior:";
        document.getElementById("selected-unicid").innerHTML = "Capacidade de analisar e interpretar dados. Através de ciclos comparativos, previsões, painéis, históricos de períodos";

            // list - UNICID

            document.getElementById("list-f").innerHTML = "Habilidades de análise";
            document.getElementById("list-g").innerHTML = "ETL";
            document.getElementById("list-h").innerHTML = "Pesquisa de mercado relacionada a termos-chave";
            document.getElementById("list-i").innerHTML = "Contribuir com decisões";
            document.getElementById("list-j").innerHTML = "Geoprocessamento e Análises";

        
        document.getElementById("programador_web").innerHTML = "Porgramador Web - Estágio:";
        document.getElementById("selected-pautatelecom").innerHTML = "Sites criados em HTML, CSS e JS. Eles foram otimizados para melhor desempenho e tiveram manutenção e atualizações.";

            // list - PAUTA TELECOM

            document.getElementById("list-k").innerHTML = "Otimização, manutenção e criação de sites";
            document.getElementById("list-l").innerHTML = "Atualização e Marketing com base na história";
            document.getElementById("list-m").innerHTML = "Clientes em potencial";
            document.getElementById("list-n").innerHTML = "Criação de arte";
            document.getElementById("list-o").innerHTML = "Manutenção de computadores";

    // Projetos
            document.getElementById("project-a1").innerHTML = "Compilação de projetos Terraform para criação de recursos na AWS";
            document.getElementById("project-a2").innerHTML = "Compilação sobre o conhecimento da AWS";
            document.getElementById("project-aa").innerHTML = "Um desafio de aplicação de marketplace do iFood com Spring e muitos recursos na AWS";
            document.getElementById("project-bb").innerHTML = "API com RabbitMQ para organizar a entrega de email.";
            document.getElementById("project-cc").innerHTML = "Compilação sobre Redes Neurais";
            document.getElementById("project-a3").innerHTML = "Compilação sobre APIs em .NET";
            document.getElementById("project-1").innerHTML = "Um catálogo de filmes, com avaliação e inscrição. Tem 4 idiomas";
            document.getElementById("project-2").innerHTML = "O Re-ciclo é um projeto e desenvolvimento sustentável idealizado pela instituição Recode Pro através do Esquadrão 07";
            document.getElementById("project-3").innerHTML = "Aqui haverá uma coleção de pequenos projetos, conceitos e testes. Apenas para praticar";
            document.getElementById("project-4").innerHTML = "O Catálogo DS é um projeto de catalogação de produtos eletrônicos com controle de acesso entre usuários e administradores";
            document.getElementById("project-5").innerHTML = "Um framework que facilita a comunicação entre sistemas, por meio de roteamento, processamento e transformação de dados";
            document.getElementById("project-6").innerHTML = "Distributed data transmission that is able to publish, subscribe, store and process log streams in real time";
            document.getElementById("project-7").innerHTML = "As melhores práticas usadas por desenvolvedores de software orientados a objetos experientes";
            document.getElementById("project-8").innerHTML = "E-commerce de eletrodomésticos e com acesso administrativo. Tem versões simples a mais avançadas";
            document.getElementById("project-9").innerHTML = "O Re-ciclo é um projeto e desenvolvimento sustentável idealizado pela instituição Recode Pro através do Esquadrão 07";
            document.getElementById("project-10").innerHTML = "Diferentes aplicações com Spring Boot usando Test Driven Development (TDD)";
            document.getElementById("project-11").innerHTML = "Projeto para melhorar as boas práticas de SQL e NoSQL";
            document.getElementById("project-12").innerHTML = "Obtenha registros de informações de bitcoin válidas ou inválidas e gerencie seu saldo";
            document.getElementById("project-13").innerHTML = "E-commerce de eletrodomésticos e com acesso administrativo. Tem versões simples a mais avançadas";
            document.getElementById("project-14").innerHTML = "O Docker permite que você separe os aplicativos de sua infraestrutura para que você possa entregar software com segurança";
            document.getElementById("project-15").innerHTML = "Collection and best practices with Diagrams, Models, Systems Use Cases, etc...";
    
    // Contatos

    
    //document.getElementById("mentoring-img").innerHTML = "<img src='../img/mentoria.png' alt=''>";
    //document.getElementById("plans-img").innerHTML = "<img src='../img/planos.png' alt=''>";

    document.getElementById("form-submit-button-text").innerHTML = "Enviar";

    document.getElementsByName('name')[0].placeholder='Seu nome...';
    document.getElementsByName('email')[0].placeholder='Seu e-mail...';
    document.getElementsByName('phone')[0].placeholder='Seu telefone...';
    document.getElementsByName('subject')[0].placeholder='O assunto...';
    document.getElementsByName('message')[0].placeholder='Sua mensagem...';

        }else{
        window.location.reload();
    }

}