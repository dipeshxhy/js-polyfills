// implementation of custom map function 
Array.prototype.myMap = function (cb){
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    const element = cb(this[i],i);
    arr.push(element);
    
  }
  return arr;
};

const double = [1,2,3].myMap((item,i)=>`${i+1} :${item}`)
const triple = [2,,6,8,10].myMap(i =>{
  console.log(i)
  return i*3
})
console.log(double)
console.log(triple)