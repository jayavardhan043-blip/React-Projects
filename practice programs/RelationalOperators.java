import java.util.Scanner;
public class RelationalOperators{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System. out. print("enter the first integer: ");
        int num1 = scanner.nextInt();
        System. out. print("enter the second integer: ");
        int num2 = scanner.nextInt();
        scanner.close();
        System. out. println("\n RelationalOperations:");
        System. out. println("num1>num2 :" + (num1>num2));
        System. out. println("num1<num2 :" + (num1<num2));
        System. out. println("num1>=num2 :" + (num1>=num2));
        System. out. println("num1==num2 :" + (num1==num2));
        System. out. println("num1<=num2 :" + (num1<=num2));
        System. out. println("num1!=-num2 :" + (num1!=num2));
               }
}