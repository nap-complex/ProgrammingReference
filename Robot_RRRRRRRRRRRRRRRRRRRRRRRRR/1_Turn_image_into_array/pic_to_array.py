from PIL import Image

image = Image.open("p1.png")
pixels = image.load()

out_file = open("output_file.bin", "wb")

for y in range(75):
    for x in range(100):
        out_file.write(chr(pixels[x,y]))

