import java.util.Arrays;
import java.util.Scanner;

public class arrays {
    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
//        int n = sc.nextInt();
//        int[] arr = new int[n];
//        double sum = 0;
//
//        for(int i = 0; i<n; i++) {
//            arr[i] = sc.nextInt();
//            sum += arr[i];
//        }
//        double mean = sum/n;
//        System.out.println("Sum: "+sum);
//        System.out.printf("Mean: %.1f",mean);

        int[] arr = {1,2,3,4,5};
        updateArray(arr, 5);
        greet("Siva");
    }
    private static void greet(String name){
        System.out.println("Hello "+name);
    }
     public static void updateArray(int[] arr, int n) {
    //  input { 1,2,3,4,5}
         // output { 2, 3,8,15,20} which is result[i] = arr[i-1]* arr[i+1]

        if(n == 1) System.out.print(arr[0]);

    int result[] = new int[n];
    result[0] = arr[0] * arr[1];

        for(int i = 1; i<n-1; i++){
        result[i] = arr[i-1]* arr[i+1];
    }
    result[n-1] = arr[n-2]*arr[n-1];

        for(int i = 0; i< n ; i++ ) {
        System.out.print(result[i] + " ");
    }
     }
}
