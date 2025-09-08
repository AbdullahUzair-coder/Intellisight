#string assignment
data = 'helo world'
print(data[0])
print(data)
print(len(data))

#number assignment  
data1 = 122.3
print(data1)
data1= 33
print(data1)

#flow control
value = 444
if value == 99:
    print("the value is 99")
elif value > 99:
    print("value is grater than 99")
    
#for loop
for i in range(20):
    print(i)
    

#while loop 
j = 0
while j < 10:
    print(j)
    j+=1
    
#data structure tupples
a = (1,2,3)
print(a)

# list example
my_list = [0, 1, 2]
print(my_list[0])

my_list.append(3)
for value in my_list :
     print(value)
     
#dictionary

my_dict = {'a':5, 'b':6}
print(my_dict.keys())
print(my_dict.values())


#function 

def sum(x,y):
    return x+y
result = sum(5,9)
print(result)



















