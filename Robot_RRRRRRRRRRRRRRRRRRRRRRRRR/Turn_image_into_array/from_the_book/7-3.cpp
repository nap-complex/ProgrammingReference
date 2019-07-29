// This program implements a Rectangle class.
#include <iostream>
using namespace std;

// ----------------------------------------------------------------------

// Rectabgle class declaration
class Rectangle
{
    private:
        double length;
        double width;
    public:
        void setLength(double);
        void setWidth(double);
        double getLength();
        double getWidth();
        double getArea();
};

// ----------------------------------------------------------------------

// member function implementation section

void Rectangle::setLength(double len) {

    if (len >= 0.0)
        length = len;
    else 
    {
        length = 1.0;
        cout << "Invalid length. Using a default value of 1.0\n";
    }

} // end of Rectangle::setLength

// ----------------------------------------------------------------------

void Rectangle::setWidth(double w) {

    if (w >= 0.0)
        width = w;
    else
    {
        width = 1.0;
        cout << "Invalid width.  Using a default value of 1.0\n";
    }

} // end of Rectangle::setWidth

// ----------------------------------------------------------------------

double Rectangle::getLength() {

    return length;

}

// ----------------------------------------------------------------------

double Rectangle::getWidth() {

    return width;

}

// ----------------------------------------------------------------------

double Rectangle::getArea() {

    return length * width;

}

// ----------------------------------------------------------------------

int main() {

    Rectangle box;              // Declare a Rectanbgle object
    double boxLength, boxWidth;

    // Get box length and width
    cout << "This program will calulate the area of a rectangle.\n";
    cout << "What is the length? ";
    cin >> boxLength;
    cout << "What is the width? ";
    cin >> boxWidth;

    // Call memeber functions to set box dimensions
    box.setLength(boxLength);
    box.setWidth(boxWidth);

    // Call member functions to get box information to display
    cout << "\nHere is the rectagle's data:\n";
    cout << "Length: " << box.getLength() << endl;
    cout << "Width : " << box.getWidth() << endl;
    cout << "Area  : " << box.getArea() << endl;

    return 0;

} // end of main

// ----------------------------------------------------------------------




