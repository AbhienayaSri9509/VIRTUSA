import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class WordCountFile {

    public static void main(String[] args) {

        String inputFile = "input.txt";
        String outputFile = "output.txt";

        int wordCount = 0;

        try {
            BufferedReader reader =
                    new BufferedReader(new FileReader(inputFile));

            String line;

            while ((line = reader.readLine()) != null) {

                line = line.trim();

                if (!line.isEmpty()) {
                    String[] words = line.split("\\s+");
                    wordCount += words.length;
                }
            }

            reader.close();

            BufferedWriter writer =
                    new BufferedWriter(new FileWriter(outputFile));

            writer.write("Total number of words: " + wordCount);
            writer.newLine();

            writer.close();

            System.out.println(
                    "Word count written successfully to " + outputFile
            );

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}