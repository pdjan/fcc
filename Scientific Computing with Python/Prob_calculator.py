import copy
import random

random.seed(95)

class Hat:
    
    def __init__(self, **kwargs):
        self.contents = []
        for key, value in kwargs.items():
            for i in range(value):
                self.contents.append(key)
                
    def __str__(self):
        output = str(self.contents)
        return output
    
    def draw(self, number_of_balls):
        if number_of_balls < len(self.contents):
            # draw can be performed
            res = list()
            while number_of_balls > 0:
                index = random.randint(0,len(self.contents)-1)
                ball = self.contents[index]
                res.append(ball)
                del self.contents[index]
                number_of_balls -= 1
            return res
        return self.contents

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    
    m = 0
    n = num_experiments

    # list of expected balls
    expected = []
    for key, value in expected_balls.items():
        for i in range(value):
            expected.append(key)

    while num_experiments > 0:
        
        myhat = copy.deepcopy(hat)
                            
        # make a selection
        balls_drawn = myhat.draw(num_balls_drawn)
        # check probability
        
        for item in expected:
            try:
                pos = balls_drawn.index(item)
                if pos >= 0:
                    del balls_drawn[pos]
                    check = True
            except:
                check = False
                break
                
        if check:
            m += 1
        
        num_experiments -= 1
        
    return m / n
    

hat1 = Hat(blue=3,red=2,green=6)

probability = experiment(hat=hat1, expected_balls={"blue":2,"green":1}, num_balls_drawn=5, num_experiments=10)
print(probability)

hat2 = Hat(yellow=5,red=1,green=3,blue=9,test=1)
probability = experiment(hat=hat2, expected_balls={"yellow":2,"blue":3,"test":1}, num_balls_drawn=20, num_experiments=100)
print(probability)
