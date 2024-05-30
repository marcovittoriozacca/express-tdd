const {test, expect} = require('@jest/globals');

//tasks: 
// createSlug dovrebbe ritornare una stringa ✓
// createSlug dovrebbe ritornare una stringa in lowercase ✓
// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da - ✓
// createSlug dovrebbe incrementare di 1 lo slug quando esiste già
// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
// createSlug dovrebbe lanciare un errore se manca l'array dei post

const  createSlug = (string) => {
    
    let slug = string;
    if(typeof string !== "string"){
        slug = string+"";
    }
    slug = slug
            .replaceAll(" ", "-")
            .toLowerCase();



    return slug;
}

//createSlug returns a string
test('createSlug dovrebbe ritornare una stringa', () => {

    expect( typeof createSlug(12) ).toBe("string");
})


//createSlug retuns a lower case string
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const slug = createSlug("Hello WORLD");

    expect( slug ).toEqual(slug.toLowerCase());
})


//createSlug must replace all white spaces with -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    const slug = createSlug("Hello World");

    expect(slug).toEqual(slug.replaceAll(" ", "-"));
})
