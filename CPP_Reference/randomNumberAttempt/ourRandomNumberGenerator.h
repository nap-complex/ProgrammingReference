#include <iostream>
using namespace std;
#include <ctime>


// *****************************************************************************

class pi1000 
{
	public:
		int testing1() { seedPi1000(pi1000); }

		int outPut() { return getAFirstNumber(); }


	private:
		int pi1000[1000];

		int seedPi1000(int piArray[]) {

			cout << "\nThis is from the seed array!";
		}

		int getAFirstNumber() {
			// this function is going to get the seconds value from time_t function
			// and return that
			int lastDigitOfTime;

			time_t now = time(0);
			// lastDigitOfTime = ( now % ( now / 10 ) );
			return ( now % ( now / 10 ) );
		} // end of getAFirstNumber...

		int populateArrayWithPi(int piArray[]) {
			


		} // end of populate....

}; // end of pi1000

// *****************************************************************************

// *****************************************************************************
// These are test and housekeeping function:

void makeLine() { cout << "\n*******************************************************************************************************\n"; }

