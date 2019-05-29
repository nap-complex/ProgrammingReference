// This program calculates and displays the area of a rectangle. 
#include <iostream>
using namespace std;

int main(){
	int length, width, area;

	cout << "This program calculates the area of a rectangle.\n";

	cout << "Enter the length and width of the rectangle ";
	cout << "seperated by a space.\n";
	cin >> length >> width;

	area = length * width;
	cout << "The area of the rectangle is " << area << endl;

	return 0;
}
