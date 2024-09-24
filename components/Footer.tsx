const Footer = () => {
    return (
      <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '25vh' }}>
         <main style={{ flex: 1 }}>
          {/* Your main content */}
        </main>
        <footer className="text-center py-4">
        <p><strong><a href="/">Mark Dhel Villarama</a></strong> &copy; {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  