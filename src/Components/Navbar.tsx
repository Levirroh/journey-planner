function Navbar() {
    return (
        <div className="h-1/8 w-screen flex flex-col bg-blue-400 justify-between">
            <a href="/menu"><button>Menu</button></a>
            <a href="/welcome"><button>Sair</button></a>
        </div>
    )
}
export default Navbar;