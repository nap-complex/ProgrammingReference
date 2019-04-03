#include <iostream>
using namespace std;

/*
	April 3, 2019  -  JLF	
   
    Project Euler
	Problem 23

	Find the sum of all positive integers which cannot be written as the sum of two 
	abundant numbers.	

	given: 
		All integers greater than 28123 can be written as the sum of two abundant numbers.
		24 is the smallest number that can be written as the sum of two abundant numbers. ( matters? )

	Our Solution:
		1. Make an array of all abundant numbers below 28123
		2. Add every abundant number on that list to every other abundant number on that list and
			store all the results in an other array at the index in the array equal to the value 
			of the number, so abundant number 24 would be stored in array[24], not storing 
			anything over 28123, cause we don't need to.  
		3. Add up all the array indexes that do not have an abundant number in them.  This sum
			should be our answer.  And it turn out to be.	
*/

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

int main(){

	int list_of_not_the_sum_of_numbers[28124];
	int partial_list_of_abundant_numbers[28124] = {0};
	int i;
	int spot_on_list = 0;
	int cnt1, cnt2;
	int tracking_number;
	int the_final_answer = 0;

	cout << "\n**********************************************************************\n";


	// initialize array to -1;
	for ( i=0; i<28124; i++ ) list_of_not_the_sum_of_numbers[i] = -1;



	// this for loop populates the partial_list_of_abundant_numbers
	// it is called partial because we only need the abundant numbers up to 28123 
	for ( i = 10; i < 28124; i++ ) 
	{
		if ( is_it_abundant(i) ) 
		{
			partial_list_of_abundant_numbers[spot_on_list] = i;
			spot_on_list++;
		}
	}



	// and now: populate the list_of_not_the_sum_of_numbers with the sums of two
	// abundant numbers, as step one:
	for ( cnt1 = 0; cnt1 < spot_on_list; cnt1++ )	
		for ( cnt2 = 0; cnt2 < spot_on_list; cnt2++ )	
		{
			tracking_number = partial_list_of_abundant_numbers[cnt1] + partial_list_of_abundant_numbers[cnt2];
			if ( tracking_number  < 28124 )
				list_of_not_the_sum_of_numbers[tracking_number] = tracking_number;
		}

	// and now, add up all the array indexes that have a -1 in the box
	// i.e., the ones that were not populated in the nested for loops above
	for ( i=0; i<28124; i++) 
		if ( list_of_not_the_sum_of_numbers[i] == -1 ) 
			the_final_answer = the_final_answer + i;

	cout << "\nThe_final_answer to Project Euler Problem 23 => " << the_final_answer << "\n";


	cout << "\n**********************************************************************\n";

} // end of main
