#! /usr/bin/env python

qbfile = open("Small_Text_File.txt", "r")

for aline in qbfile:
	# values = aline.split()
	values = aline.split("  ")
	print('QB ', values[0], values[1], ' that was some values.')

qbfile.close()

