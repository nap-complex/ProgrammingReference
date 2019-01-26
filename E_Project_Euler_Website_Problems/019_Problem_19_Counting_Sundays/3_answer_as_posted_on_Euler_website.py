#! /usr/bin/env python3
import calendar

numberOfSundays = 0

for year in range(1901, 2001):
	for month in range(1, 13):
		if (calendar.weekday(year,month,1) == 6):  # 6 = Sunday in python
			numberOfSundays += 1

print("numberOfSundays => ", numberOfSundays)


