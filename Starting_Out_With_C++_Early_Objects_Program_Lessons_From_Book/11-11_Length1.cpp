#include "11-11_Length1.h"

    istream &operator>>(istream &in, Length &a)
    {
          int feet, inches;
          cout << "Enter feet: ";
          in >> feet;
          cout << "Enter inches: ";
          in >> inches;
          // Modify the object a with the data and return
          a.setLength(feet, inches);
          return in;
     }
        
     ostream &operator<<(ostream& out, Length a)
     {
          out<< a.getFeet() << " feet, " << a.getinches() << " inches";
          return out;
     }
        
     Length Length::operator++()
     {
          len_inches ++;
          return *this;
     }

    Length Length::operator++(int)
    {
         Length temp = *this;
         len_inches ++;
         return temp;
    }
    Length operator+(Length a, Length b)
    {
        return Length(a.len_inches + b.len_inches);
    }

    Length operator-(Length a, Length b)
    {
         return Length(a.len_inches - b.len_inches);
    }

    bool operator==(Length a, Length b)
    {
        return a.len_inches == b.len_inches;
    }
    
    //************************************
    // Overloaded operator<
    //************************************
    bool operator<(Length a, Length b)
    {
        return a.len_inches < b.len_inches;
    }
