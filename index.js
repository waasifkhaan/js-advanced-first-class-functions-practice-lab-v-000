
function logDriverNames (collection) {
  for (const user of collection) {
    console.log(user.name);
  }
}
function logDriversByHometown(drivers, hometown){
for (const user of drivers ){
  if (user.hometown === hometown){
    console.log(user.name);
  }
}
}

function driversByRevenue(drivers){

}

const revenueSorter = function (num1, num2) {
  return num1.revenue - num2.revenue;
};
 
drivers.sort(revenueSorter);
// => [2, 3, 5, 7, 13, 17]