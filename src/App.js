import './App.css';

function App() {
  return (
    <div className="main">
      <ServerSideBar />
      <ChannelsColumn />
      <ChatColumn />
    </div>
  );
}


function ServerSideBar() {
  return (
    <div className="server">

    </div>
  );
}

function ChannelsColumn() {
  return (
    <div className="channels">

    </div>
  );
}

function ChatColumn() {
  return (
    <div className="chat">
      <header> </header>
      <div className="grid">
        <div className="texts">
        </div>

        <div className="users">

        </div>
      </div>
    </div>
  );
}

export default App;
