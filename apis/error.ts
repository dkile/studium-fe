// eslint-disable-next-line max-classes-per-file
export class CustomApiError extends Error {
  redirectUrl = "";

  notFound = false;
}

export function isCustomApiError(object: unknown): object is CustomApiError {
  return (
    object instanceof CustomApiError &&
    ("redirectUrl" in object || "notFound" in object)
  );
}

export class NotFoundError extends CustomApiError {
  name = "NotFoundError";

  message = "해당 페이지를 찾을 수 없습니다.";

  notFound = true;
}

export class NotAllowedError extends CustomApiError {
  name = "NotAllowedError";

  message = "권한이 없습니다.";

  redirectUrl = "/error";
}

export class AuthError extends CustomApiError {
  name = "AuthError";

  message = "인증되지 않은 사용자입니다.";

  redirectUrl = "/auth";
}
