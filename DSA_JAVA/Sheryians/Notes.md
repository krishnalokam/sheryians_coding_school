Just like we have some rules that we follow to speak English(the
grammar), we have some rules to follow while writing a Java
program. The set of these rules is called Syntax.

Comments
Single-line comment: Use // to add a single-line comment.
Example : // This is single line comment
Multi-line comment: Use /* */ for comments spanning
multiple lines.

Variables
A variable is a container that holds data. This value can be changed
during the execution of the program.
Before use, you need to declare and define it.
1. Variable Declaration:
   int age;
   String name; //int and string is data types
2. Variable Initialization:
   age = 69;
   name = "the boys";
3. Combined Declaration and Initialization:

int age = 69;
String name = "the boys";
4. Final Variables (Constants):
   final int a = 7;[DTL]

Role of + operator between String & numbers
● String + String = String - Concatenation
● String + int = String - Concatenation
● int + int = int - Arithmetic Addition

Identifiers- Identifiers are used to uniquely identify the variables.
Identifier is a name given to a variable, class, method, package, or other
program elements.
Rules for Identifiers in Java:
1. Start: Must start with an alphabet or _ or $ NOT with a digit.
2. End: Can end with an alphabet or _ or $ or numeric digit.
3. No Reserved Words : You cannot use Java's reserved words (also
   known as keywords) as identifiers.
4. No Special Symbols: Identifiers cannot contain special symbols like @,
   #, %, etc. except for underscores (_) and dollar signs ($).
5. No Space : Spaces are not allowed.
6. Length – No Limit
   Java is CASE SENSITIVE : Shery and shery is different for java

Keyword and word :Keywords are reserved(built-in) words which has
specific meanings and cannot be used as identifiers.e.g.public, class,
static, if, else, while etc.

# DataTypes
Literal or Constant:
Any constant value which can be assigned to the variable.
DATA TYPES
Data types are used to classify and define the type of data that a
variable can hold.
There are 2 types of Data Types:
1.Primitive Data types: pre-defined, fixed size.
2.Non-Primitive Data types: Customize and no fixed size.

Default Values

Data Type

Default Value (for
fields)
byte 0
short 0
int 0
long 0L
float 0.0f
double 0.0d
char '\u0000'
boolean false

the compiler never assigns a default value to an uninitialized local
variable(DTL).

+ operator between two char values
  ● It performs addition between their Unicode code points.
  ● For example :

char a = 'a';
char b = 'b';
System.out.println(a+b);//97+98=195

Output : 195

# Scanner
Scanner
To take input from users we use Scanner class.
Scanner class is a built-in class in the java.util package(DTL). Before
using the Scanner class you have to import the Scanner class using the
import statement as shown below:
To use the Scanner class, you need to create an object of it, and then
you can use that object to interact with the input data.
import java.util.Scanner;
Scanner sc = new Scanner(System.in);//object
int n = sc.nextInt();

The nextInt() method parses the token from the input and returns the
integer value.
Use methods to read respective data
nextByte(), nextShort(), nextInt(), nextLong(), nextFloat(), nextDouble(),
nextBoolean()
Reading String Data

nextLine() - Reads the whole line
next() - Reads the first word
Reading char data – next().charAt(0)
Problem with nextLine() method:
If we try to read String after reading in an Integer, Double or Float etc.
Java does not give us a chance to input anything for the name variable.

When the method input.nextLine() is called Scanner object will wait for
us, to hit enter and the enter key is a character(“\n”).
Example
Scanner scanner = new Scanner(System.in);
System.out.print("Enter an integer: ");
int age = scanner.nextInt();
System.out.print("Enter a string: ");
String name = scanner.nextLine();
System.out.println(name + " age is = " + age);

Console :
Enter an integer: 69
Enter a string: age is = 69

1. We first prompt the user to enter an integer age using nextInt().
2. After reading the integer, we immediately hit enter and enter is
   also a character represented by “\n” – 69\n
3. The int value 69 is assigned in age but not the \n still left in the
   memory or buffer.
4. In next line when we Call nextLine() to consume the name it first
   check in buffer is there any thing as we have \n in buffer it take \n
   (for nextLine() method \n is the stopping point it will consider we
   stop giving input and return) and skip the line.

Solution :
Scanner scanner = new Scanner(System.in);
System.out.print("Enter an integer: ");

int age = scanner.nextInt();
// Consume the newline character left in the input buffer
scanner.nextLine();
System.out.print("Enter a string: ");
String name = scanner.nextLine();
System.out.println(name + " age is = " + age);

1. After taking an integer input we Call nextLine() to consume the name
   character left in the input buffer.In next line when we Call nextLine() to
   consume the name character left in the input buffer.
2. Then, we prompt the user to enter a string using nextLine().

\ is a special symbol
\n (next Line), \b (backspace), \t (tab), \" (double quote), \' (single
quote), and \\ (backslash).

# Operators
Operators
Operators can be easily defined as characters that represent an
operation. These symbols perform different operations on several
variables and values.
Example : 5 + 6 = 11. Here, 5 and 6 are the operands, and + is called
the operator.
Categories of Operators
Unary operators : perform an action with a single operand.
Binary operators: perform actions with two operands.
Types of Operator
1. Arithmetic Operator :
   Arithmetic operator can be divided into two categories -
   ● Binary Operators : +, -, *, /(int/int will always yield int) , %
   (Return remainder after dividing two numbers & with int
   (works perfectly) but with float (produces ambiguity)).
   Special powers of / & % by powers of 10
   / : to reduce the number by 1 digit
   % : to get last digit(s) of number

● Unary Operators :
Increment Operator (++) : Increase the value by 1.
Decrement Operator( - -) : Decrease the value by 1.

+, - and !(DTL) is also a unary operator(-5, 5 (is same as +5)).

RULES for Increment and Decrement :
● Cannot applied to constant
Example : int c = ++10; // compile-time error
● Nesting of both operators is not allowed
Example :int a = 10;

int b = ++(++a); // compile-time error [++11]

● They are not operated over final variables
Example : final int a = 10;

int b = ++a; // compile-time error

● Increment and Decrement Operators can not be applied to
booleans.
Example : boolean a= false;

a++;// compile-time error
Quiz On Increment And Decrement Operators :
https://sheryians.com/whizz/test/651ce22ebf489c724c896167
2. Relational Operators : Used to check the relations between two
   operands. They return a boolean value (true or false) by comparing the
   two operands.
   Greater Than (>) ,Less Than (<), <=, >=, ==, !=

● Equal To (==) - Checks if two operands are equal
● Not Equal To (!=) - Checks if two operands are not equal
● Greater Than or Equal To (>=) - Checks if one operand is
either greater than or equal to the other.
● Less Than or Equal To (<=) - Checks if one operand is either
less than or equal to the other.

3. Logical operators : Combine multiple conditional statements. There
   are three types of logical operators in Java: AND(&&), OR (||) and
   NOT(!) operators.
   ● Logical AND Operator(&&)
   Returns true when both conditions under evaluation are true,
   otherwise it returns false.
   e.g : if(a>b && a<c) System.out.println("Maximum: " + a);
   ● Logical OR Operator(||)
   Returns true if any one of the given conditions is true, otherwise it
   returns false. It returns false if and only if both conditions under
   evaluation are false.
   e.g : if(a>b || a<c) System.out.println("Max: " + a);
   ● Logical Not Operator(!)
   It accepts a single value as an input and returns the inverse of the
   same. This is a unary operator unlike the AND and OR operators.
   e.g : if(!(a<b)) System.out.println("Max: " + a);
4. ShortHand operators
   The assignment operator can be combined with other operators to
   build a shorter version of the statement. +=, -=,

*=, /=, %=

Example : a = a+5, we can write a += 5.
do not use =+ & -= [(=) followed by a unary plus (+)]