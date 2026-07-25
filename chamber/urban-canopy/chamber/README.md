# 🏛️ Chamber of Commerce - Membership Application

A membership application page for the Chamber of Commerce with form validation and confirmation.

## Pages

### 1. Join Page (join.html)
- Complete membership application form
- All required fields with validation
- 4 animated membership cards with modal benefits
- Responsive layout (cards below form on mobile)

### 2. Thank You Page (thankyou.html)
- Displays all submitted form data
- Parses URL parameters from GET request
- Shows gratitude message
- Navigation back to application

## Form Features
- First name (text, required, autocomplete)
- Last name (text, required, autocomplete)
- Organizational title (pattern: letters/hyphens/spaces, min 7 chars)
- Email (email type, required, autocomplete, placeholder)
- Mobile phone (tel type, required, autocomplete)
- Business name (text, required, autocomplete)
- Membership level (select: NP, Bronze, Silver, Gold)
- Business description (textarea)
- Hidden timestamp (auto-populated)

## Membership Levels
- **NP**: Non-Profit, Free
- **Bronze**: $200/year
- **Silver**: $450/year
- **Gold**: $850/year

Each level has a modal with detailed benefits.

## Animations
- Cards fade/slide up on page load with staggered delays
- Modals fade in on open
- Smooth hover transitions

## Accessibility
- All fields wrapped in `<label>` tags
- Proper `title` attributes for assistive technology
- Logical tab order
- Focus trapping in modals
- Keyboard support (Escape to close modals)

## Setup
1. Place both files in a `chamber` folder
2. Open `join.html` in your browser
3. Fill out the form and submit
4. View your data on `thankyou.html`

## Testing Checklist
- ✅ All form fields have labels and titles
- ✅ Required fields show validation
- ✅ Title field enforces pattern
- ✅ Email and tel inputs have proper types
- ✅ Autocomplete values are correct
- ✅ Modals open/close with click, overlay click, and Escape key
- ✅ Keyboard tab order flows logically
- ✅ Timestamp is populated on load
- ✅ Form submits to thankyou.html via GET