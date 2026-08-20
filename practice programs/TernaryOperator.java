
import java.util.Scanner;

public class TernaryOperator
 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int num1 = scanner.nextInt();

        System.out.print("Enter second number: ");
        int num2 = scanner.nextInt();
        scanner.close();

        // Ternary operator to find the maximum
        int max = (num1 > num2) ? num1 : num2;

        System.out.println("\n📌 Using Ternary Operator:");
        System.out.println("The greater number is: " + max);

        // Example with boolean condition
        String result = (num1 == num2) ? "Both numbers are equal" : "Numbers are not equal";
        System.out.println(result);
    }
}