// This program uses the selection sort algorithm to sort 
// an array in ascending order.
#include <iostream>
using namespace std;

// Function prototypes
void selectionSort(int [], int);
void showArray(const int [], int);

int main() {

    const int size = 6;

    // Array of unsorted values
    int values[size] = { 5, 7, 2, 8, 9, 1 };

    // Display the values
    cout << "The unsorted values are\n";
    showArray(values, size);

    // Sort the array 
    selectionSort(values, size);

    // Display the values
    cout << "The sorted values are\n";
    showArray(values, size);

    return 0;

} // end of main

void selectionSort(int array[], int size) {

    int startScan, minIndex, minValue;

    for (startScan = 0; startScan < (size - 1); startScan++)
    {
        minIndex = startScan;
        minValue = array[startScan];
        for (int index = startScan + 1; index < size; index++)
        {
            if (array[index] < minValue)
            {
                minValue = array[index];
                minIndex = index;
            }
        }
        array[minIndex] = array[startScan];
        array[startScan] = minValue;
    }

}

void showArray(const int array[], int size) {

    for (int count = 0; count < size; count ++)
        cout << array[count] << " ";
    cout << endl;

}









