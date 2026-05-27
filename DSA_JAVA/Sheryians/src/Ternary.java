import java.util.Scanner;

public class Ternary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks: ");
        int marks = sc.nextInt();
//        String result = marks>=35? "Pass" : "Fail";
//        System.out.println(result);

        // Nested ternary operator
        String grade = marks>90? "A+":
                       marks>80?"B+":
                       marks>70?"B":
                       marks>=35?"P":"F";
        System.out.println(grade);

        //Widening conversion or implicit casting
        byte a = 10;
        int b = a;

        float f1 = 1234.5f;
        double d1 = f1;
        System.out.println(d1);


        //Narrowing conversion or explicit casting
        double d = 12345.9;
        int number = (int) d;
        System.out.println(number);

        //type promotion
        byte n1 = 19;
        short n2 = 180;
        int n3 = 1234;
        int n4 = n1 + n2 + n3;


    }
}
