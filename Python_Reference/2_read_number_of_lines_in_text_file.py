#!/usr/bin/env python

with open("testfile.txt") as f: 
  print sum(1 for _ in f)

