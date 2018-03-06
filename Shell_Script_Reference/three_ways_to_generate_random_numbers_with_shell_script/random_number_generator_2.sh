#!/bin/bash

# random number generator off:
# https://blog.eduonix.com/shell-scripting/generating-random-numbers-in-linux-shell-scripting/
# this will work directly from the command line also:

# model: shuf -i MIN-MAX -n COUNT

# actual code:

shuf -i 0-100 -n 10

# same code but redirecting out put to file:
# shuf -i 0-100 -n 10 > random_numbers_2.txt
