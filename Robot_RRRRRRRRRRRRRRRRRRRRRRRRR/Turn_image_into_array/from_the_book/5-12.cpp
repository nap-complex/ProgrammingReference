// This program illustreates the use of an end sentinel.  It calculates 
// the total number of points a soccer team has earned over a series
// of games.  The user enters the point values, the -1 when finished.
#include <iostream>
using namespace std;

int main() {

    int game = 1,               // Game counter
        points,                 // Holds number of points for a specific game
        total = 0;              // Accumulates total points for all games

    // Read in the pints for game 1
    cout << "Enter the number of points your team has earned\n";
    cout << "so far this season.  The enter -1 when finished.\n\n";
    cout << "Enter the points for game " << game << ": ";
    cin >> points;


    // Loop as long as the end sentinel has not yet been entered
    while (points != -1)
    {
        total += points;

        // Enter the points for the next game
        game++;
        cout << "Enter the points for game " << game << ": ";
        cin >> points;
    }

    // Display the total points
    cout << "\nThe total points are " << total << endl;

    return 0;

}


