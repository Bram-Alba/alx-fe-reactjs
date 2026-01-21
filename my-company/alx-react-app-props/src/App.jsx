import UserContext from "./UserContext";
import ProfilePage from "./ProfilePage";

function App() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  return (
    <UserContext.Provider value={user}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;