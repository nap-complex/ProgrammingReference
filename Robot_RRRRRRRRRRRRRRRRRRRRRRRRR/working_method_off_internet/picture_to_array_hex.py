#!/usr/bin/env python3
#
#    Aug 23, 2019  -  JLF
#
#    stolen directly from: https://www.youtube.com/watch?v=81sDM2HoGOs
#    => "Coordinates to IMAGE & Back w/PYTHON PIL by John Hammond Published on Dec 29, 2019 youTube"
#
#    This program should convert a image file to an array as ( x, y, color(hex) ) , and then take
#    an array and turn it into a picture.
#
#    Here's hoping.  or hopping.  Maybe both.
#
#


from PIL import Image

#img = Image.open('03.png')
img = Image.open('f10.png')


size = w, h = img.size

data = img.load()

pieces = []
for x in range(w):
    for y in range(h):
        hex_color = '#' + \
        ''.join([   hex(it)[2:].zfill(2).upper() for it in data[x, y]   ])
        pieces.append((x, y, hex_color))

# print(pieces)

# s = len(pieces)

print("s => ", len(pieces))


#with open('coords2.txt', 'w') as handle:
with open('coords.txt', 'w') as handle:
    for piece in pieces:
        handle.write(str(piece).replace("'", '')+'\n')




