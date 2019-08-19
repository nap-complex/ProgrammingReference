#include <iostream>
#include "11-1_ThisExample.h"
using namespace std;

// ----------------------------------------------

void Example::setValue(int a) {

    x = a;

}

// ----------------------------------------------

void Example::printAddressAndValue() {

    cout << "the object at address " << this << " has "
        << "value " << (*this).x << endl;

}

// ----------------------------------------------
