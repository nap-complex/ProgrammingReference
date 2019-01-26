#! /usr/bin/env python3
import calendar
import datetime


print("*********************************************************************************************")

totalNumberOfSundays = 0

print(calendar.calendar(2000,2,1,6))


# sundays in janurary:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 31):
		if (calendar.weekday(y,1,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in february:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 28):
		if (calendar.weekday(y,2,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in february that might leap:
numberOfSundays = 0
for y in range(1901, 2001):
	if ( calendar.isleap(y) ):
		if (calendar.weekday(y,2,29) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in march:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 31):
		if (calendar.weekday(y,3,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in may:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 31):
		if (calendar.weekday(y,5,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in july:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 31):
		if (calendar.weekday(y,7,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in august:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 31):
		if (calendar.weekday(y,8,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in october:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 31):
		if (calendar.weekday(y,10,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in december:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 31):
		if (calendar.weekday(y,12,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays
# --------------------------------------------------------------------

# sundays in april:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 30):
		if (calendar.weekday(y,4,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in june:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 30):
		if (calendar.weekday(y,6,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in september:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 30):
		if (calendar.weekday(y,9,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays

# sundays in november:
numberOfSundays = 0
for y in range(1901, 2001):
	for i in range(1, 30):
		if (calendar.weekday(y,11,i) == 6):
			numberOfSundays += 1
totalNumberOfSundays += numberOfSundays





print("there were ", totalNumberOfSundays, " sundays in that.")

print("*********************************************************************************************")
