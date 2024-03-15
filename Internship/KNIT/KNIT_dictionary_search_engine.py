# FINAL-->
import pandas as pd
import numpy as np

# Given url-->
url = "https://www.gutenberg.org/cache/epub/29765/pg29765.txt"

# REad the content by downloading it-->
response = np.array([])
with np.DataSource().open(url, 'rb') as f:
    response = f.read()

# Initialization-->
link_content = response.decode('utf-8')
lines = link_content.split("\n")
current_word = None
current_definition = ""
word_definitions = []

# Function to check if a line starts with a number-->
def starts_with_number(line):
    return line.startswith(("1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "0."))

for line in lines:
    # Check if the line is in all uppercase-->
    if line.isupper():
        if current_word and current_definition:
            word_definitions.append((current_word, current_definition))

        current_word = line.strip()
        current_definition = ""
    else:
        # Enters a new line when there occurs a number in the link text-->
        if starts_with_number(line):
            current_definition += "\n"

        current_definition += line.strip() + " "

# DataFrame for the word-definition pair-->
df = pd.DataFrame({"Word": [pair[0] for pair in word_definitions],
                   "Definition": [pair[1] for pair in word_definitions]})

# Function to Search the word in the DataFrame-->
def search_word(word):
    result = df[df["Word"].str.contains(word, case=False, na=False, regex=False)]
    return result

# Main-->
while True:
    user_input = input("Enter a word to search (or 'q' to quit): ")

    if user_input.lower() == 'q':
        break

    search_result = search_word(user_input)

    if not search_result.empty:
        for index, row in search_result.iterrows():
            print("Word: ",row['Word'])
            print("Definition: ",row['Definition'])
            print()
    else:
        print("ERROR! Word not found in the link. Re-enter the correct word again.")
    print("\n"*2)

