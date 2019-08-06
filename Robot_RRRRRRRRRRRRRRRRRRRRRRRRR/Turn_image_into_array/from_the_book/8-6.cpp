// This program displays the number of days in each month.
#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    const int num_months = 12;
    string name[num_months] = 
    {  "January",  "February",  "March",  "April",  "May",  "June",  "July",  
        "August",  "September",  "October",  "November",  "December"   };

    int days[num_months] = { 31,28,31,30,31,30,31,31,30,31,30,31 };

    for (int month = 0; month < num_months; month++)
    {
        cout << setw(9) << left << name[month] << " has ";
        cout << days[month] << " days.\n";
    }

    return 0;

}



