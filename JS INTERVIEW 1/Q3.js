// Q3. Implement a function strContains(char) that I can use on any string and it returns true/false if the character “char” is present on a string (optimize it as much as possible)

// Example:
// “I am a string”.strContains(‘@’); // should return false
// “I am a string”.strContains(‘a’); // should return true


//  1.Using prototype to add this function for strings

String.prototype.strContains = function(char){

    //  2.indexOf returns the index at which the String is found and if not present returns -1
    let index = this.indexOf(char);
    if(index==-1)
        return false;
    else 
        return true;
}

//Testing the strContains function

console.log("Hello-World".strContains("He"));
console.log("Hello-World".strContains("Hwe"));