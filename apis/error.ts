// eslint-disable-next-line max-classes-per-file
export class CustomError extends Error {
  redirectURL = "";

  notFound = false;
}

export function isCustomError(object: unknown): object is CustomError {
  return (
    object instanceof CustomError &&
    ("redirectURL" in object || "notFound" in object)
  );
}

export class NotFoundError extends CustomError {
  name = "NotFoundError";

  message = "해당 페이지를 찾을 수 없습니다.";

  notFound = true;
}

export class NotAllowedError extends CustomError {
  name = "NotAllowedError";

  message = "권한이 없습니다.";

  redirectURL = "/error";
}

export class NotAuthenticatedError extends CustomError {
  name = "NotAuthenticatedError";

  message = "인증되지 않은 사용자입니다.";

  redirectURL = "/auth";
}
