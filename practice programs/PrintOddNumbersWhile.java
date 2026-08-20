import java.util.Scanner;

public class PrintOddNumbersWhile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        int i = 1;
        System.out.println("Odd numbers up to " + number + ":");
        while (i <= number) {
            if (i % 2 != 0) {
                System.out.println(i);
            }
            i++;
        }
        scanner.close();
    }
}