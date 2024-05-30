const  createSlug = (string, posts) => {
    if(!string || !posts){
        throw new Error();
    }

    if(typeof string !== "string"){
        string = string+"";
    }

    string = string.replace(/[^\w\s]|_/g, '');
    if(string.length === 0){
        throw new Error();
    }
    string = string
                .replaceAll(" ", "-")
                .toLowerCase();
    
    let baseSlug = string;
    let counter = 1;
    const slugsList = posts.map(e => e.slug);
    while(slugsList.includes(baseSlug)){
        baseSlug = `${string}-${counter}`;
        counter++;
    }


    return baseSlug;
}

module.exports = createSlug;