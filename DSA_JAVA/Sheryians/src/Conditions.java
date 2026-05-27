import java.util.Scanner;

public class Conditions {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        validVoter(sc);
//        gradeMarks(sc);

//        test();
        test2();
    }

    private static void test2() {
        int hops = 0;
        int jumps = 0;
        jumps = hops++;
//        if(jumps)// compilation erro
        if(true)
            System.out.print("Jump!");
        else
            System.out.print("Hop!");
    }

    private static void test() {
        int x=11, y=22;
        if(x++ == 11 || ++y == 23){
            System.out.println(x + " " + y);
        }else{
            System.out.println(x + " " + y);
        }
    }


    private static void gradeMarks(Scanner sc){
        System.out.print("Enter marks: ");
        int marks = sc.nextInt();
        if(marks > 90) {
            System.out.println("A+");
        } else if(marks > 80) {
            System.out.println("A");
        } else if(marks > 70) {
            System.out.println("B+");
        } else if(marks >=35 ){
            System.out.println("P");
        } else {
            System.out.println("F");
        }
    }
    private static void validVoter(Scanner sc){
        System.out.println("Enter age: ");
        int age = sc.nextInt();
        if(age >= 18){
            System.out.println("Eligible to Vote");
        } else {
            System.out.println("Not eligible to vote");
        }
    }
}
