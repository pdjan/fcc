class Rectangle:
    
    def __init__(self, width, height):
        self.width = width
        self.height = height
        
    def __str__(self):
        return Rectangle.__name__ + "(width=" + str(self.width) + ", height=" + str(self.height) + ")" 
        
    def set_width(self, w):
        self.width = w
        
    def set_height(self, h):
        self.height = h
        
    def get_area(self):
        return (self.width * self.height)
    
    def get_perimeter(self):
        return (2 * self.width + 2 * self.height)
    
    def get_diagonal(self):
        return ((self.width ** 2 + self.height ** 2) ** .5)
    
    def get_picture(self):
        output = ""
        if (self.width > 50 or self.height > 50):
            output += "Too big for picture."
        else:
            for i in range(self.height):
                for i in range(self.width):
                    output += "*"
                output += "\n"
                
        return output
    
    def get_amount_inside(self, shape):
        a = self.get_area()
        b = shape.get_area()
        res = int(a / b)
        return res
    
    

class Square(Rectangle):
    
    def __init__(self, s):
        self.side = s
        Rectangle.__init__(self, s, s)

    def __str__(self):
        return "Square(side=" + str(self.side) + ")"

    def set_side(self, s):
        self.side = s
        Rectangle.__init__(self, s, s)

    def set_width(self, s):
        self.side = s 
    
    def set_height(self, s):
        self.side = s         
        
rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())
 
sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())
 
rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))

