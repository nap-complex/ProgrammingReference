#include <iostream>
#include <vector>
using namespace std;

// ***********************************************************************************************

class Solution {

	public: 
		// -----------------------------------------------------------------------------

		vector<int> twoSum(vector<int>& nums, int target) {
			int ct1 = 0;
			int ct2 = 0;
			bool foundIt = false;
		} // end of vector<int> ....

		// -----------------------------------------------------------------------------

		int testFunction() {
			cout << "\nWe are in testFunction.";
		} // end of testFunction()...

		// -----------------------------------------------------------------------------


}; // end of class Solution...

// ***********************************************************************************************

int testProto(int i1){
	
	cout << "\nThis is the testProto function.";
	cout << "\nThe variable is: " << i1;


}// end of testProto(...

// ***********************************************************************************************


int populateVector(vector<int>& v3){

	v3.push_back(2);
	v3.push_back(7);
	v3.push_back(23);
	v3.push_back(42);
	v3.push_back(12);



} // end of populateVecotr...

// ***********************************************************************************************

int showArray(vector<int>& v3){
	int i;

	cout << "\nv3 array size is: " << v3.size();
	cout << "\nAnd now, for the array: ";
	
	for ( i=0; i<v3.size(); i++ ) {
		cout << v3[i];
		if ( i < (v3.size()-1) ) cout << ".";
	} // end of for ( i=0...

	cout << "\n";

} // end of showArray(...

// ***********************************************************************************************
// ***********************************************************************************************
