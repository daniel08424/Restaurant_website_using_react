import ResCard from './Res-Card';

const restaurants = [{
    "id": "324129",
    "name": "Hmr - Grand Kitchen",
    "cloudinaryImageId": "sxo9ssdzcunquvtrcvc6",
    "locality": "Dr Nanjappa Road",
    "areaName": "Gandhipuram",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Biryani",
      "South Indian",
      "North Indian",
      "Chinese",
      "Tandoor"
    ],
    "avgRating": 4.4,
    "parentId": "96262",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+"
  },
  {
    "id": "348158",
    "name": "Covai Anganan Biriyani House",
    "cloudinaryImageId": "riylxbx0j4kzeii1sef7",
    "locality": "VCV Layout",
    "areaName": "RS Puram",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Biryani",
      "South Indian",
      "Chinese"
    ],
    "avgRating": 4.3,
    "parentId": "230662",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+"
  },{
    "id": "654259",
    "name": "Istah Shawarmas",
    "cloudinaryImageId": "0a37282845f641a5995d866285767803",
    "locality": "Dr Rajendra Prasad Road",
    "areaName": "Gandhipuram",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Mediterranean",
      "Snacks",
      "Biryani",
      "Grill",
      "Kebabs",
      "Arabian",
      "Lebanese",
      "Beverages",
      "Desserts",
      "Italian",
      "Turkish"
    ],
    "avgRating": 4.2,
    "parentId": "468195",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+"
  },{
    "id": "654253",
                      "name": "Gobble: Pastas & Burgers",
                      "cloudinaryImageId": "df5118be546e687f45758da0433a1649",
                      "locality": "Ganapathy Village",
                      "areaName": "Gandhipuram",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burgers",
                        "Pastas",
                        "American",
                        "Continental",
                        "Snacks"
                      ],
                      "avgRating": 4.2,
                      "parentId": "391931",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+"

  },{
    "id": "333124",
                      "name": "Bakingo",
                      "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
                      "locality": "Srinagar Road",
                      "areaName": "Peelamedu",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "parentId": "3818",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1K+"
  },{
    "id": "56504",
                      "name": "McDonald's",
                      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                      "locality": "Brookefields Mall",
                      "areaName": "RS Puram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "630",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+"
  },{
    "id": "50793",
                      "name": "KFC",
                      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                      "locality": "Avinashi Road",
                      "areaName": "Peelamedu",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+"
  }
]

const ResContainer = () => {
    return(
        <div className='restaurant-container'>
        {restaurants.map((res) => {
            return <ResCard key={res.id} restaurant={res}/>
        })}
        </div>
    ) 
}

export default ResContainer; 