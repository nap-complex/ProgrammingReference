/*

May 3, 2017  -  JLF

this program is an example of how to include variables on the command line when 
executing a program, and how do get those variables usable in the program

example command line => shell:~$ ./a.out 21345

argc is an integer that gives the number of arguments entered on the command line

argv is the command line arguments held as strings

argv[0] is the name of the excecutable program being run from the command line

*/

// --------------------------------------------------------------------------------------------------

#include <iostream>
#include <cstring>  // this is needed for string work and includes string.length() function


const int arraySize = 100;  // this is here for the "convert string to array of int" part


int main(int argc, char *argv[]) // these characters allow command line input of variables
{

		std::string current_exec_name = argv[0]; // Name of the current exec program, a.out normally
												 // converts argv to string in declaration line, good idea
		std::string first_arge;
		int i;
		int i1;
		int * p;
		p = new int[arraySize];



		// **************************************************************************************
		
		// just for show
		std::cout << "\nargv[0] => " << current_exec_name << std::endl;


		// this part takes the argument after program name on command line,
		// if there is one, and puts it in first_arge.  There could be more than
		// one, but we are keeping this sample program basic
		if (argc > 1) 
		{
				first_arge = argv[1];
				std::cout << "\nargv[1] => " << first_arge << std::endl;
		}


		// just for show
		std::cout << "\nThe length of first_arge is " << first_arge.length();


		// this part show info for double checking, and converts the string into
		// and array in int p* for later processing
		if ( first_arge[0] != '\0' ) 
		{	  
				i = 0;	
				while ( first_arge[i] != '\0' ) 
				{
						std::cout << "\nfirst_arge[" << i << "] => " << first_arge[i];
						std::cout << "   int of that => " << int(first_arge[i]);
						i1 = int(first_arge[i]) - 48;
						std::cout << "   converted to int => " << i1;
						p[i+1] = i1;
						i++;
				} // end of while
		}

		
		// this part shows array of it p* for double checking
		p[0] = first_arge.length();
		std::cout << "\n\n";
		for ( i=1; i<=p[0]; i++ ) 
		{
				std::cout << p[i] << "."; 
		}

		
		// this is just for output ease of reading screen
		std::cout << std::endl << std::endl;

		// **************************************************************************************
} // end of main
