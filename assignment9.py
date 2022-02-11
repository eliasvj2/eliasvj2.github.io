

#Part A:

myList = ['john', 3, True, "peter"]
myList2=[]
for i in range(1,len(myList)):
    myList2.append(myList[i])
print(myList2)
myList2.append("orange")
myList2.pop(3)
myList3 = myList2

#Part B:

print(myList.count('john'))#counts the number of times john appears in myList
x = "hello world, hello martha"
print(x.endswith('.'))#returns true if ends with a punctuation sign
print(x.find("world"))#find the first occurrence of a word

x = '@'.join(['hi','hello','bye'])
print(x)#join items in a list with a character

p = x.replace("hi", "apples")#replace hi with the word apples
print(p)

sentence = "welcome to the jungle"
r = sentence.split()#take each word in a string and make a list
print(r)

txt = "today is a sunny day \n world"
s = txt.splitlines()#take a string and each new line is a separate element in a list
print(s)

g = txt.startswith('today')#check if a string starts with 'today'
print(g)

r = '...oranges.....'
print(r.strip('.'))#get rid of extra space or character

#Part C:
def checkPrime(num):
    if(type(num)== type('as')):
        return 'enter a number'
    elif(type(num)==type(True)):
        return 'enter a number'
    elif(type(num)==type(['a','b'])):
        return 'enter a number'
    elif(type(num)==type(('a','b'))):
        return 'enter a number'
    elif(type(num)==type({'a':1})):
        return 'enter a number'
    elif(num%2==0):
        return 'False'
    else:
        for i in range(3,num):
            if(num%i==0):
                return 'False'
    return 'True'
print(checkPrime(99))
print('\n')

#Part D:
def disStuInfo(schoolID,*firstName,**lastEmail):
    counter=0
    length_first = len(firstName)
    for i,j in lastEmail.items():
        if(length_first > counter):
            print(schoolID)
            print(firstName[counter])
            print(i)
            print(j)
            print("\n")
            counter = counter+1
        else:
            print(schoolID)
            print('unmatched')
            print(i)
            print(j)
           
        


    
print(disStuInfo(10001,'John','Peter',Smith='jSmith@gmail.com',Potter='Petter@yahoo.com',JackLast='j@gmail.com'))
    




    

