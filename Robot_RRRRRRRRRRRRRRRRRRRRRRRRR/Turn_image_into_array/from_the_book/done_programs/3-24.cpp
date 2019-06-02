#include <iostream>
using namespace std;

int main(){

	char ch;

	cout << "This program has paused.  Press Enter to continue.";
	cin.get(ch);
	cout << "This program has paused a second time.  Press Enter to continue.";
	ch = cin.get();
	cout << "This program has paused a third time.  Press Enter to continue.";
	cin.get();

	cout << "Thank you!" << endl;

	return 0;

} 
