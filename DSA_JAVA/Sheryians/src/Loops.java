import java.awt.*;
import java.util.Scanner;

public class Loops {
    public static void main(String[] args) {
//        for(int i = 1; i<= 5; i++) {
//            System.out.println("hello world");
//        }
        calculator();
    }

    private static void calculator(){
        Scanner sc = new Scanner(System.in);
        String message = """ 
                Enter 1 for addition
                Enter 2 for subtraction
                Enter 3 for multiplication
                Enter 4 for division
                Enter 5 for exit
                """;
        do {
            System.out.println();
            System.out.println(message);
            System.out.println();
            int n = sc.nextInt();
            int num1 = 0, num2 = 0;
            if(n != 5) {
                System.out.println("Enter Num1: ");
                 num1 = sc.nextInt();

                System.out.println("Enter Num2: ");
                 num2 = sc.nextInt();
            }

            if(n == 1){
                System.out.println("Addition is "+(num1 + num2));
            } else if (n == 2) {
                System.out.println("Subtraction is "+(num1 - num2));

            }else if (n == 3) {
                System.out.println("Multiplication is "+(num1 * num2));
            }else if (n == 4) {
                if(num2==0) System.out.println("It is undefined");
                else System.out.println("Division is "+(num1 / num2));
            } else if(n==5) System.exit(0);
            else{
                System.out.println("Invalid input");

            }
            for(int i = 1; i<=30; i++)
                System.out.print("**");
        }while(true);
    }
}
