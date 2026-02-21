Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};


const arr = [1, 2, 3];

arr.myForEach((item) => console.log(item));
const names = ["Hitesh", "Piyush", "Anirudh"];
names
  .myForEach((name) => console.log(name));
["a", "b", "c"].myForEach((al) => console.log(al));
