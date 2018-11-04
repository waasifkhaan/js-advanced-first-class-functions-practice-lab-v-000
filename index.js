function cb (el) {
  console.log(el.name);

};

const logDriverNames = function (drivers, cb) {
  for (const el of drivers) {
    return cb(el);
  }
};
