// This program calculates the number of soccer teams a 
// youth league can create from teh number of available 
// players.  It performs input validation using while loops.
#include <iostream>
using namespace std;

int main(){

    // Constants for minimum and maximum players per team
    const int min_players = 9,
              max_players = 15;

    // Variables
    int players,        // Number of available players
        teamSize,       // Number of desired player per team 
        numTeams,       // Number of teams
        leftOver;       // Number of players left over

    // Get the number of players per team
    cout << "How many players do you wish per team?\n";
    cout << "(Enter a value in the range "
        << min_players << " - " << max_players << "): ";
    cin >> teamSize;

    // Validate the input
    while (teamSize < min_players || teamSize > max_players)
    {
        cout << "\nTeam size should be "
            << min_players << " to " << max_players << ").\n";
        cout << "How many players do you wish per team? ";
        cin >> teamSize;
    }
    // Get and validate the number of players available
    cout << "\nHow many players are available? ";
    cin >> players;

    while (players <= 0)
    {
        cout << "Please enter a positive number: ";
            cin >> players;
    }
    // Calculate the number of teams and number of leftover players
    numTeams = players / teamSize;
    leftOver = players % teamSize;

    // Display the results
    cout << "\nThere will be " << numTeams << " teams with ";
    cout << leftOver << " players left over.\n";

    return 0;

} // end of main


