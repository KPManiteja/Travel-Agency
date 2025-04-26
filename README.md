# 7HillsHolidays - Travel Website

![7HillsHolidays Logo](https://via.placeholder.com/150x50?text=7HillsHolidays)

A modern, responsive travel website offering destination packages, travel blogs, and booking services.

## Features

- 🏝️ **Destination Pages**: Browse popular travel destinations with detailed information
- ✈️ **Tour Packages**: View curated tour packages with pricing and itineraries
- 📝 **Travel Blog**: Read articles and travel tips
- ❓ **FAQ Section**: Find answers to common travel questions
- 📱 **Fully Responsive**: Works on all device sizes
- 🎨 **Consistent Branding**: Uses the company's color scheme (#EAA221 and #FBE2C1)

## Pages

1. **Homepage** (`index.html`) - Landing page with featured destinations
2. **Destinations** (`tours.html`) - All available tour packages
3. **Blog** (`blog.html`) - Travel articles and stories
4. **About Us** (`about.html`) - Company information and team
5. **FAQ** (`faq.html`) - Frequently asked questions

## Technologies Used

- **Frontend**:
  - HTML5, CSS3
  - Bootstrap 5.3.0
  - Font Awesome 6.4.0 (for icons)
- **Design**:
  - Custom color scheme (#EAA221 primary, #FBE2C1 secondary)
  - Responsive layout
  - Interactive elements with hover effects

## File Structure
TRAVEl AGENCY
├── index.html # Homepage
├── tours.html # Destinations page
├── blog.html # Travel blog
├── about.html # About Us page
├── faq.html # FAQ page
├── css/
│ ├── style.css # Global styles
│ ├── tours.css # Destinations page styles
│ ├── blog.css # Blog page styles
│ ├── about.css # About page styles
│ └── faq.css # FAQ page styles
├── js/
│ └── script.js # Main JavaScript file
└── images/ # All website images


## Installation

No installation required - this is a static website. Simply open any HTML file in a web browser.

## How to Customize

1. **Change Colors**:
   Modify the CSS variables in each stylesheet:
   ```css
   :root {
       --primary-color: #EAA221;       /* Golden yellow */
       --secondary-color: #FBE2C1;     /* Light cream */
       --dark-color: #000000;          /* Black */
   }