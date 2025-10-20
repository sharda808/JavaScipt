#include<iostream>
#include<vector>
#include<unordered_set>
#include<unordered_map>
using namespace std;
void Union(vector<int>arr1,vector<int>arr2){
    unordered_set<int>s;
for(int el:arr1){
    s.insert(el);
}
for(int el:arr2){
    s.insert(el);
}
for(int el:s){
    cout<<el<<" ";
}
cout<<endl;
}
void Intersection(vector<int>arr1,vector<int>arr2){
    unordered_set<int>s;
    for(int el:arr1){
        s.insert(el);
    }
    for(int el:arr2){
        if(s.find(el)!= s.end()){
            cout<<el<<" ";
            s.erase(el);
        }
    }
    cout<<endl;
}
void MajorityElement(vector<int>nums){
unordered_map<int,int>m;//elment,freq>
for(int i=0; i<nums.size(); i++){
    if(m.count(nums[i])){
        m[nums[i]]++;
    }
else{
m[nums[i]] = 1;
}
}
for(pair<int,int>p:m){
    if(p.second>nums.size()/3){
        cout<<p.first<<" ";
    }
}
cout<<endl;
}
int main(){
    vector<int>arr1 = {1,2,3};
    vector<int>arr2 = {5,0,3,8};
    vector<int>nums = {1,3,2,5,1,3,5,1};
    vector<int>nums2={1,2};
    cout<<"union is:";
    Union(arr1,arr2);
    cout<<"intersection is:";
    Intersection(arr1,arr2);
    MajorityElement(nums);
    MajorityElement(nums2);
    return 0;
}