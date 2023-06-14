import Stream from "../components/Stream.js";
import Reminder from "../components/Reminder.js";
import { AuthContext } from "../components/AuthContext.js";
import { useContext } from "react";

function Home() {
  let { user } = useContext(AuthContext);

  return (
    <>
      <Stream />
      {user ? (
        ""
      ) : (
        <Reminder
          title="Don’t miss what’s happening"
          description="People on Twitter are the first to know."
          links={[
            { text: "Log in", href: "/login" },
            { text: "Sign up", href: "/signup", selected: true },
          ]}
        />
      )}
    </>
  );
}

export default Home;
