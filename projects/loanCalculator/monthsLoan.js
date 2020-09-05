/*
 *Author: Taryn Takebayashi
 * This function is used to calculate the number of months it would
 * take to pay off a loan given the following:
 * payment - monthly payment
 * borrowed - amount borrowed
 * rate - annual interest rate. Enter in decimal form.
*/
function getMonths(payment,borrowed,rate) {
    let r = rate/12;
    let months = Math.log(payment/(payment - (borrowed*r)))/Math.log(1+r);
    return months;
}
//console.log(getMonths(40,500,0.1));
