import NavBar from './components/NavBar';
import routes from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          {routes.map((route) => {
            return <Route key={route.path} path={route.path} element={route.component} />;
          })}
        </Routes>
      </div>
    </Router>

    /* <Route path="/" element={<HomePage />} />,
    <Route path="/blogs" element={<ListPage />} />,
    <Route path="/blogs/create" element={<CreatePage />} />,
    <Route path="/blogs/edit" element={<EditPage />} /> */
  );
}

export default App;
