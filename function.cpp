#include<iostream>
#include<string>
#include<vector>
#include<unordered_map>
using namespace std;
void majorityElement(vector<int>nums){
    unordered_map<int ,int>m;
    for(int i=0; i<nums.size(); i++){
        if(m.count(nums[i])){
     m[nums[i]]++;       
        }
        else{
            m[nums[i]] = 1;
        }
    }
    for(pair<int, int>p:m){
    if(p.second>nums.size()/3){
        cout<<p.first<<" ";
    }
    }
    cout<<endl;
}
int main(){
    vector<int>nums = {2,0,0,0,4,2,2};
    vector<int>nums2={1,2};
    majorityElement(nums);
    majorityElement(nums2);
    return 0;
}