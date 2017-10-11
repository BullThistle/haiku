(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Haiku = exports.Haiku = function () {
  function Haiku(haiku) {
    _classCallCheck(this, Haiku);

    this.haiku = haiku;
    this.vowels = ["a", "e", "i", "o", "u", "y"];
  }

  _createClass(Haiku, [{
    key: "lines",
    value: function lines() {
      var linesArray = this.haiku.split('\n');
      var arry = [];
      linesArray.forEach(function (lineArray) {
        arry.push(lineArray.split(" "));
      });
      return arry;
    }
  }, {
    key: "syllableCount",
    value: function syllableCount() {
      var classMethod = this;
      var linesArray = this.lines();
      var count = [];
      linesArray.forEach(function (line) {
        count.push(classMethod.count(line));
      });
      return count;
    }
  }, {
    key: "count",
    value: function count(line) {
      var classMethod = this;
      var sylCount = 0;
      line.forEach(function (word) {
        sylCount += classMethod.vowelCount(word);
      });
      return sylCount;
    }
  }, {
    key: "vowelCount",
    value: function vowelCount(word) {
      var classMethod = this;
      var count = 0;
      word = word.toLowerCase().split("");
      word.forEach(function (letter) {
        if (classMethod.vowels.indexOf(letter) > -1) {
          count += 1;
        }
      });

      count -= this.findDiphthong(word);

      if (word[word.length - 1] == 'e' && classMethod.vowels.indexOf(word.length - 2) == -1) {
        count -= 1;
      }
      if (word[word.length - 1] == 'e' && count == 0) {
        count = 1;
      }
      count += this.exceptionIo(word);
      count += this.exceptionIng(word);
      return count;
    }
  }, {
    key: "findDiphthong",
    value: function findDiphthong(word) {
      var classMethod = this;
      var count = 0;
      var currentVowel = false;
      var continueVowel = false;
      word.forEach(function (letter) {
        if (currentVowel && classMethod.vowels.indexOf(letter) > -1) {
          count += 1;
          currentVowel = false;
        } else if (classMethod.vowels.indexOf(letter) > -1) {
          currentVowel = true;
        } else {
          currentVowel = false;
        }
      });
      return count;
    }
  }, {
    key: "exceptionIo",
    value: function exceptionIo(word) {
      var count = 0;
      word = word.join("");
      if (word.includes("io")) {
        if (!word.includes("sion") && !word.includes("tion")) {
          count = 1;
        }
      }
      return count;
    }
  }, {
    key: "exceptionIng",
    value: function exceptionIng(word) {
      var count = 0;
      var wordStr = word.join("");
      if (wordStr.includes("ing")) {
        if (word[word.length - 1] == 'g' && word[word.length - 2] == 'n' && word[word.length - 3] == 'i' && this.vowels.indexOf(word[word.length - 4]) > -1) {
          count = 1;
        }
      }
      return count;
    }
  }]);

  return Haiku;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _haiku = require('./../js/haiku.js');

$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    var poem = $('#haikuIn').val();
    var haiku = new _haiku.Haiku(poem);
    var test = haiku.syllableCount();
    var haikuOut = void 0;

    if (test[0] === 5 && test[1] === 7 && test[2] === 5) {
      haikuOut = "This is a haiku";
    } else {
      haikuOut = "This is not a haiku";
    }

    $("#haikuOut").text(haikuOut);
  });
});

},{"./../js/haiku.js":1}]},{},[2]);
