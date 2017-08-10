#include <iostream>
using namespace std;

// ------------------------------------------------------------------
/*
This is the structure of a function in C++:

type function_name( variables if any ) {
  local_variables

  some_sort_of_operation_if_any

  return value_if_any;
} // end of function
*/
// ------------------------------------------------------------------
// this is a function that changes out the variables for the rest
// of the program:
int swapNumbers(int & x, int & y) {

  int z;

  z = x;
  x = y;
  y = z;

  return 0;
} // end of swapNumbers

// ------------------------------------------------------------------
// this function changes the value for use in the function, but 
// leaves them unchanged for the rest of the program:
int swapNumbers2(int x, int y) {

  int z;

  z = x;
  x = y;
  y = z;

  return 0;
} // end of swapNumbers

// ------------------------------------------------------------------
// a function of type void for reference:
void makeLineOfAsterix() {

	cout << "\n**********************************" <<
                "************************************\n";

} // end of makeLineOfAsterix
// ------------------------------------------------------------------
// ------------------------------------------------------------------

// ------------------------------------------------------------------

int main() {

  int int1 = 1;
  int int2 = 2;
  
  makeLineOfAsterix();
  cout << "\nThis program takes two variables and swaps";
  cout << "\ntheir values.  The purpose is function practice.\n";

  cout << "\nThe Numbers before changes     => " << int1 << ", " << int2;

  swapNumbers(int1, int2);

  cout << "\nThe Numbers after swapNumbers  => " << int1 << ", " << int2;

  swapNumbers2(int1, int2);

  cout << "\nThe Numbers after swapNumbers2 => " << int1 << ", " << int2;

  cout << "\n";

  makeLineOfAsterix();
 
  return 0;
} // end of main

// ------------------------------------------------------------------
