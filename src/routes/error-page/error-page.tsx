import { useRouteError, Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div className="h-screen flex items-center text-center">
      <div className="w-full">
        <h1 className="text-3xl mb-2">Oops!</h1>
        <p className="mb-2">Sorry, an unexpected error has occurred.</p>
        <Link className="link link-secondary" to="/">
          Back to home page
        </Link>
      </div>
    </div>
  );
};
