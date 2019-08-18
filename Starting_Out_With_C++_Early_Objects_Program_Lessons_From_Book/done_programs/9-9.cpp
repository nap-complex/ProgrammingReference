/*
Modify the selectionSort function presented in this chapter so it sorts an array of
strings instead of an array of ints. Test the function with a driver program. Use Program 9-9
as a skeleton to complete.
*/


#include <iostream>
#include <string>
#include <iomanip>
using namespace std;


int main() {

    const int size = 20;
    bool a_change_was_made = true;
    string temp;
    int tracker = 0;
    int loops = 0;

    string original_name[size] =
    {   "Collins, Bill ", "Smith, Bart",    "Sanchez, Manny ", "Rubin, Sarah ",
        "Allison, Jeff ", "Moreno, Juan",   "Moretti, Bella",  "WU, Hong ", 
        "Smith, Cathy",   "Conroy, Pat ",   "Michalski, Joe ", "Taylor, Tyrone", 
        "Wolfe, Bill",    "Patel, Renee",   "Kelly, Sean ",    "Griffin, Jim", 
        "Johnson, Jill",  "Whitman, Jean ", "Harrison, Rose",  "Holland, Beth" };
    string sorted_name[size];

    cout << "\n*****************************************************************************\n";

    cout << "\nThis program takes a list and puts it in alphebetical order.\n";

    // this 'for' copies the original list to the working list
    for ( int i = 0; i < size; i++ )
        sorted_name[i] = original_name[i];

    // this part does the actual sorting
    while ( a_change_was_made ) 
    {
        loops++;
        a_change_was_made = false;
        for (tracker = 0; tracker < (size-1); tracker++) 
        {
            if ( sorted_name[tracker] > sorted_name[tracker+1] )
            {
                temp = sorted_name[tracker];
                sorted_name[tracker] = sorted_name[tracker+1];
                sorted_name[tracker+1] = temp;
                a_change_was_made = true;
            }
        }
    }

    // from here down is the display part
    cout << "\nThe original list:\n";
    for ( int i = 0; i < size; i++ )
        cout << "\n" << setw(3) << i << "   " << original_name[i];
    cout << endl;

    cout << "\nThe sorted list:\n";
    for ( int i = 0; i < size; i++ )
        cout << "\n" << setw(3) << i << "   " << sorted_name[i];
    cout << endl;

    cout << "\nThe program looped through the list " << loops << " times to sort it.\n";

    cout << "\n*****************************************************************************\n";

    return 0;
    
   } // end of main


