#!/bin/bash
# 
#
# This script pushes the working website files to the centosserver, I hope
# Jan 4, 2019  -  JLF
#	

# =======================================================
clear
echo 
echo " 		We are updating the web server.  " 
echo "		Started at: $(date)"
# options:
#   -a means recusive plus other stuff
#   -n means dry run, don't really change anything
#   -v verbose, tell me what you are doing the whole time

#These are the actual commands that do the work.  Some comment out for now pendnig SSH no password set up

rsync -a --delete ssh website_folder/ root@centosserver:/var/www/html/

echo "done with updating web server"
echo "		Ended at  : $(date)"
echo
echo "		There, we're done.  Go on about your business."
echo "Back Up was run on: $(date)" >> TestLog
echo
echo
echo
echo
# =======================================================
