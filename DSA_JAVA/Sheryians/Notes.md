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