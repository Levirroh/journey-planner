function Navbar() {
    return (
        <div className="h-1/8 w-screen md:flex p-4 bg-blue-400 justify-between hidden">
            <a href="/menu"><button>Menu</button></a>
            <a href="/welcome"><button>Sair</button></a>
        </div>
    )
}
export default Navbar;