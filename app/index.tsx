import { Redirect } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Page = () => {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  if (loggedIn) return <Redirect href="/(root)/(tabs)" />;

  return <Redirect href="/(auth)/login" />;
};

export default Page;
