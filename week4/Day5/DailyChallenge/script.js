function anagram(a, b) {
  let lowa = a.toLowerCase();
  let lowb = b.toLowerCase();
  let aArray = lowa.split('');
  let bArray = lowb.split('');

  let cArray = [];
  aArray.map((val, num) => (val == ' ' ? aArray.splice(num, 1) : val));
  bArray.map((val, num) => (val == ' ' ? bArray.splice(num, 1) : val));

console.log(aArray,bArray);

// !!!
  if (bArray.length != aArray.length) {
    console.log('they are not an anagram');
    return
  }
//   !!!

  aArray.map((val) => {
    function checkTrues() {
      for (let i = 0; i < bArray.length; i++) {
        if (val == bArray[i]) {
          console.log(val);
          console.log(bArray);
          return cArray.push(val);
        }
      }
    }
    checkTrues();
    console.log(cArray);
  });

  if (cArray.length == aArray.length) {
    console.log(`${a} is an anagram of ${b}`);
  } else {
    console.log('they are not an anagram');
  }
}

anagram('Astmoner', 'Moon starer');

// !!!anagram("Astmoer", "Moon starer")
// !!! dublicate herfleri nezere
