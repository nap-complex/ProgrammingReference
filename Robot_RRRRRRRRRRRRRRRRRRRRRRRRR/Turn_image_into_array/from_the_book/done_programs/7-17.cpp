// This client program uses the Account class to perform simple 
// banking operations.  This file should be combined into a
// project along with the 7-17_Account.h and 7-17_Account.cpp files.
#include <iostream>
#include <iomanip>
#include "7-17_Account.h"
using namespace std;

// ---------------------------------------------------------------------------------------

// Function prototypes
void displayMenu();
char getChoice(char);
void makeDeposit(Account &);
void withdraw(Account &);

// ---------------------------------------------------------------------------------------

int main() {

    const char max_choice = '7';
    Account savings;                // Account object to model savings account
    char choice;

    cout << fixed << showpoint << setprecision(2);

    do
    {
        displayMenu();
        choice = getChoice(max_choice);     // This returns only '1' - '7'
        switch(choice)
        {
            case '1': cout << "The current balance is $";
                      cout << savings.getBalance() << endl;
                      break;
            case '2': cout << "There have been ";
                      cout << " transactions.\n";
                      break;
            case '3': cout << "Interest earned for this period: $";
                      cout << savings.getInterest() << endl;
                      break;
            case '4': makeDeposit(savings);
                      break;
            case '5': withdraw(savings);
                      break;
            case '6': savings.calcInterest();
                      cout << "Interest added.\n";
        }
    } while(choice != '7');

    return 0;

} // end of main

// ---------------------------------------------------------------------------------------

void displayMenu() {
   
    cout << "\n\n         Menu\n\n";
    cout << "1) Display the account balance\n";
    cout << "2) Display the number of transactions\n";
    cout << "3) Display interest earned for this period\n";
    cout << "4) Make a deposit\n"; 
    cout << "5) Make a withdrawal\n";
    cout << "6) Add interest for this period\n";
    cout << "7) Exit the program\n\n";
    cout << "Enter your choice: ";

}

// ------------------------------------------------------------

char getChoice(char max) {
    
    char choice = cin.get();
    cin.ignore();               // Bypass the '\n' in the input buffer

    while (choice < '1' || choice > max)
    {
        cout << "Choice must be between 1 and " << max << ". "
            << "Please re-enter choice: ";
        choice = cin.get();
        cin.ignore();       // Bypass the '\n' in the input buffer
    }

    return choice;

}

// ------------------------------------------------------------

void makeDeposit(Account &account) {
    
    double dollars;

    cout << "Enter the amount of the deposit: ";
    cin >> dollars;
    cin.ignore();
    account.makeDeposit(dollars);

}

// ------------------------------------------------------------

void withdraw(Account &account) {
    
    double dollars;

    cout << "Enter the amount of the withdrawal: ";
    cin >> dollars;
    cin.ignore();
    if (!account.withdraw(dollars))
        cout << "ERROR: Withdrawal amount too large.\n\n";

}

// ------------------------------------------------------------



