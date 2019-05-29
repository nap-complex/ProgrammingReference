#include <iostream>
#include <fstream>
#include <string>

/* 
	Program 13-1 from the book C++ Text Book, ( it's in eBooks )
*/
using namespace std;

int main()
{
	fstream inOutFile;
	string word;  // used to read a word from the file

	cout << "\n***********************************************************************\n";

	// Open the file
	inOutFile.open("inout.txt");
	if (inOutFile.fail())
	{
		cout << "The file was not found." << endl;
		return 1;
	}

	// Read and print every word already in the file
	while (inOutFile >> word)
	{
		cout << word << endl;
	}

	// clear end of file flag to allow additional file operations
	inOutFile.clear();

	// Write a word to the file and close the file
	inOutFile << "Hello" << endl;
	inOutFile.close();

	cout << "\n***********************************************************************\n";

	return 0;


} // end of main
