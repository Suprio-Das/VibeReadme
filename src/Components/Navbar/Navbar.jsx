import Logo from '../../assets/VibeReadmeLogo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-[#171612] shadow-sm">
            <div className='w-[90%] mx-auto flex items-center gap-2'>
                <img src={Logo} alt="Logo" className='w-11' />
                <a className="text-xl text-white">VibeReadme</a>
            </div>
        </div>
    );
};

export default Navbar;