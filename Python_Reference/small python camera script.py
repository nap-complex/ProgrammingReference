import picamera
import picamera.array

# create a camera
camera = picamera.PiCamera()

# create an array
output = picamera.array.PiRGBArray(camera)

# do the capture
camera.capture(output, 'rgb')

# now do whatever you want with 'output'
output.array[23,42]


