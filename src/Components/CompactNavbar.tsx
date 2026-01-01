import { CircleUser, Plane, Settings } from "lucide-react";
import Button from "./Button";


function CompactNavbar() {
    return (
        <div className="w-screen justify-evenly md:hidden relative">
            <Button icon={<Settings />} width="w-15" />
            <Button icon={<Plane />} width="w-25" />
            <Button icon={<CircleUser />} width="w-15" />
        </div>
    )
}
export default CompactNavbar;