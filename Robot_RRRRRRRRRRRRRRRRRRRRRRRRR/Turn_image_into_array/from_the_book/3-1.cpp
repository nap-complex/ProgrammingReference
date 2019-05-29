#include <iostream>
using namespace std;

int main() {

	int length, width, area;

	cout << "This program calculates the area of a rectabgle.\n";

	cout << "What is the length of the rectabgle? ";
	cin >> length;
	cout << "What is the width of the rectangle? ";
	cin >> width;

	area = length * width;
	cout << "The area of the rectangle is " << area << endl;

	return 0;

}
