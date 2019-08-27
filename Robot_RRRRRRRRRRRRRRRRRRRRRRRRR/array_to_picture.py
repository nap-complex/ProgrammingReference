#!/usr/bin/env python3
#
#    Aug 23, 2019  -  JLF
#
#    stolen directly from: https://www.youtube.com/watch?v=81sDM2HoGOs
#    => "Coordinates to IMAGE & Back w/PYTHON PIL by John Hammond Published on Dec 29, 2019 youTube"
#
#    This program should take an array and turn it into a picture.
#


from PIL import Image

coords = []
max_x = max_y = 0

with open('coords.txt') as handle:
    for line in handle.readlines():
        x, y, color = line.strip().split()
        x = int(x[1:-1])
        y = int(y[:-1])

        r = int(color[1:3],16)
        g = int(color[3:5],16)
        b = int(color[5:7],16)

        coords.append( [x, y, r, g, b] )

        max_x = max([x, max_x])
        max_y = max([y, max_y])

w = max_x + 1
h = max_y + 1
size = w, h

img = Image.new('RGB', size)

data = img.load()

for coord in coords:
    x, y, r, g, b = coord
    data[x,y] = (r, g, b)

img.show()
img.save('recreated.png')
