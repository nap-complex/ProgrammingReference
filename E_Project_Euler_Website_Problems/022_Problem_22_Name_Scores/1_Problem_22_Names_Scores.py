#! /usr/bin/env python3

"""
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

#dataFile = open('data.txt', 'r')
dataFile = open('temp.txt', 'r')

howManyWords = 0
wordSum = 0
totalMath = 0

for lines in dataFile:
	howManyWords += 1
	print(lines)
	print(len(lines))
	for c in range(len(lines)-1):
		wordSum += ord(lines[c]) - 64
		print(lines[c])
	totalMath += ( wordSum * howManyWords )
	print(".")

print("howManyWords => ", howManyWords)
print("totalMath => ", totalMath)

word1 = 'A'
word2 = 'Z'

print("ord(a) => ", ord(word1), " - 64 => ", ord(word1)-64)
print("ord(z) => ", ord(word2), " - 64 => ", ord(word2)-64)

s1 = 'AARON'
sumThing = 0

print("len(s1) => ", len(s1))
for i in range(len(s1)):
	print(s1[i], " - ", ord(s1[i])-64)
	sumThing = sumThing + ( ord(s1[i]) - 64 )
print("sumThing => ", sumThing)

s1 = 'ABBY'
sumThing = 0

print("len(s1) => ", len(s1))
for i in range(len(s1)):
	print(s1[i], " - ", ord(s1[i])-64)
	sumThing = sumThing + ( ord(s1[i]) - 64 )
print("sumThing => ", sumThing)

s1 = 'ABE'
sumThing = 0

print("len(s1) => ", len(s1))
for i in range(len(s1)):
	print(s1[i], " - ", ord(s1[i])-64)
	sumThing = sumThing + ( ord(s1[i]) - 64 )
print("sumThing => ", sumThing)

print("And the answer is => ", totalMath)












dataFile.close()


print("***************************************************************************************************")


