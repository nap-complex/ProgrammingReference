#!/usr/bin/env python3

print("\n\n***************************************\n\n")

print("something is about to happen:")

file1 = open('testfile.txt', 'a')
file1.write("this should be a line in the file\n")
file1.close()

# the 'a' is append, opens file in append mode.  text file

file2 = open('test.txt', 'r')
lines = file2.readlines()
file2.close()

for line in lines:
	line = line.strip()
	print(line)

print("\n\n***************************************\n\n")
