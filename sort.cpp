#include<iostream>
#include<unordered_map>
#include<string>
#include<vector>
using namespace std;
int main(){
unordered_map<string, int>m;
m["china"] = 150;
m["India"] = 150;
m["US"] = 50;
m["nepal"] = 10;
cout<<m["India"]<<endl;
return 0;

}