import schoolImg from "../assets/images/school.jpg";
import medicalImg from "../assets/images/medical.jpg";
import foodImg from "../assets/images/food.jpg";


const campaigns = [
  {
    id: 1,
    title: "Help Build a School",
    description: "Support education for children in rural areas.",
    amount: 500000,
    goal: 1000000,
    image: schoolImg,
  },
  {
    id: 2,
    title: "Medical Support Fund",
    description: "Help provide urgent medical care for families.",
    amount: 300000,
    goal: 800000,
    image: medicalImg,
  },
  {
    id: 3,
    title: "Feed the Hungry",
    description: "Provide meals for communities in need.",
    amount: 700000,
    goal: 1200000,
    image: foodImg,
  },
];


export default campaigns;