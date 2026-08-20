public class DivisibleBy2And3 {
    public static void main(String[] args) {
        int n = 6;
        if (n % 2 == 0 && n % 3 == 0)
            System.out.println(n + " is divisible by both 2 and 3");
        else
            System.out.println(n + " is NOT divisible by both 2 and 3");
    }
}