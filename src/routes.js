import HomePage from './components/pages/HomePage';
import ListPage from './components/pages/ListPage';
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
      path: '/blogs/:id',
      component: <ShowPage />
    },
    {
      path: '/blogs/create',
      component: <CreatePage />
    },
    {
      path: '/blogs/edit',
      component: <EditPage />
    }
  ];

  export default routes;