# codewars-katas

> All my Codewars katas solutions with full test integration and more!

<img src="https://image.ibb.co/hGsWqG/katawarrior.png" alt="Kata Warrior" style="width: 336px;"/>

[![CodeWars](https://www.codewars.com/users/lndgalante/badges/large)](https://www.codewars.com/users/lndgalante "My Honor Badge")

## Repo structure

There's a folder for each rank (kyu) with katas (algorithms). And each kata has 2 files:

* `index.js`

  * Title
  * Description
  * Examples
  * Notes
  * Link
  * Long Solution
  * Short Solution
  * Function Exports

* `index.test.js`
  * With one or more test cases

> There is a `boilerplate.js` to create a new kata with the info above.

Also not every kata has a short solution.

## Dependencies

* [Lodash](https://github.com/lodash/lodash) and [Ramda](https://github.com/ramda/ramda) for using some utility
* [Prettier](https://github.com/prettier/prettier) for code-formatting
* [XO](https://github.com/sindresorhus/xo) for code-linting
* [Jest](https://github.com/facebook/jest) for testing

I also use [Quokka](https://quokkajs.com) Pro Edition for rapid prototyping that runs over the last Node.js version.
If you are using Quokka Pro you have this feature called [Live Comments](https://medium.com/@artem.govorov/using-live-code-comments-to-quickly-measure-code-performance-with-wallaby-js-and-quokka-js-7931a896133) just insert the special comment `/*?*/` or `//?` and it could save you lots of `console.log()`.

## Testing

If you want to test all katas run

```bash
 yarn test
```

If you want to test only a particular kyu rank run

```bash
 yarn test 6-kyu
```

## Complementary resources

In lot of katas you could use the power of Regular Expresions (RegEx) to save code and time. This course [Breaking the Ice With Regular Expressions](https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions) by CodeSchool it's great to getting started.

CodeWars katas has support for Node.js v6.11.0 and v8.1.3 so you could use ES6/ES2015 that will help you a lot. To get started with ES6 I recommend this [cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet) and [ES6.io](https://es6.io) course by Wes Bos.

## Purpose

Doing lot of katas could help you to improve your logic and algorithmic thinking. Also could help you to go with more confidence to interviews. I highly recommend this [Tech Interview Handbook](https://github.com/yangshun/tech-interview-handbook) which is a carefully curated content to help you ace your next technical interview.

## Personal Challenge

Try to solve 5 katas a day from kyu 8 to 5, sorted by most completed and filtered by no completed:

* [8 kyu - 322 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-8&xids=completed&beta=false&order_by=total_completed+desc)
* [7 kyu - 1298 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-7&xids=completed&beta=false&order_by=total_completed+desc)
* [6 kyu - 1262 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-6&xids=completed&beta=false&order_by=total_completed+desc)
* [5 kyu - 480 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-5&xids=completed&beta=false&order_by=total_completed+desc)

I'll begin to do katas with kyu 4 to 1 when having lots of experience with katas with kyu 8 to 5.

* [4 kyu - 169 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-4&xids=completed&beta=false&order_by=total_completed+desc)
* [3 kyu - 60 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-3&xids=completed&beta=false&order_by=total_completed+desc)
* [2 kyu - 29 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-2&xids=completed&beta=false&order_by=total_completed+desc)
* [1 kyu - 15 total](https://www.codewars.com/kata/search/my-languages?q=&r%5B%5D=-1&xids=completed&beta=false&order_by=total_completed+desc)

## Miscellaneous

* [Codewars CLI - A missing command line client for Codewars API](https://github.com/shime/codewars)
* [Awesome Codewars - Codewars Best Practices](https://github.com/dwqs/awesome-codewars/blob/master/summary.md)
* [Angelos Chalaris - 30 Seconds of Code](https://github.com/Chalarangelo/30-seconds-of-code)

## Similar Plattforms

* [LeetCode](https://leetcode.com)
* [CoderByte](https://coderbyte.com)
* [HackerRank](https://www.hackerrank.com)
* [CodeEval](https://www.codeeval.com)
* [CodeChef](https://www.codechef.com)
* [CodeFights](https://codefights.com)
* [Exercism](http://exercism.io)
* [Codility](https://codility.com)
