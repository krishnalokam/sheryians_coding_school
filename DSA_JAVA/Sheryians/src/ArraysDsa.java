import java.util.Arrays;

public class ArraysDsa {
    public static void main(String[] args) {
        int[] arr = {0,0,0,-1};
        int n = arr.length;

        for(int i = 0; i< n; i++ ){

            if(arr[i]>=0) {
                //search for next negative number, starting from i+1
                int j = i+1;

                while(j < n){
                    if(arr[j]<0) {
                        rotate_right_once(arr,i, j);
                        break;
                    }
                    j++;
                }
                if(j == n) break;



            }

        }
Arrays.toString(arr);
    }
    private static void rotate_right_once(int[] arr, int start, int end){

        int temp = arr[end];

        for(int i = end ; i >= start+1; i--) {
            arr[i] = arr[i-1];
        }

        arr[start] = temp;


    }
}
