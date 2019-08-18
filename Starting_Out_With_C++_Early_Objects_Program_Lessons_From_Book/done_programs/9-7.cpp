// This program uses the bubble sort algorithm to sort
// a vector of integers in ascending order.
#include <iostream> 
#include <vector>
using namespace std;

// ---------------------------------------------------------------------------------

// Function prototypes
void displayVector(vector<int>);
void sortVector(vector<int> &);

// ---------------------------------------------------------------------------------

int main() {


    const int size = 6;

    // Create a vector to hold a set of unsorted integers
    vector<int> values(size);

    // Prompt user to enter the values to be stored.
    cout << "Please enter " << size << " integers separated by spaces.\n";

    for (int i = 0; i < size; i++)
        cin >> values[i];

    // Display the values
    cout << "\nThe unsorted values entered are: \n";
    displayVector(values);

    // Sort the values
    sortVector(values);

    // Display the values again
    cout << "\nThe sorted values entered are: \n";
    displayVector(values);

    return 0;

} // end of main

// ---------------------------------------------------------------------------------

void sortVector(vector<int> &numbers) {

    int temp;
    bool swap;

    do
    {
        swap = false;
        for (unsigned count = 0; count < numbers.size()-1; count++)
        {
            if (numbers[count] > numbers[count+1])
            {
                temp = numbers[count];
                numbers[count] = numbers[count+1];
                numbers[count+1] = temp;
                swap = true;
            }
        } 
    } while (swap);

} // end of sortVector

// ---------------------------------------------------------------------------------

void displayVector(vector<int> numbers) {

    for (unsigned count = 0; count < numbers.size(); count++)
        cout << numbers[count] << " ";

    cout << endl;

} // end of displayVector

// ---------------------------------------------------------------------------------
