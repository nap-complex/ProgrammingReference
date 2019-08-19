/*
   Aug 18, 2019  - JLF

   This program illustreates the use of constructors
   and destructors in the allocation and deallocation of memory.
*/
#include <iostream>
#include <string>
using namespace std;

// ------------------------------------------------------------------
    
class Squares
{
    private:
        int length;         // How long is the sequence
        int *sq;            // Dynamically allocate array
    public:
        // Constructor allocates storage for sequence
        // of squares and creates the sequence
        Squares(int len)
        {
            length = len;
            sq = new int[length];
            for (int k = 0; k < length; k++)
            {
                sq[k] = (k+1)*(k+1);
            }
            // Trace
            cout << "Construct an object of size " << length << endl;
        }
        // Print the sequence
        void print()
        {
            for (int k = 0; k < length; k++)
                cout << sq[k] << "  ";
            cout << endl;
        }
        // Destructor deallocates storage
        ~Squares()
        {
            delete [ ] sq;
            // Trace
            cout << "Destructor for object of size " << length << endl;
        }
};

// ------------------------------------------------------------------

void outputSquares(Squares *sqPtr)
{
    cout << "The list of squares is: ";
    sqPtr->print();
}

// ------------------------------------------------------------------

int main() {

    Squares sqs(5);
    cout << "The first 5 squares are: ";
    sqs.print();

    // Main allocates a Squares object
    Squares *sqPtr = new Squares(3);
    outputSquares(sqPtr);

    // Main deallocates the Squares object
    delete sqPtr;

    return 0;

}

// ------------------------------------------------------------------

















