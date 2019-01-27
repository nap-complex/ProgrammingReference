#! /usr/bin/env python3

"""

##############################################
this didn't work, and I'm not sure whey
we got the correct answer from the C++ program 
that is in the same folder as this one.  If you 
get bored later try fixing this
##############################################

Jan 26, 2019  -  JLF

Names scores
Problem 22

Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over 
five-thousand first names, begin by sorting it into alphabetical order. Then working out the 
alphabetical value for each name, multiply this value by its alphabetical position in the 
list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is 
worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a 
score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
"""




print("***************************************************************************************************")

dataFile = open('temp.txt', 'r')
#dataFile = open('data.txt', 'r')

howManyWords = 0
wordSum = 0
totalMath = 0

for lines in dataFile:

	howManyWords += 1
	print(lines, end="")

	for c in range(len(lines)-1):
		wordSum += ( ord(lines[c]) - 64 )
		print("[", (ord(lines[c])-64), "]", end='')
		
	totalMath = totalMath + ( wordSum * howManyWords )
	print(" WS[", wordSum, "] HM[", howManyWords, "] WS*N[", wordSum*howManyWords, "]")
	wordSum = 0

print("")
print("")
print("")
print("And the answer is => ", totalMath)












dataFile.close()


print("***************************************************************************************************")


