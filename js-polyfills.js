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
  let res = [];
  arr.itemsEach((item, idx) => {
    let el = cb(item, idx, arr);
    res.push(el);
  });
  return res;
};

// filter array

Array.prototype.itemsFilter = function (cb) {
  let arr = this;
  let res = [];
  arr.itemsEach((item) => {
    if (cb(item)) {
      res.push(item);
    }
  });
  return res;
};

String.prototype.lastStr = function (length) {
  let str = this;
  return str.slice(0, -length);
};

// last element of array
Array.prototype.itemLast = function () {
  let arr = this;
  if (!Array.isArray(arr) || arr.length === 0) return [];
  return arr[arr.length - 1];
};

// join array

Array.prototype.itemsJoin = function (separator = ",") {
  let arr = this;
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + separator;
  }
  return str.lastStr(separator.length);
};

//  reduce array
Array.prototype.itemsReduce = function (cb, initialValue) {
  let arr = this;
  let acc = initialValue;

  arr.itemsEach((item) => {
    acc = cb(acc, item);
  });
  return acc;
};

//  find method
Array.prototype.itemFind = function (cb) {
  let arr = this;
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      res = arr[i];
      break;
    }
  }
  return res;
};

// transform String
String.prototype.transform = function (cb) {
  return cb(this);
};
String.prototype.upper = function () {
  return this.at(0).toUpperCase() + this.slice(1).toLowerCase();
};

// examples

console.log("-----------Array Methods Polyfills ----------");

console.log("-----------01. forEach / itemsEach ----------");
console.log([1, 4, 6, 10, -1, 65, 100].itemsEach((it) => console.log(it)));

console.log("-----------02. flat / itemsFlat ----------");
console.log([1, 4, [6, [10, -1]], [65, 100]].itemsFlat(3)); // it accepts depth

console.log("-----------03. map / itemsMap ----------");
console.log(
  ["hitesh", "piyush", "anirudh"].itemsMap(
    (it) => it.transform((str) => str.upper()) + ` ${"sir".upper()}`,
  ),
);

console.log("-----------04. filter / itemsFilter ----------");
console.log([2, 3, 4, 5, 8, 10].itemsFilter((it) => it % 2 === 0));

console.log("-----------05. reduce / itemsReduce ----------");
console.log([2, 3, 4, 5, 8, 10].itemsReduce((sum, item) => sum + item, 0));

console.log("-----------06. join / itemsJoin ----------");
console.log(
  `Programming 👨‍💻 se Rista Banau ${"\n"} Chaicode se`,
  ["Hitesh", "Piyush", "Anirudh", "Chaicode"].itemsJoin(" ☕ "),
);

console.log("-----------07. find / itemFind ----------");
console.log(
  ["Orange", "Red", "Blue", "Violet", "Pink", "Purple"].itemFind(
    (it) => it.transform((it) => it.toLowerCase()) === "pink",
  ),
);

console.log("-----------07. last / itemLast ----------");
console.log(["Orange", "Red", "Blue", "Violet", "Pink", "Purple"].itemLast());

console.log(`------------------Build with confidence with ☕--------------------`);

