

import { createSlice } from "@reduxjs/toolkit";


const MyHotProduct = createSlice({
    name:'user',
    initialState:[
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2021/04/15/18/A05JLSNNUJ-0.jpg',
            title:"HR24 HD/DVR Receiver...",
            price:300.12
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2022/09/22/15/A05NUBU555-0.jpg',
            price:'218.16',
            title:'Creed 561785 Eau...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2020/07/14/08/CJJCY21T2U-0.jpg',
            price:381.00,
            title:'Original Xerox TL2903...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2022/11/18/02/A0603Z3OYV-0.jpg',
            price:'163.80',
            title:'Kodak ST3000NM0033 ...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2020/04/8/12/2134825-0.jpg',
            price:295.00,
            title:'Ergotron 45-261-026...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2021/05/20/00/A06HMWUYP7-0.jpg',
            price:110.34 ,
            title:'Seadog 326585-3 Sea...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2021/08/31/11/A0723TST9N-0.jpg',
            price:'208.51',
            title:'Memo 541285 Marfa...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2023/05/24/16/646e425a0d56b-0.jpg',
            price:153.53,
            title:'Tripp L81874 Metered...',
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2022/07/14/10/A075TSWZGT-0.jpg',
            price:537.74,
            title:'Canon D1620 Imageclass...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2022/02/18/08/A079597LNG-0.jpg',
            price:132.54,
            title:'Western HUS722T1TA...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2022/04/19/11/A079RDAF0J-0.jpg',
            price:716.76,
            title:'Tripp B021-000-19...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?v=0.1&h=90&w=100&path=product_images/2022/03/16/11/AIHMX82WL5-0.jpg',
            price:269.23,
            title:'Original Xerox...'
        }
    ],
    reducers:{

    }
})


export default MyHotProduct.reducer;