import java.util.Scanner;

public class PrimeRange {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter starting number: ");
        int start = sc.nextInt();

        System.out.print("Enter ending number: ");
        int end = sc.nextInt();

        System.out.println("Prime numbers:");

        for (int number = start; number <= end; number++) {

            if (number < 2) {
                continue;
            }

            boolean isPrime = true;

            for (int i = 2; i * i <= number; i++) {

                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                System.out.print(number + " ");
            }
        }

        sc.close();
    }
}