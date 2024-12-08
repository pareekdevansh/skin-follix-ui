import React from "react";
import { Box, Typography, Card, CardContent, Divider, Link } from "@mui/material";
import { CONTACT_EMAIL } from "../../constants/contact-info";
import { APP_NAME } from "../../constants/app-info";

const PrivacyPolicy: React.FC = () => {
    return (

        <Box sx={{
            padding: "2rem", paddingBottom: "4rem", paddingX: '5%', backgroundColor: "#f5f5f5",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            maxWidth: "100%",
            minHeight: "100vh",
            boxShadow: 4,
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
                boxShadow: 6,
            },
            gap: "16px"
        }}
        >
            <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "left", marginBottom: "16px" }}>
                Privacy Policy
            </Typography>
            <Card sx={{ padding: "32px", backgroundColor: "#ffffff", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>


                <CardContent>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "24px" }}>
                        At {APP_NAME}, we value your privacy. This Privacy Policy explains how we collect, use, and protect
                        your personal information when you use our website and services.
                    </Typography>

                    <Typography variant="h6" sx={{ marginBottom: "16px" }}>1. Information We Collect</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "24px" }}>
                        We collect personal information such as your name, email address, phone number, medical history,
                        and usage data through forms, cookies, and other means to offer our services and improve your experience.
                    </Typography>

                    <Divider sx={{ marginBottom: "24px" }} />

                    <Typography variant="h6" sx={{ marginBottom: "16px" }}>2. How We Use Your Information</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "24px" }}>
                        Your information helps us provide personalized skincare treatments, contact you for appointments,
                        send promotional updates (with your consent), and improve our services.
                    </Typography>

                    <Divider sx={{ marginBottom: "24px" }} />

                    <Typography variant="h6" sx={{ marginBottom: "16px" }}>3. Data Security</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "24px" }}>
                        We implement industry-standard security measures to protect your personal information and ensure
                        it is not lost, misused, or accessed without authorization.
                    </Typography>

                    <Divider sx={{ marginBottom: "24px" }} />

                    <Typography variant="h6" sx={{ marginBottom: "16px" }}>4. Third-Party Services</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "24px" }}>
                        We may share your data with trusted third parties, such as payment processors or marketing platforms,
                        to provide our services. We ensure these parties respect your privacy.
                    </Typography>

                    <Divider sx={{ marginBottom: "24px" }} />

                    <Typography variant="h6" sx={{ marginBottom: "16px" }}>5. Your Rights</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "24px" }}>
                        You have the right to access, update, or delete your personal information. If you wish to exercise
                        these rights, please contact us at [contact email].
                    </Typography>

                    <Divider sx={{ marginBottom: "24px" }} />

                    <Typography variant="h6" sx={{ marginBottom: "16px" }}>6. Cookies</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "24px" }}>
                        Our website uses cookies to enhance user experience. You can control cookie settings through your
                        browser. Please refer to our Cookie Policy for more details.
                    </Typography>

                    <Divider sx={{ marginBottom: "24px" }} />

                    <Typography variant="h6" sx={{ marginBottom: "16px" }}>7. Changes to This Policy</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "24px" }}>
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes
                        through our website or other communication channels.
                    </Typography>

                    <Divider sx={{ marginBottom: "24px" }} />
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        If you have any questions or concerns regarding our privacy policy, please contact us at{" "}
                        <Link href={`mailto:${CONTACT_EMAIL}`} sx={{ color: "primary.main" }}>
                            {CONTACT_EMAIL}
                        </Link>.
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    );
};

export default PrivacyPolicy;
