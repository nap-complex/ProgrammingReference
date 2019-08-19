#include <iostream>
#include "10-19_donlist.h"
using namespace std;

// -----------------------------------------------------------------------------

DonationList::DonationList(int num, double gifts[]) {

    numDonation = num;
    if (num > 0)
    {
        // Allocate an array of doubles
        donation = new double[num];
        // Allocate an array of pointers-to-doubles
        arrPtr = new double*[num];
        // Initialize the arrays
        for (int count = 0; count < numDonation; count++)
        {
            donation[count] = gifts[count];
            arrPtr[count] = &donation[count];
        }
        // Now, sort the array of pointers
        selectSort();
    }
}

// -----------------------------------------------------------------------------

DonationList::~DonationList()
{
    if (numDonation > 0)
    {
        delete [ ] donation;
        donation = 0;
        delete [ ] arrPtr;
        arrPtr = 0;
    }
}

// -----------------------------------------------------------------------------

void DonationList::selectSort() {

    int minIndex;
    double *minElem;

    for (int scan = 0; scan < (numDonation -1 ); scan++)
    {
        minIndex = scan;
        minElem = arrPtr[scan];
        for (int index = scan + 1; index < numDonation; index++)
        {
            if (*(arrPtr[index]) < *minElem)
            {
                minElem = arrPtr[index];
                minIndex = index;
            }
        }
        arrPtr[minIndex] = arrPtr[scan];
        arrPtr[scan] = minElem;
    }

}
        
// -----------------------------------------------------------------------------

void DonationList::show() {

    for (int count = 0; count < numDonation; count++)
        cout << donation[count] << " ";
    cout << endl;
}

// -----------------------------------------------------------------------------

void DonationList::showSorted() {

    for (int count = 0; count < numDonation; count++)
        cout << *(arrPtr[count]) << " ";
    cout << endl;
}

// -----------------------------------------------------------------------------








