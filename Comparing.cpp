#include <iostream>
#include <string.h>
using namespace std;
int main()
{
    string largest;
    string s1 = "book";
    string s2 = "Bookrack";
    string s3 = "Bookkeeper";
    if ((s1 > s2) && (s1 > s3))
        largest = s1;
    else if ((s2 > s3) && (s2 > s1))
        largest = s2;
    else
        largest = s3;
    cout << "largest = " << largest;
    return 0;
}