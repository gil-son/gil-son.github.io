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

            // IBM
                // role
                document.getElementById("role-ibm-junior").innerHTML = "Engenheiro de ML/IA (Abr de 2025 – presente)";
                document.getElementById("role-ibm-pleno").innerHTML = "Desenvolvedor Backend – Pleno (ago de 2022 – abr de 2025)";
                document.getElementById("role-ibm-ml").innerHTML = "Desenvolvedor Backend – Júnior (jun de 2021 – ago de 2022)";

                // description
                document.getElementById("description-ibm-junior").innerHTML = "Desenvolvedor júnior com experiência prática na criação de microsserviços e APIs utilizando Spring Boot e Apache Camel. Habilidade em testes unitários e em garantir a segurança das aplicações por meio de criptografia, validação, autenticação e autorização.";
                document.getElementById("description-ibm-pleno").innerHTML = "Experiência em desenvolvimento backend com Spring Boot, Spring Batch, Apache Camel e Kafka, criando microsserviços e APIs com autenticação segura via OAuth2 e Keycloak. Habilidade em infraestrutura como código com Terraform, integração de bancos de dados (MongoDB, PostgreSQL), CI/CD automatizado com GitHub Actions e testes unitários.";
                document.getElementById("description-ibm-ml").innerHTML = "Experiência na construção de sistemas completos de IA/ML com foco em MLOps, FMOps e infraestrutura escalável. Entrega de soluções em produção utilizando MLflow, AWS, Terraform e práticas de CI/CD. Especializado em integração com LLMs e sistemas agentic com LangChain e bancos vetoriais, impulsionando aplicações de IA corporativas no setor financeiro.";
        
        document.getElementById("analista_dados").innerHTML = "Analista de Dados - Júnior:";
        document.getElementById("selected-unicid").innerHTML = "Capacidade de analisar e interpretar dados. Através de ciclos comparativos, previsões, painéis, históricos de períodos";

            // UNICID

            
        document.getElementById("programador_web").innerHTML = "Porgramador Web - Estágio:";
        document.getElementById("selected-pautatelecom").innerHTML = "Sites criados em HTML, CSS e JS. Eles foram otimizados para melhor desempenho e tiveram manutenção e atualizações.";

            // PAUTA TELECOM

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