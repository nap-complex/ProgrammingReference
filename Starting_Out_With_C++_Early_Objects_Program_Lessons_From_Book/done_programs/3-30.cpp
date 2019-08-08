#include <iostream>
using namespace std;

int main(){

	const int size = 81;
	char sentence[size];

	cout << "enter a sentence: ";
	cin.getline(sentence, size);
	cout << "You entered =>" << sentence << "<= " << endl;

	return 0;

}


