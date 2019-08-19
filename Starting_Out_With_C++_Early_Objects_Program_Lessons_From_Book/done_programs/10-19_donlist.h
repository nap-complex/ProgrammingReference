#ifndef DONLIST_H
#define DONLIST_H

class DonationList
{
    private:
        int numDonation;
        double *donation;
        double **arrPtr;
        void selectSort();
    public:
        DonationList(int num, double gifts[]);
        ~DonationList();
        void show();
        void showSorted();
};
#endif
