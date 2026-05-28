import java.util.Scanner;

public class Switch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        //Arrow from Java 14+ onwards
//        switch (n) {
//            case 1,3 -> System.out.println("Monday");
//            case 2 -> System.out.println("Tuesday");
//            case 4 -> System.out.println("Thursday");
//            case 5 -> System.out.println("Friday");
//            case 6 -> System.out.println("Saturday");
//            case 7 -> System.out.println("Sunday");
//            default -> System.out.println("Invalid input");
//        }

        String day = switch (n) {
            case 1, 3 -> {

                yield "Monday";
            }
            case 2 -> {

                yield "Tuesday";
            }
            case 4 -> {

                yield "Thursday";
            }
            case 5 -> {
                yield "Friday";
            }
            case 6 -> {
                yield "Saturday";
            }
            case 7 -> {
                yield "Sunday";
            }
            default -> {
                yield "Invalid input";
            }
        };

        System.out.println(day);

    }
}
