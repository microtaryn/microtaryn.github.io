---
layout: essay
type: essay
title: Using StackOverflow: Be Prepared Before You Ask
# All dates must be YYYY-MM-DD format!
date: 2020-09-10
labels:
  - JavaScript
  - StackOverflow
  - Forum Decorum
---
<img width="300" style="display:inline" src="../images/happyProgrammer.png">

## Open Forums are a Different Ball Game
As an instructor, I often encourage my students to ask questions. I enjoy when my students ask me questions – I get to know what they are thinking and if the question goes beyond the scope of the class, it prompts me to learn more about the subject. But in the context of the World Wide Web, Eric Raymond begs to differ (See his article on [“How to Ask Questions The Smart Way.”](http://www.catb.org/esr/faqs/smart-questions.html#homework)) Eric Raymond and other prominent programmers have experience with open forums on computer programming such as [StackOverflow.](https://stackoverflow.com/) On StackOverflow, anyone can ask a question. And, anyone can give an answer. This opens up a metaphorical “can of worms” as the forums quickly become overpopulated with questions on the same topic. Some users of the site, Raymond explains, expect answers to homework questions and for others to solve their research projects for them. Due to this “inappropriate behavior”, it has resulted in growing distaste among StackOverflow’s contributors towards the “naïve” or “elementary” programmer. Thus, to make it possible for a less experienced programmer to ask questions, they should adhere to certain guidelines to get their questions answered successfully. In this essay, I will give one example of a well-worded question on StackOverflow that received positive feedback. I will also share an example of a poorly phrased question.

## A Good Question
A good question is, “What is the JavaScript version of sleep()?” [link to a Happy Camper's StackOverflow thread.](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep) The user (actually a community of 10 people) gives an example along with their question and clarifies that though their example method works, they want a better solution. See their example here:
```js
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}
```
In addition, the user cites another question and shows that their question is not a duplicate. So, the user has asked a specific question and has done their homework.

>This is not a duplicate of [Sleep in JavaScript - delay between actions.](https://stackoverflow.com/questions/758688/sleep-in->javascript-delay-between-actions); I want a real sleep in the middle of a function, and >not a delay before a piece of code >executes.

By phrasing the question in terms of the sleep() function (a commonly used function in multi-threaded languages such as Java), this helps people answering the question to understand the context in which the question is being asked. It shows that the person asking the question understands that JavaScript, being single-threaded, does not behave the same way as Java. But that they are looking for a solution that is similar enough so that they can use JavaScript in this fashion. Although this question was asked 11 years ago, it drew enough interest so that is has been updated to reflect more recent changes in the JavaScript languages (that is, [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) and [await.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

In summary, I imagine that the community of users who asked this question ten years ago have become happy campers. They pointed out an issue that has since been addressed by the developers of JavaScript.

## A Poor Question
A poorly worded post started with, “How do I remove objects from a JavaScript associative array?” [link to a poor, albeit popular StackOverflow thread.](https://stackoverflow.com/questions/346021/how-do-i-remove-objects-from-a-javascript-associative-array/346022#346022) The reason why this post is poor is because the example in the question was about an object rather than an array. See his example here:
```js
var myArray = new Object();
myArray["firstname"] = "Bob";
myArray["lastname"] = "Smith";
myArray["age"] = 25;
```
In fact, it seems the user has mistaken arrays for objects as his object is named myArray. It is clear that the user has not done his homework and his lack of understanding the fundamentals, has resulted in a question that is difficult to answer. There are attempts to answer his question in both ways: some on objects, some on arrays. Other viewers pointed out that removing properties from an object is not the same as removing elements from an array.

Although the user is unlikely to be an unhappy camper, his question caused frustration to many who tried to figure out his intent.
