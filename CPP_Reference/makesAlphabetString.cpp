// generateCause.cpp
// 
// This program makes a string and fills it with letters, all
// the caps first then the lowers.  It don't do nothin else.
//
// password generator, maybe
//

#include <iostream>
#include <fstream>
#include <string>
using namespace std;

// ---------------------------------------------------------------
// prototypes:




// ---------------------------------------------------------------

int main() { 

string allChars;
int i;

for (i=65; i<91; i++) allChars += char(i); 
for (i=97; i<123; i++) allChars += char(i); 
//for (i=65; i<91; i++) allChars += char(i); 

cout << "\n----------------------------------------\n";

cout << "\nThe String => " << allChars << "\n";


cout << "\n----------------------------------------\n";

return 0;
} // end of main


// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
