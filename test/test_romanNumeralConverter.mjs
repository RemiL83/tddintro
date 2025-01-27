import Test from "./test.mjs"
import decToRoman from "../romanNumeralConverter.mjs"

const test = Test("Roman numeral tester");

test.isEqual(decToRoman("a"), "", "Konvertering av ikke riktig input");

test.isEqual(decToRoman(1), "I", "Konvertering av 1 til Romersk");
test.isEqual(decToRoman(2), "II", "Konvertering av 2 til Romersk");
test.isEqual(decToRoman(4), "IV", "Konvertering av 4 til Romersk");
test.isEqual(decToRoman(5), "V", "Konvertering av 5 til Romersk");
test.isEqual(decToRoman(6), "VI", "Konvertering av 6 til Romersk");
test.isEqual(decToRoman(7), "VII", "Konvertering av 7 til Romersk");
test.isEqual(decToRoman(9), "IX", "Konvertering av 9 til Romersk");
test.isEqual(decToRoman(10), "X", "Konvertering av 10 til Romersk");
test.isEqual(decToRoman(38), "XXXVIII", "Konvertering av 38 til Romersk");
test.isEqual(decToRoman(39), "XXXIX", "Konvertering av 39 til Romersk");
test.isEqual(decToRoman(40), "XL", "Konvertering av 40 til Romersk");
test.isEqual(decToRoman(50), "L", "Konvertering av 50 til Romersk");
test.isEqual(decToRoman(74), "LXXIV", "Konvertering av 74 til Romersk");
test.isEqual(decToRoman(87), "LXXXVII", "Konvertering av 87 til Romersk");
test.isEqual(decToRoman(90), "XC", "Konvertering av 90 til Romersk");
test.isEqual(decToRoman(96), "XCVI", "Konvertering av 96 til Romersk");
test.isEqual(decToRoman(100), "C", "Konvertering av 100 til Romersk");
test.isEqual(decToRoman(400), "CD", "Konvertering av 400 til Romersk");
test.isEqual(decToRoman(436), "CDXXXVI", "Konvertering av 436 til Romersk");
test.isEqual(decToRoman(500), "D", "Konvertering av 500 til Romersk");
test.isEqual(decToRoman(900), "CM", "Konvertering av 900 til Romersk");
test.isEqual(decToRoman(1000), "M", "Konvertering av 1000 til Romersk");
test.isEqual(decToRoman(3999), "MMMCMXCIX", "Konvertering av 3999 til Romersk");

test.end();