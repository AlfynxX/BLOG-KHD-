const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.jpeg" 
              alt="Logo Pramuka" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-bold">KHD</p>
              <p className="text-xs text-muted-foreground">Ki Hajar Dewantara
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} KHD. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              TEKAT KUAT EDUKATIF DAN KREATIF
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;