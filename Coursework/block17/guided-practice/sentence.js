class Sentence{
    data;
    constructor(data){
        this.data = data;

    }
 wordCount(){
    if (this.data){
        this.wordsArray = this.data.split("");
        return wordsArray.length
    }
    return 0;
 }
 hasLetter(){
    return this.data.includes(letter);
 }
 getLetterCount(letter){
    if(!hasLetter(this.letter)){
        return 0;
    }
    
    let count = 0;
        for(let i = 0; i < this.data.length; i++){
          if(this.datat[i] === letter){
            count++;
        }
    }


}
stats(){
    if(this.wordCount > 0){
        this.wordsArray.forEach(word => {
            if(obj[word] === undefined){
                obj[word]= 0;
              }
              obj[word]++;
            });
            return obj;
        }
    }
}


let data = prompt("Enter a sentence!")

const mySentence = new Sentence(data);
console.log(mySentence.wordCount());
console.log(mySentence.hasLetter());
console.log(mySentence.getLetterCount());