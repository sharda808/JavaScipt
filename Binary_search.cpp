#include<iostream>
using namespace std;
int main(){
    int n,a[100],i,search;
    cout<<"enter size of an array is:";
    cin>>n;
    cout<<"enter eleemnt of an array is:";
    for(i=0; i<n; i++){
        cin>>a[i];
    }
    cout<<"enter element which want to search:";
    cin>>search;
    int st = 0;
    int end = n-1;
    int mid = (st+end)/2;
    while(st<=end && a[mid]!=search){
        if(a[mid]<search)
        st = mid +1;
        else
        end = mid -1;
mid = (st+end)/2;
    }
    if(a[mid]==search){
        cout<<"element found at location\n"<<mid+1;
    }
    else{
        cout<<"element is not found";
    }
return 0;
}