import {
  ArrowUpDown,
  BadgeDollarSign,
  BadgePlus,
  Calculator,
  CalendarPlus2,
  CirclePlus,
  Contact,
  CreditCard,
  Home,
  Newspaper,
  UserRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    name: "home",
    icon: Home,
  },
  {
    url: "/c-contract",
    name: "Create a contract",
    icon: CirclePlus,
  },
  {
    url: "/contract",
    name: "contract",
    icon: Contact,
  },
  {
    url: "/profile",
    name: "your profile",
    icon: UserRound,
  },
  {
    url: "/documents",
    name: "documents",
    icon: Newspaper,
  },
  {
    url: "/invoices",
    name: "invoices",
    icon: Calculator,
  },
  {
    url: "/expenses",
    name: "expenses",
    icon: BadgeDollarSign,
  },
  {
    url: "/transactions",
    name: "transactions",
    icon: ArrowUpDown,
  },
  {
    url: "/flex-pay",
    name: "flexible payments",
    icon: CalendarPlus2,
  },
  {
    url: "/deel-card",
    name: "deel card",
    icon: CreditCard,
  },
  {
    url: "/accounting",
    name: "accounting",
    icon: BadgePlus,
    new: true,
  },
  {
    url: "/tax-advice",
    name: "tax advice",
    icon: Home,
    new: true,
  },
];

export const calculatedData = [
  {
    title: "calculated net income",
    price: "431.00",
  },
  {
    title: "calculated  income",
    price: "0.00",
    icon: Calculator,
  },
  {
    title: "calculated expenses",
    price: "431.00",
    icon: Newspaper,
  },
];
