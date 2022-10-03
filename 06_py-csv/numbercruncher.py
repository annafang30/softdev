'''
Team AA: Anna Fang, Aden Garbutt
SoftDev
06_py-csv
2022-10-03
time spent: 1.5 hours

DISCO:
- rsplice splices from the right - and you can choose how many times you want to splice the string
- random.choice allows for weighing of results

QCC:
- is there a better way to splicing (while accounting for commas that may be within () or "" without using rsplice?

HOW THIS SCRIPT WORKS:
-  read in the csv file (using newLine) and splice using rsplice to return occupations and stats in a list 
    * keys = occupations
    * vals = percentages
- spliced strings are added to dictionary (occupationDict)
    * percentages are typecasted to floats
- lists for all keys and percentages are made and used to generate a random weighted result by using random.choices
'''
import random
randomOcList = []
randomPercents = []

import csv
file = open('occupations.csv')
contents = file.readlines()

# create the dictionary 
occupationDict = {}

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