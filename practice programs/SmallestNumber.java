public class SmallestNumber {
    public static void main(String[] args) {
        int a = 10, b = 5, c = 20;
        int smallest = a;

        if (b < smallest) smallest = b;
        if (c < smallest) smallest = c;

        System.out.println("Smallest number: " + smallest);
    }
}