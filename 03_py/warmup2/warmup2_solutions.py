# string times 
def string_times(str, n):
  return n * str

# front times
def front_times(str, n):
  if len(str) > 2:
    return n * str[0:3]
  else:
    return n * str


