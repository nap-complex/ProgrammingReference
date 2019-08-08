#include <iostream> 
using namespace std;

int main(){
	
	int whole; 
	double fractional;
	char letter;

	cout << "enter an integer, a double, and a character: ";

	cin >> whole >> fractional >> letter;

	cout << "whole: " << whole << endl;
	cout << "fractional: " << fractional << endl;
	cout << "letter: " << letter << endl;

	return 0;
}
