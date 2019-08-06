// This program displays the number of days in each month.
#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    const int num_months = 12;
    int days[num_months];

    days[0]  = 31;   // January
    days[1]  = 28;   // February
    days[2]  = 31;   // March
    days[3]  = 30;   // April
    days[4]  = 31;   // May
    days[5]  = 30;   // June
    days[6]  = 31;   // July
    days[7]  = 31;   // August
    days[8]  = 30;   // September
    days[9]  = 31;   // October
    days[10] = 30;   // November
    days[11] = 31;   // December

    for (int month = 0; month < num_months; month++)
    {
        cout << "Month " << setw(2) << (month+1) << " has ";
        cout << days[month] << " days.\n";
    }

    return 0;

}



