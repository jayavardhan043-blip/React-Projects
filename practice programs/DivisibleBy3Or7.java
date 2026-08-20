public class DivisibleBy3Or7 {
    public static void main(String[] args) {
        int n = 14;
        if (n % 3 == 0 || n % 7 == 0)
            System.out.println(n + " is divisible by 3 or 7");
        else
            System.out.println(n + " is NOT divisible by 3 or 7");
    }
}