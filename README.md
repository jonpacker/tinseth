# Tinseth

Glenn Tinseth's IBU formula.

## Install

```
npm install tinseth
```

## Usage

```javascript
var tinseth = require('tinseth');
tinseth(og, boilSize, postBoilVolume, aa, amount, time); // -> IBUs for this hop addition
```

## Args

* `og` the expected OG of your brew
* `boilSize` the amount of the wort at the start of the boil (in liters)
* `postBoilVolume` the amount of wort at the end of the boil (in liters)
* `aa` the alpha acid percentage of the hop, a number between `0.0` and `1.0`
* `amount` the amount of hops in this addition (in grams)
* `time` the duration this hop will be in the boil for (in minutes)
* `maximumUtilizationValue` **optional** the maximum utilization value. Defaults to `4.15`. From *How to Brew*: "This number may be adjusted to customize the curves to your own system. If you feel that you are having a very vigorous boil or generally get more utilization out of a given boil time for whatever reason, you can reduce the number a small amount to 4 or 3.9. Likewise if you think that you are getting less, then you can increase it by 1 or 2 tenths."


