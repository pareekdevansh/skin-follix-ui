import React from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material"; // Import the icon

const treatments = [
  {
    name: "Acne (Pimples) Treatment",
    image: "https://example.com/acne-treatment.webp",
    shortDescription: "Effective solutions for acne and pimple control.",
    description:
      "We provide personalized acne treatments, including topical therapies, oral medications, chemical peels, and advanced laser procedures to manage and prevent breakouts effectively.",
    treatmentUrl: "/treatments/acne-treatment"
  },
  {
    name: "Acne Scar Treatment",
    image: "https://example.com/acne-scar-treatment.webp",
    shortDescription: "Improve skin texture and reduce acne scars.",
    description:
      "Our acne scar treatments include microneedling, laser resurfacing, dermal fillers, and subcision to improve skin texture and minimize the appearance of scars.",
    treatmentUrl: "/treatments/acne-scar-treatment"
  },
  {
    name: "Hair Loss Treatment",
    image: "https://example.com/hair-loss-treatment.webp",
    shortDescription: "Regain your hair and confidence with our treatments.",
    description:
      "Comprehensive solutions for hair loss, including medications like minoxidil and finasteride, PRP therapy, and hair revitalization procedures tailored to individual needs.",
    treatmentUrl: "/treatments/hair-loss-treatment"
  },
  {
    name: "Hair Transplant",
    image: "https://example.com/hair-transplant.webp",
    shortDescription: "Natural hair restoration through advanced techniques.",
    description:
      "We specialize in advanced hair transplant techniques like FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) to restore natural hair growth.",
    treatmentUrl: "/treatments/hair-transplant"
  },
  {
    name: "PRP Treatment",
    image: "https://example.com/prp-treatment.webp",
    shortDescription: "Stimulate growth with platelet-rich plasma therapy.",
    description:
      "Platelet-rich plasma (PRP) therapy is a regenerative treatment that uses your body's natural growth factors to stimulate hair growth and skin rejuvenation.",
    treatmentUrl: "/treatments/prp-treatment"
  },
  {
    name: "Lasers",
    image: "https://example.com/laser-treatment.webp",
    shortDescription: "Advanced laser solutions for skin and hair care.",
    description:
      "State-of-the-art laser treatments for skin resurfacing, pigmentation, hair removal, and scar reduction, ensuring safe and effective results.",
    treatmentUrl: "/treatments/lasers"
  },
  {
    name: "Leucoderma and Vitiligo Treatment",
    image: "https://example.com/vitiligo-treatment.webp",
    shortDescription: "Expert care to restore skin pigmentation.",
    description:
      "Comprehensive care for leucoderma and vitiligo, including phototherapy, medications, and camouflage solutions to improve pigmentation.",
    treatmentUrl: "/treatments/vitiligo-treatment"
  },
  {
    name: "Vitiligo Surgery",
    image: "https://example.com/vitiligo-surgery.webp",
    shortDescription: "Surgical options to address vitiligo.",
    description:
      "Surgical options like skin grafting and melanocyte transplantation to restore pigmentation in vitiligo-affected areas.",
    treatmentUrl: "/treatments/vitiligo-surgery"
  },
  {
    name: "Wart Treatment",
    image: "https://example.com/wart-treatment.webp",
    shortDescription: "Safe and effective wart removal solutions.",
    description:
      "Effective wart removal procedures using cryotherapy, laser therapy, or topical solutions, providing quick and safe relief.",
    treatmentUrl: "/treatments/wart-treatment"
  },
  {
    name: "Eczema Treatment",
    image: "https://example.com/eczema-treatment.webp",
    shortDescription: "Manage eczema with targeted care.",
    description:
      "Personalized treatment plans for eczema, including emollients, topical steroids, and lifestyle guidance to manage flare-ups and prevent recurrence.",
    treatmentUrl: "/treatments/eczema-treatment"
  },
  {
    name: "Atopic Dermatitis Treatment",
    image: "https://example.com/atopic-dermatitis.webp",
    shortDescription: "Comprehensive care for atopic dermatitis.",
    description:
      "Comprehensive care for atopic dermatitis with anti-inflammatory therapies, moisturizers, and immune-modulating treatments.",
    treatmentUrl: "/treatments/atopic-dermatitis-treatment"
  },
  {
    name: "Psoriasis Treatment",
    image: "https://example.com/psoriasis-treatment.webp",
    shortDescription: "Advanced therapies to manage psoriasis.",
    description:
      "Advanced treatments for psoriasis, including topical therapies, systemic medications, and biologics to manage symptoms effectively.",
    treatmentUrl: "/treatments/psoriasis-treatment"
  },
  {
    name: "Skin Allergy Treatment",
    image: "https://example.com/skin-allergy.webp",
    shortDescription: "Relieve skin allergies with expert care.",
    description:
      "Allergy management includes antihistamines, topical treatments, and diagnostic tests to identify triggers and provide relief.",
    treatmentUrl: "/treatments/skin-allergy-treatment"
  },
  {
    name: "Urticaria Treatment",
    image: "https://example.com/urticaria.webp",
    shortDescription: "Effective relief for chronic hives.",
    description:
      "Comprehensive care for hives, including antihistamines and advanced immunotherapy for chronic urticaria.",
    treatmentUrl: "/treatments/urticaria-treatment"
  },
  {
    name: "Keloid Treatment",
    image: "https://example.com/keloid-treatment.webp",
    shortDescription: "Reduce keloid size and discomfort.",
    description:
      "Specialized treatments for keloids, such as steroid injections, laser therapy, and surgical removal to reduce size and discomfort.",
    treatmentUrl: "/treatments/keloid-treatment"
  },
  {
    name: "Hypertrophic Scar Treatment",
    image: "https://example.com/hypertrophic-scar.webp",
    shortDescription: "Improve the appearance of hypertrophic scars.",
    description:
      "Treatment options include silicone gels, steroid injections, and laser therapy to improve the appearance of hypertrophic scars.",
    treatmentUrl: "/treatments/hypertrophic-scar-treatment"
  },
  {
    name: "Burn Scar Treatment",
    image: "https://example.com/burn-scar-treatment.webp",
    shortDescription: "Restore skin after burn scars.",
    description:
      "Comprehensive care for burn scars using laser therapy, skin grafting, and rehabilitation to improve skin texture and functionality.",
    treatmentUrl: "/treatments/burn-scar-treatment"
  },
  {
    name: "Nail Disease Treatment",
    image: "https://example.com/nail-disease.webp",
    shortDescription: "Expert solutions for nail health.",
    description:
      "Expert care for fungal infections, ingrown nails, and other nail disorders, offering medical and procedural solutions.",
    treatmentUrl: "/treatments/nail-disease-treatment"
  },
  {
    name: "Unwanted Hair Treatment",
    image: "https://example.com/unwanted-hair.webp",
    shortDescription: "Achieve smooth skin with hair removal solutions.",
    description:
      "Advanced laser hair removal techniques for permanent reduction of unwanted hair, ensuring smooth and hair-free skin.",
    treatmentUrl: "/treatments/unwanted-hair-treatment"
  },
  {
    name: "STD Treatment",
    image: "https://example.com/std-treatment.webp",
    shortDescription: "Confidential and comprehensive STD care.",
    description:
      "Confidential and comprehensive care for sexually transmitted diseases, including diagnosis, treatment, and counseling.",
    treatmentUrl: "/treatments/std-treatment"
  }
];


export default function TreatmentsList() {
  return (
    <Box sx={{ marginBottom: "32px", paddingX: '5%' }}>
      {/* Flex container for Title and Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "start",
          }}
        >
          Explore All Treatments:
        </Typography>
        <IconButton
          onClick={() => {
            window.location.href = "/treatments"; // Redirect to full treatments page
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          <Typography variant="body2" sx={{ marginRight: "8px" }}>
            Visit Page
          </Typography>
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      {/* Treatments Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(2, auto)", // Two rows
          gridAutoFlow: "column", // Items flow horizontally
          gap: { xs: "16px", sm: "24px", md: "32px" }, // Adjust gap for different screen sizes
          paddingY: "1rem",
          paddingX: { xs: "5%", md: "10%" }, // Responsive horizontal padding
          overflowX: "auto", // Enable horizontal scrolling
          "&::-webkit-scrollbar": { // Custom scrollbar styling
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
          },
        }}
      >
        {treatments.map((treatment, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              cursor: "pointer",
              minWidth: { xs: "180px", sm: "220px", md: "250px" }, // Adjust card width for screen sizes
              maxWidth: { xs: "200px", sm: "260px", md: "300px" }, // Adjust card max width for screen sizes
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                "& .read-more-button": {
                  display: "block",
                },
              },
            }}
          >
            {/* Uncomment this block if images are to be displayed */}
            {/* <CardMedia
                component="img"
                image={treatment.image}
                alt={treatment.name}
                sx={{
                    height: "150px", // Adjust height for responsiveness
                    width: "150px",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    objectFit: "cover",
                }}
            /> */}
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                {treatment.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {treatment.shortDescription}
              </Typography>
            </CardContent>
            {/* Uncomment this button if navigation is required */}
            {/* <Button
                className="read-more-button"
                variant="text"
                sx={{
                    alignSelf: "center",
                    marginTop: "16px",
                    display: "none",
                    color: "primary.main",
                    fontWeight: "bold",
                }}
                onClick={() => {
                    window.location.href = `/treatments/${treatment.treatmentUrl}`;
                }}
            >
                Read More →
            </Button> */}
          </Card>
        ))}
      </Box>

    </Box>
  );
}
