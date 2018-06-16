#! /usr/bin/env python3

def while_loop_thing():

	print("\n***** Beginning of while_loop_thing() *****\n")

	spam = 0
	while spam < 5:
		print(str(spam) + " is this line")
		spam += 1

	print("\n***** Beginning of while_loop_thing() *****\n")

def for_loop_thing():

	print("\n***** Beginning of for_loop_thing() *****\n")
	
	name = "Indicator"

	for x in name:
		print(x)

	print("\n***** End of for_loop_thing() *****\n")

def if_then_else_elif():

	print("\n***** Begining of if_then_else_elif() *****\n")

	name = "Alice"

	print("name = " + name)

	if name == 'Alice':
		print("Hi, Alice!")
	else:
		print("Not that person")

	# how do you comment in this?
	if name == 'Bob':
		print("Hi, Alice!")
	else:
		print("Not that person")

	name = 'oooh'

	if name == 'ooo':
		print("Hi, Alice!")
	elif name == 'oooh':
		print("that was 'oooh'")

	print()

	for x in range(10):
		if x == 5:
			print(str(x) + " is my favorite number")
		elif ( x % 2 == 0 ):
			print(str(x) + " is an even number")
		else:
			print(str(x) + " is an odd number")

	print("\n***** End of if_then_else_elif() *****\n")

# -------------------------------------------------------------------------------------------------

for i in range(20):
	print()

print("\n\n*************** START PROGRAM *******************")
print("*************************************************\n\n")

# if_then_else_elif()
	
# for_loop_thing()

while_loop_thing()

print("\n\n*************************************************\n\n")
