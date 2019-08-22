#! /usr/bin/env python3

from PIL import Image

# ----------------------------------------------------------------------------------

def makeLine():
	print("");
	print("");
	print("********************************************************************************************8");
	print("");
	print("");

# ----------------------------------------------------------------------------------

def main():
	makeLine()

	# PIL accesses images in Cartesian co-oridantes, so it is Image[columns, rows]
	img = Image.new( 'RGB', (250, 250), "black" )  # create a new black image
	pixels = img.load()  # create the pixel map

	for i in range(img.size[0]):  # for every col:
		for j in range(img.size[1]):  # for every row:
			pixels[i,j] = (i, j, 100)   # set the colour accordingly

	for ct1 in range(100, 150):
		for ct2 in range(100, 150):
			pixels[ct1, ct2] = (20, 20, 20)

	img.show()
	
	makeLine()

# ----------------------------------------------------------------------------------

main()
