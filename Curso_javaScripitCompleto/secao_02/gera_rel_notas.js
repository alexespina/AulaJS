function geraRelatorio(array){
    let contAprovados  = 0;
    let contReprovados = 0;
    for (const nota of array) {
        if(nota>= 7){
            contAprovados += 1;
        }else{
            contReprovados += 1;
        }
    }

    return `Aprovados: ${contAprovados}.Reprovados: ${contReprovados}`;
}

console.log(geraRelatorio([10,8,5,7,9,4,6]));