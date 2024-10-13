import {ProfileCard} from "@/components/profilecard"; 
import {Atla} from "@/components/atla";


export default function Home() {

  return (
      <div className="flex flex-col">
        <ProfileCard />
        <Atla />
      </div>
  );
}
