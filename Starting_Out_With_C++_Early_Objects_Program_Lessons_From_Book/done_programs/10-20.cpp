// This program illustrates the use of the time function.
#include <iostream>
#include <ctime>
using namespace std;

int main() {

    time_t epSeconds;
    time(&epSeconds);
    cout << "The number of seconds since the epoch is "
        << epSeconds << endl;

    return 0;

}


