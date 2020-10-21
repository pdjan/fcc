'''
Complete the Category class in budget.py. It should be able to instantiate objects based on different budget categories like food, clothing,
and entertainment. When objects are created, they are passed in the name of the category. The class should have an instance variable called
ledger that is a list. The class should also contain the following methods:

A deposit method that accepts an amount and description. If no description is given, it should default to an empty string.
The method should append an object to the ledger list in the form of {"amount": amount, "description": description}.

A withdraw method that is similar to the deposit method, but the amount passed in should be stored in the ledger as a negative number.
If there are not enough funds, nothing should be added to the ledger. This method should return True if the withdrawal took place,
and False otherwise.

A get_balance method that returns the current balance of the budget category based on the deposits and withdrawals that have occurred.
A transfer method that accepts an amount and another budget category as arguments. The method should add a withdrawal with the amount
and the description "Transfer to [Destination Budget Category]". The method should then add a deposit to the other budget category
with the amount and the description "Transfer from [Source Budget Category]". If there are not enough funds, nothing should be added
to either ledgers. This method should return True if the transfer took place, and False otherwise.

A check_funds method that accepts an amount as an argument. It returns False if the amount is less than the balance of the budget
category and returns True otherwise. This method should be used by both the withdraw method and transfer method.
When the budget object is printed it should display:

A title line of 30 characters where the name of the category is centered in a line of * characters.
A list of the items in the ledger. Each line should show the description and amount. The first 23 characters of the description
should be displayed, then the amount. The amount should be right aligned, contain two decimal places, and display a maximum of 7 characters.
A line displaying the category total.
Here is an example of the output:

*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96

Besides the Category class, create a function (ouside of the class) called create_spend_chart that takes a list of categories as an argument.
It should return a string that is a bar chart.

The chart should show the percentage spent in each category passed in to the function. The percentage spent should be calculated
only with withdrawals and not with deposits. Down the left side of the chart should be labels 0 - 100. The "bars" in the bar chart
should be made out of the "o" character. The height of each bar should be rounded down to the nearest 10. The horizontal line below
the bars should go two spaces past the final bar. Each category name should be vertacally below the bar. There should be a title
at the top that says "Percentage spent by category".

This function will be tested with up to four categories.

Look at the example output below very closely and make sure the spacing of the output matches the example exactly.

Percentage spent by category
100|          
 90|          
 80|          
 70|          
 60| o        
 50| o        
 40| o        
 30| o        
 20| o  o     
 10| o  o  o  
  0| o  o  o  
    ----------
     F  C  A  
     o  l  u  
     o  o  t  
     d  t  o  
        h     
        i     
        n     
        g     

'''
class Category:
    
    def __init__(self, cname):
        self.category = cname
        self.ledger = []
        self.balance = 0
        
    def get_balance(self):
        return self.balance

    def check_funds(self, amount):
        if amount <= self.balance:
            return True
        else:
            return False
        
    def deposit(self, amount, description=""):
        obj = {"amount":amount, "description":description}
        self.ledger.append(obj)
        self.balance += amount
        
    def withdraw(self, amount, description=""):
        
        if self.check_funds(amount):
            obj = {"amount":-amount, "description":description}
            self.ledger.append(obj)
            self.balance -= amount
            return True
        else:
            return False   

    def transfer(self, amount, destination):
        if self.check_funds(amount):
            self.withdraw(amount, "Transfer to " + destination.category)
            destination.deposit(amount, "Transfer from " + self.category)
            return True
        else:
            return False
                
    def __str__(self):

        ch = len(self.category)
        side = (30 - ch) / 2
        header = int(side) * "*" + self.category + int(side) * "*" + "\n"
        output = header
        totalsum = 0

        for item in self.ledger:
            d = item["description"]
            if len(d) < 23:
                dout = d + " " * (23 - len(d))
            else:
                dout = d[0:23]
            a = str(format(float(item["amount"]), '.2f'))
            aout = a.rjust(7)
            output += (dout + aout + "\n")

            totalsum += item["amount"]
            
        output += "Total: " + str(format(float(totalsum), '.2f'))
        return output

        
ent = Category("Entertainment")
biz = Category("Business")
        
foo = Category("Food")
print(foo.category)
print(foo.ledger)

foo.deposit(300, "pivce")
print(foo.ledger)

ok = foo.transfer(10, ent)
print(ok)
print(foo.balance)
print(ent.balance)

ok = foo.transfer(1000, ent)
print(ok)
ok = ent.transfer(5, foo)
print(ok)
print(foo.balance)
print(ent.balance)
print(foo.ledger)

print(foo)

def create_spend_chart(categories):
    output = 'Percentage spent by category\n'
         
    totalspends = 0
    spendslist = [] # spends per cat
    spendsplist = [] # spends per cat in percentages rounded down
    names = []
    
    for cat in categories:
        # get total spend sum
        # get spend sum by category in percentages
        catspends = 0
        for l in cat.ledger: 
            if l["amount"] < 0:
                catspends += abs(l["amount"])
        totalspends += catspends
        spendslist.append(catspends)
        
        # add names
        names.append(cat.category)
    
    # calc spends in perc
    for i in spendslist:
        x = 100 * i / totalspends
        p = int(x/10)
        spendsplist.append(p)
            
    scale = 100
    line = "|"
    mark = "o"
    dash = "-"
    space = " "
        
    # print chart
    catdim = len(spendsplist)
    
    while (scale >= 0) :
        newrow = str(scale).rjust(3) + line + space

        for index in range(catdim):
            if int(scale / 10) <= spendsplist[index]:
                newrow += mark + (2 * space)
            else:
                newrow += (3 * space)
                
        output += newrow + "\n"
        scale -= 10
        
    # print dashes
    newrow = 4 * space + (3 * dash) * catdim + dash
    output += newrow + "\n"
    
    # print categories

    # max number of characters in category names
    m = 0
    
    for item in names:
        if len(item) > m:
            m = len(item)
        
    for j in range(m):
        newrow = 5 * space
        for name in names:
            try:
                newrow += name[j] + (2 * space)
            except:
                newrow += 3 * space
        output += newrow + "\n"
    output = output[:-1]
    
    return output
    
f = create_spend_chart([foo, ent, biz])
print(f)
