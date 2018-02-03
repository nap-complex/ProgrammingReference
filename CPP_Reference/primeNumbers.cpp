#include <iostream>
#include <climits>
#include <time.h>
using namespace std;




int main() {

	clock_t t1, t2;
	int testNum;
	int div;
	bool isPrime = false;
	int primeCt = 0;
	int maxTest = 10000000; 

	cout << "\n*****************************************\n";

	cout << "\nINT_MAX: " << INT_MAX;
	t1=clock();
	for (testNum=3; testNum<=maxTest; testNum+=2) {

		div=3;
//		while (div<((testNum+1)/2)) {

		while (div*div<testNum+1) {
			if (testNum%div==0) {
				isPrime=false;
				break;
				} // end of if (testNum....
				else isPrime=true;
			div+=2;
			} // end of while (div< ...

		if (isPrime) {	
			if (primeCt<10) cout << "\ntestNum: " << testNum << " is prime and primeCt: " << primeCt;
			if (primeCt%10000==0) {
				cout << "\ntestNum: " << testNum << " is prime and primeCt: " << primeCt;
				}
			primeCt++;
			}
		isPrime = false;
		
		
		} // end for (testNum...


	cout << "\ntotal primes found => " << primeCt;
	t2=clock();
	cout << "\nwhat ever t's are: t1 => " << t1 << " and t2 => " << t2;
	cout << "\nTime might be => " << t2/CLOCKS_PER_SEC << " seconds.";
	cout << "\nCLOCKS_PER_SEC returns => " << CLOCKS_PER_SEC;
	cout << "\n*****************************************\n";

	return 0;
} // end of main
