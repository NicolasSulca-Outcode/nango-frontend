import ConnectionPage from './pages/ConnectionPage';

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <div>
          <h1 className='text-xl'>Add Your Integration</h1>
        </div>
        <div className='m-4'>
          <ConnectionPage />
        </div>
      </div>
    </>
  )
}

export default App;
