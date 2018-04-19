#!/usr/bin/env python3
import os


# ----------------------------------------------------------------------------------


def makeLine():
	print("")
	print("------------------------------------------------------------------------------------")
	print("")

# ----------------------------------------------------------------------------------
# ----------------------------------------------------------------------------------
# ----------------------------------------------------------------------------------


def main():

	makeLine()
	
	print("This is the OS practice program.")

#	list1 = dir(os)
#	for i in list1:
#		print(i)

	print()
	print('The current working directory is:')
	print(os.getcwd())

	print()
	print('The files in this directory are: ')
	fileList = os.listdir()
	for i in fileList:
		print(i)

	makeLine()

	print(os.stat('forLoops.py'))
	
	makeLine()
	

	fileInfo = os.stat('forLoops.py')
	for i in fileInfo:
		print(i)

	print()
	print('something about os.ctermid()')
	print(os.ctermid())


	print()
	print('getpass.getuser() => ')
	print(getpass.getuser())
	makeLine()

# ----------------------------------------------------------------------------------

if __name__ == "__main__":
	main()	



# ----------------------------------------------------------------------------------

