#ifndef BEDGET_H
#define BEDGET_H

class Budget
{
    private:
        static double corpBudget;
        double divBudget;
    public:
        Budget() { divBudget = 0; }
        void addBudget(double b) {
            divBudget += b;
            corpBudget += divBudget;
        }
        double getDivBudget() const { return divBudget; }
        static double getCorpBudget() { return corpBudget; }
        static void mainOffice(double);
};

#endif
