import java.util.Scanner;

public class ScannerDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        System.out.print("Enter age: ");
//        int age = sc.nextInt();
//        sc.nextLine();
//        System.out.println("age is "+age);
//        System.out.print("Enter Name ");
//        String name  = sc.nextLine();
//        System.out.println("Name is "+name);
//
////        char ch = sc.nextLine().charAt(0);
//
//        while(sc.hasNext()){
//            System.out.print(sc.next()+ " ");
//        }

        System.out.println("Enter age ");
        int age = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter name");
        String name = sc.nextLine();

        System.out.println("My name is "+name+" and My age is "+age);
    }
}
