import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { isCustomError } from "./error";

export default function appGetServerSideProps<
  Props extends { [key: string]: any } = { [key: string]: any },
>(getServerSideProps: GetServerSideProps<Props>) {
  return async (context: GetServerSidePropsContext) => {
    try {
      return await getServerSideProps(context);
    } catch (err) {
      if (isCustomError(err)) {
        const { redirectURL, notFound } = err;

        if (notFound) {
          return { notFound: true };
        }
        if (redirectURL) {
          return {
            redirect: {
              destination: redirectURL,
              permanent: false,
            },
          };
        }
      }
      // logger
      console.error("unhandled error:", err);

      throw err;
    }
  };
}
