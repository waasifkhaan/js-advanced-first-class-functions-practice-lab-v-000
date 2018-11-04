function cb (el) {
  console.log(el.name);

};

const logDriverNames = function (drivers, cb) {
  for (const el of drivers) {
    return cb(el);
  }
};

function logDriverNames (collection) {
  for (const user of collection) {
    console.log(user.name);
  }
}