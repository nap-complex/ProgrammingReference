#include <iostream>
using namespace std;

int main(){

	int begInv,
		sold,
		store1,
		store2;

	cout << "One week ago, 2 new widgets stores opened\n";
	cout << "at the same time with the same beginnings\n";
	cout << "inventory.  What was the beginning inventory? ";
	cin >> begInv;

	store1 = store2 = begInv;

	cout << "How many widgets has store 1 sold? ";
	cin >> sold;
	store1 -= sold;

	cout << "How many widgets has store 2 sold? ";
	cin >> sold;
	store2 -= sold;

	cout << "\nThe current inventory of each store:\n";
	cout << "Store1: " << store1 << endl;
	cout << "Store2: " << store2 << endl;

	return 0;

} 
	
	
	

