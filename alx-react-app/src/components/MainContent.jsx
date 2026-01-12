import UserProfile from './UserProfile'; // import the component

function MainContent() {
  return (
    <main style={{ padding: "20px" }}>
      <p>I love to visit New York, Paris, and Tokyo.</p>

      {/* User Profile Cards */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Enjoys cooking and reading" />
      <UserProfile name="Charlie" age={22} bio="Passionate about music and travel" />
    </main>
  );
}

export default MainContent;
