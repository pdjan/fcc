def add_time(start, duration, *args):
    
    # get_weekday function
    
    def get_weekday(day, adddays):
        w = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        res = int((w.index(day.lower()) + adddays) % 7)
        return w[res].capitalize()
    
    # split start time
    
    s = start.split(' ')
    t = s[0].split(':')

    s_hour = int(t[0]) # start hour
    s_min = int(t[1]) # start minutes
    s_noon = s[1] # start period of day AM/PM
    
    def to24(h, m, n):
        if n == 'PM':
            if h == 12:
                return [h, m]
            else:
                return [h+12, m]
        else:
            if h == 12:
                return [0, m]
            else:
                return [h, m]
                
    
    def to12(h, m):
        return[12 if (h == 0 or h == 12) else h % 12, m, "PM" if (h >= 12) else "AM"]
        
    # split duration time
    
    d = duration.split(':') 
    d_hour = int(d[0]) # duration hours
    d_min = int(d[1]) # duration minutes
    
    # if weekday is given
    
    if args:
        s_weekday = args[0]
    else:
        s_weekday = "N"
    
    # make calcs
    # days2add - how many days to add
    # hours2add - how many hours to add
    # d_min - how many minutes to add
    
    days2add = int(d_hour / 24) # days to add
    hours2add = d_hour % 24 # hours to add
    
    time_start = to24(s_hour, s_min, s_noon)
    res_hours = time_start[0] + hours2add # result hours
    res_min = time_start[1] + d_min # result hours
    
    later = ""
    endM = ""

    if res_min > 59:
        res_min = res_min % 60
        res_hours += 1
        if res_hours > 23:
            days2add += 1
            endM = 'AM'
            if days2add == 1:
                later = " (next day)"
            elif days2add > 1:
                later = " (" + str((days2add)) + " days later)"
    else:                 
        if res_hours > 23:
            days2add += 1
            endM = 'AM'
            if days2add == 1:
                later = " (next day)"
            elif days2add > 1:
                later = " (" + str((days2add)) + " days later)"
    res_hours = res_hours % 24
    if res_hours == 0:
        res_hours = 12
            

    # if there is weekday present as argument
    if (s_weekday != "N"):
        res_weekday = ", " + get_weekday(s_weekday, days2add)
    else:
        res_weekday = ""
        
    end_time = to12(res_hours, res_min)
    # add zero char to minutes
    if end_time[1] < 10:
        end_min = '0' + str(end_time[1])
    else:
        end_min = end_time[1]

    if endM == "":
        endM = end_time[2]
        
    if days2add == 1:
        later = " (next day)"
        
    new_time = str(end_time[0]) + ":" + str(end_min) + " " + endM + res_weekday + later
   
    return new_time
