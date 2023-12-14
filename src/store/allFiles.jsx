


import { configureStore } from "@reduxjs/toolkit";

import MyHotProduct from './hotProducts/hotProduct'
import MyFeatuerdPruduct from './featureProduct/featureProduct';
import myNewArivals    from './newAriValsStore/newAraivalStore'

const merahotprodact = configureStore({
    reducer: {
        HotTProduct: MyHotProduct,
        featureproduc: MyFeatuerdPruduct,
        newAriVaLas:myNewArivals
    }
})

export default merahotprodact;