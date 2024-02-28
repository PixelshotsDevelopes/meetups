import {Route,Routes} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetUps'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorits'
import Layout from './components/layout/Layout'


// previously routes was switch and previously in order route to read full path we needed to add exact attribute in first i.e is '/' like this <Routes path='/' exact><AllMeetUps/></Routes> also previously we didn't used self closing tag but used opening and closing tag but now after react-router-dom v6 I think we use self closing tag like this <Route path=''/> and we define our component under element attribute which is new in v6 instead of defining between opening and closing tag just like this <Route path='/' element={NewMeetupPage}/>  

function App() {
  return (
    <>
    <Layout>
    <Routes>
    <Route path="/" element={<AllMeetupsPage />} />
    <Route path="/new-meetup" element={<NewMeetupPage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
    </Layout>
    </>
  )
}

export default App
