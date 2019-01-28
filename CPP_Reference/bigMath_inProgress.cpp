// Multiplication: works as of 20151205 // but we don't like it
// 								fix the loop that distributes the
//								carry.  It needs to work in the 
//								array loops and not as a separate thing
// Addition: works 
// Powers: pending
// Subtraction: pending
// Division: pending
// Mod: pending
// 


#include <iostream>
#include <time.h> // for timing
#include <stdlib.h> // this is for srand, rand
using namespace std;

// global variables:
const int arraySize = 18000000;
//const int arraySize = 18000;
const int testNum = 70000;
const int testNum1 = 70000;

// prototypes:
int initArray( int* );
int showArray( int* );
int testFillArray( int* );
int tempFillArrays( int* a, int* b, int* c );
int addArrays( int*, int*, int* );
int multArrays( int*, int*, int* );

// main body:
int main() {

	int* a1;
	int* b1;
	int* c1;
	a1 = new int [arraySize];
	b1 = new int [arraySize];
	c1 = new int [arraySize];
	clock_t startT, endT; // for timing

	cout << "\n********************************************\n";

	srand(time(NULL)); // for timing
	startT = clock();  // for timing
	

	initArray(a1);
	initArray(b1);
	initArray(c1);
//	testFillArray(a1);
//	testFillArray(b1);
//	addArrays(a1, b1, c1);
	tempFillArrays(a1, b1, c1);
	multArrays(a1, b1, c1);
	showArray(a1);
	showArray(b1);
	showArray(c1);
	



	endT = clock();  // for timing
	cout << "\n\nTime: " << (double)(endT-startT)/CLOCKS_PER_SEC << " seconds\n"; // for timing

	cout << "\na1 size => " << a1[0];
	cout << "\nb1 size => " << b1[0];
	cout << "\nc1 size => " << c1[0];

	cout << "\n********************************************\n";

	return 0;
} // end of main

// ********************************************************************

// this function initializes the arrays to -1
int initArray ( int* a ) {
	int ct1;

	for ( ct1=0; ct1<arraySize; ct1++ ) a[ct1] = -1;
	a[0]=0; // we are going to use the [0] element of the array to track the size of the array

	return 0;
} // end of initArray...

// ********************************************************************

// this function displays the passed array
int showArray ( int* a ) {
	int ct1;
	
//	cout << "\n\nabc[0] => " << a[0];
	cout << "\nArray(" << a[0] << ")=> ";
//	for ( ct1=1; ct1<=a[0]; ct1++ ) cout << a[ct1] << ".";
	for ( ct1=a[0]; ct1>0; ct1-- ) { 
			if ( ct1%3 == 0 ) cout << " ";
			cout << a[ct1];
			} // end for ( ct1=a...
//	for ( ct1=a[0]; ct1>0; ct1-- ) cout << a[ct1] << ".";

	return 0;
} // end of initArray...

// ********************************************************************

// this functions loads the array with random numbers for testing purposes
int testFillArray( int* a ) {
	int i;
	int lim;

	lim = testNum1 + ( rand()%testNum );
	for ( i=1; i<lim; i++) {
		a[i] = rand()%10;
		while ( a[lim-1] == 0 ) { a[lim-1] = rand()%10; }
		a[0]++;
		} // end of for (...

	return 0;
} // end of testFillArray...

// ********************************************************************

// this function adds to arrays together and passes the answer back
int addArrays( int* a, int* b, int* c  ) {
	
//	int lim; // take this out if no errors
	int i;
	
	if ( a[0]<=b[0] ) c[0]=b[0]; else c[0]=a[0]; // this sets the initial length of answer array c[] // and it seems to work, though it could be prettier

	for ( i=1; i<=c[0]; i++ ) {
		// this "if" mess keeps us from adding the -1's to anything
		// while adding the arrays together
		if ( (a[i] != -1) && (b[i] != -1) ) 
			{
			if ( c[i]==1 ) c[i]=c[i]+a[i]+b[i]; else c[i]=a[i]+b[i]; 
			} 	
			else if ( a[i] == -1 ) c[i]=b[i]; 
				else c[i]=a[i];
		} // end of for ( i=1; i<=c...

	for (i=1; i<=c[0]; i++) {
		
		if ( c[i]>9 ) {
			cout << "%"; // here for a test, delete when ever
			c[i]=c[i]-10;
			if ( c[i+1]==-1 ) { c[0]++; c[i+1]=1; } else c[i+1]++;
			
			
			} // end of if (c[i...

		} // end of second for ( i=1; i<=c...
	
	return 0;
} // end of addArrays


// ********************************************************************

int multArrays( int* a, int* b, int* c  ) {

	int ct1, ct2;
	int holder;
	int carry;

	c[0]=0; // this initializes the "c" array counter to zero

	for ( ct1=1; ct1<=b[0]; ct1++ ){  // this loops the first factor 
		for ( ct2=1; ct2<=a[0]; ct2++ ) { // this loops the second factor
			// this part multiplys a[x] and b[x] and puts it in c[x] with whatever
			if ( c[ct2]==-1 ) { c[0]++; c[ct2]= ( a[ct2] * b[ct1] ); }
				else {
					if ((c[ct2+ct1-1])==-1) { (c[ct2+ct1-1])=0; c[0]++; }
					( (c[ct2+ct1-1]) = (c[ct2+ct1-1]) + ( a[ct2] * b[ct1] ) );
					} // end of else
		}} // could it be?

	// this part distributes the carry so the array is of single digits	
	// ************
	// this needs to be worked into the for loops above so the 
	// c[x] values do not get large
	// ************
	for ( ct1=1; ct1<=c[0]; ct1++ ) {
		holder = c[ct1]%10;
		carry = ( c[ct1] - c[ct1]%10 ) / 10;
		if (c[ct1]>9) { 
			c[ct1]=holder;
			if ( c[ct1+1] == -1 ) { c[ct1+1] = 0; c[0]++; }
			c[ct1+1] += carry;
			} // end of if (c[ct...	
		} // end of for...


	return 0;
} // end of multArrays


// ********************************************************************
// ********************************************************************
// 
// this function exists to make test arrays, remove when program works
//
int tempFillArrays( int* a, int* b, int* c  ) {

	int ct1, ct2;
/*
	a[0]=3;
	a[1]=1;
	a[2]=2;
	a[3]=3;
	b[0]=2;
	b[1]=4;
	b[2]=2;
	c[0]=0;
*/
	ct2=1;
	for (ct1=1; ct1<230000; ct1++) {
		a[ct1] = ct2; a[0]++;
		b[ct1] = ct2; b[0]++;
		ct2++;
		if (ct2==10) ct2=1;
		} // end of for...	

	return 0;
} // end of multArrays

// ********************************************************************
// ********************************************************************
// ********************************************************************
