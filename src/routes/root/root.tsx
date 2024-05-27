import { Header } from "@/components/header";
import { PostalCode } from "@/components/postal-code";

export const Root = () => {
  return (
    <div className="container max-w-full md:max-w-screen-xl mx-auto py-2 md:p-4">
      <Header />
      <main>
        <PostalCode />
      </main>
    </div>
  );
};
