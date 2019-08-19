// This program demonstrates a static class member variable.
#include <iostream>
#include <iomanip>
#include "11-4_budget3.h"
using namespace std;

int main() {

    const int N_DIVISIONS = 4;

    // Get the budget requests for the divisions and 
    // offices
    cout << "Enter the main office's budget request: ";
    double amount;
//    cin >> amount;
// aint nobody got time for that...
    amount = 100000;
    Budget::mainOffice(amount);

    // Create the division and auxiliary offices
    Budget divisions[N_DIVISIONS];
    Aux auxOffices [N_DIVISIONS];

    cout << "\nEnter the budget requests for the divisions and  "
        << "\ntheir auxiliary offices as prompted:";

    cout << "\n************* aint nobody got time for that...  *****************\n";
/*
    for (int count = 0; count < N_DIVISIONS; count++)
    {
        double bud;
        cout <<  "Divisions " << (count + 1) << ": ";
        cin >> bud;
        divisions[count].addBudget(bud);
        cout << "Division " << (count + 1) << "'s auxiliary office: ";
        cin >> bud;
        auxOffices[count].addBudget(bud);
    }
*/
    // aint nobody got time for that....
        divisions[0].addBudget(100000);
        auxOffices[0].addBudget(50000);
        divisions[1].addBudget(200000);
        auxOffices[1].addBudget(40000);
        divisions[2].addBudget(300000);
        auxOffices[2].addBudget(70000);
        divisions[3].addBudget(400000);
        auxOffices[3].addBudget(65000);







    // Print the budgets
    cout << setprecision(2);
    cout << showpoint << fixed;
    cout << "Here are the divisions budget requests:\n";

    for (int count = 0; count < N_DIVISIONS; count++)
    {
        cout << "\tDivisions: " << (count +1) << "\t\t\t$ ";
        cout << setw(7);
        cout << divisions[count].getDivBudget() << endl;
        cout << "\tAuxiliary Office of Division " << (count+1);
        cout << "\t$  ";
        cout << auxOffices[count].getDivBudget() << endl;
    }

    // Print total requests
    cout << "\tTotal Requests (including main office):  $ ";
    cout << Budget::getCorpBudget() << endl;

    return 0;

}
