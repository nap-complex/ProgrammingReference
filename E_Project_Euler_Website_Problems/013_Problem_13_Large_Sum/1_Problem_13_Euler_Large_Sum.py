#! /usr/bin/env python3

"""
Jan 14, 2019  -  JLF

Large sum

Problem 13

Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
( see data file for numbers )
"""

answer = 0;

dataFile = open('data', 'r')

totalLines = 0;

for lines in dataFile:
	answer = answer + int(lines)
	totalLines = totalLines + 1;

print("-----------------------------------------------------------------------------")
print("here is the answer from the python program:")

numString = str(answer)

print('The question was "what are the first ten digits," so ==>  ', end='')

cnt = 0
while ( cnt < 10 ):
	print(numString[cnt], end='')
	cnt = cnt + 1

print("")
		
dataFile.close()

print("-----------------------------------------------------------------------------")
