export default function DrawerSide({
  closeDrawerSide,
}: {
  closeDrawerSide: any;
}) {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
      closeDrawerSide(false);
    }
  };
  return (
    <div className="fixed z-50 h-screen w-full bg-white px-8 font-medium">
      <ul>
        <li
          className="badge-navbar-2"
          onClick={() => handleClickScroll("about-us")}
        >
          About Us
        </li>
        <li
          className="badge-navbar-2"
          onClick={() => handleClickScroll("features-benefits")}
        >
          Features & Benefits
        </li>
        <li
          className="badge-navbar-2"
          onClick={() => handleClickScroll("products")}
        >
          Products
        </li>
        <li
          className="badge-navbar-2"
          onClick={() => handleClickScroll("contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
