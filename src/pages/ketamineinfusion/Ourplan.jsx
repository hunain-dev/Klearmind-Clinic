import React from "react";
import { Check, Clock } from "lucide-react";
import Button from "../../Components/Button";

const Ourplan = () => {
  const plans = [
    {
      title: "IV Ketamine Psychotherapy",
      subtitle: "Most Mood and Psychiatric Disorders",
      price: "$550",
      duration: "60 Mins",
      features: [
        "Personalized Ketamine Protocol",
        "Ketamine Treatment Guide and Workbook",
        "Infusion Duration 45 Mins",
        "Recovery Time 20 Mins",
        "Supplemental Medication As needed",
        "Prepay Options $3100 for 6 treatments",
      ],
      description:
      "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
    },
    {
      title: "Wellness Therapy",
      subtitle: "Mental & Physical Relaxation",
      price: "$350",
      duration: "45 Mins",
      features: [
        "Personalized Ketamine Protocol",
        "Ketamine Treatment Guide and Workbook",
        "Infusion Duration 45 Mins",
        "Recovery Time 20 Mins",
        "Supplemental Medication As needed",
        "Prepay Options $3100 for 6 treatments",
      ],
      description:
      "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
    },
    {
      title: "Ketamine Infusion Plus",
      subtitle: "Advanced Mental Recovery",
      price: "$650",
      duration: "75 Mins",
      features: [
        "Personalized Ketamine Protocol",
        "Ketamine Treatment Guide and Workbook",
        "Infusion Duration 45 Mins",
        "Recovery Time 20 Mins",
        "Supplemental Medication As needed",
        "Prepay Options $3100 for 6 treatments",
      ],
      description:
      "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
  },
  {
    title: "Ketamine Infusion Plus",
    subtitle: "Advanced Mental Recovery",
    price: "$650",
    duration: "75 Mins",
    features: [
      "Personalized Ketamine Protocol",
      "Ketamine Treatment Guide and Workbook",
      "Infusion Duration 45 Mins",
      "Recovery Time 20 Mins",
      "Supplemental Medication As needed",
      "Prepay Options $3100 for 6 treatments",
    ],
    description:
    "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
  ];

  return (
    <div className="w-full grid grid-cols-3 gap-5 mt-20 mb-40">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-[#FFFBF6] rounded-2xl p-4 shadow-sm border border-gray-200"
        >
          {/* Title */}
          <div className="mb-2">
            <h2 className="figee text-2xl text-[#32140C] mb-1">
              {plan.title}
            </h2>
            <p className="figee text-sm text-gray-700">{plan.subtitle}</p>
          </div>

          {/* Pricing Section */}
          <div className="flex items-start justify-between mb-15">
            <div>
              <span className="figee text-2xl text-[#32140C]">
                {plan.price}
              </span>
              <span className="text-gray-500 text-sm"> / per treatment</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="text-sm">{plan.duration}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-5 mb-5 figee text-[2vh]">
            {plan.features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-[1.8vh] text-gray-600 mb-6 leading-relaxed">
            {plan.description}
          </p>

          {/* Button */}
          <Button
            btn="Schedule a consultation"
            padding="py-4 px-21"
            hoverEffect={false}
          />
        </div>
      ))}
    </div>
  );
};

export default Ourplan;
