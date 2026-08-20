import java.util.Scanner;

public class TemperatureConverter {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.print("Input type (F/C/K): ");
        char inputType = reader.next().toUpperCase().charAt(0);
        System.out.print("Output type (F/C/K): ");
        char outputType = reader.next().toUpperCase().charAt(0);
        System.out.print("Temperature: ");
        float temp = reader.nextFloat();

        float celsius = toCelsius(temp, inputType);
        float result = fromCelsius(celsius, outputType);

        System.out.println("Converted Temperature: " + result);
        reader.close();
    }

    public static float toCelsius(float t, char type) {
        switch (type) {
            case 'F': return (t - 32) * 5 / 9;
            case 'K': return t - 273.15f;
            default: return t;
        }
    }

    public static float fromCelsius(float t, char type) {
        switch (type) {
            case 'F': return (t * 9 / 5) + 32;
            case 'K': return t + 273.15f;
            default: return t;
        }
    }
}
