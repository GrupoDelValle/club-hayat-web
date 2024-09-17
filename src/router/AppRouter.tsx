import { Navigate, Route, Routes } from 'react-router-dom';
// import { AuthRoutes } from '../features/auth/routes/AuthRoutes';

// import { CheckingAuth } from '../features/auth/ui';
// import { useCheckAuth } from '../features/auth/hooks';


// import { UserStatus } from '../features/shared/service/config';
import { HayatAppRoutes } from '../hayatApp/routes/HayatAppRoutes';


export const AppRouter = () => {

  // const status = useCheckAuth();


  // if ( status === UserStatus.Checking ) {
  //   return <CheckingAuth />
  // }

  return (
    <Routes>
        {/* {
          (status === UserStatus.Authenticated)
           ? <Route path="/*" element={ <HayatAppRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        } */}
        <Route path="/*" element={ <HayatAppRoutes /> } />
        {/* <Route path='/*' element={ <Navigate to='/' />  } /> */}
    </Routes>
  )
}
