// ep:4 Talk is cheap , show me the code


import ReactDom from "react-dom/client"

/* 
* Header
 - logo
 - nav items -> about contact , cart etc
 * body
 - search
 - restaurant container
 - rest card

 * Footer
 - copyright
 - all links 
 */

 const root = ReactDom.createRoot(document.getElementById("root"));

 const Header = ()=> {
  return (
    <div className="header">
      <div>
        <img className="logo" src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg"  />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
 }

 const RestaurantCard = ()=> {
  return (
    <div className="card">
      <img className="card-img" alt = "res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG" />

      <div className="card-details">
        <h2>Pizza hut</h2>
        <h3>4.3</h3>
        <h4>45-50 min</h4>
        <h5>Pizzas , pizza</h5>

      </div>
    </div>
  )
 }

 const Body = ()=>{
  return (
    <div>
      <div className="search"> Search</div>

      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )}

const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )};


  root.render(<AppLayout />)