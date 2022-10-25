# how-to :: sqlite3-shell-basics
---
## Overview
sqlite3 allows us to store information in a collection of tables and allows us to compare, pull, and get data if we know information that corresponds with the data grouping.
  * For example, if we know information contained in Column1 of a table, we can get the corresponding (relational!) information in Column2.

Essentially: sqlite3 let's us store lots of data into one database, allowing us to better access and compare relational data!

### Estimated Time Cost: Depends on the project in question.

### Prerequisites:

- Something you should know beforehand...
- Something you will need installed beforehand...

# DISCO
- To get into the shell, we use the command "sqlite3" in the terminal
- "insert into [name] values ([NAME TEXT], [INTEGER])" allows us to add values to the table
  * allows us to create rows
- "select [COL#] from [TABLE NAME]" returns the specified columns
- "select [COL#] from [TABLE NAME] where [COL#] = [SPECIFIED]" allows us to return corresponding info
  * ex: return entry in col1 where entry in col2 = 5
- .quit takes you out of the shell
- .table lists all the tables you have created
- .header on/off turns on and off the col headings
  * gets rid of the col separator
- . commands don't need semicolons
- .mode transforms the format into the specified format
  * ex: csv = csv, html = html, etc
- .mode list is the default mode (reverts)
- .mode insert shows you the command you used to put the information into the table
- .mode line formats such that each column is written out on its own line
- .mode tab adds a space such that each column's values all start at the same lines


### Resources
* thing1
* thing2

---

Accurate as of (last update): 2022-10-24

#### Contributors:  
Sam Cowan, PD7  
Anna Fang, PD7  
Sadi Nirloy, Pd 7  
