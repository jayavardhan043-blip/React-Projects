import java.util.Scanner;

public class Arithmeticoperators {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        double num1 = scanner.nextDouble();

        System.out.print("Enter the second number: ");
        double num2 = scanner.nextDouble();
        scanner.close();

        System.out.println("\n🔢 Arithmetic Operations:");
        System.out.println("Addition        : " + (num1 + num2));
        System.out.println("Subtraction     : " + (num1 - num2));
        System.out.println("Multiplication  : " + (num1 * num2));
        System.out.println("Division        : " + (num2 != 0 ? (num1 / num2) : "Undefined (division by zero)"));
        System.out.println("Modulus         : " + (num2 != 0 ? (num1 % num2) : "Undefined (mod by zero)"));
    }
}