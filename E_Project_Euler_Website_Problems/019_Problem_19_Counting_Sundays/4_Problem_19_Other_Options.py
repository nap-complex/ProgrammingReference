#! /usr/bin/env python3
import calendar

"""
Jan 25, 2019  -  JLF

Counting Sundays

Problem 19

You are given the following information, but you may prefer to do some research for yourself.

    1 Jan 1900 was a Monday.
    Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
    A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

	How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
"""

print("*********************************************************************************************")


# this is how many months are in a century:
# this seems like cheating, but it works.  Check to see if where the first sunday fall 
# effects the total
# We checked, and if sunday had been one of the first 5 days of 1901 then there would have
# been 172 sundays and this math would not work, unless accounted for

numberOfMonths = 100 * 12  
numberOfSundays = int(numberOfMonths/7)

print("the first day of 1901 was a => ", calendar.weekday(1901, 1, 1))
print("the first day of 2000 was a => ", calendar.weekday(2000, 1, 1))
print("The answer from the python3 program:")
print("There were ", numberOfSundays, " first day of the month Sundays in the twentieth century.")

print("*********************************************************************************************")
