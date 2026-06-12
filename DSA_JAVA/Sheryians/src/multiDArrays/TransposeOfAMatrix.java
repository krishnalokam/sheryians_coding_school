package multiDArrays;

public class TransposeOfAMatrix {
    public static void main(String[] args) {
        int[][] arr = new int[][]{{1,2,3},{4,5,6},{7,8,9}};
        int rows = arr.length;
        int cols = arr[0].length;
        int[][] result = new int[cols][rows];
        for(int i = 0; i< arr.length; i++){
            for(int j = 0; j< arr[i].length; j++){
                result[j][i] = arr[i][j];
            }
        }
        displayMatrix(arr);
        System.out.println();
        displayMatrix(result);
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
