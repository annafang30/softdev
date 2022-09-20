# sleep in 
def sleep_in(weekday, vacation):
  return (not weekday or vacation)

# monkey trouble 
def monkey_trouble(a_smile, b_smile):
  return (a_smile and b_smile or not a_smile and not b_smile)

# sum double 
def sum_double(a, b):
  if a == b:
    return ((a+b)*2)
  else:
    return (a+b)
  
# diff21 
def diff21(n):
  if n <= 21:
    return (abs(21-n))
  else:
    return (abs(21-n)*2)

# parrot trouble 
def parrot_trouble(talking, hour):
  if (talking == True) and (hour < 7 or hour > 20):
    return True
  else:
    return False

#makes 10
def makes10(a, b):
  if (a == 10 or b == 10) or (a+b==10):
    return (True)
  else:
    return (False) 

# near hundred 
def near_hundred(n):
  return (abs(n-100)<=10) or (abs(n-200)<=10)

# pos neg 
def pos_neg(a, b, negative):
  if (negative == False):
    return (a < 1 and b> 0) or (b < 1 and a > 0)
  if negative ==True:
    return (a < 1 and b < 1)

# not string
def not_string(str):
  if len(str) >= 3:
    if(str[0:4] == "not "):
      return str
    else:
      return "not " + str
  return "not " + str

# missing char 
def missing_char(str, n):
  return str[0:n] + str[n+1:len(str)]

# front back 
def front_back(str):
  if(len(str) > 1): 
    return str[len(str)-1] + str[1:len(str)-1] + str[0]
  else: 
    return str

# front3
def front3(str):
  if len(str) > 2:
    return 3 * str[0:3]
  else:
    return str * 3

