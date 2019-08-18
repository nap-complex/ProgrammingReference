// This program uses bubble sort to sort an array of objects.
// It places Inventory objects in ascending order by their itemCode.
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

// -------------------------------------------------------------------------

// Inventory class declaration
class Inventory
{
    private:
        string itemCode;
        string description;
        double price;

    public:
        Inventory()
        {
            itemCode = "xxx"; 
            description = " ";
            price = 0.0;
        }

        Inventory(string c, string d, double p)
        {
            itemCode = c; 
            description = d;
            price = p;
        }


        // Add methods setCode, setDescription, and setPrice here
        string getCode() const
        {
            string code = itemCode;
            return code;
        }

        string getDescription() const
        {
            string d = description;
            return description;
        }

        double getPrice() const
        {
            return price;
        }

};

// ------------------------------------------------------------------------------

// Function prototype
void displayInventory(const Inventory[], int);
void bubbleSort(Inventory[], int);


/**************************************************************************
*                                 MAIN                                    *
***************************************************************************/

int main() {

    const int size = 6;

    // Create and initialize the array of Inventory objects
    Inventory silverware[size] =
      { Inventory("S15",    "soup spoon",      2.35),
        Inventory("S12",    "teaspoon",        2.19),
        Inventory("F15",    "dinner fork",     3.19),
        Inventory("F09",    "salad fork",      2.25),
        Inventory("K33",    "knife",           2.35),
        Inventory("K41",    "steak knife",     4.15) };

    // Display the inventory
    cout << "Here is the original data\n";
    displayInventory(silverware, size);

    // Sort the objects by their itemCode
    bubbleSort(silverware, size);

    // Display the inventory again
    cout << "\nHere is the sorted data\n";
    displayInventory(silverware, size);

    return 0;

} // end of main

// --------------------------------------------------------------------------

void displayInventory(const Inventory object[], int size) {

    for (int index = 0; index < size; index++)
    {
        cout << setw(5) << left << object[index].getCode()
            << setw(13) << left << object[index].getDescription()
            << "$" << right << object[index].getPrice() << endl;
    }

}

// -------------------------------------------------------------------------

void bubbleSort(Inventory array[], int size) {
        
    Inventory temp;
    bool swap;

    do 
    {
        swap = false;
        for (int count = 0; (count < size - 1); count ++)
        {
            if (array[count].getCode() > array[count + 1].getCode())
            {
                temp = array[count];
                array[count] = array[count + 1];
                array[count + 1] = temp;
                swap = true;
            }
        }
    } while (swap);

}

// -------------------------------------------------------------------------

