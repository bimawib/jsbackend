// TRY AND CATCH
//
try{
    console.log("This is a code");
    errorCode;
    console.log("This is also a code");
}catch(error){
    console.log("Terjadi error!");
    console.log("error name: "+error.name);
    console.log("error message: "+error.message);
    console.log("error stack: "+error.stack);
}

// TRY CATCH FINALLY
//
try{
    console.log("TRY CATCH FINALLY");
    console.log("aikotoba");
    // console.log(aikotoba);
}catch(error){
    console.log("ERROR: "+error.message);
}finally{
    console.log("FINALLY THIS WILL BE EXECUTED EITHER ERROR OR NOT");
}

// THROWING ERRORS
//
let json = '{"name":"URUCA", "org":"CR"}';
let badJson = '{bad json}';

try{
    let user = JSON.parse(json); // parsing dari string
    console.log("NAME IS "+user.name);
    console.log("FROM "+user.org);
}catch(error){
    console.log("ERROR : ")
    console.log(error.name);
    console.log(error.message);
}

// use throw if some condition happen
let chigiri = '{"name": "Chigiri Hyoma", "age":20}';
// let chigiri = '{"name": "Chigiri Hyoma"}'; // syntax error where user.age not defined

try{
    let user = JSON.parse(chigiri);
    if(!user.age){
        throw new SyntaxError("token 'age' is required");
    }

    errorCode;

    console.log("NAME IS "+user.name);
    console.log("AGE "+user.age);
}catch(error){
    if(error instanceof SyntaxError){
        console.log("JSON ERROR : ")
        console.log(error.message);
    }else if(error instanceof ReferenceError){
        console.log("REFERENCE ERROR: "+error.message);
    }else{
        console.log(error.stack);
    }
    
}


// CUSTOM ERROR
//
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "Validation Error";
    }
}

let isagi = '{"Age": 21}';

try{
    let user = JSON.parse(isagi);

    console.log("CUSTOM ERROR TESTING");

    if(!user.name){
        throw new ValidationError("token 'name' is required");
    }
    if(!user.age){
        throw new ValidationError("token 'age' is required");
    }

    console.log(user.name);
    console.log(user.age);

}catch(error){
    if(error instanceof SyntaxError){
        console.log("JSON ERROR : ")
        console.log(error.message);
    }else if(error instanceof ValidationError){
        console.log("Validation error: "+error.message);
    }else if(error instanceof ReferenceError){
        console.log("REFERENCE ERROR: "+error.message);
    }else{
        console.log(error.stack);
    }
}

let sus = "SUSSY";
if(typeof sus !== "number"){
    console.log("BUKAN NUMBER");
}else{
    console.log("TIPE NUMBER");
}