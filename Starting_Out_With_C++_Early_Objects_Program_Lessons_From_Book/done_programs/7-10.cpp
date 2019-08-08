// This program uses a constant reference parameter.
// It also shows how to return an object from a function.
/*
   And, it's kit-bashed from 7-9.cpp, so might be some junk in here.
*/
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

// --------------------------------------------------------------------------------------

class InventoryItem
{
    private:
        int partNum;            // Part number
        string description;     // Item description
        int onHand;             // Units on hand
        double price;           // Unit price

    public:

        void storeInfo(int p, string d, int oH, double cost);    // Prototype

        // ---------------------------------------

        int getPartNum() {

            return partNum;

        }

        // ---------------------------------------

        string getDescription() {

            return description;

        }
        
        // ---------------------------------------

        int getOnHand() {

            return onHand;

        }
        
        // ---------------------------------------

        double getPrice() {

            return price;

        }

        // ---------------------------------------
};

// --------------------------------------------------------------------------------------

// Implementation code for InventoryItem class function storeInfo
void InventoryItem::storeInfo(int p, string d, int oH, double cost) {

    partNum = p;
    description = d;
    onHand = oH;
    price = cost;

}

// --------------------------------------------------------------------------------------

// Function prototypes for client program
InventoryItem createItem();                 // Returns an InventoryItem object
void showValues(const InventoryItem);       // Receives a reference to an 
                                            // InventoryItem object

// --------------------------------------------------------------------------------------

int main() {

    InventoryItem part = createItem();                 // part is an InventoryItem object

//    storeValues(part);
    showValues(part);

    return 0;

} // end of main

// --------------------------------------------------------------------------------------

InventoryItem createItem() {

    InventoryItem tempItem;     // Local InventoryItem object
    int partNum;                // Local variables to hold user input
    string description;
    int qty;
    double price;

    // Get the data from the user
    cout << "Enter data for the new part number \n";
    cout << "Part number: ";
    cin >> partNum;
    cout << "Description: ";
    cin.get();                          // Move past the '\n' left in 
                                        // input buffer by the last input
    getline(cin, description);
    cout << "Quantity on hand: ";
    cin >> qty;
    cout << "Unit price: ";
    cin >> price;

    // Store the data in the InventoryItem object object and return it
    tempItem.storeInfo(partNum, description, qty, price);

    return tempItem;

} 

// --------------------------------------------------------------------------------------

void showValues(InventoryItem item) {

    cout << fixed << showpoint << setprecision(2) << endl;
    cout << "Part Number   : "  << item.getPartNum() << endl;
    cout << "Description   : "  << item.getDescription() << endl;
    cout << "Units On Hand : "  << item.getOnHand() << endl;
    cout << "Price         : $"  << item.getPrice() << endl;

}

// --------------------------------------------------------------------------------------












