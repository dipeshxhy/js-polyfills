//forEach Array

Array.prototype.itemsEach = function (cb) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
};

// flat array
Array.prototype.itemsFlat = function (depth = 1) {
  let arr = this;
  let res = [];

  function flatten(arr, depth) {
    arr.itemsEach((item) => {
      if (depth > 0 && Array.isArray(item)) {
        flatten(item, depth - 1);
      } else {
        res.push(item);
      }
    });
  }
  flatten(arr, depth);
  return res;
};

// map the array

Array.prototype.itemsMap = function (cb) {
  let arr = this;
  console.log(arr);
  let res = [];
  arr.itemsEach((item, idx) => {
    let el = cb(item, idx, arr);
    res.push(el);
  });
  return res;
};

// filter array

Array.prototype.itemsFilter = function (cb){
  let arr = this;
  let res = [];
  arr.itemsEach((item)=>{
    if(cb(item)){
      res.push(item)
    }  
  
  })
  return res ;
}

String.prototype.removeLast = function (length){
  let str=this;
   return str.slice(0,-length);
  
}
// last element of array
Array.prototype.itemLast = function (){
  let arr = this
  if(!arr || arr.length ===0) return []
  return arr[arr.length-1]
}

// join array

Array.prototype.itemsJoin = function (separator=","){
  let arr = this;
  let str = ""
 for(let i =0; i<arr.length;i++){
  console.log(arr[i])
  str += arr[i] + separator
   
}
  return str.removeLast(separator.length);

}

// console.log("apple".removeLast())


// examples
// console.log([1, 2, [3, [4]]].itemsFlat(2));
// console.log([1, 2, 10, 9, 8].itemsMap((v) => v * 2));
// console.log([1, 2, 10, 9, 8].itemsFilter((v) => v !==2));
// console.log([1, 2, 10, 9, 8].itemLast());
console.log([1, 2, 10, 9, 8].itemsJoin("//"));
