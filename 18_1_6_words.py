
def print_upper_words(arr, must_start_with):
    words = []
    for char in arr:
        if char[0] in must_start_with:
           words.append(char.upper())
    print(words)

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})

print_upper_words(["hello", "hey", "goodbye", "yo", "yes", "easy", "emotion"],
                   must_start_with={"E"})