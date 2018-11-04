function logDriverNames(drivers){
  newArray = [];
drivers.forEach(
  newArray.push(console.log(driver.name));
)
return newArray;

}

const cb = function (el) {
  console.log(el.name);

};

const logDriverNames = function (drivers, cb) {
  for (const el of drivers) {
    cb(el);
  }
};

myForEach(['Red', 'Yellow', 'Blue'], callback);
