import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Common/Header'
import AllJewellary from './Component/All_Jewellery/AllJewellary'
import Gold from './Component/Gold/Gold'
import Diamond from './Component/Diamond/Diamond'
import Earing from './Component/Earings/Earing'
import Collection from './Component/Collection/Collection'
import Wedding from './Component/Wedding/Wedding'
import Gold_Bangles from './Component/Gold/Gold_Bangles'
import Gold_Bracelets from './Component/Gold/Gold_Bracelets'
import Gold_Earings from './Component/Gold/Gold_Earings'
import Gold_Chains from './Component/Gold/Gold_Chains'
import Gold_Pendants from './Component/Gold/Gold_Pendants'
import Gold_Rings from './Component/Gold/Gold_Rings'
import Gold_Engagement from './Component/Gold/Gold_Engagement'
import Gold_Necklaces from './Component/Gold/Gold_Necklaces'
import Gold_Nose_Pins from './Component/Gold/Gold_Nose_Pins'
import Gold_Kadas from './Component/Gold/Gold_Kadas'
import Gold_Mangalsutras from './Component/Gold/Gold_Mangalsutras'
import Gold_Jhumkas from './Component/Gold/Gold_Jhumakas'
import Diamond_Bangles from './Component/Diamond/Diamond_Bangles'
import Diamond_Bracelets from './Component/Diamond/Diamond_Bracelets'
import Diamond_Earings from './Component/Diamond/Diamond_Earings'
import Diamond_Rings from './Component/Diamond/Diamond_Rings'
import Diamond_MAngalsutras from './Component/Diamond/Diamond_Mangalsutras'
import Diamond_NecklaceSet from './Component/Diamond/Diamond_NecklaceSet'
import Diamond_Necklaces from './Component/Diamond/Diamond_Necklaces'
import Diamond_NosePins from './Component/Diamond/Diamond_NosePins'
import Diamond_Pendants from './Component/Diamond/Diamond_Pendants'
import Earing_DropDanglers from './Component/Earings/Earing_DropDanglers'
import Earing_HoopHoggies from './Component/Earings/Earing_HoopHoggies'
import Earing_Jhumkas from './Component/Earings/Earing_Jhumkas'
import Earing_StudTops from './Component/Earings/Earing_StudTops'
import Rings from './Component/Ring/Rings'
import Ring_CasualRing from './Component/Ring/Ring_CasualRing'
import Ring_CoupleRing from './Component/Ring/Ring_CoupleRing'
import Ring_DiamondEngagement from './Component/Ring/Ring_DiamondEngagement'
import Ring_Engagement from './Component/Ring/Ring_Engagement'
import Ring_MensRing from './Component/Ring/Ring_MensRing'
import PlatinumRing from './Component/Ring/PlatinumRing'
import Daily_Wear_jewelery from './Component/Daiy_Wear/Daily_Wear_jewelery'
import Dailywear_Chains from './Component/Daiy_Wear/Dailywear_Chains'
import DailyWear_Earing from './Component/Daiy_Wear/DailyWear_Earing'
import DailyWear_Mangalsutras from './Component/Daiy_Wear/DailyWear_Mangalsutras'
import DailyWear_Pendants from './Component/Daiy_Wear/DailyWear_Pendants'
import AllJewelery_Earing from './Component/All_Jewellery/AllJewelery_Earing'
import AllJewelery_Pendants from './Component/All_Jewellery/AllJewelery_Pendants'
import AllJewelery_FingerRing from './Component/All_Jewellery/AllJewelery_FingerRing'
import AllJwelery_Mangalsutras from './Component/All_Jewellery/AllJwelery_Mangalsutras'
import AllJwelery_Chains from './Component/All_Jewellery/AllJwelery_Chains'

// import VideoCarousel from "./Component/VidCarousel";
import DiamondSection from './Component/Common/DiamondSection'
import StoreSection from './Component/Common/StoreSection'
import WishList from './Component/Common/WishList'
import LoginSignUp from './Component/Common/LoginSignUp'
import ProductBag from './Component/Common/ProductBag'
import Contactpage from './Component/Common/Contactpage'
import AddCart from "./Component/Common/AddCart"
import Footer from "./Component/Common/Footer"
import BottomCard from "./Component/Common/BottomCard"
import EmptyCart from './Component/Common/EmptyCart'
import ProtectedRoute from './Component/ProtectedRoute'
import OrderDelever from './Component/Common/OrderDelever'
import ShippingDetails from './Component/Common/ShippingDetails'
import VerifyEmail from './Component/Common/VerifyEmail'
import SignForm from "./Component/Common/SignForm"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CoverflowVideoCarousel from './Component/VideoCarousel'
import './App.css';

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/slider" element={<VideoCarousel /> } /> */}
        <Route path="/store" element={<StoreSection />} />
     
        <Route path="/login/sihnup" element={<LoginSignUp />} />
        <Route path="/addtobag" element={<ProductBag />} />
        <Route path ="/contactpage" element={<Contactpage />} />
        {/* <Route path="/productbag" element={<ProductBag />} /> */}
        <Route path ="/addcart" element = {<AddCart />} />
        <Route path ="/bottomcard" element = {<BottomCard />} />
        <Route path ="/emptycart"  element={<EmptyCart />} />
        <Route path="/orderDelever" element={<OrderDelever />} />
        <Route path="/ShippingDetails" element={<ShippingDetails />} />
        <Route path ="/verifyemail"  element={<VerifyEmail />} />
        <Route path="/signup" element = {<SignForm />} /> 
        <Route path = "videocarousel" element={<CoverflowVideoCarousel />}  />
       
        {/* Protected Routes (Require Token) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/productbag" element={<ProductBag />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>

        {/* Diamond Section */}
        {/* this route is wrong  */}
        <Route path="/diamondsection" element={<DiamondSection />} />

        {/* All Jewelery Link */}
        <Route path="/all-jewellery" element={<AllJewellary />} />
        <Route path="/alljewelery-earings" element={<AllJewelery_Earing />} />
        <Route
          path="/all-jewellery-pendants"
          element={<AllJewelery_Pendants />}
        />
        <Route
          path="/all-jewellery-finger-rings"
          element={<AllJewelery_FingerRing />}
        />
        <Route
          path="/all-jewellery-mangalsutras"
          element={<AllJwelery_Mangalsutras />}
        />
        <Route path="/all-jewellery-chains" element={<AllJwelery_Chains />} />

        {/* Gold Link Page */}
        <Route path="/gold" element={<Gold />} />
        <Route path="/gold-bangles" element={<Gold_Bangles />} />
        <Route path="/gold-bracelets" element={<Gold_Bracelets />} />
        <Route path="/gold-earings" element={<Gold_Earings />} />
        <Route path="/gold-chains" element={<Gold_Chains />} />
        <Route path="/gold-pendants" element={<Gold_Pendants />} />
        <Route path="/gold-rings" element={<Gold_Rings />} />
        <Route path="/gold-engagement-rings" element={<Gold_Engagement />} />
        <Route path="/gold-necklaces" element={<Gold_Necklaces />} />
        <Route path="/gold-nose-pins" element={<Gold_Nose_Pins />} />
        <Route path="/gold-kadas" element={<Gold_Kadas />} />
        <Route path="/gold-mangalsutras" element={<Gold_Mangalsutras />} />
        <Route path="/gold-jhumkas" element={<Gold_Jhumkas />} />

        {/* Diamong Link Page */}
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/diamond-bangles" element={<Diamond_Bangles />} />
        <Route path="/diamond-bracelets" element={<Diamond_Bracelets />} />
        <Route path="/diamond-earings" element={<Diamond_Earings />} />
        <Route path="/diamond-ring" element={<Diamond_Rings />} />
        <Route
          path="/diamond-mangalsutras"
          element={<Diamond_MAngalsutras />}
        />
        <Route path="/diamond-necklace-set" element={<Diamond_NecklaceSet />} />
        <Route path="/diamond-necklace" element={<Diamond_Necklaces />} />
        <Route path="/diamond-nose-pins" element={<Diamond_NosePins />} />
        <Route path="/diamond-pendants" element={<Diamond_Pendants />} />

        {/* Earing Link Page */}
        <Route path="/earings" element={<Earing />} />
        <Route path="/earing-drop-danglers" element={<Earing_DropDanglers />} />
        <Route path="/earing-hoop-huggies" element={<Earing_HoopHoggies />} />
        <Route path="/earing-jhumkas" element={<Earing_Jhumkas />} />
        <Route path="/earing-studs-tops" element={<Earing_StudTops />} />

        {/* Rings Link Page */}
        <Route path="/all-rings" element={<Rings />} />
        <Route path="/rings-casual-rings" element={<Ring_CasualRing />} />
        <Route path="/rings-couple-rings" element={<Ring_CoupleRing />} />
        <Route
          path="/rings-diamond-engagement-ring"
          element={<Ring_DiamondEngagement />}
        />
        <Route path="/rings-engagement-ring" element={<Ring_Engagement />} />
        <Route path="/rings-mens-ring" element={<Ring_MensRing />} />
        <Route
          path="/rings-platinum-engagement-ring"
          element={<PlatinumRing />}
        />

        {/* Daily Wear */}
        <Route path="/dailywear-jewellery" element={<Daily_Wear_jewelery />} />
        <Route path="/dailywear-chains" element={<Dailywear_Chains />} />
        <Route path="/dailywear-earings" element={<DailyWear_Earing />} />
        <Route path="/dailywear-pendants" element={<DailyWear_Pendants />} />
        <Route
          path="/dailywear-mangalsutra"
          element={<DailyWear_Mangalsutras />}
        />

        <Route path="/collection" element={<Collection />} />
        <Route path="/wedding" element={<Wedding />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
