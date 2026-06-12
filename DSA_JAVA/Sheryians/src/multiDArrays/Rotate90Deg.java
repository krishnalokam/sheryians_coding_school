package multiDArrays;

public class Rotate90Deg {

    public static void main(String[] args) {
        int[][] matrix= new int[][]{{1,2,3},{4,5,6},{7,8,9}};
        displayMatrix(matrix);

        rotate(matrix);
        displayMatrix(matrix);
    }
    public static void rotate(int[][] matrix) {
        //Transpose of a square matrix

        for(int i = 0; i< matrix.length; i++){
            for(int j = 0; j< matrix[i].length; j++){
                if(i > j) {
                    int temp = matrix[i][j];
                    matrix[i][j] = matrix[j][i];
                    matrix[j][i] = temp;
                }

            }
        }
        System.out.println("after transpose");
        displayMatrix(matrix);
        for(int i = 0; i< matrix.length; i++){
            //Reverse the arr[i] array
            for(int p=0,q=matrix[i].length-1; p<q; p++,q--){
                int temp = matrix[i][p];
                matrix[i][p] = matrix[i][q];
                matrix[i][q] = temp;
            }
        }

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
