#include "11-3_budget.h"

// Definition of the static member of Budget class.
double Budget::corpBudget = 0;

void Budget::mainOffice(double budReq) {

    corpBudget += budReq;

}

