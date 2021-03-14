module.exports = function toReadable(number) {
    const a = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const numStr = number.toString();
    if (number === 0) {
        return "zero";
    } else if (number > 0 && number < 20) {
        return a[number];
    } else if (number >= 20) {
        return numStr.length === 2 && numStr[1] == 0
            ? `${b[numStr[0]]}`
            : numStr.length === 2
            ? `${b[numStr[0]]} ${a[numStr[1]]}`
            : numStr.length === 3 && numStr[1] == 0 && numStr[2] == 0
            ? `${a[numStr[0]]} hundred`
            : numStr.length === 3 && numStr[1] == 0
            ? `${a[numStr[0]]} hundred ${a[numStr[2]]}`
            : numStr.length === 3 && numStr[2] == 0
            ? `${a[numStr[0]]} hundred ${
                  a[numStr[1] + numStr[2]] || b[numStr[1]]
              }`
            : `${a[numStr[0]]} hundred ${
                  a[numStr[1] + numStr[2]] || b[numStr[1]] + " " + a[numStr[2]]
              }`;
    }
};
