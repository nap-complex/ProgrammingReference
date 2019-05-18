#! /usr/bin/env python3
from PIL import Image

def makeLine():
	print("")
	print("")
	print("******************************************************************")
	print("")
	print("")


def main():
	makeLine()

	im = Image.open("p1.png")

#	im.rotate(45).show()
	
	newPic = Image.new("RGB", (2000, 1000))

	print("getbands =>")
	print(im.getbands())

	print("extrema => ")
	print(im.getextrema())

	print("image size => ")
	print(im.size)

	makeLine()

main()
