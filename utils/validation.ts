// Validate email format using regex
export function validate_email(email: string): { isValid: boolean; error: string | null } {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValid = emailRegex.test(email);
    return isValid
        ? { isValid, error: null }
        : { isValid, error: "Invalid email format." };
}

// Validate password (6-15 alphanumeric characters)
export function validate_password(password: string): { isValid: boolean; error: string | null } {
    const passwordRegex = /^[A-Za-z0-9]{6,15}$/;
    const isValid = passwordRegex.test(password);
    return isValid
        ? { isValid, error: null }
        : { isValid, error: "Password must be 6-15 alphanumeric characters." };
}