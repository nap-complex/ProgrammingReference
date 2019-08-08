// Account.cpp is the Account class function implementation file.
#include "7-17_Account.h"

bool Account::withdraw(double amount)
{
    if (balance < amount)
        return false;   // Not enough in the account
    else
    {
        balance -= amount;
        transactions++;
        return true;
    }
}



