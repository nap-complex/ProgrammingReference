// This program is used by Green Fields Landscaping to 
// create customer invoices for evergreen tree sales.
#include <iostream>
#include <iomanip>
using namespace std;

int main(){

    const double price_1 = 39.00,      // Set prices for different
                 price_2 = 69.00,      // size trees
                 price_3 = 99.00,
                 price_4 = 199.00;

    const double per_tree_delivery = 20.00, // set delivery fees
                 max_delivery = 100.00;

    int numTrees,                       // Number of evergreen trees pruchased
        height;                         // Tree height to the nearest foot
    char planted,                       // Are trees to be planted? ('Y'/'N')
         delivered;                     // Are trees to be delivered? ('Y'/'N')
    double treeCost,                    // Cost of a particualr tree
           totalTreeCost,               // Total price for all the trees
           deliveryCost = 0.0,          // Delivery cost for all the trees
           plantingCost = 0.0,          // Planting cost for all the trees
           totalCharges;                // Total invoice amount

    // Display purchase screen and get purchase information
    cout << "\n      Green Fields Landscaping\n";
    cout << "      Evergreen Tree Purchase\n\n";
    cout << "Number of trees purchased: ";
    cin >> numTrees;
    cout << "Tree height to the nearest foot: ";
    cin >> height;
    cout << "Will Green Fields do the planting?(Y/N): ";
    cin >> planted;

    if (!(planted == 'Y' || planted == 'y'))
    {
        cout << "Do you want the trees delivered?  (Y/N): ";
        cin >> delivered;
    }

    // Calculate costs
    if (height < 3)
        treeCost = price_1;
    else if (height <= 5)
        treeCost = price_2;
    else if (height <= 8)
        treeCost = price_3;
    else 
        treeCost = price_4;

    totalTreeCost = numTrees * treeCost;
    if (( planted == 'Y' ) || ( planted == 'y' ))
        plantingCost = totalTreeCost / 2;
    else if (( delivered == 'Y' ) || ( delivered == 'y' ))
        if ( numTrees <= 5 )
            deliveryCost = per_tree_delivery * numTrees;
        else 
            deliveryCost = max_delivery;
    // else planting and delivery costs both remain 0.0

    totalCharges = totalTreeCost + deliveryCost + plantingCost;

    // Display information on the invoice
    cout << fixed << showpoint << setprecision(2);
    cout << "\n      Green Fields Landscaping\n";
    cout << "      Evergreen Tree Purchase\n\n";
    cout << setw(2) << numTrees << " trees @ $" << setw(6) << treeCost
        << " each =  $" << setw(8) << totalTreeCost << endl;
    cout << "Deliver charge             $"
        << setw(8) << deliveryCost << endl;
    cout << "Planting charge            $"
        << setw(8) << plantingCost << endl;
    cout << "                            ________" << endl;
    cout << "Total Amount Due           $"
        << setw(8) << totalCharges << endl << endl;

    return 0;

} // end of main
// what are the changes?




















