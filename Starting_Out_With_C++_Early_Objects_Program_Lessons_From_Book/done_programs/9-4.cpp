// This program uses the bubble sort algorithm to sort an array
// of integers in ascending order.
#include <iostream>
using namespace std;

// --------------------------------------------------------------------

// Function prototypes
void sortArray(int [], int);
void showArray(const int [], int);

// --------------------------------------------------------------------

int main() {

    const int size = 6;

    //Array of unsorted values
    int values[size] = { 7, 2, 3, 8, 9, 1 };

    // Display the values
    cout << "The unsorted values are:\n";
    showArray(values, size);

    // Sort the values
    sortArray(values, size);

    // Display them again
    cout << "The sorted values are:\n";
    showArray(values, size);

    return 0;

} // end of main

// --------------------------------------------------------------------

void sortArray(int array[], int size) {

    int temp;
    bool swap;

    do
    {
        swap = false;
        for (int count = 0; count < (size -1); count++)
        {
            if (array[count] > array[count + 1])
            {
                temp = array[count];
                array[count] = array[count + 1];
                array[count + 1] = temp;
                swap = true;
            }
        }
    } while (swap);

}

// --------------------------------------------------------------------

void showArray(const int array[], int size) {

    for (int count = 0; count < size; count++)
        cout << array[count] << " ";
    cout << endl;

}

// --------------------------------------------------------------------

