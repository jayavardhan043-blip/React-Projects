import java.util.Scanner;

public class PrintNumbersDoWhile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        int i = 1;
        System.out.println("Numbers from 1 to " + number + ":");
        do {
            System.out.println(i);
            i++;
        } while (i <= number);
        scanner.close();
    }
}