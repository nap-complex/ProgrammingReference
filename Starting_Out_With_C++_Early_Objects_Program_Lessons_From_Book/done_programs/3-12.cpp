#include <iostream>
#include <cmath>
using namespace std;

	
#define PI 3.14159;

int main() {

	double area = 0, radius = 0;
	double thing1;

	cout << "This program calculates the area of a circle.\n";

	cout << "What is the radius of the circle? ";
	cin >> radius;

	thing1 = PI;
	area = thing1 * pow(radius, 2);
	
// the following line doesn't work, but the two above do... I don't see why
//	area = PI * pow(radius, 2);

	cout << "The area is " << area << endl;

	return 0;

} 
