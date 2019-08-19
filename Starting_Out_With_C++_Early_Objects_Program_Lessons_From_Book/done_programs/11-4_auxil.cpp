#include "11-4_auxil.h"
#include "11-4_budget3.h"

void Aux::addBudget(double b) {

    auxBudget += b;
    Budget::corpBudget += auxBudget;

}
