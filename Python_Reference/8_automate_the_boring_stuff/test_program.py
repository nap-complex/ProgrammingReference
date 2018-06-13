#! /usr/bin/env python3

def whatThe():
	print("\n")
	print("-----------------------------------------------------------")
	print("in the def 'whatThe'")
	print("-----------------------------------------------------------")


print("\n\n*************** START PROGRAM *******************")
print("*************************************************\n\n")

print("Did something happen?")

name = "Alice"

print("name = " + name)

if name == 'Alice':
	print("Hi, Alice!")
else:
	print("Not that person")


if name == 'Bob':
	print("Hi, Alice!")
else:
	print("Not that person")

name = 'oooh'

if name == 'ooo':
	print("Hi, Alice!")
elif name == 'oooh':
	print("that was 'oooh'")

whatThe()

print("\n\n-------------------------------------------------\n\n")

for x in name:
	print(x)

print("\n\n-------------------------------------------------\n\n")

print("\n\n*************************************************\n\n")
