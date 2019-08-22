# source of original code: https://en.wikibooks.org/wiki/Python_Imaging_Library/Editing_Pixels
#
# Aug 20, 2019  -  JLF
#
# goal: make the image creator code into a def to use in other programs

from PIL import Image





# PIL accesses images in Cartesian co-ordinates, so it is Image[columns, rows]
img = Image.new( 'RGB', (250, 250), "black")  #  create a new black image
pixels = img.load() # create the pixel map

for i in range(img.size[0]):
    for j in range(img.size[1]):
        pixels[i,j] = (i, j, 100) # set the color accordingly

img.show()
