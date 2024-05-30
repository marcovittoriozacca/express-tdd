class Model {
    data = [1,2,3,4,5];
    constructor(filename){
        if(!filename){
            throw new Error
        }
        this.filename = filename;
    }

    read(){
        return this.data;
    }
    add(value){
        if(!value){
            throw new Error;
        }else{
            this.data.push(value)
            return this.read;
        }
    }
}

module.exports = Model;