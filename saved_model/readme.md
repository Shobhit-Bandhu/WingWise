'''python
import os

# Define the filename of your .txt file containing class names
filename = "class_names.txt"

# Initialize an empty list to store the class names
class_names = []

# Open the file in read mode
with open(filename, "r") as file:
  # Read all lines from the file
  lines = file.readlines()

  # Remove trailing newline characters from each line (optional)
  for line in lines:
    class_names.append(line.rstrip("\n"))  # Remove newline character

# Print the imported class names
print(class_names)
'''