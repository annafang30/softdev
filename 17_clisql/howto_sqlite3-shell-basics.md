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
