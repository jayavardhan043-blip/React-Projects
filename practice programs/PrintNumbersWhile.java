import java.util.Scanner;

public class PrintNumbersWhile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        int i = 1;
        System.out.println("Numbers from 1 to " + number + ":");
        while (i <= number) {
            System.out.println(i);
            i++;
        }
        scanner.close();
    }
}