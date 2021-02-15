function argument() {
    let fullName= "";
    for(let i=0; i< arguments.length; i++){
        const name = arguments[i];
        fullName = fullName +' '+ name;
    }
    return fullName;
}
const result = argument('Shamim','Poribohon' );
console.log(result)