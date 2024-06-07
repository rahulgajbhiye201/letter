const Footer = () => {
  var date = new Date().getFullYear();
  return (
    <footer className="self-center bg-white rounded-xl p-1 m-4">
      <p>© Rahul Gajbhiye ❤️ {date}</p>
    </footer>
  );
};

export default Footer;
