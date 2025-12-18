import { Book, CircleUser, Plane, Search, Settings } from "lucide-react";
import Button from "./Button";


function CompactNavbar() {
    return (
        <div className="w-screen p-4 bg-blue-400 bottom-0 flex absolute justify-evenly md:hidden">
            <Button icon={<Settings />} width="w-15" />
            <Button icon={<Book />} width="w-15" />
            <Button icon={<Plane />} width="w-25" />
            <Button icon={<Search />} width="w-15" />
            <Button icon={<CircleUser />} width="w-15" />
        </div>
    )
}
export default CompactNavbar;