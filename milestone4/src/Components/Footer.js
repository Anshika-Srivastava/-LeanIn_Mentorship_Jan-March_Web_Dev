import classes from "./Footer.module.css";
const Footer = () => {
  const today = new Date();
  return (
    <footer className={classes.Footer}>
      <h6>Copyright &copy; Anshika Srivastava, {today.getFullYear()}</h6>
    </footer>
  );
};

export default Footer;
