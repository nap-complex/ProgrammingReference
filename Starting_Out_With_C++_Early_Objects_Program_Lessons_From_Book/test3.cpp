// what's the deal with strings?

#include <iostream>
#include <string>
#include <fstream>
using namespace std;




int main() {

    string s1 = "";
    int i;
    ofstream file1;



    cout << "\n*************************************************************\n";

    cout << "\nstring => " << s1;

    for (i = 65; i < (91); i++)
        s1 += char(i);

    for (i = (97); i < 123; i++)
        s1 += char(i);

    cout << "\nstring => " << s1;

    cout << "\nstring length => " << s1.length() << endl;

    for (int x=0; x<52; x++)
        cout << s1[x] << ".";

    cout << endl;


    file1.open("letters.data");

    for (int x=0; x<52; x++)
        file1 << s1[x] << "\n";



    file1.close();






    cout << "\n*************************************************************\n";









}
