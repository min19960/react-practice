import HomePage from './components/pages/HomePage';
import ListPage from './components/pages/ListPage';
import AdminPage from './components/pages/AdminPage';
import CreatePage from './components/pages/CreatePage';
import EditPage from './components/pages/EditPage';
import ShowPage from './components/pages/ShowPage';

const routes = [
    {
      path: '/',
      component: <HomePage />
    },
    {
      path: '/blogs',
      component: <ListPage />
    },
    {
      path: '/admin',
      component: <AdminPage />
    },
    {
      path: '/blogs/create',
      component: <CreatePage />
    },
    {
      path: '/blogs/:id',
      component: <ShowPage />
    },
    {
      path: '/blogs/:id/edit',
      component: <EditPage />
    }
  ];

  export default routes;