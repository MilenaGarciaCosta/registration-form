export function MascaraParaData(data) {
    // Removendo tudo que não seja numérico
    let dataLimpa = data.replace(/\D/g, ''); // \D corresponde a qualquer dígito que não seja numérico; a flag 'g' procura por toda a string

    let dataComMascara = '';
    // Máscara DD/MM/YYYY
    // Primeiros dois digitos (dia)
    if (dataLimpa.length > 0) {
        dataComMascara += dataLimpa.substring(0, 2); // substring extrai da string a parte expecificada pelos índices (inicio, fim)
    }
    // Dígitos de três ao quatro (mês)
    if (dataLimpa.length > 2) {
        dataComMascara += '/' + dataLimpa.substring(2, 4);
    }
    // Dígitos de cinco ao oito (ano)
    if (dataLimpa.length > 4) {
        dataComMascara += '/' + dataLimpa.substring(4, 8)
    }

    return dataComMascara;
}

export function validarData(data) {
    // Verifica o formato  DD/MM/YYYY
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // Diferente do \D, o \d corresponde a qualquer caractere que seja um dígito (0-9)
    if (!dateRegex.test(data)) return false;

    // Extraindo dia, mês e ano
    const [dd, mm, yyyy] = data.split('/').map(Number);

    if (dd < 1 || dd > 31) return false;
    if (mm < 1 || mm > 12) return false;

    // Validando meses com 30 dias
    if ([4, 6, 9, 11].includes(mm) && dd > 30) return false;

    // Validando mês de fevereiro contando ano bissexto
    if (mm === 2) {
        const isBissexto = (yyyy % 4 === 0 && yyyy % 100 !== 0) || yyyy % 400 === 0;
        if (dd > (isBissexto ? 29 : 28)) return false;
    }

    // Criando objetos Date para comparação
    const hoje = new Date(); // Representando o momento atual
    const mesAtual = hoje.getMonth(); 
    const diaAtual = hoje.getDate();
    const dataNasc = new Date(yyyy, mm - 1, dd); // Subitrai-se 1 porque em JS os meses vão de 0-11

    // Calculando idade mínima
    const dataMinima = new Date(); // Criando outra variável com a data atual apra não alterar a data original durante os cálculos
    dataMinima.setFullYear(hoje.getFullYear() - 18);// hoje.getFullYear pega o ano atual, subtrai-se de 18 para saber o ano mínimo em que a pessoa tem que ter nascido para ser maior de 18 anos

    // Ajuste para quem ainda não fez aniversário este ano
    if (mesAtual < (mm - 1) || (mesAtual === (mm - 1) && diaAtual < dd)) {
        return false;
    }

    return dataNasc <= dataMinima;
}