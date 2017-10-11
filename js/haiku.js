export class Haiku {
  constructor(haiku){
    this.haiku = haiku;
    this.vowels = ["a", "e", "i", "o", "u", "y"];
  }

  lines(){
    let linesArray = this.haiku.split('\n');
    let arry=[];
    linesArray.forEach(function(lineArray){
      arry.push(lineArray.split(" "));
    });
    return arry;
  }

  syllableCount(){
    let classMethod = this;
    let linesArray = this.lines();
    let count = [];
    linesArray.forEach(function(line){
      count.push(classMethod.count(line));
    });
    return count;
  }

  count(line){
    let classMethod = this;
    let sylCount = 0;
    line.forEach(function(word){
      sylCount += classMethod.vowelCount(word);
    });
    return sylCount;
  }

  vowelCount(word){
    let classMethod = this;
    let count = 0;
    word = word.toLowerCase().split("");
    word.forEach(function(letter){
      if(classMethod.vowels.indexOf(letter) > -1){
        count += 1;
      }
    });

    count -= this.findDiphthong(word);

    if((word[word.length - 1] == 'e') && (classMethod.vowels.indexOf(word.length - 2) == -1)){
      count -= 1;
    }
    if((word[word.length - 1] == 'e') && count == 0){
      count =1;
    }
    count += this.exceptionIo(word);
    count += this.exceptionIng(word);
    return count;
  }

  findDiphthong(word){
    let classMethod = this;
    let count = 0;
    let currentVowel = false;
    let continueVowel =false;
    word.forEach(function(letter){
      if(currentVowel && classMethod.vowels.indexOf(letter) > -1){
        count +=1;
        currentVowel = false;
      }
      else if(classMethod.vowels.indexOf(letter) > -1){
        currentVowel = true;
      }else{
        currentVowel = false;
      }
    });
    return count;
  }

  exceptionIo(word){
    let count =0;
    word = word.join("");
    if(word.includes("io")){
      if (!(word.includes("sion")) && !(word.includes("tion"))){
        count = 1;
      }
    }
    return count;
  }

  exceptionIng(word){
    let count =0;
    let wordStr = word.join("");
    if(wordStr.includes("ing")){
      if ((word[word.length-1] == 'g') && (word[word.length-2] == 'n') && (word[word.length-3] == 'i') && (this.vowels.indexOf(word[word.length-4]) > -1)){
        count = 1;
      }
    }
    return count;
  }

}
