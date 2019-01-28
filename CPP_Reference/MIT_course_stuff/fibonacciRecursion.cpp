#include <iostream>
using namespace std;


int fibonacci(int n) {
	if (n == 0 || n == 1) {
		return 1;
		}
		else {
			return fibonacci(n-2) + fibonacci(n-1);
			}
} // end of fibonacci(int....

int main() 
{

int i = 4;
int x = 6;

cout << "\ni = " << i << " and x = " << x << endl;

x = fibonacci(i);


cout << "\ni = " << i << " and x = " << x << endl;








} // don't like that format...
