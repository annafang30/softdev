'''
DISCO:

QCC:

HOW THIS SCRIPT WORKS:
-  read in the csv file (using newLine, etc) and splice to return occupations and stats
    * keys = occupations
    * vals = percentages 
'''
# write a python script that reads the file and builds an appropriate dictionary from it. The percentages should be stored as numbers. Create a function that returns a randomly selected occuptation according to the given percentages. 

# import the csv file and read 
import csv
file = open('occupations.csv')
contents = file.read()
print(contents) 