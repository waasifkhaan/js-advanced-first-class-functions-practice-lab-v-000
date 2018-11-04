function logDriverNames(drivers){
  newArray = [];
drivers.forEach(
  newArray.push(console.log(driver.name));
)
return newArray;

}

const callback = function (el) {
  console.log(el.name);
  
};
 
const myForEach = function (arr, cb) {
  for (const el of arr) {
    cb(el, arr.indexOf(el), arr);
  }
};
 
myForEach(['Red', 'Yellow', 'Blue'], callback);
