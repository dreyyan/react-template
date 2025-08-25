<!-- NAME | Only letters and spaces, between 2 and 50 characters: -->
/^[A-Za-z\s]{2,50}$/

<!-- USERNAME | Letters, numbers, underscores, 3–20 characters -->
/^[A-Za-z0-9_]{3,20}$/

<!-- EMAIL -->
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

<!-- PASSWORD | At least 8 characters, at least one uppercase, one lowercase, one number, one special character -->
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

<!-- PHONE NUMBER | Accepts digits, spaces, hyphens, parentheses, 7–15 digits -->
/^[0-9\s\-()]{7,15}$/