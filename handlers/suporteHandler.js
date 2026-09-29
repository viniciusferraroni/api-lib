function suporteN1(chamado){
    console.log("N1 recebeu o chamado");
    if(chamado.prioridade === "normal"){
        console.log("N1 assumiu chamado");
        return "Suporte N1 atedeu";
    }

    console.log("N1 não conseguiu resolver");
    console.log("Encaminhou para o N2...");
    return suporteN2(chamado);
};

function suporteN2(chamado){
    console.log("N2 recebeu o chamado");
    if(chamado.prioridade === "media"){
        console.log("N2 assumiu chamado");
        return "Suporte N2 atedeu";
    }

    console.log("N2 não conseguiu resolver");
    console.log("Encaminhou para especialista...");
    return especialista(chamado);
};

function especialista(chamado){
    console.log("especialista recebeu o chamado");
    if(chamado.prioridade === "alta"){
        console.log("especialista assumiu chamado");
        return "Suporte especialista atedeu";
    }

    throw new Error("Nenhum responsável encontrado!");
};

module.exports = {
    suporteN1
}