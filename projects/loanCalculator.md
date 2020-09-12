---
layout: project
type: project
image: images/piggy-3608365_1920.jpg
title: Payoff Projector for Loan
permalink: projects/loanCalculator
# All dates must be YYYY-MM-DD format!
date: 2020-09-04
labels:
  - JavaScript
  - HTML
summary: Calculate the months it will take to pay off that loan. Do you really want to pay just the minimum amount?
---
<img width="45%" style="display:inline" src="../images/loanCalc.png"><img width="40%" style="display:inline" src="../images/brokePiggy.jpg">

# Payoff Projector for Loan (Loan Calculator)

## The idea

Everyone takes out a loan at some point in their lives. Credit cards, in a sense, function like loans - where the amount that isn't paid off accrues interest. It would be best to pay off the credit card in its entirety - but we know that is not always doable and sometimes we pay just the minimum amount. But how much interest would that accumulate over time? And what is a reasonable monthly payment to avoid accumulating a large interest? This program is built for ICS314 and uses JavaScript to help answer these questions.

## The math

The math behind the getMonths() function is based on the following:

<img width="300" class="cartoon of programmer thinking" src="../images/formula.png">

## The program
You can find the code to this program in my [Projects - loanCalculator](https://github.com/microtaryn/microtaryn.github.io/tree/master/projects/loanCalculator) folder or run it yourself in [JFiddle](https://jsfiddle.net/butterfreeDay/fLhv640k/)

We can breakdown the code as follows. The **init()** function links the clicking of the button with an id="calculate" to the calling of the **calcMonths()** function. The **calcMonths()** function will take the values entered by the user for 1) the amount per month, 2) the total amount originally borrowed and 3) the annual interest rate. It calls the **getMonths()** function to perform the calculation involving the quotient of logs (illustrated in the math section. If the **getMonths()** function returns **NaN** or not a number, this means that the payment per month is so small that it would take forever to pay off the loan. This message is displayed to the user. Otherwise, if the months is a valid number, several sentences displaying the 1) number of months, 2) the total amount paid and 3) the total interest paid are shown on the screen.

```js
function init() {
                const calculate = document.getElementById("calculate");
                calculate.addEventListener('click',calcMonths);
            }
```

## Conclusion
This project was an exercise in demonstrating to people why it is important to pay off more than just the minimum payment on a credit card. This is because the interest rate for credit cards is so high. Users of my program can see 1) how long it would take to pay off a large balance and 2) the large amount of interest that they would have to pay. Hopefully, they also see that they should not allow their credit card balance to get high.
