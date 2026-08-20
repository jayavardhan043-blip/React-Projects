import java.util.Scanner;

public class PerfectNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a positive integer: ");
        int num = scanner.nextInt();
        int sum = 0;

        for (int i = 1; i <= num / 2; i++) {
            if (num % i == 0)
                sum += i;
        }

        if (sum == num)
            System.out.println(num + " is a Perfect Number");
        else
            System.out.println(num + " is NOT a Perfect Number");

        scanner.close();
    }
}