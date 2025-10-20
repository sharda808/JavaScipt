#include<iostream>
using namespace std;
bool isAlhpaNum(char ch){
    if((ch>='0' && ch<='9') || (tolower(ch)>='a' && tolower(ch)<='z')){
        return true;
    }
    return false;
    }
    bool ispalindrome(string s){
        int st=0,end=s.length()-1;
        while(st<end){
            if(!isAlhpaNum(s[st])){
            st++;
            continue;
            }
     if(!isAlhpaNum(s[end])){
        end--;
        continue;
       }
        
    
        if(tolower(s[st])!=tolower(s[end])){
            return false;
        }
    
        return true;
    }
     } 
           
     
int main(){
  cout<<ispalindrome("Ace3ca");
  return 0;
}