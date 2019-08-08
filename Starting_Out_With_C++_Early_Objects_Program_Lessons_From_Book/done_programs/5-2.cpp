// This program uses a loop to compute letter grades for multiple students.
#include <iostream>
using namespace std;

int main(){

    // Create named constants to hold minimum scores for each letter grade
    const int min_a_score = 90,
              min_b_score = 80,
              min_c_score = 70,
              min_d_score = 60,
              min_possible_score = 0;

    int numStudents,            // The total number of students
        student,                // The current student being processed
        testScore;              // Current student's numeric test score
    char grade;                 // Current student's letter grade
    bool goodScore = true;

    // Get the number of students
    cout << "How many students do you have grades for? ";
    cin >> numStudents;

    // Initialize the loop control variable
    student = 1;

    // Loop once for each student
    while (student <= numStudents)
    {
        // Get this student's numeric score
        cout << "\nEnter the numeric test score for student #"
            << student << ": ",  // fix
        cin >> testScore;

        // Determine the letter grade
        if (testScore >= min_a_score)
            grade = 'A';
        else if (testScore >= min_b_score)
            grade = 'B';
        else if (testScore >= min_c_score)
            grade = 'C';
        else if (testScore >= min_d_score)
            grade = 'D';
        else if (testScore >= min_possible_score)
            grade = 'F';
        else
            goodScore = false;  // The score was below 0

        // Display the letter grade
        if (goodScore)
            cout << "The letter grade is " << grade << ".\n";
        else
            cout << "The score cannot be below zero. \n";

        // Set student to the next student
        student = student + 1;
    }

    return 0;

} // end of main

