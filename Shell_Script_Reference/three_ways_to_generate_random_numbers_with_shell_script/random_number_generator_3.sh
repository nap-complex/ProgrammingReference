#!/bin/bash

# something about octal dump (od)
# off of: https://blog.eduonix.com/shell-scripting/generating-random-numbers-in-linux-shell-scripting/
# I believe this is generating random byte's, so a number between 0 and 255

for i in `seq 5`
do
	od -An -N1 -i /dev/random
done

