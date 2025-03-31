import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import HomeTemplate from '../template/HomeTemplate/HomeTemplate'
import PageNotFound from '../Components/PageNotFound/PageNotFound'
// import BloodPressure from '../Components/BloodPressure'
const BloodPressure = React.lazy(() => import('../Components/BloodPressure'))
import { path } from '../common/path'
import DefaultLottery from '../Components/DefaultLottery'
import { Skeleton } from 'antd'

const useRouteCustom = () => {
    const elements = useRoutes([
        {
            path: path.homePage,
            element: <HomeTemplate />,
            children: [
                {
                    path: path.randomLottery,
                    element: <DefaultLottery />
                }
            ]
        },
        {
            path: path.bloodPressure,
            element: <Suspense fallback={<Skeleton active />}><BloodPressure /></Suspense>
        },

        {
            path: "*",
            element: <PageNotFound />
        }
    ])
    return elements;
};

export default useRouteCustom