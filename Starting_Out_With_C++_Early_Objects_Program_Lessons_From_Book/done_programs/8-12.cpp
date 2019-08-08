/*
    This program illustrates how a string can be processed as an array
    of individual characters. It reads in a string, then counts the
    number of vowels in the s tring . It uses the toupper functio n to
    u ppercase each letter in the string a nd the string class member
    function length() to determine how many characters are in the string .
*/

#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {

    char ch;
    int vowelCount = 0;
    string sentence;

    cout << "Enter nay sentence you wish and I will \n"
        << "tell you how many vowels are in it.\n";
    getline(cin, sentence);

    for (int pos = 0; pos < sentence.length(); pos++)
    {
        // Uppercase a copy of the next character and assign it to ch
        ch = toupper(sentence[pos]);

        // If the charater is a vowel, increment vowelCount
        switch(ch)
        {
            case'A':
            case'E':
            case'I':
            case'O':
            case'U': vowelCount++;
        }

    }

    cout << "There are " << vowelCount << " vowels in the sentence.\n";

    return 0;
     
}
