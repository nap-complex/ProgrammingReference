// Rectangle.h is the rectangle class specification file.
#ifndef RECTANGLE_H 
#define RECTANGLE_H 

// Rectangle class declaration
class Rectangle
{
    private:
        double length;
        double width;
    public:
        bool setLength(double);
        bool setWidth(double);
        double getLength();
        double getWidth();
        double getArea();
};
#endif
