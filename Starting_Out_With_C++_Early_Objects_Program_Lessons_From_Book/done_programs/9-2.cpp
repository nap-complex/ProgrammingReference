// This program performs a binary search on an integer
// array whose elements are in ascending order.
#include <iostream>
using namespace std;

// -----------------------------------------------------------------

// Function prototype
int binarySearch(const int [], int, int);

// -----------------------------------------------------------------

const int size = 20;

// -----------------------------------------------------------------

int main() {

    // Create an array of ID numbers sorted in ascending order 
    int IDnums[size] = { 101, 142, 147, 189, 199, 207, 222,
                         234, 289, 296, 310, 319, 388, 394,
                         417, 429, 447, 521, 536, 600 }; 

   int empID,
       results;

   // Get an emplyee ID to search for
   cout << "Enter the employee ID you wish to search for: ";
   cin >> empID;

   // Search for the ID
   results = binarySearch(IDnums, size, empID);

   // If binary Search returned -1, the ID was not found
   if (results == -1)
       cout << "That number does not exist in the array.\n";
   else
   {
       // otherwise results contains the subscript of
       // the specified employee ID in the array
       cout << "ID " << empID << " was found in element "
           << results << " of the array.\n";
   }

   return 0;

}  // end of main

// -----------------------------------------------------------------

int binarySearch(const int array[], int size, int value) {

    int     first = 0,
            last = size - 1,
            middle,
            position = -1;
    bool found = false;

    while (!found && first <= last)
    {
        middle = (first + last) / 2;
        if (array[middle] == value)
        {
            found = true;
            position = middle;
        }
        else if (array[middle] > value)
            last = middle - 1;
        else
            first = middle + 1;

    } 

    return position;

}
        
// -----------------------------------------------------------------

