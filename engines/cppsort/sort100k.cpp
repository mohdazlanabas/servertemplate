#include <stdio.h>
#include <time.h>
#include <iostream>
#include <stdlib.h>

int main(){
	
    unsigned long long int base = 100000;
    unsigned long long int size = base * 1;
	time_t t;
	unsigned long long int i,j;
	unsigned long long int array[size];
	
	srand((unsigned) time(&t));

	for(i=0;i<size;i++){
		array[i]=(rand() %60);
        // printf("%d ",array[i]);
	}

    printf("\nRANDOM ARRAY CREATED\n");
    
	unsigned long long int k,l,temp;
	for(k=1;k<size;k++){
		for(l=0;l<size-1;l++){
			if(array[k]<array[l]){
				temp=array[l];
				array[l]=array[k];
				array[k]=temp;
			}
		}
	}

    int n;
	for(n=0;n<1;n++){
	printf("\nSORTING COMPLETED\n");

/*
    int m;
	for(m=0;m<size;m++){
	printf("%d ",array[m]);
*/
	}
	return 0;
}