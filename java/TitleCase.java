import java.util.Scanner;

public class TitleCase {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();

        String[] words = sentence.toLowerCase().split("\\s+");

        StringBuilder result = new StringBuilder();

        for (String word : words) {

            if (!word.isEmpty()) {

                result.append(
                        Character.toUpperCase(word.charAt(0))
                );

                result.append(word.substring(1));
                result.append(" ");
            }
        }

        System.out.println(
                "Title Case: " + result.toString().trim()
        );

        sc.close();
    }
}