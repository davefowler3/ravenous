import { businessInfo } from "../BusinessInfo";

const BusinessList = () => {
    let businessCard = businessInfo.map((businessObject) => {
        return (
            <div>
                {businessObject.imageSrc}
                {businessObject.name}
                {businessObject.address}
                {businessObject.city}
                {businessObject.state}
                {businessObject.zipCode}
                {businessObject.rating}
                {businessObject.reviewCount}
            </div>
        )
    }) 

    return businessCard;
}

export default BusinessList;