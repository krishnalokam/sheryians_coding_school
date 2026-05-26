public class DataTypes {
    public static void main(String[] args) {
        byte age = (byte)129;
        System.out.println(age);

        // Unicode characters
        for(int i = 0; i<= 65535; i++){
            System.out.print((char) i + " " );
            if(i%20==0){
                System.out.println();
            }
        }
        System.out.println();
        int a = 'A';
        System.out.println(a);
        char c = 97;
        System.out.println(c);

    }
}
