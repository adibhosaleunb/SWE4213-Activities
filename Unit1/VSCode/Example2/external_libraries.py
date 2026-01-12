"""
Key Learning Outcomes:

- Show that when justMyCode is False that I can step into is_odd.checkOdd.
Note: You have to run this using VSCode's debug runner (left menu).
"""

import is_odd

def main():
    numbers = [1, 2, 3, 4, 5]
    odd_numbers = []
    for n in numbers:
        if is_odd.checkOdd(n):
            odd_numbers.append(n)
    print("Odd numbers:", odd_numbers)

if __name__ == "__main__":
    main()
