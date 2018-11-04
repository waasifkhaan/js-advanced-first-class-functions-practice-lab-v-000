
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
