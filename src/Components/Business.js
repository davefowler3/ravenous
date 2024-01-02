import React from "react";
import { businessInfo } from "../BusinessInfo";

const Business = () => {
return (
    <>
    <div>Biz Image Here</div>
    <h3>{businessInfo.name}</h3>
    <div>
        <p>{businessInfo.address}</p>
        <p>{businessInfo.city}</p>
        <p>{businessInfo.state}{businessInfo.zipCode}</p>
    </div>
    <div>
        {businessInfo.rating}
        {businessInfo.reviewCount}
    </div>
    </>
)
}

export default Business;