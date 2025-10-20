#include<iostream>
#include<string.h>
using namespace std;
string removeOccurrence(string s, string part){
    while(s.length()>0 && s.find(part)<s.length()){
        s.erase(s.find(part),part.length());
    }
    return s;
    }

int main(){
    cout<<removeOccurrence("cabcabcde", "abc");
return 0;
}