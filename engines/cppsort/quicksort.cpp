#include<iostream>
#include<vector>

using namespace std;
vector <unsigned long long int> arr;
void print_vector(){
    for(unsigned long long int x=0;x<arr.size();x++){
        cout<<"\t"<<arr[x];
    }
}
void swapp(unsigned long long int l, unsigned long long int t)
{
    unsigned long long int temp=arr[l];
    arr[l]=arr[t];
    arr[t]=temp;
}
int partition_array(unsigned long long int left,unsigned long long int right,unsigned long long int pivot)
{
    while(!(left==right && right==pivot && left==pivot))
    {
        while(arr[right]>=arr[pivot] && left<right)
        {
            right--;
        }
        swapp(right,pivot);
        pivot=right;
        while(arr[left]<=arr[pivot] && right>left)
        {
            left++;
        }
        swapp(left,pivot);
        pivot=left;
    }
    return pivot;
}
void quicksort(unsigned long long int  left,unsigned long long int  right,unsigned long long int  pivot)
{
    if(left>=right)
        return;
    unsigned long long int  index=partition_array(left,right,pivot);
    quicksort(left,index-1,left);
    quicksort(index+1,right,index+1);
}

// Array Size is s
// Array is ele

int main()
{
    unsigned long long int s;
    cout<<"\n\t\t\tQuickSort\n\t\t\t~~~~~"<<"\n|| Enter the size of the array: ";
    cin>>s;
    cout<<"\n Enter the array:\n";
    unsigned long long int ele;
    for(unsigned long long int  i=0; i<s; i++)
    {
        cout<<"\t";
        cin>>ele;
        arr.push_back(ele);
    }
    quicksort(0,s-1,0);
    cout<<"\n Sorted Array is:\n";
    print_vector();
    return 0;
}