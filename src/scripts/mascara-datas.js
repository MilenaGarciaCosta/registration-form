export function MascaraParaData(data){
    // Removendo tudo que não seja numérico
    let dataLimpa = data.replace(/\D/g, ''); // \D corresponde a qualquer dígito que não seja numérico; a flag 'g' procura por toda a string

    let dataComMascara = '';
    // Máscara DD/MM/YYYY
    // Primeiros dois digitos (dia)
    if(dataLimpa.length > 0){
        dataComMascara += dataLimpa.substring(0,2); // substring extrai da string a parte expecificada pelos índices (inicio, fim)
    }
    // Dígitos de três ao quatro (mês)
    if(dataLimpa.length >2){
        dataComMascara += '/' + dataLimpa.substring(2,4);
    }
    // Dígitos de cinco ao oito (ano)
    if(dataLimpa.length > 4){
        dataComMascara += '/' + dataLimpa.substring(4,8)
    }

    return dataComMascara;
}

export function validarData(data){
    const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/; // Diferente do \D, o \d corresponde a qualquer caractere que seja um dígito (0-9)
    return dataRegex.test(data);
    // const [dd, mm, aaaa] = [..."15031998".match(/(\d{2})?(\d{2})?(\d{4})?/).slice(1)];
    // O indice 1 no .slice remove o primeiro item do array criado pelo match, que corresponde ao valor inteiro da string
}