'''
Team AA: Anna Fang, Aden Garbutt
SoftDev
06_py-csv
2022-10-03
time spent:

DISCO:

QCC:

HOW THIS SCRIPT WORKS:
-  read in the csv file (using newLine, etc) and splice to return occupations and stats
    * keys = occupations
    * vals = percentages 
'''
import random
randomOcList = []
randomPercents = []

import csv
file = open('occupations.csv')
contents = file.readlines()

# create the dictionary 
occupationDict = {}

#get the total percentage
toReach = ((contents[len(contents)-1]).rsplit(',',1))[1]

#read in all the information 
def fillDict(inputs):
    line = 1 # ignore the first and last lines
    while line <= len(inputs)-2:
        currentLine = inputs[line]
        split = currentLine.rsplit(',',1)
        occupationDict[split[0]] = []
        randomOcList.append(split[0]) 
        occupationDict[split[0]].append(float(split[1]))
        randomPercents.append(float(split[1])) 
        line+=1
    # use random.choices to select based on weights 
    print(random.choices(randomOcList, randomPercents, k = 1))
    
fillDict(contents)