/* 
Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
For example, “The movie is not that bad, I like it”.

Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
For example, the result here should be : “The movie is good, I like it”
If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence. */

let sentence = "The pizza is not that bad ,but i cannot eat it.";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
let words = sentence.slice(wordNot, wordBad + 3)
if (wordNot < wordBad) {
    console.log(sentence.replace(words, "good"))
} else(
    console.log(sentence)
)