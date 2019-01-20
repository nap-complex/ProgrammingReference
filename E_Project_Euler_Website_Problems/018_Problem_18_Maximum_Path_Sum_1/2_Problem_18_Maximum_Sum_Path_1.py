#! /usr/bin/env python3

"""
Jan 17, 2019  -  JLF

Maximum path sum I
Problem 18

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

	75
	95 64
	17 47 82
	18 35 87 10
	20 04 82 47 65
	19 01 23 75 03 34
	88 02 77 73 07 63 67
	99 65 04 28 06 16 70 92
	41 41 26 56 83 40 80 70 33
	41 48 72 33 47 32 37 16 94 29
	53 71 44 65 25 43 91 52 97 51 14
	70 11 33 28 77 73 17 78 39 68 17 57
	91 71 52 38 17 14 91 43 58 50 27 29 48
	63 66 04 68 89 53 67 30 73 16 69 87 40 31
	04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

	NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
	

"""
# ----------------------------------------------------------------------------------------------------------

def makeLine():
	print("");
	print("");
	print("********************************************************************************************");
	print("");
	print("");

# ----------------------------------------------------------------------------------------------------------
def upperLimit(thing):
    """ 
    this function returns the value of the highest number in each row added together and the 
    lowest value in each row added together.  This is done to give us a bound of where the answer
    to the question will be 
    """
    
    upperLimit = 0
    lowerLimit = 0

    for i in range(len(thing)):
        UL = 0
        LL = 99 
        for x in range(len(thing[i])):
            if thing[i][x]>UL:
                UL=thing[i][x]
            if thing[i][x]<LL:
                LL=thing[i][x]
        upperLimit = upperLimit + UL
        lowerLimit = lowerLimit + LL
                
    return upperLimit, lowerLimit 

# ----------------------------------------------------------------------------------------------------------
def main():

    makeLine()
   
    listOfList = []

    # NOTE!
    # the number link to the line below by the index of the number and the index+1 of the number,
    # so those are the only ones you have to check on the path down
    # There are 14 steps from top to bottom, they can be left or right in any order
    # LLLLLLLLLLLLLL
    # LLLLLLLRRRRRRR - maybe that would be the appropriate one to use
    # RRRRRRRRRRRRRR
    # So, does that mean there are 2^14 paths? Yes, 16,384 of 'em
    # so, if you wanted to make a new language you could make 16384 words with just L's and R's
    # if each word was 16384 long... and many more if you used the shorter words too... I think you
    # should get a dictionary and try that

    # make lists out of data:
    list1 = [75]
    list2 = [95, 64]
    list3 = [17, 47, 82]
    list4 = [18, 35, 87, 10]
    list5 = [20, 4, 82, 47, 65]
    list6 = [19, 1, 23, 75, 3, 34]
    list7 = [88, 2, 77, 73, 7, 63, 67]
    list8 = [99, 65, 4, 28, 6, 16, 70, 92]
    list9 = [41, 41, 26, 56, 83, 40, 80, 70, 33]
    list10 = [41, 48, 72, 33, 47, 32, 37, 16, 94, 29]
    list11 = [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14]
    list12 = [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57]
    list13 = [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48]
    list14 = [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31]
    list15 = [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]

    # make a master list of those lists
    listOfList.append(list1)
    listOfList.append(list2)
    listOfList.append(list3)
    listOfList.append(list4)
    listOfList.append(list5)
    listOfList.append(list6)
    listOfList.append(list7)
    listOfList.append(list8)
    listOfList.append(list9)
    listOfList.append(list10)
    listOfList.append(list11)
    listOfList.append(list12)
    listOfList.append(list13)
    listOfList.append(list14)
    listOfList.append(list15)


    print(upperLimit(listOfList))

    for i in listOfList:
        print(i) 

    makeLine()
# ----------------------------------------------------------------------------------------------------------
main()
