import basket_icon from './basket_icon.png'
import logo from './logo.png'
import logo_small from './logo_small.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import recreational from './recreational.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import wakinbacon from './wakinbacon.png'
import mellow_moods from './mellow_moods.png'
import smell_no from './smell_no.png'
import detox from './detox.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_stars from './rating_stars.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    logo_small,
    basket_icon,
    header_img,
    search_icon,
    rating_stars,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

//MENU LIST HOLDS ITEM CATEGORIES
export const menu_list = [
    {
        menu_name: "Recreational Blends",
        menu_image: recreational
    },
    {
        menu_name: "Respiratory Support",
        menu_image: menu_2
    },
    {
        menu_name: "Stress/Calming",
        menu_image: menu_3
    },
    {
        menu_name: "Mood/Energy",
        menu_image: menu_4
    },
    {
        menu_name: "Flavor/Aroma",
        menu_image: menu_5
    },
    {
        menu_name: "Medicinal/Functional",
        menu_image: menu_6
    },
    {
        menu_name: "Experimentals",
        menu_image: menu_7
    },
    {
        menu_name: "Recovery Blends",
        menu_image: menu_8
    }]

//FOOD LIST SUPPORTS SPECIFIC TYPES OF FOOD
export const food_list = [
    {
        _id: "1",
        name: "Wakinbacon",
        image: wakinbacon,
        price: 12,
        description: "Chamomile + Lemon Balm (50%), 31% THC (50%)",
        category: "Recreational Blends"
    },
    {
        _id: "2",
        name: "Mellow Moods",
        image: mellow_moods,
        price: 18,
        description: "1/8 THC <20%, Rose Petals 35%, Eucalyptus 45%, Indica",
        category: "Recreational Blends"
    }, {
        _id: "3",
        name: "Smell NO",
        image: smell_no,
        price: 16,
        description: "(Clove, lavender, rose) - 70%, 19% THC, Sativa",
        category: "Recreational Blends"
    }, {
        _id: "4",
        name: "Detox",
        image: detox,
        price: 24,
        description: "Mullein (45%), 20% THC Sativa (20%), Thyme (35%)",
        category: "Recreational Blends"
    }, {
        _id: "5",
        name: "Lasagna Rolls",
        image: food_5,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Specialty Blends"
    }, {
        _id: "6",
        name: "Peri Peri Rolls",
        image: food_6,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Specialty Blends"
    }, {
        _id: "7",
        name: "Chicken Rolls",
        image: food_7,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Specialty Blends"
    }, {
        _id: "8",
        name: "Veg Rolls",
        image: food_8,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Specialty Blends"
    }, {
        _id: "9",
        name: "Ripple Ice Cream",
        image: food_9,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "In-House Varieties"
    }, {
        _id: "10",
        name: "Fruit Ice Cream",
        image: food_10,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "In-House Varieties"
    }, {
        _id: "11",
        name: "Jar Ice Cream",
        image: food_11,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "In-House Varieties"
    }, {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: food_12,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "In-House Varieties"
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: food_13,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dabs and Wax"
    },
    {
        _id: "14",
        name: "Vegan Sandwich",
        image: food_14,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dabs and Wax"
    }, {
        _id: "15",
        name: "Grilled Sandwich",
        image: food_15,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dabs and Wax"
    }, {
        _id: "16",
        name: "Bread Sandwich",
        image: food_16,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dabs and Wax"
    }, {
        _id: "17",
        name: "Cup Cake",
        image: food_17,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "No-Smell Blends"
    }, {
        _id: "18",
        name: "Vegan Cake",
        image: food_18,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "No-Smell Blends"
    }, {
        _id: "19",
        name: "Butterscotch Cake",
        image: food_19,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "No-Smell Blends"
    }, {
        _id: "20",
        name: "Sliced Cake",
        image: food_20,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "No-Smell Blends"
    }, {
        _id: "21",
        name: "Garlic Mushroom ",
        image: food_21,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sleeper Strains"
    }, {
        _id: "22",
        name: "Fried Cauliflower",
        image: food_22,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sleeper Strains"
    }, {
        _id: "23",
        name: "Mix Veg Pulao",
        image: food_23,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sleeper Strains"
    }, {
        _id: "24",
        name: "Rice Zucchini",
        image: food_24,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sleeper Strains"
    },
    {
        _id: "25",
        name: "Cheese Pasta",
        image: food_25,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Wake n' Bake"
    },
    {
        _id: "26",
        name: "Tomato Pasta",
        image: food_26,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Wake n' Bake"
    }, {
        _id: "27",
        name: "Creamy Pasta",
        image: food_27,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Wake n' Bake"
    }, {
        _id: "28",
        name: "Chicken Pasta",
        image: food_28,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Wake n' Bake"
    }, {
        _id: "29",
        name: "Butter Noodles",
        image: food_29,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Recovery Blends"
    }, {
        _id: "30",
        name: "Veg Noodles",
        image: food_30,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Recovery Blends"
    }, {
        _id: "31",
        name: "Somen Noodles",
        image: food_31,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Recovery Blends"
    }, {
        _id: "32",
        name: "Cooked Noodles",
        image: food_32,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Recovery Blends"
    }
]
