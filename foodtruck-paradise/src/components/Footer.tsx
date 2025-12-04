
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <p>© {currentYear} Food Truck Paradise. Tous droits réservés KW3.</p>
            </div>
        </footer>
    );
}

export default Footer;