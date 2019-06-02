// This program illustrates a bug that occurs when independent if/else
// statements are used to assign a letter grade to a numeric test score.
#include <iostream>
using namespace std;

int main(){

	const int min_A_score = 90,
			  min_B_score = 80,
			  min_C_score = 70,
			  min_D_score = 60;

	int testScore;
	char grade;
	bool goodScore = true;

	cout << "enter your numeric test score and I will\n";
	cout << "tell you the letter grade you earned: ";
	cin >> testScore;

	if ( testScore >= min_A_score )
		grade = 'A';
	else if ( testScore >= min_B_score )
		grade = 'B';
	else if ( testScore >= min_C_score )
		grade = 'C';
	else if ( testScore >= min_D_score )
		grade = 'D';
	else if ( testScore >= 0 )
		grade = 'F';
	else 
		goodScore = false;

	if (goodScore) 
		cout << "Your grade is " << grade << ".\n";
	else
		cout << "The score cannot be below zero. \n";

	return 0;

}

