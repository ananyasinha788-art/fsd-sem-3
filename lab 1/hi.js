/*write a function to take  number between 0 to 9 and return in words through arrow gunction*/
const numberToWord = (num) => {
    const words = [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine"
    ];

    if (num >= 0 && num <= 9) {
        return words[num];
    } else {
        return "Invalid number";
    }
};

console.log(numberToWord(5))