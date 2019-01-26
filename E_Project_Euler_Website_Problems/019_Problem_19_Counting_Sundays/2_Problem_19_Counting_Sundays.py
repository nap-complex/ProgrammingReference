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


numberOfSundays = 0
for year in range(1901, 2001):
	for month in range(1, 13):
		if (calendar.weekday(year,month,1) == 6):
			numberOfSundays += 1

print("The answer from the python3 program:")
print("There were ", numberOfSundays, " Sundays as first day of the month in the twentieth century.")

print("*********************************************************************************************")
