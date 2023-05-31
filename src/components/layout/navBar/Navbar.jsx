const Navbar = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dzbixvkyx/image/upload/v1685465398/Ecomerce%20mati/pngwing.com_kwuwdv.png"
        alt=""
      ></img>
      <ul>
        <li>Jugutes</li>
        <li>Muebles</li>
        <li>Diseño</li>
      </ul>
      <Navbar />
    </div>
  );
};

export default Navbar;
