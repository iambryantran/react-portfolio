import Navigation from './Navigation';

const Header = () => {
    const headerStyle = {
        backgroundImage: 'url(../../public/img/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <header className="header" style={headerStyle}>
            <h1>Bryan Tran</h1>
            <Navigation />
        </header>
    );
};

export default Header;
