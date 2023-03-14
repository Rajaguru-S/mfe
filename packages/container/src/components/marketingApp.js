import React, {useRef, useEffect} from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApps = () =>  {
    const ref = useRef(null);
    useEffect(()=>{
        mount(ref.current);
    })

    return <div ref={ref}/>
}
export default MarketingApps;