import Button from "./Button";
import PlaneSvg from "../Images/airplane.svg"
import Settings from "../Images/settings.svg"
import Profile from "../Images/profile-circle.svg"
import Book from "../Images/book.svg"
import Search from "../Images/search.svg"


function CompactNavbar() {
    return (
        <div className="w-screen p-4 bg-blue-400 bottom-0 flex absolute justify-evenly md:hidden">
            <Button icon={Settings} width="w-15" />
            <Button icon={Book} width="w-15" />
            <Button icon={PlaneSvg} width="w-25" />
            <Button icon={Search} width="w-15" />
            <Button icon={Profile} width="w-15" />
        </div>
    )
}
export default CompactNavbar;