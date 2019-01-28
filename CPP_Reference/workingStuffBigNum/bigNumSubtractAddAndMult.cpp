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
int doTheMultiplication ( int*, int*, int* );
int doTheAdd ( int*, int*, int* );
int doTheSubtraction( int*, int*, int* );
int randomizeArray( int* );
bool isL1Bigger( int*, int* );

const int arraySize = 200000000; // this controls the length of the array space
const int arrayShow = 40; // this only has to do with the showArray, nothing in main math parts
//const int arrayLength = 6000;  // this controls the length of the randomly generated test arrays
const int arrayLength = 6;  // this controls the length of the randomly generated test arrays

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

int main() { 

int* l1;
int* l2;
int* l3;

l1 = new int [arraySize];
l2 = new int [arraySize];
l3 = new int [arraySize];

cout << "\n\n\n**********************************************************\n\n";


srand(time(NULL));
randomizeArray(l1);
randomizeArray(l2);

cout << "\nFirst Random Number(" << l1[0] << ") => "; showArray(l1); cout << endl;
cout << "\nSecond Random Number(" << l2[0] << ") => "; showArray(l2); cout << endl;
cout << "\nThose two x each other(" << l3[0] << ") => "; showArray(l3); cout << endl;

int randomizeArray( int*, int* );
cout << "\n\nShhhh!  We is doing the math...\n";

if ( doTheSubtraction( l1, l2, l3 ) == -1 ) cout << "\nl2 was bigger"; else cout << "\nl1 was bigger";

cout << "\nFirst Random Number(" << l1[0] << ") => "; showArray(l1); cout << endl;
cout << "\nSecond Random Number(" << l2[0] << ") => "; showArray(l2); cout << endl;
cout << "\nThose two x each other(" << l3[0] << ") => "; showArray(l3); cout << endl;


//**********************************************************
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
// This function is part of the "working with very large numbers" series
// This function receives three arrays, multiplies the first two together and 
// puts the answer in the third one.  It seems to work as of 20160106.  JLF
// p.s.  This function needs the "spreadOut() function to work
int doTheMultiplication ( int* l1, int* l2, int* l3 ) {

	int z, i;
	int keeper, carry, temp;
	int spot_l3; // this will keep track of where in l3 we are working

	for ( z=1; z<=l2[0]; z++ ) {
		for ( i=1; i<=l1[0]; i++ ) {
				
			spot_l3 = ( i + z -1 );
			temp = l1[i] * l2[z];
			if ( temp > 9 ) { 
					keeper = ( temp%10 );
					carry = ( ( temp - temp%10 ) / 10 );
					} else { carry = 0; keeper = temp; } 	

			l3[spot_l3] += keeper;
			spreadOut( l3, spot_l3 );
			if ( spot_l3 > l3[0] ) l3[0]++;

			if ( carry !=0 ) {
				l3[spot_l3+1] += carry;
				spreadOut( l3, spot_l3 );
				if ( (spot_l3+1) > l3[0] ) l3[0]++;
				} // end of if ( carry...

	} // end of for ( i=...
	} // end of for ( z=...

return 0;
} // end of doTheMultiplication
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
//-------------------------------------------------------------------------------
int randomizeArray( int* l1 ) {

	int x;

	l1[0] = 5 + rand()%arrayLength - 5;

	x = 1;	
	while ( x <= l1[0] ) {
		l1[x] = rand()%10;
		x++;
	} // end of while

	// this while loop gets rid of any leading zeros in arrays, I hope
	if ( l1[0] != 0 ) while ( l1[l1[0]] == 0 ) { l1[0]--; }	

	return 0;
} // end of randomizeArray...
//-------------------------------------------------------------------------------

int doTheAdd ( int* a1, int* a2, int* a3) { 

	int i, z;
	int carry, keeper, temp;

	i = 1;
	while ( (i<=a1[0]) || (i<=a2[0]) ) {
			temp = a1[i] + a2[i];
			if ( temp > 9 ) { 
					keeper = ( temp%10 );
					carry = ( ( temp - temp%10 ) / 10 );
					} else { carry = 0; keeper = temp; } 	

			a3[i] += keeper;
			spreadOut( a3, i );
			if ( i > a3[0] ) a3[0]++;

			if ( carry !=0 ) {
				a3[i+1] += carry;
				spreadOut( a3, i );
				if ( (i+1) > a3[0] ) a3[0]++;
				} // end of if ( i >	
		i++;

	} // end of while


	return 0;
} // end of doTheAdd
//-------------------------------------------------------------------------------
bool isL1Bigger( int* a1, int* a2 ) {
 
	int i = 1;

	if ( a1[0] > a2[0] ) return true; 
		else if ( a1[0] < a2[0] ) return false;
			else { 
				i = a1[0];
				while ( i > 0 ) {
					if ( a1[i] > a2[i] ) return true; 
					else if ( a1[i] < a2[i] ) return false;
					i--;
				} // end of while
			} // end of else #2

	return true;
} // end of isL1Bigger
//-------------------------------------------------------------------------------
int doTheSubtraction( int* a1, int* a2, int* a3) { 

	int i;
	int pos_O_neg = 1;
	int holder = 0;

	if ( isL1Bigger(a1,a2) ) {
		
		for ( i=1; i<=a1[0]; i++ ) {
			if ( a1[i] >= a2[i] + holder ) { 
				a3[i] = a1[i] - (a2[i] + holder); 
				holder = 0; 
			} // end of if ( a1[..}
			else { a3[i] = (a1[i] + 10) - (a2[i] + holder); holder = 1; }
			a3[0]++;
		} // end of for
		} // end of if ( is....	

		else {

		for ( i=1; i<=a2[0]; i++ ) {
			if ( a2[i] >= a1[i] + holder ) { 
				a3[i] = a2[i] - (a1[i] + holder); 
				holder = 0; 
			} // end of if ( a2[..}
			else { a3[i] = (a2[i] + 10) - (a1[i] + holder); holder = 1; }
			a3[0]++;
			} // end of for

			pos_O_neg = -1;
			} // end of else


	// get rid of leading zero's in a3:
	if ( a3[0] != 0 ) while ( a3[a3[0]] == 0 ) { a3[0]--; }

	return pos_O_neg;
} // end of doTheSubtraction

