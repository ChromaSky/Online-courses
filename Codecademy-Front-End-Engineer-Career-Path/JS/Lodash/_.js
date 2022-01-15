const _ = {
  
  // .clamp()
  clamp(number, lowerB, upperB) {
    let lowerClampedValue = Math.max(number, lowerB);
    let clampedValue = Math.min(lowerClampedValue, upperB);
    return clampedValue;
  },

  // .inRange()
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },

  // .words()
  words(string) {
    let arr = string.split(' ');
    return arr;
  },

  // .pad()
  pad(string, len) {
    if (string.length > len) {
      return string;
    }
    padStart = Math.floor((len - string.length) / 2);
    padEnd = len - string.length - padStart;
    let padNum = ' '.repeat(padStart) + string + ' '.repeat(padEnd);
    return padNum;
  },

  // .has()
  has(obj, key) {
    let hasValue = obj[key];
    if (hasValue != undefined) {
      return true;
    } return false;
    return hasValue;
    },
  
  // .invert()
  invert(obj) {
    let invObj = {};
    for (let i in obj) {
      let orgVal = obj[i];
      invObj[orgVal] = i;
    }
    return invObj;
  },

  // .findKey()
  findKey(obj, predicate) {
    for (let i in obj) {
      let value = obj[i];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return i;
      }
      undefined;
      return undefined;
    }
  },

  // .drop()
  drop(arr, n) {
    if(n === undefined) {
      n = 1;
    }
    droppedArray = arr.slice(n, arr.length);
    return droppedArray;
  },

  // .dropWhile()
  dropWhile(arr, predicate) {
    const ei = (element, index) => {
      return !predicate(element, index, arr);
    };
    let dropNumber = arr.findIndex(ei);
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
   },

   // .chunk()
   chunk(arr, size) {
     if (size === undefined) {
       size - 1;
     }
     let chunkArray = [];
     for (let i = 0; i < arr.length; i += size) {
       let arrayChunk = arr.slice(i, i+size);
       chunkArray.push(arrayChunk);
     }
     return chunkArray;
    }
}; 





// Do not write or modify code below this line.
module.exports = _;