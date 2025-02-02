//Função Substiui as tag's desejadas pelos textos

function exibirTextoNatela(tag, texto, tamanhoFonte) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    // Ajustando o tamanho da fonte para que o texto se encaixe no layout
    campo.style.fontSize = tamanhoFonte;
    
    // Utilizando o ResponsiveVoice para ler o texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}


// Função chamada ao clicar no botão "Introdução"
function exibirMensagemIntroducao() {
    exibirTextoNatela('p', '     Indústria 4.0: A Fábrica do Futuro - Imagine uma fábrica tradicional. Máquinas grandes e pesadas realizam tarefas repetitivas, e os trabalhadores operam essas máquinas manualmente ou seguindo instruções precisas. Agora, imagine uma fábrica onde as máquinas se comunicam entre si, se ajustam automaticamente e até mesmo "aprendem" com o tempo. Essa é a ideia central da Indústria 4.0. Para entender melhor, vamos usar uma analogia: Pense em uma cozinha. Na cozinha tradicional, cada utensílio tem uma função específica, e o cozinheiro precisa se movimentar para pegar cada um deles. Na cozinha do futuro, a Indústria 4.0, os utensílios se moveriam sozinhos, se ajustariam automaticamente ao tipo de alimento e até sugeririam receitas com base nos ingredientes disponíveis. O que torna a Indústria 4.0 possível? Internet das Coisas (IoT): As máquinas e equipamentos estão conectados à internet, coletando e compartilhando dados em tempo real. Inteligência Artificial (IA): Algoritmos inteligentes analisam esses dados, permitindo que as máquinas aprendam, tomem decisões e se adaptem às mudanças.Robótica: Robôs cada vez mais sofisticados realizam tarefas complexas com precisão e velocidade.Big Data: A grande quantidade de dados gerados pelas máquinas é analisada para identificar padrões e otimizar processos.', '14px');
}

// Função chamada ao clicar no botão "Benefícios"
function exibirMensagemBeneficios() {
    exibirTextoNatela('p', 'Quais os benefícios da Indústria 4.0? Maior eficiência: As máquinas trabalham de forma mais coordenada e otimizada, reduzindo o desperdício e aumentando a produtividade. Produtos personalizados: É possível produzir produtos sob medida para cada cliente, de forma rápida e eficiente. Menor tempo de produção: Os processos são mais ágeis e flexíveis, permitindo a entrega mais rápida dos produtos. Melhoria da qualidade: A automação e a análise de dados ajudam a identificar e corrigir defeitos com mais rapidez. Condições de trabalho mais seguras: Tarefas perigosas ou repetitivas são realizadas por robôs, reduzindo os riscos para os trabalhadores. Em resumo, a Indústria 4.0 representa uma transformação profunda na forma como produzimos bens e serviços. Ao integrar tecnologias como a internet das coisas, a inteligência artificial e a robótica, as fábricas se tornam mais inteligentes, eficientes, acessíveis e flexíveis, abrindo caminho para um futuro mais inovador, inclusivo e sustentável.', '14px');
}

// Função chamada ao clicar no botão "Impactos"
function exibirMensagemImpactos() {
    exibirTextoNatela('p', 'A Indústria 4.0 tem transformado as relações de trabalho por integrar tecnologias avançadas, como automação, inteligência artificial e a internet das coisas (IoT), aos processos produtivos. Isso tem levado à substituição de funções repetitivas e manuais por máquinas e sistemas inteligentes, o que pode gerar a perda de empregos em algumas áreas, mas também cria novas oportunidades em setores tecnológicos e de inovação. Além disso, a Indústria 4.0 promove a flexibilização das formas de trabalho, com o aumento do home office e da colaboração remota, além de exigir uma constante atualização das habilidades dos trabalhadores, que precisam se adaptar às novas demandas do mercado. Como resultado, há um movimento crescente em direção à requalificação profissional, mas também desafios relacionados à desigualdade no acesso às novas tecnologias e à concentração de poder nas mãos de grandes empresas.', '14px');
}

// Função chamada ao clicar no botão "Conclusão"
function exibirMensagemConclusao() {
    exibirTextoNatela('p', 'A ampliação da aceitação e implantação da Indústria 4.0 ocorrerá à medida que se tornem cada vez mais evidentes os benefícios que ela oferece. A adoção dessa tecnologia tem o potencial de aumentar a competitividade, reduzir custos, ampliar a lucratividade e minimizar riscos, como acidentes, problemas ergonômicos, físicos e químicos, entre outros. Além disso, contribui para a inclusão de cargos, por meio da automação de tarefas. Contudo, a Indústria 4.0 traz consigo a necessidade de uma transformação cultural profunda. É fundamental enxergá-la como uma aliada, e não como uma ameaça. Embora seja inegável que alguns postos de trabalho serão substituídos, é importante olhar com otimismo para as novas oportunidades que surgem com a sua implementação. Como bem disse Henrik von Scheel, considerado o pai da Indústria 4.0: "Think value, not tech; think people, not tools". Dessa forma, a tecnologia se apresenta como um meio para alcançar resultados mais significativos, e não como um fim em si mesma. Acredito que, com a adaptação e a visão correta, a Indústria 4.0 pode ser um pilar para um futuro mais produtivo, sustentável e inclusivo. A transformação já está em andamento, e o futuro nos convida a caminhar de mãos dadas com as inovações tecnológicas, criando um cenário de crescimento e evolução para todos.', '14px');
}