function selection(value){
            
    if(document.getElementById("desenvolvedor_backend").innerHTML == "Backend developer - Pleno"){

    switch(value){
        case "a": document.getElementById("selected-ibm").innerHTML = "I've been enhancing my programming skills by delving into concepts such as SOLID principles, design patterns, and maintaining clean code practices. I've also been exploring advanced techniques like event-driven programming, queue management, and authentication. I particularly enjoy working with Spring and ASP .NET Core frameworks.";break;
        case "b": document.getElementById("selected-ibm").innerHTML = "I've been enhancing my Cloud Computing skills through the implementation of infrastructure and resources in AWS. My preferred method for achieving this is utilizing Terraform to efficiently build and provision the necessary components for implementation.";break;
        case "c": document.getElementById("selected-ibm").innerHTML = "I've been enhancing my Architecture skill through of discussion about different projects, scenarios, organizing best strategies to reach the best solution. So can give a lot advices or create solutions. Of course I an not a specialist in that.";break;
        case "d": document.getElementById("selected-ibm").innerHTML = "I collaborate with my team, offering and receiving advice, and collectively formulating effective strategies. At times, I take the lead in driving project deliveries and achieving goals, always in alignment with the company's objectives." ;break;
        case "e": document.getElementById("selected-ibm").innerHTML = "Currently, I utilize agile methodologies such as Scrum or Kanban to enhance my understanding of the delivery timeline. I document negotiation rules on a platform similar to Jira and provide specific technology-related details on platforms like Confluence or Github. Additionally, I create diagrams to facilitate better comprehension.";break;
        case "f": document.getElementById("selected-unicid").innerHTML = "Ability to analyze and interpret data. Through comparative cycles, predictions, dashboards, period histories."; break;
        case "g": document.getElementById("selected-unicid").innerHTML = "ETL is a three-step (Extract, Transform, Load) type of data integration used to combine data from multiple sources.";break;
        case "h": document.getElementById("selected-unicid").innerHTML = "Research is a vast discipline that varies with concepts remaining common: methodology, type of data (quantitative or qualitative).";break;
        case "i": document.getElementById("selected-unicid").innerHTML = "Contribute with managers for better decision making. For this, it is necessary to understand the business rule and context variations.";break;
        case "j": document.getElementById("selected-unicid").innerHTML = "Use of Geoprocessing and Analytics platforms. Where the study of potential regions for implementing the business was carried out.";break;
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
        case "a": document.getElementById("selected-ibm").innerHTML = "Tenho aprimorado minhas habilidades de programação explorando conceitos como os princípios SOLID, padrões de design e a prática de manter um código limpo. Também tenho explorado técnicas avançadas, como programação orientada a eventos, gerenciamento de filas e autenticação. Gosto de trabalhar com os frameworks Spring e ASP .NET Core.";break;
        case "b": document.getElementById("selected-ibm").innerHTML = "Tenho aprimorado minhas habilidades em Computação em Nuvem por meio da implementação de infraestrutura e recursos na AWS. Minha abordagem preferida para isso é utilizar o Terraform para construir e provisionar de forma eficiente os componentes necessários para a implementação.";break;
        case "c": document.getElementById("selected-ibm").innerHTML = "Tenho aprimorado minhas habilidades em arquitetura por meio de discussões em diferentes projetos e cenários, organizando estratégias para encontrar as melhores soluções. Isso me permite oferecer conselhos valiosos e criar soluções inovadoras, embora eu reconheça que não sou um especialista na área.";break;
        case "d": document.getElementById("selected-ibm").innerHTML = "Eu trabalho com minha equipe, oferecendo e recebendo conselhos, e juntos formulamos estratégias eficazes. Em algumas ocasiões, lidero a entrega de projetos e o alcance de metas, sempre em conformidade com os objetivos da empresa." ;break;
        case "e": document.getElementById("selected-ibm").innerHTML = "Atualmente, utilizo metodologias ágeis, como Scrum ou Kanban, para aprimorar minha compreensão do cronograma de entrega. Documento regras de negociação em uma plataforma semelhante ao Jira e forneço detalhes específicos relacionados à tecnologia em plataformas como o Confluence ou o Github. Além disso, crio diagramas para facilitar uma compreensão mais clara.";break;
        case "f": document.getElementById("selected-unicid").innerHTML = "Capacidade de analisar e interpretar dados. Através de ciclos comparativos, previsões, dashboards, históricos de períodos."; break;
        case "g": document.getElementById("selected-unicid").innerHTML = "ETL é um tipo de integração de dados de três etapas (Extrair, Transformar, Carregar) usado para combinar dados de várias fontes.";break;
        case "h": document.getElementById("selected-unicid").innerHTML = "A pesquisa é uma vasta disciplina que varia de acordo com os conceitos que permanecem comuns: metodologia, tipo de dados (quantitativos ou qualitativos).";break;
        case "i": document.getElementById("selected-unicid").innerHTML = "Contribuir com os gestores para uma melhor tomada de decisão. Para isso, é necessário entender a regra de negócio e as variações de contexto.";break;
        case "j": document.getElementById("selected-unicid").innerHTML = "Uso de plataformas de Geoprocessamento e Analytics. Onde foi feito o estudo de regiões em potencial para implementação do negocio.";break;
        case "k": document.getElementById("selected-pautatelecom").innerHTML = "Sites criados em HTML, CSS e JS. Foram otimizados para melhor desempenho e tiveram manutenção e atualizações.";break;
        case "l": document.getElementById("selected-pautatelecom").innerHTML = "Os registros foram feitos em bancos de dados que posteriormente ajudaram a criar um evento e promoções para a empresa.";break;
        case "m": document.getElementById("selected-pautatelecom").innerHTML = "Foram realizadas pesquisas e campanhas nas redes sociais da empresa, para potenciais clientes.";break;
        case "n": document.getElementById("selected-pautatelecom").innerHTML = "Criação de templates, emails, eventos, posts baseados em arte. E roteiros bem elaborados para os clientes.";break;
        case "o": document.getElementById("selected-pautatelecom").innerHTML = "Manutenção e configuração dos computadores da empresa. Instalação de software e outras melhorias.";break;
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
        case "a1": window.open('https://github.com/gil-son/terraform-with-aws', '_blank');break;
        case "a2": window.open('https://github.com/gil-son/aws', '_blank');break;
        case "aa": window.open('https://github.com/gil-son/challenge-ifood-anota-ai?tab=readme-ov-file', '_blank');break;
        case "bb": window.open('https://github.com/gil-son/microservices-emails-rabbitmq', '_blank');break;
        case "cc": window.open('https://github.com/gil-son/deep-learning', '_blank');break;
        case "a3": window.open('https://github.com/gil-son/dotnet-apis', '_blank');break;
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