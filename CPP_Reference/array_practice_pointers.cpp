#include <iostream> 

using namespace std;


const int SIZE = 10; 

int main() { 
	
int i;

// this next line declares "a" as a pointer to something
int* a;
char* c;
// the next line declares what "a" is a pointer too
a = new int [SIZE];
c = new char [SIZE];


cout << "\n********************************************************\n";


cout << "\nThis is a program!";

// this next line answers the question: Do these arrays init to zero?
// answer: yes, they do
for (i=0; i<10; i++) cout << "\nInitial array value at (" << i << ") => " << a[i];

// this part, in a round about way, shows that the char array thing was initialized
// to NULL, but for some reason this is inaccesible, so we added 65 to it and got "A", which
// means the initial number was zero, and/or NULL, as far as we can tell
for (i=0; i<10; i++) { 
	cout << "\nInitial array value at (" << i << ") => "; 
	if ( char(c[i]) == char(0) ) cout << "NULL";
	} // end of for

cout << endl;

for ( i=0; i<100; i++) c[i] = i+65;

i=0;
while ( char(c[i]) != char(0) ) {
	cout << "(" << c[i] << ")";
	i++;
	} // end of while



cout << "\n********************************************************\n";




} // end of main
