import ReactDOM from "react-dom/client";

//----low Level for Fooder Ordering app----
//Header -> logo, navitems , cart
//Body -> cardContainer , cards;
//Footer -> copyright, links address;

const Header = () => {
  return (
    <div className="header">
      <div className="image-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zE6J8bhD3Z6D__Hzzz0A83sSwXQ_dM6OJ5_wejAT8uFTr_9kZGThZHI&s=10"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f3e4e4",
  padding: "12px",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.card?.card?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-image"
        className="res-logo"
      />
      <div className="image-card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} mintues</h4>
      </div>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1139325",
          name: "Special 9",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/11/5/5a1da2cc-c33e-423b-a8f3-7589250132fc_b7553fb5-7149-41c0-92f2-2f9b8f195a3e.png",
          locality: "Gachibowli",
          areaName: "Gachibowli",
          costForTwo: "₹1000 for two",
          cuisines: ["Biryani"],
          avgRating: 4.3,
          parentId: "655893",
          avgRatingString: "4.3",
          totalRatingsString: "1.8K+",
          promoted: true,
          adTrackingId:
            "cid=f5d6c0c8-4512-4f81-a731-6a17b096f04c~p=0~adgrpid=f5d6c0c8-4512-4f81-a731-6a17b096f04c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1139325~plpr=COLLECTION~eid=bb1177ba-b434-4474-8932-943d32d33f3c~srvts=1790787434852~collid=83649",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 3.9,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-01 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "f5d6c0c8-4512-4f81-a731-6a17b096f04c",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1139325&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1077",
          name: "Samskruthi",
          cloudinaryImageId: "bef0f7c049933c51a10d1e974fad765e",
          locality: "Hitech City",
          areaName: "Hitech City",
          costForTwo: "₹250 for two",
          cuisines: ["Andhra", "Biryani"],
          avgRating: 4.2,
          parentId: "176759",
          avgRatingString: "4.2",
          totalRatingsString: "30K+",
          promoted: true,
          adTrackingId:
            "cid=cc31b449-55c7-4e31-9083-51bfb9f0a4f9~p=1~adgrpid=cc31b449-55c7-4e31-9083-51bfb9f0a4f9#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1077~plpr=COLLECTION~eid=91ed1e7f-f8b4-486e-b288-1eac64019f11~srvts=1790787434852~collid=83649",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 4.4,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-09-30 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "cc31b449-55c7-4e31-9083-51bfb9f0a4f9",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1077&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1128",
          name: "Paradise Biryani",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/26/0fba8b08-aa4e-46d4-aec8-94ad531b8ed7_1128.JPG",
          locality: "Hitech City",
          areaName: "Hitech City",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "Kebabs",
            "North Indian",
            "Hyderabadi",
            "Rolls & Wraps",
          ],
          avgRating: 4.2,
          parentId: "700",
          avgRatingString: "4.2",
          totalRatingsString: "154K+",
          promoted: true,
          adTrackingId:
            "cid=71ac98ed-92f5-44ef-95b0-37e719fc9171~p=2~adgrpid=71ac98ed-92f5-44ef-95b0-37e719fc9171#ag3~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1128~plpr=COLLECTION~eid=8aef43a8-a67f-4ad4-b6fa-a93fc4f48b8a~srvts=1790787434852~collid=83649",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-01 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "18K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "71ac98ed-92f5-44ef-95b0-37e719fc9171",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1128&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "594950",
          name: "Biryani By Kilo",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/7edaa7f1-437a-4e1a-abed-eac4a2766a49_594950.JPG",
          locality: "Sri Krishna Sanjay Commercial",
          areaName: "Gachibowli",
          costForTwo: "₹499 for two",
          cuisines: ["Biryani", "Hyderabadi", "Kebabs", "Mughlai", "Desserts"],
          avgRating: 4,
          parentId: "130",
          avgRatingString: "4.0",
          totalRatingsString: "10K+",
          promoted: true,
          adTrackingId:
            "cid=823ec84e-fbdc-4608-a0f2-e14480e2f080~p=6~adgrpid=823ec84e-fbdc-4608-a0f2-e14480e2f080#ag3~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=594950~plpr=COLLECTION~eid=ea3a0761-4f34-4e24-a01a-e8f1c0ad9ef7~srvts=1790787434852~collid=83649",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 4.6,
            serviceability: "SERVICEABLE",
            slaString: "35-45 mins",
            lastMileTravelString: "4.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-01 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description:
                  "Premium gourmet restaurant offering an elevated, high-quality food experience.",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description:
                        "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                      theme: "",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "823ec84e-fbdc-4608-a0f2-e14480e2f080",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=594950&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "922781",
          name: "UBQ-Meals,Thalis & Bowls",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/7/9/9d6cc77a-feac-4f3c-a2e5-8fc32ba222b8_b5b7f819-bff8-466e-8442-fe54b30126dc.jpg",
          locality: "Raidurg panmaktha Village",
          areaName: "Cyberabad Knowledge City",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Kebabs",
            "Barbecue",
            "Biryani",
            "Street Food",
            "Snacks",
          ],
          avgRating: 3.9,
          parentId: "617376",
          avgRatingString: "3.9",
          totalRatingsString: "183",
          promoted: true,
          adTrackingId:
            "cid=b7ba3878-2bcf-4e19-ba3c-7081ec093528~p=9~adgrpid=b7ba3878-2bcf-4e19-ba3c-7081ec093528#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=922781~plpr=COLLECTION~eid=f15141db-6279-4169-b765-ce5d976b6aad~srvts=1790787434852~collid=83649",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-01 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "b7ba3878-2bcf-4e19-ba3c-7081ec093528",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=922781&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "922782",
          name: "Dum Safar Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/8/19/df808c26-afab-4d22-8a55-ac265460e318_757a05a0-c746-41fe-87e3-4a18002ed0fa.png",
          locality: "Raidurg panmaktha Village",
          areaName: "Cyberabad Knowledge City",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "Kebabs",
            "North Indian",
            "barbeque",
          ],
          avgRating: 3.7,
          parentId: "351013",
          avgRatingString: "3.7",
          totalRatingsString: "978",
          promoted: true,
          adTrackingId:
            "cid=e3a32317-4cc3-4faf-a02f-eaad1fd3653e~p=10~adgrpid=e3a32317-4cc3-4faf-a02f-eaad1fd3653e#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=922782~plpr=COLLECTION~eid=2985dd01-1a6b-447d-9a1f-75d19992c310~srvts=1790787434852~collid=83649",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-01 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "e3a32317-4cc3-4faf-a02f-eaad1fd3653e",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=922782&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "922780",
          name: "Barbeque Nation",
          cloudinaryImageId: "whgvtme1hhq9uxtpgjsg",
          locality: "Raidurg panmaktha Village",
          areaName: "Cyberabad Knowledge City",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Barbecue",
            "Kebabs",
            "Biryani",
            "Street Food",
            "Snacks",
          ],
          avgRating: 3.5,
          parentId: "2438",
          avgRatingString: "3.5",
          totalRatingsString: "339",
          promoted: true,
          adTrackingId:
            "cid=3cd13606-a4c5-45a4-bdfe-dbdd6138294d~p=13~adgrpid=3cd13606-a4c5-45a4-bdfe-dbdd6138294d#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=922780~plpr=COLLECTION~eid=c680f4ed-51c5-4be3-923c-fcb39de40f21~srvts=1790787434852~collid=83649",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-10-01 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "3cd13606-a4c5-45a4-bdfe-dbdd6138294d",
          priceComparisonComms: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=922780&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList?.map((data,index)=>{
          return <RestaurantCard key={data?.card?.card?.info?.id} resData = {data}/>
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
