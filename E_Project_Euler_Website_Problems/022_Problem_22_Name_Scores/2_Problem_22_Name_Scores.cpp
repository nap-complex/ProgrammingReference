#include <iostream>
#include <fstream>
#include <string>
using namespace std;


//------------------------------------------------------------------------------------------------------

// Prototype:
int wordValue(string, int);

//------------------------------------------------------------------------------------------------------

int main(){

	string s1;
	int placeCount = 0;
	int totalWordValue = 0;
	fstream textFile;

	cout << "\n\n************************************************************************\n";

	textFile.open("sorted_data", ios::out | ios::in);

	while ( textFile >> s1 ) {
		placeCount++;
		totalWordValue = totalWordValue + wordValue(s1, placeCount);
	}

	cout << "\nAnd now, from the C++ program:";
	cout << "\nAnswer to Problem 22 => " << totalWordValue;

	textFile.close();

	cout << "\n\n************************************************************************\n";

} // end of main

//------------------------------------------------------------------------------------------------------

int wordValue(string s2, int multi) {


	int c1 = 0;
	int v1 = 0;
	int letterSum = 0;

	c1 = s2.length();

	for ( int i=0; i<c1; i++ ){
		v1 = ( int(s2[i]) - 64 );
		letterSum = letterSum + v1;
	}
	
	return ( letterSum * multi );	

} // end of wordValue

//------------------------------------------------------------------------------------------------------
