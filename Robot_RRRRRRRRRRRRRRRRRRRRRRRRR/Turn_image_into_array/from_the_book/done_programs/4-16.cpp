#include <iostream>
using namespace std;

int main(){

	const int a_score = 90,
			  b_score = 80,
			  c_score = 70,
			  d_score = 60,
			  min_score = 0,
			  max_score = 100;

	int testScore;

	cout << "Enter your numeric test score and I will\n"
		<< "tell you the letter grade you earned: ";
	cin >> testScore;

	if (testScore >= min_score && testScore <= max_score)
	{
		if (testScore >= a_score)
			cout << "Your grade is A.\n";
		else if (testScore >= b_score)
			cout << "Your grade is B.\n";
		else if (testScore >= c_score)
			cout << "Your grade is C.\n";
		else if (testScore >= d_score)
			cout << "Your grade is D.\n";
		else 
			cout << "Your grade is F.\n";
	}
	else
	{
		cout << "That is an invalid score.  Run the program\n"
			<< "again and enter a value in the range of\n"
			<< min_score << " through " << max_score << ".\n";
	}

	return 0;
}

