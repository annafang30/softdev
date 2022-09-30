'''
DISCO:

QCC:

OPS SUMMARY:
'''

file = open('krewes.txt')
contents = file.read()
    


krewes = {}

def create_dict(str):
    strs = str.split('@@@')
    print(strs)
    strs = strs[:-1]
    
    for x in strs:
        values = x.split('$$$')
        key = int(values[0])
        name = values[1]
        ducky = values[2]
        
        krewes[key].append(name)
        krewes[key].append(ducky)
        

create_dict(contents)
print(krewes)
