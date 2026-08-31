package string;

public class DemoString {
    public static void main(String[] args) {
        String s1 = "hello"; // literal constant
        String s2 = "hello"; // literal constant

        String s3 = new String("hello");
        String s4 = new String("hello");

        System.out.println(s1 == s2);
        System.out.println(s3 == s4);

        System.out.println(s1.equals(s2));
        System.out.println(s3.equals(s4));

    }
}
