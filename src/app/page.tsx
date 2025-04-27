import { headers } from "next/headers";
import { redirect } from "next/navigation";
import HomePage from "./[locale]/page";

export default function RootPage() {
  const userHeaders = headers();
  const acceptLanguage = userHeaders.get("accept-language");

  // Conditionally redirect based on the user's preferred language
  if (acceptLanguage?.includes("ar")) {
    redirect("/ar");
  } else if (acceptLanguage?.includes("en")) {
    redirect("/en");
  }

  // If no language match or you want to show a default home page, return a component
  return (
    <div>
      <HomePage />
    </div>
  );
}
