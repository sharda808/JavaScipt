#include<iostream>
#include<vector>
#include<unordered_set>
using namespace std;
// void Union(vector<int>arr1,vector<int>arr2){
//     unordered_set<int>s;
//     for(int el:arr1){
//         s.insert(el);
//     }
//     for(int el:arr2){
//         s.insert(el);
//     }
//     for(int el:s){
//         cout<<el<<" ";
//     }
//     cout<<endl;
// }
// void Intersection(vector<int>arr1,vector<int>arr2){
//     unordered_set<int>s;
//     for(int el:arr1){
//         s.insert(el);
//     }
//     for(int el:arr2){
//         if(s.find(el)!=s.end()){
//             cout<<el<<" ";
//             s.erase(el);
//         }
//     }
//     cout<<endl;
// }
// int main(){
//     vector<int>arr1 = {7,3,9};
//     vector<int>arr2 = {6,3,9,2,9,4,7};
//     cout<<"union:";
//     Union(arr1,arr2);
//     cout<<"intersection is:";
//     Intersection(arr1,arr2);
//     return 0;
int main(){
    unordered_set<int>s;
    s.insert(2);
    s.insert(5);
    s.insert(6);
    cout<<s.size()<<endl;
if(s.find(5)!=s.end()){
    cout<<"5 exist\n";
}
else{
    cout<<"5 doest exit\n";
}
}