import Header from "./Component/Header"
import UserList from "./Component/UserList"

 
function App() { 
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-8">
        <UserList />
      </main>
    </div>
    </>
  )
}

export default App
