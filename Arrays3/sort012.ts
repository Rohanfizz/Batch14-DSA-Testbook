//https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article
class Solution {
    
    sort012(arr, N){
        //your code here
        let i = 0;
        let j = 0;
        let k = N-1;
        
        while(i<=k){
            if(arr[i] == 0){
                //Swap i and j
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                
                i++;
                j++;
            }else if(arr[i] == 1){
                i++;
            }else if(arr[i]==2){
                //Swap i and k
                let temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
                
                k--;
            }
        }
    }
}