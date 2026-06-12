package multiDArrays;

public class FlipAndInvert {
    public static void main(String[] args) {
        int[][] arr = new int[][]{{1,0,0},{0,1,0},{0,0,1}};
        displayMatrix(arr);
        System.out.println();
        for(int i = 0; i< arr.length; i++){
            //Reverse the arr[i] array
            for(int p=0,q=arr[i].length-1; p<q; p++,q--){
                int temp = arr[i][p];
                arr[i][p] = arr[i][q];
                arr[i][q] = temp;
            }
        }
        System.out.println("Flipeed matrix");
        displayMatrix(arr);
        System.out.println();
        //Invert the array, means, replace 0 with 1 and vice versa
        for(int i = 0; i< arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                arr[i][j] = arr[i][j]==0?1:0;
            }
        }

        System.out.println("Flipeed and inverted matrix");
        displayMatrix(arr);
        System.out.println();
    }
    public static void displayMatrix(int[][] arr){
        for(int i = 0; i< arr.length; i++){
            for(int j = 0; j< arr[i].length; j++){
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }
    }
}
