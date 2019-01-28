#include <iostream>
#include <ctime>
#include <sstream> // needed to convert int's into string
using namespace std;



//--------------------------------------------------------------------------------------------------------------
// This is the function that returns the date and time
// It needs <ctime> and <sstream> in the #include section
// The current date and time is the return value of the function
// no arguments needed
string endOfTime() {

	time_t currentTime;
	struct tm *localTime;

	time ( &currentTime );
	localTime = localtime( &currentTime );

	int day = localTime->tm_mday;
	int month = localTime->tm_mon;
	int year = localTime->tm_year + 1900;
	int hour = localTime->tm_hour;
	int min = localTime->tm_min;
	int sec = localTime->tm_sec;

	string months[] = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};

	ostringstream time_string;
	string displayString;

	time_string << months[month] << " " << day << ", " << year << "  "<< hour << ":"<< min << ":"<< sec;

	displayString = time_string.str();

	return displayString;
} // end of time
//--------------------------------------------------------------------------------------------------------------
int main() {

	cout << "\n*************************************************************\n";

	cout << endOfTime();

	cout << "\n*************************************************************\n";
	
	return 0;
} // end of main
