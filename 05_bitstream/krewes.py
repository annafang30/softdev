'''
DISCO:
- how to check keys in a dictionary
- how to read in and split a string based on a given element

QCC:

OPS SUMMARY:
- read the file (krewes.txt) and insert the data into a method (create_dict)
- split the info and get all of the keys
    * only add the unique keys into a list
    * add all unique keys to the dictionary
- split the info to find names and duckies
    * append these into the dictionary and print !
'''

file = open('krewes.txt')
contents = file.read()
    


krewes = {}

def create_dict(str):
    strs = str.split('@@@')
    strs = strs[:-1]
    keyList = []
    for x in strs:
        values = x.split('$$$')
        key = int(values[0])
        if(key not in keyList):
            keyList.append(key)            
    for x in keyList:
        krewes[x] = []
    for x in strs:
        values = x.split('$$$')
        key = int(values[0])
        name = values[1]
        ducky = values[2]
        krewes[key].append([name, ducky])
    
create_dict(contents) 
print(krewes)
