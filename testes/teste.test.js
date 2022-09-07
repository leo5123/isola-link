const pegaArquivo = require('../index')

const retorno = [ {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
}
    
]

describe('pegaArquivo:',() => {
    it('tem que ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function')
    })

    it('tem que retornar array',async () => {
        const result = await pegaArquivo('/Users/leooc/Desktop/2299-lib-nodejs-markdown-aula-4/testes/arquivos/test1.md')
        
        expect(result).toEqual(retorno)
    })
    it('sem links',async () => {
        const result = await pegaArquivo('/Users/leooc/Desktop/2299-lib-nodejs-markdown-aula-4/testes/arquivos/test2.md')
        
        expect(result).toEqual('não há links')
    })
})
