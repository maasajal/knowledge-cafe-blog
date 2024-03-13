import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between my-5">
      <h1 className="text-3xl">Knowledge Cafe Blog</h1>
      <img src={profile} alt="profile photo" />
    </header>
  );
};
export default Header;
