import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

/**
 * Reads and verifies the JWT for an API route.
 *
 * Accepts the token from either the `token` cookie (set at signin and sent
 * automatically with same-origin fetch) or an `Authorization: Bearer` header,
 * matching what proxy.js already looks for on /dashboard.
 *
 * Returns the decoded payload ({ userId }) or null when absent/invalid.
 */
export function getAuth(request) {
  const cookieToken = request.cookies?.get("token")?.value;
  const headerToken = request.headers
    .get("authorization")
    ?.replace(/^Bearer\s+/i, "");

  const token = cookieToken || headerToken;
  if (!token) return null;

  return verifyToken(token);
}

/** Standard 401 response for unauthenticated API calls. */
export function unauthorized() {
  return NextResponse.json(
    { message: "Unauthorized. Please sign in." },
    { status: 401 }
  );
}
