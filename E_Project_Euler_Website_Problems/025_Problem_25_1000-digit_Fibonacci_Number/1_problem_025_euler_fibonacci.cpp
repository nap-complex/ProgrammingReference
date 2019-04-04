#include <iostream>
using namespace std;
/*

April 3, 2019  -  JLF

1000-digit Fibonacci number
Problem 25

The Fibonacci sequence is defined by the recurrence relation:

    Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

Hence the first 12 terms will be:

    F1 = 1
    F2 = 1
    F3 = 2
    F4 = 3
    F5 = 5
    F6 = 8
    F7 = 13
    F8 = 21
    F9 = 34
    F10 = 55
    F11 = 89
    F12 = 144

The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

/*
   The Plan:
		We are going to make large integer arrays to hold our fibonacci numbers.  array[1] will be
		the ones column, array[2] will be the tens colomn, array[3] will be the hundreds column, etc.
		We will add and copy these arrays the old fashioned long had meathod ( computer style ).  
		When we get to the array[1000] spot the index will be our answer.  Array[0] will be reserved 
		for array size integers.  The actual fibonacci number will start at array[1].
		
   order of array adding:
	1) copy f2 into f1
	2) copy f3 into f2
	3) ad f1 and f2 together and store that answer in f3
	repeat until you get the desired result

	start process with step three because we gave f1 and f2 default values
*/

// ----------------------------------------------------------------------------------------

// this constant is the size of the arrays, and thus the size limit on large 
// integers that can be added together.  If you want a Fibonacci number larger than
// 1009 digits you will have to make this number larger.
const int size_of = 1010;

// ----------------------------------------------------------------------------------------

// this function copies one array into the other, deleting all info in target_array first
int copy_one_array_into_the_other( int* source_array, int* target_array){

	int i;

	// zero out the target array
	// could get rid of this if you worked error checking into the next for loop
	for ( i=target_array[0]; i>=0; i-- ) target_array[i] = 0;

	// copy source_array into target_array
	for ( i=source_array[0]; i>=0; i-- ) target_array[i] = source_array[i];


} // end of copy_one_array_into_the_other

// ----------------------------------------------------------------------------------------

// this function adds array f1 to f2 and puts the result in array f3
int add_arrays_together(int* f1, int* f2, int* f3){
	
	int index1 = 0;
	int i;

	// this part sets index1 to the size of the biggest array of the two
	index1 = f1[0];
	if ( f2[0] > f1[0] ) index1 = f2[0];

	// this part adds the arrays together
	for ( i=1; i<=index1; i++ ) f3[i] = f2[i] + f1[i];
	f3[0] = index1;

	// this part deals with any array value that is larger than 9
	// by carry over the value to the next column, and adding 1 to
	// f3[0] ( index ) if the number carrys over in the last column
	for ( i=1; i<=index1; i++ ) 
	{
		if ( f3[i] > 9 ) 
		{
			f3[i] = f3[i] - 10;
			f3[i+1] = f3[i+1] + 1;
			if (( i + 1 ) > f3[0] ) f3[0]++;
		}
	}

} // end of add_arrays_together

// ----------------------------------------------------------------------------------------

// the function displays the arrays for trouble shooting.  
// This is not needed in final program
void show_array(int* array1){

	int i;
	
	cout << "index => " << array1[0] << "\n";
	for ( i=array1[0]; i>0; i-- ) cout << array1[i] << ",";

} // end of show_array

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

int main(){

	int f1[size_of] = {0};
	int f2[size_of] = {0};
	int f3[size_of] = {0};
	int i;

	cout << "\n--------------------------------------------------------------------------\n";

	f1[1] = 1; // the integer will end at array[1] and grow toward size_of
	f2[1] = 1;

	f1[0] = 1; // array[0] will be used as array length holder for all three arrays
	f2[0] = 1;

	// should probably work these into the loop to make this prettier, but no time now
	add_arrays_together(f1, f2, f3);
	copy_one_array_into_the_other(f1, f2);


	// not sure why, but from testing we had to make the search number
	// 999 instead of 1000, seems to work, though
	i = 3;
	while ( f3[0] <= 999 ) 
	{
		
//		cout << "\n\n(fib# " << i << ") Array f3 => ";
		i++;
//		show_array(f3);

		copy_one_array_into_the_other(f2, f1);
		copy_one_array_into_the_other(f3, f2);
		add_arrays_together(f1, f2, f3);
	}

	cout << "\nAnswer from the C++ program => " << i << "\n";

	cout << "\n--------------------------------------------------------------------------\n";


} // end of main
