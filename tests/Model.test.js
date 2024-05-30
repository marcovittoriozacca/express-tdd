const {test, expect} = require('@jest/globals');
// Model dovrebbe essere una classe (crea un'istanza della classe Model) ✓
// L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza
// L'istanza di model dovrebbe avere il metodo read
// L'istanza di model dovrebbe avere il metodo add
// read dovrebbe ritornare un array
// add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista

class Model {
    constructor(filename){
        this.filename = filename;
    }
}

test("Model dovrebbe essere una classe (crea un'istanza della classe Model)", () => {
    expect(Model).toBeDefined();
    expect(typeof Model).toBe("function");
})

test("L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza", () => {
    const model = new Model("filename");
    expect(model.filename).toBeDefined();
})

