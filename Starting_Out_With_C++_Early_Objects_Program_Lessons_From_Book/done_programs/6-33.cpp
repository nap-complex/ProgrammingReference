/*
    Ran this on Windows 10 computer and it worked as advertised.
*/
// This program displays a Jack-o-lantern glowing in the dark.
// It lets the user select what color it should be.
#include <iostream>
#include <windows.h>
using namespace std;

// -----------------------------------------------------------------------------

// Function prototypes
void displayMenu();
int getChoice();
void makeJackOLantern();

// -----------------------------------------------------------------------------

// global constants
const int QUIT = 6, MAX_CHOICE = 6;

// -----------------------------------------------------------------------------

int main() {
    
    int colorChoice;
    // Get the handle to standard output device (the console)
    HANDLE screen = GetStdHandle(STD_OUTPUT_HANDLE);

    do
    {
        SetConsoleTextAttribute(screen, 7); // Set to white on black
        displayMenu();                      // for menu display
        colorChoice = getChoice();          

        if (colorChoice != QUIT)
        {
            SetConsoleTextAttribute(screen, colorChoice + 9);
            makeJackOLantern();
        } // end of if

    } while ( colorChoice != QUIT );

    return 0;


} // end of main

// -----------------------------------------------------------------------------

void displayMenu() {
    
    system("cls");          // clear the screen
    cout << "I will draw a Jack-o-lantern.  What color should it be?\n\n"
        << "Enter 1 for Green       2 for Blue      3 for Red \n"
        << "      4 for Purple      5 for Yellow    6 to quit: ";

} // end of displayMenu

// -----------------------------------------------------------------------------

int getChoice() {

    int choice;

    cin >> choice;
    while ( choice < 1 || choice > MAX_CHOICE )
    {
        cout << "\nThe only valid choices are 1-" << MAX_CHOICE
            << ". Plese re-enter. ";
        cin >> choice;
    } // end of while

    return choice;

} // end of getChoice

// -----------------------------------------------------------------------------

void makeJackOLantern() {
    
    cout << "\n\n";
    cout << "                                   ^    ^   \n";
    cout << "                                     *      \n";
    cout << "                                   \\___/     " << endl;
    cout << "\n\n                     Press ENTER to return to the menu.";
    cin.get();      // Clear the previouse \n out of the input buffer
    cin.get();      // Wait for the user to press ENTER

} // end of makeJack...

// -----------------------------------------------------------------------------




