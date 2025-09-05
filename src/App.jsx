import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./components/pages/Home.jsx";

// About Us
import AboutUs from "./components/pages/AboutUs.jsx";
import DepositsWithdrawals from "./components/pages/DepositsWithdrawals.jsx";
import TradingCommissions from "./components/pages/TradingCommissions.jsx";

// Trading
import TradingAccounts from "./components/pages/TradingAccounts.jsx";
import AccountsOverview from "./components/pages/AccountsOverview.jsx";
import AdvantageAccount from "./components/pages/AdvantageAccount.jsx";
import AdvantageStocksAccount from "./components/pages/AdvantageStocksAccount.jsx";
import DemoAccounts from "./components/pages/DemoAccounts.jsx";
import MT4 from "./components/pages/MT4.jsx";

// Tools
import MarginCalculators from "./components/pages/MarginCalculators.jsx";
import ProfitCalculators from "./components/pages/ProfitCalculators.jsx";
import TradingSignals from "./components/pages/TradingSignals.jsx";
import ProTradingTools from "./components/pages/ProTradingTools.jsx";
import ToolsOverview from "./components/pages/ToolsOverview.jsx";

// Markets
import Forex from "./components/pages/Forex.jsx";
import Commodities from "./components/pages/Commodities.jsx";
import Indices from "./components/pages/Indices.jsx";
import Stocks from "./components/pages/Stocks.jsx";
import Cryptos from "./components/pages/Cryptos.jsx";
import Metals from "./components/pages/Metals.jsx";

// Contact Us
import ContactUs from "./components/pages/ContactUs.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About Us */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/deposits-withdrawals" element={<DepositsWithdrawals />} />
        <Route path="/trading-commissions" element={<TradingCommissions />} />

        {/* Trading */}
        <Route path="/trading-accounts" element={<TradingAccounts />} />
        <Route path="/accounts-overview" element={<AccountsOverview />} />
        <Route path="/advantage-account" element={<AdvantageAccount />} />
        <Route
          path="/advantage-stocks-account"
          element={<AdvantageStocksAccount />}
        />
        <Route path="/demo-accounts" element={<DemoAccounts />} />
        <Route path="/mt4" element={<MT4 />} />

        {/* Tools */}
        <Route path="/margin-calculators" element={<MarginCalculators />} />
        <Route path="/profit-calculators" element={<ProfitCalculators />} />
        <Route path="/trading-signals" element={<TradingSignals />} />
        <Route path="/pro-trading-tools" element={<ProTradingTools />} />
        <Route path="/tools-overview" element={<ToolsOverview />} />

        {/* Markets */}
        <Route path="/forex" element={<Forex />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/cryptos" element={<Cryptos />} />
        <Route path="/metals" element={<Metals />} />

        {/* Contact Us */}
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
