#! /bin/sh

# This was taked directly from video at: https://www.oreilly.com/learning/how-can-i-find-duplicate-files-in-linux
# on or about Dec 19, 2018
#
# This script searches a directory for duplicate files by running an sha1 
# on every file then sorting by that number and comparing.  The duplicates
# found do not have the sha1 number in from of them in the output
#



find "$@" -type f -print0 |
	xargs --null sha1sum |
		sort |
			awk '
			{
				line = $0
				sum = $1  	# shal is key
				$1 = ""		# remove key, leave filename
				
				if (sum == prev)
					printf("\t\t\t\t\t %s\n", $0)
				else { 
					prev = sum
					print line
				}
			}'		
