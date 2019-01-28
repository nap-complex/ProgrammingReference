#include <iostream>
#include <ctime>
using namespace std;


const int arraySize = 1800000;
const int expVal =    100000;


void showArray( int* );

int main() {

	int i, z;
	int* a1;
	a1 = new int [arraySize];
	int temp, carry, keeper = 0;
	clock_t start, end;

	cout << "\n\n============================================================\n\n";

	start = clock();
	a1[0]=1;
	a1[1]=2;

	
	for ( z=1; z<expVal; z++ ) { 	
		// -----------------------------------------------
		//for ( i=1; i<=a1[0]; i++ ) {
		i = 1;
		while ( i <= a1[0] ) {	
			temp = a1[i] + a1[i] + carry;
			carry = 0;
			if ( temp > 9 ) {
				if ( a1[0] <= i ) a1[0]++;
				carry = 1;
				keeper = temp - 10;
				a1[i] = keeper;	
				}// if ( a1...
			else {
				carry = 0;	
				a1[i] = temp;
			} // end of else
		i++;	
		}// end of for ( i=...
		// -----------------------------------------------
	} // end for for ( z=...


//	cout << "\n2^" << expVal << " <" << a1[0] << ">  ";
//	//for ( i=a1[0]; i>0; i-- ) cout << "\na1[" << i << "] => " << a1[i];
//	for ( i=a1[0]; i>0; i-- ) { if ( i%3 == 0 ) cout << " "; cout << a1[i]; }
showArray(a1);
	cout << "\n\n";

	end = clock();
	cout << "\n\nTime to calculate array => " << (double)(end-start)/CLOCKS_PER_SEC << " seconds\n";

	cout << "\n\n============================================================\n\n";

	return 0;
} // end of main


// ---------------------------------------------------------------
void showArray( int* a1 ) {

	int i;

	cout << endl;
	if ( a1[0] < 60 ) {
	cout << "\n(2^" << expVal << ")-1 is(" << a1[0] << "): ";
	for ( i=a1[0]; i>0; i-- ) { if ( i%3==0 ) cout << " "; cout << a1[i]; }
	} else {
		for ( i=a1[0]; i>a1[0]-40; i-- ) { if ( i%3 == 0 ) cout << " "; cout << a1[i]; }
		cout << " ... \n ... ";
		for ( i=40; i>0; i-- ) { if ( i%3 == 0 ) cout << " "; cout << a1[i]; }
		} // end of else

	cout << endl;

} // end of showArray(...
// ---------------------------------------------------------------
