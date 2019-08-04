// This program uses a constructor to initialize a member variable.
#include <iostream>
#include <cmath>
using namespace std;

// -------------------------------------------------------------

// Circle class declaration
class Circle
{
    private:
        double radius;

    public:                 // Member function prototypes
        Circle();
        void setRadius(double);
        double getArea();
};

// -------------------------------------------------------------

// Circle member function implementation section

Circle::Circle() {

    radius = 1.0;

}

// -------------------------------------------------------------

void Circle::setRadius(double r) {

    if (r >= 0.0)
        radius = r;
    // else leave it set to its previous value

}

// -------------------------------------------------------------

double Circle::getArea() {

    return 3.14 * pow(radius, 2);

}

// -------------------------------------------------------------

int main() {

    // Define a Circle object.  Because the setRadius function 
    // is never called for it, it will keep the value set 
    // by the constructor.

    Circle circle1;
    
    // Define a second Circle object and set its radius to 2.5
    Circle circle2;
    circle2.setRadius(2.5);

    // Get and display each circle's area
    cout << "The area of circle1 is " << circle1.getArea() << endl;
    cout << "The area of circle2 is " << circle2.getArea() << endl;


} // end of main

// -------------------------------------------------------------



