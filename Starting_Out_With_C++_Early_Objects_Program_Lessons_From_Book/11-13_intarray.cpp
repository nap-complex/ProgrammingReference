#include "11-13_intarray.h"
#include <cstdlib>

// *****************************************************
// Constructor for IntArray class.  Sets the size of   *
// the array and allocates memory for it.              *
// *****************************************************

IntArray::IntArray(int s)
{
    arraySize = s;
    aptr = new int [s];
    for (int count = 0; count < arraySize; count++)
        *(aptr + count) = 0;
}

// *****************************************************
// Copy constructor for IntArray class.                *
// *****************************************************

IntArray::IntArray(const IntArray &obj)
{
    arraySize = obj.arraySize;
    aptr = new int [arraySize];
    for (int count = 0; count < arraySize; count++)
        *(aptr + count) = *(obj.aptr + count);

}

// *****************************************************
// Destructor for IntArray class.                      *
// *****************************************************

IntArray::~IntArray()
{
    if (arraySize > 0)
        delete [] aptr;
}

// *****************************************************
// subError function.  Displays an error message and   *
// exits the program when a subscript is out of range. *
// *****************************************************

void IntArray::subError() const
{
    cout << "Error:  Subscript out of range.\n";
    exit(0);
}

// ********************************************************
// Overloaded [] operator.  The argument is a subscript.  *
// The function returns a reference to the element        *
// is the array indexed by the subscript.                 *
// ********************************************************

int &IntArray::operator[](int sub) const
{
   if (sub < 0 || sub >= arraySize)
       subError();
   return aptr[sub];
}

// *****************************************************







