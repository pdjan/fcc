def arithmetic_arranger(lst, *args):

    arranged_problems = ''

    fo_list = [] # first operand list 
    so_list = [] # second operand list
    op_list = [] # list of operators
    res_list = [] # list of results
    hypes = []
    
    if len(lst) > 5:
        arranged_problems = "Error: Too many problems."
        print(arranged_problems)
        return arranged_problems
        

    for i in lst:

        
        foindex = i.find(' ')
        first_operand = i[:foindex] # string
        second_operand = i[foindex + 3 : ] # string
        op = i[foindex + 1 : foindex + 2] # string     

        if (op not in '+-') :
            arranged_problems = "Error: Operator must be '+' or '-'."
            print(arranged_problems)
            return arranged_problems

        

        if len(first_operand) > 4 or len(second_operand) > 4:
            arranged_problems = "Error: Numbers cannot be more than four digits."
            print(arranged_problems)
            return arranged_problems

        

        if first_operand.isnumeric() and second_operand.isnumeric():

            

            if op == '+':
                res = int(first_operand) + int(second_operand)
                res_list.append(res)
            else:
                res = int(first_operand) - int(second_operand)
                res_list.append(res)


          
            if len(first_operand) > len(second_operand):
                # add space chars
                diff = len(first_operand) - len(second_operand)
                # we need to insert diff space characters at the beginning of second operand string
                second_operand = (diff * ' ') + second_operand
                number_of_hypes = len(first_operand) + 2
                hypes.append(number_of_hypes)

            else:
                diff = len(second_operand) - len(first_operand)
                first_operand = (diff * ' ') + first_operand
                number_of_hypes = len(second_operand) + 2
                hypes.append(number_of_hypes)
                

            fo_list.append(first_operand) 
            so_list.append(second_operand)
            op_list.append(op)


        else:
            arranged_problems = "Error: Numbers must only contain digits."
            print(arranged_problems)
            return arranged_problems
                
    # calculations and print
    row1 = ''
    row2 = ''
    row3 = ''
    row4 = ''

    members = len(fo_list)
    

    for j in range(members - 1):
        spec = '{:>'+str(hypes[j])+'}'
        
        row1 += '  ' + fo_list[j] + '    '
        row2 += op_list[j] + ' ' + so_list[j] + '    '
        row3 += '-' * hypes[j] + '    '
        for arg in args:
            if (args):
                row4 = row4 + spec.format(res_list[j]) + '    ' 


    row1 = row1 + '  ' + fo_list[-1]
    row2 = row2 + op_list[-1] + ' ' + so_list[-1]
    row3 = row3 + '-' * hypes[-1]

    arranged_problems = row1.rstrip() + '\n' + row2.rstrip() + '\n' + row3.rstrip()
    
    for arg in args:
        if (args):
            spec = '{:>'+str(hypes[-1])+'}'
            row4 = row4 + spec.format(res_list[-1])

            arranged_problems = arranged_problems + '\n' + row4.rstrip()

    print(arranged_problems)
    
    return arranged_problems

# tests
# arithmetic_arranger(["44 + 815", "909 - 2", "45 + 43", "123 + 49", "888 + 40", "653 + 87"])
# arithmetic_arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"])    
# arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
# arithmetic_arranger(["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"])
# arithmetic_arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"])
# arithmetic_arranger(["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"])
# arithmetic_arranger(["32 - 698", "1 - 3801", "45 + 43", "123 + 49"], True)
