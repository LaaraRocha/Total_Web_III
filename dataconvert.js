let data = new Date();

let dataFormatada = formatDateCustom(data)

formatDateUtc(dataFormatada)


function formatDateCustom(data) {
    console.log(data);
    let dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    console.log('data formatada ' + dataFormatada);
    return dataFormatada;
}

function formatDateUtc(dataFormatada) {
    //2022-09-16T23:45:34.037Z
    let primeiraParte = dataFormatada.split(' ')[0];
    let secundaParte = dataFormatada.split(' ')[1];

    let dia = primeiraParte.split('/')[0],
        mes = primeiraParte.split('/')[1],
        ano = primeiraParte.split('/')[2],
        hora = secundaParte.split(':')[0],
        minuto = secundaParte.split(':')[1],
        segundo = secundaParte.split(':')[2];

    /*console.log(primeiraParte);
    console.log(secundaParte);*/

    let dataUtc = new Date(ano, mes, dia, hora, minuto, segundo);

    console.log('data UTC ' + dataUtc);

    return dataUtc;

}