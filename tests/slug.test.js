const {test, expect} = require('@jest/globals');

//tasks: 
// createSlug dovrebbe ritornare una stringa
// createSlug dovrebbe ritornare una stringa in lowercase
// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
// createSlug dovrebbe incrementare di 1 lo slug quando esiste già
// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
// createSlug dovrebbe lanciare un errore se manca l'array dei post


// Non richiesta
// it('definire la funzione createSlug()', () => {
//     createSlug();
//     expect(createSlug()).toBeDefined();
// })

const  createSlug = (string) => {
    if(typeof string !== "string"){
        string = string+"";
    }
    return string;
}

test('createSlug dovrebbe ritornare una stringa', () => {

    expect( typeof createSlug(12) ).toBe("string");
})