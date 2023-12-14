



import { createSlice } from "@reduxjs/toolkit";


const myNewArivals = createSlice({
    name:'user',
    initialState:[
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/10/9/22/A09Z16FYGP-0.jpg',
            title:"Swingline 1215G1225G Guil..",
            price:200.46
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/11/21/03/A0F9ZTIN6X-0.jpg',
            title:"Smead SafeSHIELD Fastener..",
            price:103.71
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2022/03/24/11/C5Q97MUHRR-0.jpg',
            price:371.00,
            title:'CYAN DRUM CARTRIDG...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2023/04/7/20/PMWX9C1DGV-0.jpg',
            price:381.00,
            title:'Ripp Lite PDU Metere...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2023/07/13/02/P1PODRU7SC-0.jpg',
            price:168.20,
            title:'Tripp Lite Wall Mount 2 ...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2023/12/3/01/LFYTH3TQ9W-0.jpg',
            price:911.61,
            title:'MB PRO WS WRX80E-...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2023/08/15/06/A0F0Q8Y0AS-0.jpg',
            price:128.43 ,
            title:'StarTech.Com 2 Port DVI...'
        },
        {
            pic:'https://m.aztekcomputers.com/image_resized.php?h=200&w=200&path=product_images/2021/04/15/18/A0FK2GLHEF-0.jpg',
            price:128.43,
            title:'MEM 2*16G| GVSR532...'
        },
       
    ],
    reducers:{

    }
})


export default myNewArivals.reducer;