// This program encodes and decodes secret messages.
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

// ---------------------------------------------------------------------

class CodeMaker
{
    private:
        int size;
        char codeChar[94];  // Array to hold the substitutions
                            // for the 94 printable ASCII chars
        int findIt(char[], int, char);

    public:
        CodeMaker();
        string encode(string);
        string decode(string);

};

// ---------------------------------------------------------------------

// Member function implementation section

// ---------------------------------------------------------------------
/*
CodeMaker::CodeMaker() {

    size = 94;
    ifstream inFile;
    inFile.open("9-8_code.dat");

    for (int ascii = 32; ascii < 127; ascii++)
        inFile >> codeChar[ascii - 32];

    inFile.close();

} // end of CodeMaker
*/
// ---------------------------------------------------------------------

CodeMaker::CodeMaker() {

    int size = 94;
//    string codeChar = "";

    int i;

    for (i = 65; i < 91; i++) codeChar += char(i);
    for (i = 97; i < 123; i++) codeChar += char(i);
    for (i = 65; i < 91; i++) codeChar += char(i);
    for (i = 97; i < 113; i++) codeChar += char(i);

    cout << "\ncodeChar => " << codeChar << endl;
    cout << "\nLength of codeChar => " << codeChar.length() << endl;
    




} // end of CodeMaker

// ---------------------------------------------------------------------

string CodeMaker::encode(string s) {

    int ascii;
    char newChar;
    string newString = "";      // will hold the encoded string

    for (unsigned pos = 0; pos < s.length(); pos++)
    {
        // Get the original character's ASCII code
        ascii = s[pos];

        // Get the new replacement character
        newChar = codeChar[ascii - 32];

        // Concatenate it onto the end of the new string
        newString += newChar;
    }

    return newString;

}

// ---------------------------------------------------------------------

string CodeMaker::decode(string s) {

    int index;
    char nextChar;
    char originalChar;
    string decodedText = "";

    for (unsigned pos = 0; pos < s.length(); pos++)
    {
        // Get the new character from the string
        nextChar = s[pos];

        // Call findIt to find it in the array and return its index
        index = findIt(codeChar, size, nextChar);

        // Get the original character by computing its ASCII code
        originalChar = index + 32;

        // Concatenate this character onto the end of the 
        // decoded text string being constructed
        decodedText += originalChar;
    }

    return decodedText;

}

// ---------------------------------------------------------------------

int CodeMaker::findIt(char A[], int size, char value) {

    int index = 0;
    int position = -1;
    bool found = false;

    while (index < size && !found)
    {
        if (A[index] == value)
        {
            found = true;
            position = index;
        }
        index++;
    }

    return position;

}

// ---------------------------------------------------------------------

int main() {

    string originalText, secretCode, finalText;
    CodeMaker myCoder;

    // Get text from the user
    cout << "Enter the message to be encoded.\n";
    getline(cin, originalText);

    // Send the text to be encoded and display the result
    secretCode = myCoder.encode(originalText);
    cout << "\nHere is the encoded message\n" << secretCode << endl;

    // Send the encoded text back to be decoded
    // and display the result
    finalText = myCoder.decode(secretCode);
    cout << "\nHere is the decoded message\n" << finalText << endl;

    return 0;

} // end of main

// ---------------------------------------------------------------------





























