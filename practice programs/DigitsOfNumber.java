import java.util.Scanner;

public class DigitsOfNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter any positive integer: ");
        int num = scanner.nextInt();
        System.out.print("Digits: ");
        String str = Integer.toString(num);
        for (int i = 0; i < str.length(); i++) {
            System.out.print(str.charAt(i) + " ");
        }
        scanner.close();
    }
}