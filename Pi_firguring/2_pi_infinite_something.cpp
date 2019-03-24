#include<iostream>
#include<math.h>
using namespace std;

int main() {

	cout << "\n-------------------------------------------------------------------------\n";

	cout << "\nDid something happen?";

	
	long double pi1 = 0;
	long double tau = 0;
	unsigned long long int num1 = 0;
	unsigned long long int testNum = 200;

	cout << "\nTesting ";
	pi1 = sqrt(2);
	cout << "\nsqrt(2)? maybe => " << pi1;
	pi1 = 0.0;


	cout << "\nSize of float => " << sizeof(float) << " bytes";
	cout << "\nSize of double => " << sizeof(double) << " bytes";
	cout << "\nSize of long double => " << sizeof(long double) << " bytes";

cout << "\npi1 => " << pi1;
cout << "\ntau => " << tau;
cout << "\nnum1 => " << num1;

	for ( num1=1; num1<testNum; num1++ ) {
		tau = tau + ( 1 / pow(num1, 2));
	}

	pi1 = ( sqrt( 6*tau ));


	cout << "\nPi might be => " << pi1;

	cout << "\n-------------------------------------------------------------------------\n";

} // end of main



