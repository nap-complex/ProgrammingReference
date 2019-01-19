#! /usr/bin/env python3

"""
Jan 17, 2019    JLF  ( this one is really stupid, not really programming, I think )

Number letter counts
Problem 17

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then 
there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in 
words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and fortytwo) 
contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use 
of "and" when writing out numbers is in compliance with British usage.

'----------------------------

note: the words are in the file 'data'

we did a fair amount of cheating here. It took a while to figure out that this 
code seems to be counting the eol character as a letter.  What we did was strip the
data to bare bones and put it in a text file called 'data,' then opened that in 
libreoffice writer and just read off the character count.  The python code was exactly 
1000 characters more than the libreoffice writer code.  So, we just stuck a -1 in 
this code to make it work.
"""
# ----------------------------------------------------------------------------------------------------

def makeLine():
	print("");
	print("");
	print("********************************************************************************************");
	print("");
	print("");


# ----------------------------------------------------------------------------------------------------
def main():
	makeLine()

	letterCount = 0
	temp1 = 0

	dataFile = open('data', 'r')

	for lines in dataFile:
		temp1 = len(lines)
		letterCount = letterCount + ( temp1 - 1 )

	print("An answer from python:")
	print("letters in number words => ", letterCount)

	makeLine()

# ----------------------------------------------------------------------------------------------------
main()
# ----------------------------------------------------------------------------------------------------
# ----------------------------------------------------------------------------------------------------
