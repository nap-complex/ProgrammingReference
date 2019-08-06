// This program displays the number of days in each month.
#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    const int num_months = 12;
    int choice;
    string name[num_months] = 
    {  "January",  "February",  "March",  "April",  "May",  "June",  "July",  
        "August",  "September",  "October",  "November",  "December"   };

    int days[num_months] = { 31,28,31,30,31,30,31,31,30,31,30,31 };


    cout << "This program will tell you how many days are " 
        << "in each month.\n\n";

    // Display the months
    for (int month = 1; month <= num_months; month++)
        cout << setw(2) << month << "  " << name[month-1] << endl;

    cout << "\nEnter the number of the month you want: ";
    cin >> choice;

    // Use the choice the user entered to get the name of 
    // the month and it's number of days from the arrays.
    cout << "the month of " << name[choice-1] << " has "
        << days[choice-1] << " days.\n";

    return 0;

}



