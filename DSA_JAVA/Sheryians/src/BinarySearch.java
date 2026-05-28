public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        int index = searchTarget(arr, 7, 7);
        System.out.println(index);
    }

    public static int searchTarget(int[] arr, int n, int target) {

        int low = 0;
        int high = arr.length;

        while(low < high) {
            int mid = (low + (high-low)/2);
            System.out.println("Low is " + low);
            System.out.println("High is " + high);

            System.out.println("Mid is " + mid);

            if(arr[mid] == target) return mid;
            if(target > arr[mid]) low = mid+1;
            else high = mid-1;
        }
        return -1;
    }
}
