"""
Key Learning Outcomes:

- Show how to set breakpoints. 
- Show how to debug this file (step over, step into, resume).
- Show how to inspect variables.
- Show how to use the debug console.
"""

def add_numbers(a, b):
    """Add two numbers"""
    return a + b 
    

def main():
    numbers = [(10, 2), (5, 0), (8, 4)]  
    results = []

    for a, b in numbers:
       res = add_numbers(a, b)
       results.append(res)

    print("All results:", results)


if __name__ == "__main__":
    main()
