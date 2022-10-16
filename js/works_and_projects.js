function selection(value){
            
    if(document.getElementById("desenvolvedor_backend").innerHTML == "Backend developer - Pleno"){

    switch(value){
        case "a": document.getElementById("selected-ibm").innerHTML = "I improved my knowledge of Java through the use of concepts from java 8 and more versions. I used design pattern techniques and clean code. This allowed a better understanding and use of the code and paradigm.";break;
        case "b": document.getElementById("selected-ibm").innerHTML = "Using the Spring Boot framework, I was able to quickly and optimally create applications with microservices, using APIs, Test Automation, Validation, Authentication, Authorization, ORM with database, CRUD, etc.";break;
        case "c": document.getElementById("selected-ibm").innerHTML = "Apache Camel is a Java framework used for routing data, whether in Queues, API's, Routes, Directories. I could transfer internal datas to external client and work on its processing, transformation and security.";break;
        case "d": document.getElementById("selected-ibm").innerHTML = "During the development of projects, there were moments that I worked alone, but also moments that I worked with one or more programmers. I use Scrum methodology with Jira platform and sometimes Kaban." ;break;
        case "e": document.getElementById("selected-ibm").innerHTML = "I improved my ability to read, create and update documentation. The main platforms I use are confluence, Baeldung, my own Github (where I have projects that I can consult). And more the skill of creating diagrams.";break;
        case "f": document.getElementById("selected-unicid").innerHTML = "Ability to analyze and interpret data. Through comparative cycles, predictions, dashboards, period histories."; break;
        case "g": document.getElementById("selected-unicid").innerHTML = "ETL is a three-step (Extract, Transform, Load) type of data integration used to combine data from multiple sources.";break;
        case "h": document.getElementById("selected-unicid").innerHTML = "Research is a vast discipline that varies with concepts remaining common: methodology, type of data (quantitative or qualitative).";break;
        case "i": document.getElementById("selected-unicid").innerHTML = "Contribute with managers for better decision making. For this, it is necessary to understand the business rule and context variations.";break;
        case "j": document.getElementById("selected-unicid").innerHTML = "Use of Geoprocessing and Analytics platforms. Onde foi feito o estudo de regioes em potencial para a implementacao do negocio.";break;
        case "k": document.getElementById("selected-pautatelecom").innerHTML = "Websites created in HTML, CSS and JS. They were optimized for better performance and had maintenance and updates.";break;
        case "l": document.getElementById("selected-pautatelecom").innerHTML = "Records were made in databases that later helped to create an event and promotions for the company.";break;
        case "m": document.getElementById("selected-pautatelecom").innerHTML = "Surveys and campaigns were carried out on the company's social networks, for potential customers.";break;
        case "n": document.getElementById("selected-pautatelecom").innerHTML = "Creation of templates, emails, events, posts based on art. And well-crafted itineraries for clients.";break;
        case "o": document.getElementById("selected-pautatelecom").innerHTML = "Maintenance and configuration of the company's computers. Software installation and other improvements..";break;
        default: document.getElementById("selected").innerHTML = "None";
    }
}

if(document.getElementById("desenvolvedor_backend").innerHTML == "Desenvolvedor Backend - Pleno"){
    switch(value){    
        case "a": document.getElementById("selected-ibm").innerHTML = "Aprimorei meu conhecimento de Java através do uso de conceitos de java 8 e versões posteriores. Usei técnicas de design pattern e código limpo. Isso permitiu uma melhor compreensão e uso do código e paradigma.";break;
        case "b": document.getElementById("selected-ibm").innerHTML = "Usando o framework Spring Boot, consegui criar aplicativos com microsserviços de forma rápida e otimizada, usando APIs, Automação de Testes, Validação, Autenticação, Autorização, ORM com banco de dados, CRUD, etc.";break;
        case "c": document.getElementById("selected-ibm").innerHTML = "Apache Camel é um framework Java usado para roteamento de dados, seja em Filas, API's, Rotas, Diretórios. Eu poderia transferir dados internos para clientes externos e trabalhar em seu processamento, transformação e segurança.";break;
        case "d": document.getElementById("selected-ibm").innerHTML = "Durante o desenvolvimento dos projetos, houve momentos em que trabalhei sozinho, mas também momentos em que trabalhei com um ou mais programadores. Uso a metodologia Scrum com plataforma Jira e às vezes Kaban." ;break;
        case "e": document.getElementById("selected-ibm").innerHTML = "Melhorei minha capacidade de ler, criar e atualizar documentação. As principais plataformas que utilizo são confluence, Baeldung, meu próprio Github (onde tenho projetos que posso consultar). E mais a habilidade de criar diagramas.";break;
        case "f": document.getElementById("selected-unicid").innerHTML = "Capacidade de analisar e interpretar dados. Através de ciclos comparativos, previsões, dashboards, históricos de períodos."; break;
        case "g": document.getElementById("selected-unicid").innerHTML = "ETL é um tipo de integração de dados de três etapas (Extrair, Transformar, Carregar) usado para combinar dados de várias fontes.";break;
        case "h": document.getElementById("selected-unicid").innerHTML = "A pesquisa é uma vasta disciplina que varia de acordo com os conceitos que permanecem comuns: metodologia, tipo de dados (quantitativos ou qualitativos)..";break;
        case "i": document.getElementById("selected-unicid").innerHTML = "Contribuir com os gestores para uma melhor tomada de decisão. Para isso, é necessário entender a regra de negócio e as variações de contexto.";break;
        case "j": document.getElementById("selected-unicid").innerHTML = "Uso de plataformas de Geoprocessamento e Analytics. Onde foi feito o estudo de regiões em potencial para implementação do negocio.";break;
        case "k": document.getElementById("selected-pautatelecom").innerHTML = "Sites criados em HTML, CSS e JS. Foram otimizados para melhor desempenho e tiveram manutenção e atualizações.";break;
        case "l": document.getElementById("selected-pautatelecom").innerHTML = "Os registros foram feitos em bancos de dados que posteriormente ajudaram a criar um evento e promoções para a empresa.";break;
        case "m": document.getElementById("selected-pautatelecom").innerHTML = "Foram realizadas pesquisas e campanhas nas redes sociais da empresa, para potenciais clientes.";break;
        case "n": document.getElementById("selected-pautatelecom").innerHTML = "Criação de templates, emails, eventos, posts baseados em arte. E roteiros bem elaborados para os clientes.";break;
        case "o": document.getElementById("selected-pautatelecom").innerHTML = "Manutenção e configuração dos computadores da empresa. Instalação de software e outras melhorias..";break;
        default: document.getElementById("selecionado").innerHTML = "Nenhum";

    }

}
        if(value == "a" || value == "b" || value == "c" || value == "d" || value == "e"){
            var btnContainer = document.getElementById("list-tab1");
            var btns = btnContainer.getElementsByClassName("list-group-item-action");
        }

        if(value == "f" || value == "g" || value == "h" || value == "i" || value == "j"){
            var btnContainer = document.getElementById("list-tab2");
            var btns = btnContainer.getElementsByClassName("list-group-item-action");
        }

        if(value == "k" || value == "l" || value == "m" || value == "n" || value == "o"){
            var btnContainer = document.getElementById("list-tab3");
            var btns = btnContainer.getElementsByClassName("list-group-item-action");
        }

       
        

    for (var i = 0; i < btns.length; i++) {

        //console.log(i+" "+btns[i].className);

        btns[i].addEventListener('mouseover', function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace('active','').replace('active','');
        this.className += ' active';

        });
    }
    
}

function openProject(value){
    switch(value){
        case "a": window.open('https://github.com/gil-son/dsmovie', '_blank');break;
        case "b": window.open('https://github.com/re-ciclo/re-ciclo', '_blank');break;
        case "c": window.open('https://github.com/gil-son/spring-ecosystem', '_blank');break;
        case "d": window.open('https://github.com/gil-son/dscatalog-bootcamp', '_blank');break;
        case "e": window.open('https://github.com/gil-son/apache-camel-framework-with-spring-boot', '_blank');break;
        case "f": window.open('https://github.com/gil-son/kafka-versions', '_blank');break;
        case "g": window.open('https://github.com/gil-son/designer-patterns', '_blank');break;
        case "h": window.open('https://github.com/gil-son/fullstackeletro-version-react-native', '_blank');break;
        case "i": window.open('https://github.com/re-ciclo/reciclo-mobile', '_blank');break;
        case "j": window.open('https://github.com/gil-son/spring-boot-tdd-versions', '_blank');break;
        case "k": window.open('https://github.com/gil-son/NoSQL-SQL', '_blank');break;
        case "l": window.open('https://github.com/gil-son/bitcoin-balance', '_blank');break;
        case "m": window.open('https://github.com/gil-son/fullstackeletro', '_blank');break;
        case "n": window.open('https://github.com/gil-son/docker', '_blank');break;
        case "o": window.open('https://github.com/gil-son/agile-modeling', '_blank'); break;
        default: window.open('https://github.com/gil-son', '_blank');
    }
    
}