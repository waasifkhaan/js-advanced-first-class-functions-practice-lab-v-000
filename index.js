const cb = function (el) {
  console.log(el.name);

};

const logDriverNames = function (drivers, cb) {
  for (const el of drivers) {
    cb(el);
  }
};
