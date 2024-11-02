import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, MenuOutlined, PhoneOutlined, XOutlined, YoutubeOutlined, MailOutlined, BlockOutlined, FormOutlined } from "@ant-design/icons";
import { Button, Drawer, Modal } from "antd";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../../../context";
import { useLogout } from "../../../hooks/useLogout";
import "./NavbarEl2.css";

const NavbarEl2 = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [NavBar, setNavBar] = useState("relative");

  useEffect(() => {
    const sticky = () => {
      let scrollTop = window.scrollY;
      setNavBar(scrollTop > 200 ? "fixed" : "relative");
    };
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useNavigate();
  const { user, setUser } = useAppContext();
  const location = useLocation();
  const [isAdminPage, setIsAdminPage] = useState(false);

  // Check for Admin Page
  useEffect(() => {
    setIsAdminPage(location.pathname.includes("admin"));
  }, [location.pathname]);

  // Modal Handling
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogout = async () => {
    const response = await useLogout(setUser);
    if (response) router("/");
  };

  const handleConfirm = () => {
    closeModal();
    router("/form");
  };

  const display = (
    <>
      <div
        className="flex justify-between items-center px-3 py-2 bg-white shadow-lg navBarTop w-100"
        style={{ position: NavBar }}
      >
        <div>
          <Link to="/">
            <img src="/logo1.svg" width="120px" alt="Logo" />
          </Link>
        </div>
        <div className="desktopMenu flex items-center justify-end">
          <ul className="flex gap-4 items-center justify-center text-zinc-700 pt-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/gp-rating">GP-Rating</Link></li>
            <li><Link to="/ccmc">CCMC</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            {/* <li><Link to="/vacancy">Vacancies</Link></li> */}
            {/* <li><Link to="/updates">Updates</Link></li> */}
            <li><Link to="/contact-us">Contact Us</Link></li>
            {user ? (
              <Button onClick={handleLogout} className="button-logout text-zinc-6000">Logout</Button>
            ) : (
              <Link to="/login" className="hidden">
                <Button className="button-login text-zinc-600">Login</Button>
              </Link>
            )}
            {!user && (
              <Button  onClick={openModal} className="button-apply text-green-700">Apply Now Free <FormOutlined/></Button>
            )}
          </ul>
        </div>
        <div className="HamburgerDiv">
          <MenuOutlined className="hamburgerIcon" onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} closable>
          <div><img src="/logo1.svg" width="130px" alt="Logo" /></div>
          <div className="drawerNav">
            <ul>
              <li onClick={() => setOpenMenu(false)}><Link to="/">Home</Link></li>
              <li onClick={() => setOpenMenu(false)}><Link to="/about-us">About Us</Link></li>
              <li onClick={() => setOpenMenu(false)}><Link to="/gp-rating">GP-Rating</Link></li>
              <li onClick={() => setOpenMenu(false)}><Link to="/ccmc">CCMC</Link></li>
              <li onClick={() => setOpenMenu(false)}><Link to="/training">Training</Link></li>
              <li onClick={() => setOpenMenu(false)}><Link to="/gallery">Gallery</Link></li>
              {/* <li onClick={() => setOpenMenu(false)}><Link to="/vacancy">Vacancies</Link></li> */}
              {/* <li onClick={() => setOpenMenu(false)}><Link to="/updates">Updates</Link></li> */}
              <li onClick={() => setOpenMenu(false)}><Link to="/contact-us">Contact Us</Link></li>
              <li>
                <Link to="/form">
                  <Button  className="bg-blue-500 text-xl text-white font-semibold rounded-lg px-5 py-3 hover:bg-blue-700">Apply Now Free <FormOutlined/></Button>
                </Link>
              </li>
              <li className="flex gap-2">
                <Link to="https://www.instagram.com/indianmarksline.in/"  target="_blank"><Button className="text-pink-500"><InstagramOutlined /></Button></Link>
                <Link to="https://x.com/indianmarksline" target="_blank"><Button className="text-black"><XOutlined /></Button></Link>
                <Link to="https://www.linkedin.com/in/indian-marksline/" target="_blank"><Button className="text-blue-400"><LinkedinOutlined /></Button></Link>
                <Link to="https://www.youtube.com/@INDIANMARKSLINE" target="_blank"><Button className="text-red-600"><YoutubeOutlined /></Button></Link>
                <Link to="https://www.facebook.com/profile.php?id=61567740908857" target="_blank"><Button className="text-blue-700"><FacebookOutlined /></Button></Link>
              </li>
              <li><h1><b><PhoneOutlined className="text-green-900" /> Phone: </b><span>+91 1234567890</span></h1></li>
              <li><h1><b><MailOutlined className="text-blue-700" /> Email: </b><span>webitya@gmail.com</span></h1></li>
              <li><h1><b><BlockOutlined className="text-red-500" /> Address: </b><span>Vidya Nagar Harmu Ranchi, <br /> Jharkhand, INDIA</span></h1></li>
            </ul>
          </div>
        </Drawer>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal} className="modal-cancel">Cancel</Button>,
          <Button key="confirm" onClick={handleConfirm} className="modal-confirm">Confirm</Button>
        ]}
      >
        <h2 className="modal-title">Application Instructions</h2>
        <p className="modal-text">Please read the following instructions carefully before proceeding to the form.</p>
      </Modal>
    </>
  );
  return display;
};

export default NavbarEl2;
