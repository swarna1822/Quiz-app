import Image from "next/image";
import OtpInputComponent from "./otp/page";
import QuizMainComponent from "./Quiz/page";

export default function Home() {
  return (
    <div>
     <main>
        <QuizMainComponent/>
      </main>
    </div>
  );
}
