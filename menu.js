/* =====================================================================
   Kosta's Pizza & Seafood — Menu Data
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit when the menu changes.
   Save the file, refresh the website, and the new menu appears.

   How it works:
     • Each block in the list below is one menu category card.
     • Each "items" entry is one menu line.
     • Simple item:        { name: "Gyro", price: "9.95" }
     • Item with sub-note: { name: "Gyro", price: "9.95", desc: "on house-made pita" }
     • Item with sizes:    { name: "Wings", sizes: [
                              { label: "6 pc",  price: "8.75" },
                              { label: "12 pc", price: "14.25" }
                            ] }

   Don't worry about the dollar sign — the website adds "$" automatically.
   ===================================================================== */

window.KOSTAS_MENU = [

  {
    id: "grill",
    title: "Off the Grill",
    subtitle: "Subs, wraps & gyros · add bacon to any sub for $2",
    items: [
      { name: "Pearl's Jumbo Hot Dog",        price: "6.75",  desc: "add $0.75 per topping" },
      { name: "Vegetarian",                   price: "9.50" },
      { name: "Bacon, Egg & Cheese",          price: "9.50" },
      { name: "Cheeseburger Sub",             price: "9.95",  desc: "two 4 oz Angus beef patties" },
      { name: "Grilled Chicken Caprese Panini", price: "9.95" },
      { name: "Gyro",                         price: "9.95" },
      { name: "Chicken Gyro",                 price: "9.95" },
      { name: "Pastrami",                     price: "9.95" },
      { name: "Grilled Chicken",              price: "9.95" },
      { name: "Chicken Burrito",              price: "9.95" },
      { name: "Steak & Cheese",               price: "9.95" },
      { name: "Steak & Peppers",              price: "10.25" },
      { name: "Steak & Onions",               price: "10.25" },
      { name: "Steak & Mushrooms",            price: "10.25" },
      { name: "Steak Bomb",                   price: "10.50" },
      { name: "Steak Tip Burrito",            price: "10.50" },
      { name: "Steak Tip w/ Veggies",         price: "11.50" },
      { name: "Super Steak Bomb",             price: "12.50" }
    ]
  },

  {
    id: "plates",
    title: "Plates",
    subtitle: "Served with salad & fries, or rice",
    items: [
      { name: "Chicken Wings (6)",            price: "13.50" },
      { name: "Chicken Fingers (6)",          price: "13.50" },
      { name: "Grilled Chicken (10)",         price: "13.50" },
      { name: "Buffalo or BBQ Wings (6)",     price: "14.25" },
      { name: "Buffalo Chicken Fingers (6)",  price: "14.25" },
      { name: "Gyro Plate",                   price: "14.25", desc: "with rice & pita" },
      { name: "Caribbean Chicken w/ Rice",    price: "16.25" },
      { name: "Chicken á la Crème w/ Rice",   price: "16.25" },
      { name: "Chicken Souvlaki Plate",       price: "16.25", desc: "with rice & pita" },
      { name: "Steak Tips w/ Veggies & Rice", price: "16.25" },
      { name: "Baked Haddock w/ Rice",        price: "18.95" },
      { name: "Grilled Shrimp w/ Rice",       price: "18.95" },
      { name: "Baked Scallops w/ Rice",       price: "19.95" }
    ]
  },

  {
    id: "seafood",
    title: "Seafood Plates",
    subtitle: "Served with coleslaw, tartar sauce & fries",
    items: [
      { name: "Calamari",                     price: "16.25" },
      { name: "Fish & Chips",                 price: "17.50" },
      { name: "Shrimp Plate",                 price: "18.50" },
      { name: "Clam Plate",                   price: "19.95" },
      { name: "Scallop Plate",                price: "19.95" },
      { name: "Coconut Shrimp Plate",         price: "19.95" },
      { name: "Fisherman's Plate",            price: "23.95" }
    ]
  },

  {
    id: "wings",
    title: "Wings & Tenders",
    subtitle: "By the order",
    items: [
      { name: "Wings",                sizes: [{ label: "6 pc",  price: "8.75"  }, { label: "12 pc", price: "14.25" }] },
      { name: "Chicken Fingers",      sizes: [{ label: "6 pc",  price: "8.75"  }, { label: "10 pc", price: "14.25" }] },
      { name: "Buffalo or BBQ Wings", sizes: [{ label: "6 pc",  price: "9.25"  }, { label: "12 pc", price: "14.75" }] },
      { name: "Buffalo Fingers",      sizes: [{ label: "6 pc",  price: "10.50" }, { label: "10 pc", price: "16.50" }] }
    ]
  },

  {
    id: "seafood-sides",
    title: "Seafood Appetizers",
    subtitle: "Choose small or large",
    items: [
      { name: "Calamari",             sizes: [{ label: "sm",    price: "13.25" }, { label: "lg",    price: "19.50" }] },
      { name: "Crispy Coconut Shrimp", sizes:[{ label: "8 pc",  price: "13.25" }, { label: "12 pc", price: "19.50" }] },
      { name: "Haddock",              sizes: [{ label: "6 pc",  price: "14.95" }, { label: "10 pc", price: "23.95" }] },
      { name: "Shrimp",               sizes: [{ label: "12 pc", price: "16.75" }, { label: "18 pc", price: "23.95" }] },
      { name: "Scallops",             sizes: [{ label: "sm",    price: "18.25" }, { label: "lg",    price: "23.95" }] },
      { name: "Clams",                sizes: [{ label: "sm",    price: "18.25" }, { label: "lg",    price: "23.95" }] }
    ]
  },

  {
    id: "fries",
    title: "Fries & Rice",
    subtitle: "The perfect side",
    items: [
      { name: "Rice",                         price: "4.50" },
      { name: "French Fries",                 price: "4.50" },
      { name: "Spicy Fries",                  price: "4.95" },
      { name: "Curly Fries",                  price: "5.95" },
      { name: "Onion Rings",                  price: "5.95" },
      { name: "Bacon Cheddar Fries",          price: "6.95" }
    ]
  },

  {
    id: "apps",
    title: "Apps, Pies & Quesadillas",
    subtitle: "Hot from the oven",
    items: [
      { name: "Mozzarella Sticks (6)",        price: "6.95" },
      { name: "Cheese Quesadilla",            price: "6.95" },
      { name: "Spinach Feta Pie",             price: "7.25" },
      { name: "Cheesy Bread (10)",            price: "8.95" },
      { name: "Chicken Quesadilla",           price: "8.95" },
      { name: "Steak Tip Quesadilla",         price: "9.95" }
    ]
  },

  {
    id: "soup-desserts",
    title: "Soup & Desserts",
    subtitle: "To start and to finish",
    items: [
      { name: "Soup w/ Half Pita",            price: "7.25" },
      { name: "Chips",                        price: "2.00" },
      { name: "Cookies",                      price: "2.00" },
      { name: "Brownie",                      price: "2.00" },
      { name: "Fried Dough Bites",            price: "5.95" },
      { name: "Fried Oreos (6)",              price: "5.95" }
    ]
  }

];
