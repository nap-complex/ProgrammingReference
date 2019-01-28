/*
This file is here as notes on file handling

fstream  ==> lets you access file stuff

ofstream, ifstream, fstream  ==> are types of objects, out only, in only, both

"myfile" could be called anything.  It works just like "cout" but sends to file, not screen

issue:  if you want to make a fileName as a string and use that
you have to use some special c_str way of writing it. and 
include <string>

*/

#include <iostream>
#include <fstream>
//#include <string>

using namespace std;

// global variable:
string fileName = "sample_output_from_fileHandlingProgram.txt";

int main() {

	// makes a thing called "myfile" that is of type "ofstream"	
	ofstream myfile;

	//myfile.open ("sample_file_from_program.txt");
	myfile.open (fileName.c_str());
	myfile << "\nWriting this to a file.\n";
	myfile.close();

	return 0;

} // end of main
