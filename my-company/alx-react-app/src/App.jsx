import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';


function App() {
  return (
    <>
      <Header />
      import Counter from './components/Counter';
      
      {/* At least one UserProfile immediately after header */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
