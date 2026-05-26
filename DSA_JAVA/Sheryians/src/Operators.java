public class Operators  {
    public static void main(String[] args) {
//        operators();
//        relationalOperators();
//        logicalOperators();
        shorthandOperator();
    }

    private static void operators(){
        String s = "hello";
        int a = 10;
        System.out.println(s + a);
        //System.out.println(s-a); // Operator "-" can't be applied to int

        //Divide
        System.out.println(45/2); //answer is int 22

        //Modulo
        System.out.println(45%2);
        System.out.println(2%45); //2
        System.out.println(-45%2); // -1

        /* Unary operators */
        int a1 = 10;
        int b1 = 8;
        int c1 = a1++ + b1;
        System.out.println(c1); // 10 + 8 = 18,

        boolean flag = true;
        // flag++; //can't be applied
        //int a2 = ++10; // can't be applied
//        int a3 = 20;
//        int bb = ++(++a3) //++ can't be applied as nested
    }

    private static void relationalOperators(){
    int a = 10;
    int b = 8;
        System.out.println("a < b: " + (a < b));
        System.out.println("a <= b: " + (a <= b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));

    }

    private static void logicalOperators() {
        //logical AND OR NOT
        System.out.println(17<9 && 12>3);
        System.out.println(17<9 || 12>3);
        System.out.println(!(17<9 || 12>3));


    }

    private static void shorthandOperator(){
        int a = 10;
        a += 5;
        System.out.println(a);

        byte b = 5;
        b += 10;
//        b = b + 15; // required type byte, provided int
        System.out.println(b);
    }
}
