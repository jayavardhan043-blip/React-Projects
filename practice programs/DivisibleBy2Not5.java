public class DivisibleBy2Not5 {
    public static void main(String[] args) {
        int n = 14;
        if (n % 2 == 0 && n % 5 != 0)
            System.out.println(n + " is divisible by 2 but not by 5");
        else
            System.out.println(n + " is either not divisible by 2 or divisible by 5");
    }
}