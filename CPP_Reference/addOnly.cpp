// This program randomly generates then multiplies to big numbers together.
// Jan 6, 2016   - JLF
//
// the functions doTheMultiplication and spreadOut are the ones that do the work, take
// only those if you need big numbers multiplied
//
// 1. multiply: working
// 2. add: working
// 3. subtract: working Jan 12, 2016 
// 4. division: pending
//
#include <iostream>
#include <ctime> // needed for testing, remove in final
#include <cstdlib> // needed for testing, remove in final

using namespace std;

int showArray( int* );
int spreadOut( int*, int ); 
int doTheAdd ( int* );

const int arraySize = 40000000; // this controls the length of the array space
const int arrayShow = 40; // this only has to do with the showArray, nothing in main math parts
//const int arrayLength = 6000;  // this controls the length of the randomly generated test arrays
const int arrayLength = 6;  // this controls the length of the randomly generated test arrays

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

int main() { 

int* l1;
l1 = new int [arraySize];
int i;

srand(time(NULL));

cout << "\n\n\n**********************************************************\n\n";

// get ready:
l1[0] = 1;
l1[1] = 2;

for ( i=1; i<10; i++) doTheAdd(l1);
cout << "\nl1[0] => " << l1[0] << endl;
showArray(l1);


cout << "\n\n\n**********************************************************\n";

return 0;
} // end of main
//-------------------------------------------------------------------------------
int showArray( int* a1 ) {

int i;
if ( a1[0]<40 ) {
for (i=a1[0]; i>0; i--) {
		if ( i%3 == 0 ) cout << " ";
		cout << a1[i];
	} // end of for
	} else {
		for (i=a1[0]; i>a1[0]-20; i--) { if ( i%3 == 0 ) cout << " "; cout << a1[i]; } 			
		cout << " ... ";
		for (i=20; i>0; i--) { if ( i%3 == 0 ) cout << " "; cout << a1[i]; } 			
			
	} // end of else

return 0;
} // end of showArray
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
int spreadOut( int* a1, int x ) { 

int i = x;

while ( a1[i] > 9 ) {
	a1[i+1] += ( ( a1[i] - a1[i]%10 ) / 10 );
	a1[i] = a1[i]%10;
	i++;
	if ( i > a1[0] ) a1[0]++;
} // end of while

return 0;
} // end of spreadOut
///-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

int doTheAdd ( int* a1 ) { 

	int i;
	int carry, keeper, temp;

	i = 1;
	while ( i<=a1[0] ) {
			temp = a1[i] + a1[i];
			if ( temp > 9 ) { 
					keeper = ( temp%10 );
					carry = ( ( temp - temp%10 ) / 10 );
					} else { carry = 0; keeper = temp; } 	

			//a1[i] += keeper;
			a1[i] = keeper;
			
			spreadOut( a1, i );
			// not sure we need this next line anymore
			if ( i > a1[0] ) a1[0]++;

			if ( carry !=0 ) {
				a1[i+1] += carry;
				spreadOut( a1, i );
				if ( (i+1) > a1[0] ) a1[0]++;
				} // end of if ( i >	
		i++;

	} // end of while


	return 0;
} // end of doTheAdd
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
