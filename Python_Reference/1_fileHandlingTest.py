#!/usr/bin/env python

print("")
print("")
print("***************************************")
print("")
print("")

print("something is about to happen:")

file1 = open('testfile.txt', 'a')
file1.write("this should be a line in the file\n")
file1.close()

# the 'a' is append, opens file in append mode.  text file

print("")
print("")
print("***************************************")
print("")
print("")
