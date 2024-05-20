function acao(){
    let meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
    let semana = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado');

    agora = new Date(); // new é o array

    dia = agora.getDate();
    mes = agora.getMonth(); // o mês começa em 0, por isso uma solução é o array.
    ano = agora.getFullYear();
    sem = agora.getDay(); // o dia da semana também começa do 0.
    hora = agora.getHours() ;
    minuto = agora.getMinutes();
    sec = agora.getSeconds();

    saida =  document.getElementById('tempo') ;

    saida.innerHTML = `<p>A data e hora do sistema é:`;
    saida.innerHTML += `<p>Dia: <mark>${dia}</mark></p>`;
    saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`;
    saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`;
    saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`;
    saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`;
    saida.innerHTML += `<p>Minuto: <mark>${minuto}</mark></p>`;
    saida.innerHTML += `<p>Segundos: <mark>${sec}</mark></p></p>`;



    /* também funciona assim. tudo em uma linha só

    saida.innerHTML = `<p>A data e hora do sistema é <p>Dia: <mark>${dia}</mark></p>
    <p>Mês: <mark>${mes}</mark></p><p>Ano: <mark>${ano}</mark></p>
    <p>Dia da semana: <mark>${sem}</mark></p><p>Hora: <mark>${hora}</mark></p>
    <p>Minuto: <mark>${minuto}</mark></p><p>Segundos: <mark>${sec}</mark></p></p>`;
    */

    setInterval(acao, 1000) ;
}