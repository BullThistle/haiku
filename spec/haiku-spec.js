import { Haiku } from './../js/haiku.js';


  // beforeEach(function() {
  //   poem = "A summer river being crossed" \n +
  //           "how pleasing" \n +
  //           "with sandals in my hands!";
  //   haiku = new Haiku(poem);
  // });
  //
  // describe('Haiku', function(){
  //   it('haiku should be an object', function(){
  //       expect(haiku).toEqual(true);
  //   });
  // });
  describe('exceptionIo', function() {
    it('should return the amount of diphthongs in a word', function(){
      let poem = `Consider me
                  As one who loved poetry
                  And persimmons`;
      let haiku = new Haiku(poem);
      expect(haiku.exceptionIo(["b","i","o"])).toEqual(1);
      expect(haiku.exceptionIo(["s","i","o","n"])).toEqual(0);
      expect(haiku.exceptionIo(["t","i","o","n"])).toEqual(0);
    });
  });

  describe('lines', function() {
    it('should return a three seperated lines', function(){
      let poem = `A summer river being crossed
              how pleasing
              with sandals in my hands!`;
      let haiku = new Haiku(poem);
      let poemLines = haiku.lines();
      expect(poemLines.length).toEqual(3);
    });
  });

  describe('findDiphthong', function() {
    it('should return the amount of diphthongs in a word', function(){
      let poem = `A summer river being crossed
              how pleasing
              with sandals in my hands!`;
      let haiku = new Haiku(poem);
      let word = ["o", "o", "p", "s", "o", "o"];
      let arr = ["b", "o", "o", "e", "d"];
      expect(haiku.findDiphthong(word)).toEqual(2);
      expect(haiku.findDiphthong(arr)).toEqual(1);
    });
  });

  describe('vowelCount', function() {
    it('should return the count of syllable in each word', function(){
      let poem = `A summer river being crossed
              how pleasing
              with sandals in my hands!`;
      let haiku = new Haiku(poem);
      expect(haiku.vowelCount("thiire")).toEqual(1);
      expect(haiku.vowelCount("the")).toEqual(1);
      expect(haiku.vowelCount("there")).toEqual(1);
      expect(haiku.vowelCount("PHOOEY")).toEqual(2);

    });
  });

  describe('syllableCount', function() {
    it('should return the amount of all three lines syllable count', function(){
      let poem = `Consider me
                  As one who loved poetry
                  And persimmons`;
      let haiku = new Haiku(poem);
      expect(haiku.syllableCount()).toEqual([4, 7, 4 ]);
    });
  });

  describe('exceptionIng', function() {
    it('should return the count of ings after a vowel', function(){
      let poem = `Consider me
                  As one who loved poetry
                  And persimmons`;
      let haiku = new Haiku(poem);
      let arr = ["g", "o", "i", "n", "g"];
      expect(haiku.exceptionIng(arr)).toEqual(1);
    });
  });
