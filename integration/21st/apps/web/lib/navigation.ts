import { Dock, Box } from "lucide-react"

const landingPageSections = [
  { title: "Announcements", href: "/s/announcement" },
  { title: "Backgrounds", href: "/s/background" },
  { title: "Borders", href: "/s/border" },
  { title: "Comparison", href: "/s/comparison" },
  { title: "Call to Action", href: "/s/call-to-action" },
  { title: "Docks", href: "/s/dock" },
  { title: "Features", href: "/s/features" },
  { title: "Footer", href: "/s/footer" },
  { title: "Hero", href: "/s/hero" },
  { title: "Images", href: "/s/image" },
  { title: "Maps", href: "/s/map" },
  { title: "Navigation Menus", href: "/s/navbar-navigation" },
  { title: "Pricing", href: "/s/pricing-section" },
  { title: "Scroll Area", href: "/s/scroll-area" },
  { title: "Team", href: "/s/team" },
  { title: "Testimonials", href: "/s/testimonials" },
  { title: "Text", href: "/s/text" },
  { title: "Video", href: "/s/video" },
].sort((a, b) => a.title.localeCompare(b.title))

const uiComponents = [
  { title: "Accordion", href: "/s/accordion" },
  { title: "Alert", href: "/s/alert" },
  { title: "Avatar", href: "/s/avatar" },
  { title: "Badge", href: "/s/badge" },
  { title: "Button", href: "/s/button" },
  { title: "Card", href: "/s/card" },
  { title: "Carousel", href: "/s/carousel" },
  { title: "Checkbox", href: "/s/checkbox" },
  { title: "Dialog / Modal", href: "/s/modal-dialog" },
  { title: "Dropdown", href: "/s/dropdown" },
  { title: "Empty State", href: "/s/empty-state" },
  { title: "File Tree", href: "/s/file-tree" },
  { title: "File Upload", href: "/s/upload-download" },
  { title: "Icons", href: "/s/icons" },
  { title: "Input", href: "/s/input" },
  { title: "Numbers", href: "/s/number" },
  { title: "Pagination", href: "/s/pagination" },
  { title: "Sidebar", href: "/s/sidebar" },
  { title: "Sign In", href: "/s/sign-in" },
  { title: "Sign up", href: "/s/registration-signup" },
  { title: "Select", href: "/s/select" },
  { title: "Slider", href: "/s/slider" },
  { title: "Tables", href: "/s/table" },
  { title: "Tags", href: "/s/chip-tag" },
  { title: "Tabs", href: "/s/tab" },
  { title: "Text Area", href: "/s/textarea" },
  { title: "Toast", href: "/s/toast" },
  { title: "Toggle", href: "/s/toggle" },
  { title: "Tooltip", href: "/s/tooltip" },
].sort((a, b) => a.title.localeCompare(b.title))

export const sections = [
  {
    title: "Landing Pages",
    icon: Dock,
    items: landingPageSections,
  },
  {
    title: "UI elements",
    icon: Box,
    items: uiComponents,
  },
]
