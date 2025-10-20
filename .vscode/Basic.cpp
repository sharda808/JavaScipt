#include <iostream>
#include <vector>
using namespace std;
vector<int> TwoSum(vector<int> &nums, int target)
{
  vector<int> ans;
  int n = nums.size();
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      if (nums[i] + nums[j] == tar)
      {
        ans.push_back(i);
        ans.push_back(j);
        return ans;
      }
    }
  }
  return ans;
}
int main()
{
  vector<int> nums = {5, 2, 11, 7, 1, 3};
  int target = 7;
  vector<int> ans = Twosum(nums, target);
  cout << ans[0] << "," << ans[1] << endl;
  return 0;
}
