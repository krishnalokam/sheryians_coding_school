package oops;
import java.util.Scanner;

class CabService {

    String car_type;
    double km;
    double bill;

    public CabService() {
        this.car_type = null;
        this.km = 0.0;
        this.bill = 0.0;
    }

    public void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the car type: AC or Non-AC");
        this.car_type = sc.nextLine();
        System.out.println("Enter the Kms travelled");
        this.km = sc.nextDouble();
    }

    public void calculate() {
        if(this.car_type.equals("AC")){
            if(this.km <=5 ) this.bill = 150;
            else this.bill = 150 + (this.km - 5) * 10;
        } else if(this.car_type.equals("Non-AC")){
            if(this.km <=5 ) this.bill = 120;
            else this.bill = 120 + (this.km - 5) * 8;
        }
    }

    public void display() {
        System.out.println("CAR TYPE: "+this.car_type);
        System.out.println("KILOMETER TRAVELLED: "+this.km);
        System.out.println("TOTAL BILL: "+this.bill);
    }


}