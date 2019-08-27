#ifndef INTARRAY_H
#define INTARRAY_H
#include <iostream>
using namespace std;

class IntArray
{
    private:
        int *aptr;
        int arraySize;
        void subError() const;          // Handels subscripts out of range
    public:
        IntArray(int);                  // Constructor
        IntArray(const IntArray &);     // Copy constructor
        ~IntArray();                    // Destructor
        int size() const { return arraySize; }
        int &operator[](int) const;     // Overloaded [] operator
};
#endif
