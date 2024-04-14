//https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article
class Solution {

    segregate0and1(arr,n){
        
        let i = 0;
        let j = 0;
        
        while(i<n){
            if(arr[i] == 0){
                //Swap
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                
                i++;
                j++;
            }else{
                i++;
            }
        }
        
    }
}