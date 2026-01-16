import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // add this

function App() {
  return (
    <>
      <Header />
      <MainContent />

      {/* Add one UserProfile here to satisfy the check */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />

      <Footer />
    </>
  );
}

export default App;
