// This menu-driven program uses a switch statement to carry out 
// the appropriate set of actions based on the user's menu choice.
#include <iostream>
#include <iomanip>
using namespace std;


int main(){

    // Constants for membership rates
    const double adult_rate  = 120.0;
    const double child_rate  = 60.0;
    const double senior_rate = 100.0;

    int choice;             // menu choice
    int months;             // number of months
    double charges;         // monthly charges

    // Display the manu and get the user's choice
    cout << "   Health Club Membership Menu\n\n";
    cout << "1. Standard Adult Membership\n";
    cout << "2. Child Membership\n";
    cout << "3. Senior Citizen Membership\n";
    cout << "4. Quit the Program\n\n";
    cout << "Enter your choice: ";
    cin >> choice;

    // Validate and process the menu choice
    if (choice >= 1 && choice <= 3)
    {
        cout << "For how many months? ";
        cin >> months;

        // Set charges based on user input
        switch (choice)
        {
            case 1: charges = months * adult_rate;
                    break;
            case 2: charges = months * child_rate;
                    break;
            case 3: charges = months * senior_rate;
                    break;
        }

        // Display the monthly charges
        cout << fixed << showpoint << setprecision(2);
        cout << "The total charges are $" << charges << endl;
    }
    else if (choice != 4)
    {
        cout << "The valid choices are 1 through 4.\n";
        cout << "Run the program again and select one of these.\n";
    }

    return 0;

} // end of main
