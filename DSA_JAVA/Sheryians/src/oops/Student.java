package oops;

public class Student {

    int age;
    String name;
    long contact_no;
    Student(){
        System.out.println("Constructor");
    }

    Student(int age, String name, long contact_no) {
        this.age = age;
        this.name = name;
        this.contact_no = contact_no;
    }
    @Override
    public String toString() {
        return " age "+age+
                " name "+name+
                " contact_no "+contact_no;
    }

    public static void main(String[] args) {
        Student ram = new Student(27, "Rama", 1234567890);
        Student lakshman = new Student(26,"laxman", 1234567891);
        System.out.println(ram);
        System.out.println(lakshman);

    }
}
