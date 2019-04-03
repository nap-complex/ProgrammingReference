#include <iostream>
#include <string>
using namespace std;


// ------------------------------------------------------------------------------------------

// This function returns of the sum of the proper divisors of the seed_number.
// It includes "1" but not the seed_number in the calculations.

int sum_of_divisors(int seed_number){

	int running_sum = 0;

	for (int i=1; i<seed_number; i++)
	{
		if ( seed_number %i == 0 )
			running_sum = running_sum + i;
	}
	return running_sum;
}

// ------------------------------------------------------------------------------------------

// This function returns "true" if the seed_number is an abundant number, and "false"
// if it is not an abundant number.

bool is_it_abundant(int seed_number){

	if ( seed_number < sum_of_divisors(seed_number) ) return true;

	return false;

} // end of is_it_abundant

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

int main(int argc, char* argv[]){

	int test_number;

	cout << "\n**********************************************************************\n";

	if ( argc < 2 ) 
	{
		cout << "\nI need more from you!\n";
		cout << "\n**********************************************************************\n";
		return 1;
	}

	test_number = atoi(argv[1]);
	cout << "\nTest number => " << test_number;
	if ( test_number == sum_of_divisors(test_number) ) cout << "\nThat was a perfect number!\n";
	if ( test_number < sum_of_divisors(test_number) ) cout << "\nThat was an abundant number!\n";
	if ( test_number > sum_of_divisors(test_number) ) cout << "\nThat was a deficient number!\n";


	cout << "\n**********************************************************************\n";

} // end of main
