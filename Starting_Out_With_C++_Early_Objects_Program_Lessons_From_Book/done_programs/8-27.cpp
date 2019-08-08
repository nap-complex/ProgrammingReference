// This program demonstates the vector clear member function.
#include <iostream>
#include <vector>
using namespace std;

double avgVector(vector<int>);

int main() {

    vector<int> values(100);
    int numValues, tempValues;
    double average;

    // just in case:
    values.clear();

    // Get the number of values to average
    cout << "How many values do you wish to average? ";
    cin >> numValues;

cout << "\nnumValues => " << numValues << "\n";

    // Get the values and store them in a vector
    for (int count = 0; count < numValues; count++)
    {
        cout << "Enter an integer value: ";
        cin >> tempValues;
        values.push_back(tempValues);
cout << "\n****** numValues => " << numValues << " count => " << count << endl;
    }

    // Get the average of the values and display it
    average = avgVector(values);
    cout << "Average: " << average << endl;

    return 0;

} // end of main

double avgVector(vector<int> vect) {

    int total = 0;
    double avg = 0.0;

    if (vect.empty())
        cout << "No values to average.\n";
    else
    { 
        for (int count = 0; count < vect.size(); count++)
            total += vect[count];
        avg = static_cast<double>(total) / vect.size();
    }

    return avg;

}
