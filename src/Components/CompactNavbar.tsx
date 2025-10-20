import Button from "./Button";

function CompactNavbar() {
    return (
        <div className="h-1/8 w-screen flex flex-col bg-blue-400 justify-between md:block hidden">
            <Button icon="" width="h-15"/>
            <Button icon="" width="h-15"/>
            <Button icon="../Images/plane.svg" width="h-15"/>
            <Button icon="" width="h-15"/>
            <Button icon="" width="h-15"/>
        </div>
    )
}
export default CompactNavbar;