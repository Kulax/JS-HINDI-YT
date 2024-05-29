const accountId = 144553
let accountEmail = "lav@google.com"
var accountPassword = "11221"  // scope defining problem
accountCity = "Noida" //possible but not recommendable
let accountState;
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Motihari"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId, accountPassword, accountCity, accountState]);