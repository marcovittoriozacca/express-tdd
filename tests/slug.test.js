const {test, expect} = require('@jest/globals');
const postsList = require('../db/posts.json');
//tasks: 
// createSlug dovrebbe ritornare una stringa ✓
// createSlug dovrebbe ritornare una stringa in lowercase ✓
// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da - ✓
// createSlug dovrebbe incrementare di 1 lo slug quando esiste già ✓
// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato ✓
// createSlug dovrebbe lanciare un errore se manca l'array dei post ✓

const createSlug = require('../utils.js');

//createSlug returns a string
test('createSlug dovrebbe ritornare una stringa', () => {
    const slug = createSlug(12, postsList);
    expect( typeof slug).toBe("string");
})


//createSlug retuns a lower case string
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const slug = createSlug("Hello WORLD", postsList);

    expect( slug ).toEqual(slug.toLowerCase());
})


//createSlug must replace all white spaces with -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    const slug = createSlug("Hello World", postsList);

    expect(slug).toEqual(slug.replaceAll(" ", "-"));
})

test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    const slugsList = postsList.map(p => p.slug)
    const slug = createSlug("ciambellone", postsList);
    expect(slugsList.includes(slug)).toBe(false);
})


test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    
    expect(() => createSlug() ).toThrowError();
    expect(() => createSlug(undefined) ).toThrowError();
    expect(() => createSlug(undefined, posts) ).toThrowError();
    expect(() => createSlug("/") ).toThrowError();
})


test("createSlug dovrebbe lanciare un errore se manca l'array dei post", () => {
    expect( () => createSlug("slug", undefined) ).toThrowError();
})