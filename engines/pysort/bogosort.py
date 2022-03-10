import random
import timeit

# students: 5000000
# semesters # 60
# chapters per semester 10
# assigment every chapter 100
# Using Timsort

tic=timeit.default_timer()

population = 5000000*60*10*100
print("Total population of data to sort: ")
print(format(population, ',d'))

population_interim = 300000
target_multipler = 1000
multiplier = 10
number = population_interim * multiplier

array = list(range(1, number))
random.shuffle(array)
print('Numbers are shuffled')
toc1 = timeit.default_timer()
sorting_time1 = abs(tic - toc1)

print('Time to shuffle is: ' + str(sorting_time1))

array_sorted = sorted(array)

toc2 = timeit.default_timer()
sorting_time2 = abs(tic - toc2)

print('Sorting time to SORT total population in secs are: ' + str(sorting_time2))
print("Multipler is " + str(multiplier))