const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checaLinks(links){
    const linksProntos = await Promise.all(links.map( async x => {
        const res = await fetch(x)

        return res.status
    }))

    return linksProntos
}

function arrayDeLinks(paraProcessar){

    return paraProcessar.map((linksObjetos) => Object.values(linksObjetos).join())
}

async function validarLinks(linksValidados){
    const links = arrayDeLinks(linksValidados)
    const res = await checaLinks(links)

    const resultado = links.map((objeto, i) => ({ 
        objeto,
        status: res[i]


    }))

    return resultado
    
}

module.exports = validarLinks