const {test, expect} = require('@jest/globals');
// Model dovrebbe essere una classe (crea un'istanza della classe Model) ✓
// L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza ✓
// L'istanza di model dovrebbe avere il metodo read ✓
// L'istanza di model dovrebbe avere il metodo add ✓
// read dovrebbe ritornare un array ✓
// add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista

const Model = require('../models/Model.js');

test("Model dovrebbe essere una classe (crea un'istanza della classe Model)", () => {
    const model = new Model("filename");
    expect(Model).toBeDefined();
    expect(model).toBeInstanceOf(Model);
})

test("L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza", () => {
    const model = new Model("filename");
    expect(model.filename).toBeDefined();
})

test("L'istanza di model dovrebbe avere il metodo read", () => {
    const model = new Model("filename");
    expect(model.read).toBeDefined();
})

test("L'istanza di model dovrebbe avere il metodo add", () => {
    const model = new Model("filename");
    expect(model.add).toBeDefined();
})

test("read dovrebbe ritornare un array", () => {
    const model = new Model("filename");
    expect( Array.isArray(model.read()) ).toBe(true);
})

test("add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista", () => {
    const model = new Model("filename");
    expect( () => model.add(undefined) ).toThrowError();
})

