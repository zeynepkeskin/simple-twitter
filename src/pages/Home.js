import Stream from "../components/Stream.js";
import Reminder from "../components/Reminder.js";

function Home() {
  return (
    <>
      <Stream />
      <Reminder
        title="Don’t miss what’s happening"
        description="People on Twitter are the first to know."
        links={[
          { text: "Log in", href: "/login" },
          { text: "Sign up", href: "/signup", selected: true },
        ]}
      />
    </>
  );
}

export default Home;
