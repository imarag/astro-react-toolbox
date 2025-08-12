// Utility to send HTTP responses with optional redirect and message
export function sendResponse(
    message: string | null = null,
    status: number = 200,
    redirectTo: string | null = null
): Response {
    const headers: Record<string, string> = {};

    // Set redirect or content-type header
    if (redirectTo) {
        headers["Location"] = redirectTo;
        status = 302; // Redirect status code
    } else {
        headers["Content-Type"] = "application/json";
    }

    // Stringify message if present
    const body = message ? JSON.stringify(message) : null;
    return new Response(body, {
        status,
        headers,
    });
}