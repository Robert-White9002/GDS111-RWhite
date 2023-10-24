console.log("Coupon Calculator");

var cp = 0;
var cbc = 10;
var gbc = 3;
var cb = cp/10;
var gb = cp/3;

cp = prompt ("Enter your number of coupons:");
if (cp>=cbc) {
    remainingCoupons = cp % cbc;
    candyBars = (cp - remainingCoupons)/cbc;

console.log("You can redeem" + candyBars + "candy bars." );
console.log("You will have " + remainingCoupons + " coupons remaining.");

}else if (cp>=gbc) {
    remainingCoupons = cp % gbc;
    gumballs = math.floor(remainingCoupons/gbc);

console.log("You can redeem " + cp % gbc + " gumballs.");
console.log("You will have " + remainingCoupons + " coupons remainiing.");

}else
console.log("You have" + cp + "coupons" + cb + "candy bars" + gb + "gumballs");
